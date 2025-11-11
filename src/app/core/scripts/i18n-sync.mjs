// scripts/i18n-sync.mjs
import fs from 'fs';
import path from 'path';

const baseLang = 'es';                 // idioma fuente
const targets = ['en'];                // idiomas destino a sincronizar
const dir = 'src/assets/i18n';

const MODE = {
  ffillWithBase: false,   // ❌ no copiar texto español
  todoMarker: true,      // ✅ poner "_TODO_"
  removeOrphans: false  // true: borra claves que sobren en destino
};

// --- utils ---
const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const writeJson = (p, obj) =>
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');

const basePath = path.join(dir, `${baseLang}.json`);
if (!fs.existsSync(basePath)) {
  console.error(`No existe ${basePath}`);
  process.exit(1);
}

const base = readJson(basePath);

function syncObj(baseObj, targetObj, prefix = '') {
  const added = [];
  const removed = [];

  // Asegura claves que existen en base
  for (const k of Object.keys(baseObj)) {
    const full = prefix ? `${prefix}.${k}` : k;
    if (typeof baseObj[k] === 'object' && baseObj[k] !== null) {
      targetObj[k] = targetObj[k] && typeof targetObj[k] === 'object' ? targetObj[k] : {};
      const res = syncObj(baseObj[k], targetObj[k], full);
      added.push(...res.added);
      removed.push(...res.removed);
    } else {
      if (!(k in targetObj)) {
  if (MODE.todoMarker) {
    targetObj[k] = '_TODO_'; // ← aquí
  } else if (MODE.fillWithBase) {
    targetObj[k] = baseObj[k];
  } else {
    targetObj[k] = '';
  }
  added.push(full);
}
    }
  }

  // Opcional: quitar claves huérfanas
  if (MODE.removeOrphans) {
    for (const k of Object.keys(targetObj)) {
      if (!(k in baseObj)) {
        delete targetObj[k];
        removed.push(prefix ? `${prefix}.${k}` : k);
      }
    }
  }

  return { added, removed };
}

for (const tgt of targets) {
  const tgtPath = path.join(dir, `${tgt}.json`);
  if (!fs.existsSync(tgtPath)) {
    console.log(`No existe ${tgtPath}, lo creo vacío.`);
    writeJson(tgtPath, {});
  }
  const target = readJson(tgtPath);

  const { added, removed } = syncObj(base, target);

  writeJson(tgtPath, target);

  console.log(`== ${tgt}.json ==`);
  console.log(`Añadidas: ${added.length}`);
  added.forEach(k => console.log('  +', k));
  if (MODE.removeOrphans) {
    console.log(`Eliminadas: ${removed.length}`);
    removed.forEach(k => console.log('  -', k));
  }
  console.log('');
}
