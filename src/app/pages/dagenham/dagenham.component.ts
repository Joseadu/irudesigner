import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-dagenham',
  imports: [
    CommonModule
  ],
  templateUrl: './dagenham.component.html',
  styleUrl: './dagenham.component.css'
})
export class DagenhamComponent extends DetailComponentBase implements OnInit {}
