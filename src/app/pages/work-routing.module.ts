import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { BarkersOfKengsingtonComponent } from './barkers-of-kengsington/barkers-of-kengsington.component';
import { ChoosePackagingComponent } from './choose-packaging/choose-packaging.component';
import { ClarityAIComponent } from './clarity-ai/clarity-ai.component';
import { CliffhangerMagazineComponent } from './cliffhanger-magazine/cliffhanger-magazine.component';
import { ConcilioComponent } from './concilio/concilio.component';
import { DagenhamComponent } from './dagenham/dagenham.component';
import { DeporteMujerComponent } from './deporte-mujer/deporte-mujer.component';
import { ElConventoComponent } from './el-convento-centro-social/el-convento.component';
import { FestivalViaCrucisComponent } from './festival-via-crucis/festival-via-crucis.component';
import { HotelAlamedaComponent } from './hotel-alameda/hotel-alameda.component';
import { NixonComponent } from './nixon/nixon.component';
import { PortadaCursivasComponent } from './portada-cursivas/portada-cursivas.component';
import { RestauranteYakiComponent } from './restaurante-yaki/restaurante-yaki.component';
import { RevistaYorokobuComponent } from './revista-yorokobu/revista-yorokobu.component';
import { StellaBikesComponent } from './stella-bikes/stella-bikes.component';
import { TootingPoliceStationComponent } from './tooting-police-station/tooting-police-station.component';
import { WeekendFestivalComponent } from './weekend-festival/weekend-festival.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
