import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barkers-of-kengsington',
  imports: [CommonModule],
  templateUrl: './barkers-of-kengsington.component.html',
  styleUrl: './barkers-of-kengsington.component.css',
})
export class BarkersOfKengsingtonComponent
  extends DetailComponentBase
  implements OnInit {}
