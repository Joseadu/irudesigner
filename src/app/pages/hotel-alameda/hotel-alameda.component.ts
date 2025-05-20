import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-hotel-alameda',
  imports: [CommonModule],
  templateUrl: './hotel-alameda.component.html',
  styleUrl: './hotel-alameda.component.css'
})
export class HotelAlamedaComponent extends DetailComponentBase {

}
