import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekend-festival',
  imports: [CommonModule],
  templateUrl: './weekend-festival.component.html',
  styleUrl: './weekend-festival.component.css'
})
export class WeekendFestivalComponent extends DetailComponentBase {

}
