import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-nixon',
  imports: [CommonModule],
  templateUrl: './nixon.component.html',
  styleUrl: './nixon.component.css'
})
export class NixonComponent extends DetailComponentBase {

}
