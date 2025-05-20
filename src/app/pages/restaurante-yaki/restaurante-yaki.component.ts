import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurante-yaki',
  imports: [CommonModule],
  templateUrl: './restaurante-yaki.component.html',
  styleUrl: './restaurante-yaki.component.css'
})
export class RestauranteYakiComponent extends DetailComponentBase {

}
