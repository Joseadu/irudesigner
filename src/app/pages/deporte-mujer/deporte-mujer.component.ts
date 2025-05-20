import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-deporte-mujer',
  imports: [CommonModule],
  templateUrl: './deporte-mujer.component.html',
  styleUrl: './deporte-mujer.component.css'
})
export class DeporteMujerComponent extends DetailComponentBase implements OnInit {

}
