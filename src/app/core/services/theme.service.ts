import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private backgroundColor = new BehaviorSubject<string>('#F1F7F8');
  private textColor = new BehaviorSubject<string>('#114653');

  private routeColors = new Map<string, { bg: string; text: string }>([
    ['tooting-police-station', { bg: '#6F45D7', text: '#F1F7F8' }],
    ['concilio', { bg: '#FEE50E', text: '#2D3234' }],
    ['dagenham', { bg: '#C44522', text: '#F1F7F8' }],
    ['clarity-ai', { bg: '#9DEAD3', text: '#2D3234' }],
    ['barkers-of-kensington', { bg: '#39493A', text: '#F1F7F8' }],
    ['deporte-mujer', { bg: '#262626', text: '#F1F7F8' }],
    ['stella-bikes', { bg: '#3D4673', text: '#F1F7F8' }],
    ['festival-via-crucis', { bg: '#C4CEC7', text: '#2D3234' }],
    ['restaurante-yaki', { bg: '#AD3F9D', text: '#F1F7F8' }],
    ['hotel-alameda', { bg: '#BB5117', text: '#F1F7F8' }],
    ['weekend-festival', { bg: '#97A5D2', text: '#2D3234' }],
    ['revista-yorokobu', { bg: '#88C0B3', text: '#2D3234' }],
    ['el-convento', { bg: '#011D45', text: '#F1F7F8' }],
    ['choose-packaging', { bg: '#D0C9BD', text: '#2D3234' }],
    ['nixon', { bg: '#067E71', text: '#F1F7F8' }],
    ['portada-cursivas', { bg: '#B79F41', text: '#2D3234' }],
    ['cliffhanger-magazine', { bg: '#000000', text: '#F1F7F8' }],
  ]);

  setTheme(bg: string, text: string) {
    this.backgroundColor.next(bg);
    this.textColor.next(text);
  }

  getBackgroundColor$() {
    return this.backgroundColor.asObservable();
  }

  getTextColor$() {
    return this.textColor.asObservable();
  }

  getColorsForRoute(route: string): { bg: string; text: string } | null {
    return this.routeColors.get(route) || null;
  }

  resetBodyStyles() {
    document.body.style.backgroundColor = '#F1F7F8';
    document.body.style.color = '#114653';
  }

  setHoverColors(bg: string, text: string) {
    this.backgroundColor.next(bg);
    this.textColor.next(text);
  }

  resetHoverColors() {
    this.backgroundColor.next('#F1F7F8');
    this.textColor.next('#114653');
  }
}
