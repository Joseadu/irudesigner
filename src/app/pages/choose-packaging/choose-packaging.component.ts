import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-choose-packaging',
  imports: [CommonModule],
  templateUrl: './choose-packaging.component.html',
  styleUrl: './choose-packaging.component.css'
})
export class ChoosePackagingComponent extends DetailComponentBase {

}
