import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesItemsService {
  constructor() {}

  qhItems = [
    {
      titulo: 'Estrategia de Marca',
      descripcion:
        'Analizo la posición actual de la marca en su contexto y el comportamiento de los consumidores para definir una estrategia que con anticipación y creatividad, aproveche al máximo su ventaja competitiva. Mi capacidad para alinear lo que una marca quiere, dice, hace y muestra es clave para construir una identidad coherente y sólida.',
      lista: [
        'Auditoría de marca',
        'Análisis comportamiento de clientes',
        'Análisis del mercado y tendencias',
        'Tono de voz y personalidad de marca',
        'Valores, misión y promesa de marca',
        'Posicionamiento',
        'Mensajes clave',
        'Estrategia de contenido',
      ],
      open: false,
    },
    {
      titulo: 'Diseño Gráfico',
      descripcion:
        'Como diseñadora gráfica versátil me he especializado en varias áreas del diseño para dar solución a todas las necesidades de diseño que cualquier empresa con independiencia de su alcance, pueda necesitar. Para ello es esencial tener una perspectiva global y asegurarme de que los diseños funcionen perfectamente en conjunto.',
      lista: [
        'Impresión y publicidad',
        'Editorial',
        'Packaging',
        'Diseño web',
        'Redes sociales y digital',
        'Newsletters',
        'Motion graphics',
        'Ilustración',
      ],
      open: false,
    },
    {
      titulo: 'Branding',
      descripcion:
        'Trabajo mano a mano con cada cliente para reflejar su esencia en identidades visuales claras, funcionales y, por supuesto, bellas. A través de procesos colaborativos y soluciones sencillas pero sólidas, convierto ideas en sistemas visuales que comunican e impactan en el mercado ahora y en el futuro.',
      lista: [
        'Construcción de logo',
        'Desarrollo del sistema visual',
        'Naming y tagline',
        'Dirección de arte',
        'Tipografías',
        'Paleta de colores',
        'Manual de marca',
        'Conceptos',
      ],
      open: false,
    },
    {
      titulo: 'Diseño de Producto Digital',
      descripcion:
        'Diseño experiencias digitales funcionales y atractivas alineadas con la identidad de marca, que equilibran necesidades de negocio con expectativas reales de los usuarios. Mi enfoque combina análisis de datos, investigación de comportamiento y diseño centrado en el usuario para optimizar cada paso del recorrido digital. ',
      lista: [
        'Design Systems',
        'Arquitectura de la información',
        'Wireframes y prototipos',
        'Diseño de Interfaces (UI)',
        'Diseño de experiencias de usuario (UX)',
        'Accesibilidad',
        'Diseño responsive',
        'Pruebas con usuarios',
      ],
      open: false,
    },
  ];
}
