import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-concilio',
  imports: [CommonModule],
  templateUrl: './concilio.component.html',
  styleUrl: './concilio.component.css',
})
export class ConcilioComponent extends DetailComponentBase implements OnInit {}
