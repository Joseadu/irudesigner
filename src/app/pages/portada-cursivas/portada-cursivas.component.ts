import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-portada-cursivas',
  imports: [CommonModule],
  templateUrl: './portada-cursivas.component.html',
  styleUrl: './portada-cursivas.component.css'
})
export class PortadaCursivasComponent extends DetailComponentBase {

}
