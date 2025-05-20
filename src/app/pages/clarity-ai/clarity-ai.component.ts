import { Component, OnInit } from '@angular/core';
import { DetailComponentBase } from '../../core/base/detail-component-base';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clarity-ai',
  imports: [CommonModule],
  templateUrl: './clarity-ai.component.html',
  styleUrl: './clarity-ai.component.css'
})
export class ClarityAIComponent extends DetailComponentBase {

}
