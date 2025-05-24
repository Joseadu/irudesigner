import { Routes } from '@angular/router';
import { WorkComponent } from './pages/work/work.component';
import { TootingPoliceStationComponent } from './pages/tooting-police-station/tooting-police-station.component';
import { ConcilioComponent } from './pages/concilio/concilio.component';
import { DagenhamComponent } from './pages/dagenham/dagenham.component';
import { ClarityAIComponent } from './pages/clarity-ai/clarity-ai.component';
import { BarkersOfKengsingtonComponent } from './pages/barkers-of-kengsington/barkers-of-kengsington.component';
import { DeporteMujerComponent } from './pages/deporte-mujer/deporte-mujer.component';
import { StellaBikesComponent } from './pages/stella-bikes/stella-bikes.component';
import { FestivalViaCrucisComponent } from './pages/festival-via-crucis/festival-via-crucis.component';
import { RestauranteYakiComponent } from './pages/restaurante-yaki/restaurante-yaki.component';
import { HotelAlamedaComponent } from './pages/hotel-alameda/hotel-alameda.component';
import { WeekendFestivalComponent } from './pages/weekend-festival/weekend-festival.component';
import { RevistaYorokobuComponent } from './pages/revista-yorokobu/revista-yorokobu.component';
import { NixonComponent } from './pages/nixon/nixon.component';
import { ChoosePackagingComponent } from './pages/choose-packaging/choose-packaging.component';
import { CliffhangerMagazineComponent } from './pages/cliffhanger-magazine/cliffhanger-magazine.component';
import { PortadaCursivasComponent } from './pages/portada-cursivas/portada-cursivas.component';
import { ElConventoComponent } from './pages/el-convento-centro-social/el-convento.component';

export const routes: Routes = [
    {
        path: '',
        component: WorkComponent
    },
    {
        path: 'clarity-ai',
        component: ClarityAIComponent
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
        component: StellaBikesComponent
    },
    {
        path: 'festival-via-crucis',
        component: FestivalViaCrucisComponent
    },
    {
        path: 'restaurante-yaki',
        component: RestauranteYakiComponent
    },
    {
        path: 'hotel-alameda',
        component: HotelAlamedaComponent
    },
    {
        path: 'weekend-festival',
        component: WeekendFestivalComponent
    },
    {
        path: 'revista-yorokobu',
        component: RevistaYorokobuComponent
    },
    {
        path: 'el-convento',
        component: ElConventoComponent
    },
    {
        path: 'choose-packaging',
        component: ChoosePackagingComponent
    },
    {
        path: 'nixon',
        component: NixonComponent
    },
    {
        path: 'portada-cursivas',
        component: PortadaCursivasComponent
    },
    {
        path: 'cliffhanger-magazine',
        component: CliffhangerMagazineComponent
    }
];
