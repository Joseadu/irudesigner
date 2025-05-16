import { Component } from '@angular/core';
import { work_basic } from '../../core/models/work.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  workBasic: work_basic[] = [
    {
      title: 'Public Pool',
      subtitle: 'Lounging Goods for Pool Days',
      image: 'assets/images/public-pool.jpg',
      category: 'Brand Identity',
    },
    {
      title: 'Room For Milly',
      subtitle: 'Cocktails and Color',
      image: 'assets/images/room-milly.jpg',
      category: 'Naming',
    },
    {
      title: 'Foxtrot',
      subtitle: 'Chicago Hot Dog Chips',
      image: 'assets/images/public-pool.jpg',
      category: 'Print',
    },
  ];

  changeBg(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const color = target.getAttribute('data-primary-color');
    const textColor = target.getAttribute('data-text-color');
    if (color) {
      document.body.style.transition = 'background-color 0.6s ease';
      document.body.style.backgroundColor = color;
    }

    if (textColor) {
      document.body.style.color = textColor;
    }
  }

  resetBg(): void {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  }
}
