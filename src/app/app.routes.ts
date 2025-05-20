import { Routes } from '@angular/router';
import { WorkComponent } from './pages/work/work.component';
import { TootingPoliceStationComponent } from './pages/tooting-police-station/tooting-police-station.component';
import { ConcilioComponent } from './pages/concilio/concilio.component';
import { DagenhamComponent } from './pages/dagenham/dagenham.component';
import { ClarityAIComponent } from './pages/clarity-ai/clarity-ai.component';
import { BarkersOfKengsingtonComponent } from './pages/barkers-of-kengsington/barkers-of-kengsington.component';
import { DeporteMujerComponent } from './pages/deporte-mujer/deporte-mujer.component';

export const routes: Routes = [
    {
        path: '',
        component: WorkComponent
    },
    {
        path: 'tooting-police-station',
        component: TootingPoliceStationComponent
    },
    {
        path: 'concilio',
        component: ConcilioComponent
    },
    {
        path: 'dagenham',
        component: DagenhamComponent
    },
    {
        path: 'barkers-of-kensington',
        component: BarkersOfKengsingtonComponent
    },
    {
        path: 'deporte-mujer',
        component: DeporteMujerComponent
    },
    {
        path: 'stella-bikes',
        component: DeporteMujerComponent
    },
    {
        path: 'festival-via-crucis',
        component: DeporteMujerComponent
    }
];
