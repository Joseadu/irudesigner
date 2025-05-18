import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-tooting-police-station',
  imports: [
    CommonModule
  ],
  templateUrl: './tooting-police-station.component.html',
  styleUrl: './tooting-police-station.component.css'
})
export class TootingPoliceStationComponent extends DetailComponentBase implements OnInit { }