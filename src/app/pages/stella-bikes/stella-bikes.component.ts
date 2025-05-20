import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-stella-bikes',
  imports: [CommonModule],
  templateUrl: './stella-bikes.component.html',
  styleUrl: './stella-bikes.component.css'
})
export class StellaBikesComponent extends DetailComponentBase {

}
