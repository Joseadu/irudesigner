import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-cliffhanger-magazine',
  imports: [CommonModule],
  templateUrl: './cliffhanger-magazine.component.html',
  styleUrl: './cliffhanger-magazine.component.css'
})
export class CliffhangerMagazineComponent extends DetailComponentBase {

}
