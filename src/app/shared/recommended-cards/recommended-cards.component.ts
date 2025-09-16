import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recommended-cards',
  imports: [CommonModule, RouterLink],
  templateUrl: './recommended-cards.component.html',
  styleUrl: './recommended-cards.component.css'
})
export class RecommendedCardsComponent implements OnInit {

  @Input() recommendations: any[] = [];

  ngOnInit(): void {
    console.log(this.recommendations);
  } 
}
