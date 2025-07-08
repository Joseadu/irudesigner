import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-festival-via-crucis',
  imports: [CommonModule],
  templateUrl: './festival-via-crucis.component.html',
  styleUrl: './festival-via-crucis.component.css'
})
export class FestivalViaCrucisComponent extends DetailComponentBase implements OnInit {

}
