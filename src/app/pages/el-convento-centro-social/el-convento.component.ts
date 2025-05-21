import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';

@Component({
  selector: 'app-el-convento',
  imports: [CommonModule],
  templateUrl: './el-convento.component.html',
  styleUrl: './el-convento.component.css'
})
export class ElConventoComponent extends DetailComponentBase {

}
