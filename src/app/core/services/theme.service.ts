import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class ThemeService {
  backgroundColor = new BehaviorSubject<string>('#F1F7F8');
  textColor = new BehaviorSubject<string>('#114653');

  private routeColors = new Map<string, { bg: string; text: string }>([
    ['/proyectos/sobre-mi', { bg: '#95E9D0', text: '#2D3234' }],
    ['/proyectos/tooting-police-station', { bg: '#6F45D7', text: '#F1F7F8' }],
    ['/proyectos/concilio', { bg: '#FEE50E', text: '#2D3234' }],
    ['/proyectos/dagenham', { bg: '#C44522', text: '#F1F7F8' }],
    ['/proyectos/clarity-ai', { bg: '#9DEAD3', text: '#2D3234' }],
    ['/proyectos/barkers-of-kensington', { bg: '#39493A', text: '#F1F7F8' }],
    ['/proyectos/deporte-mujer', { bg: '#262626', text: '#F1F7F8' }],
    ['/proyectos/stella-bikes', { bg: '#EFB73A', text: '#2D3234' }],
    ['/proyectos/festival-via-crucis', { bg: '#C4CEC7', text: '#2D3234' }],
    ['/proyectos/restaurante-yaki', { bg: '#AD3F9D', text: '#F1F7F8' }],
    ['/proyectos/hotel-alameda', { bg: '#BB5117', text: '#F1F7F8' }],
    ['/proyectos/weekend-festival', { bg: '#18B4B1', text: '#2D3234' }],
    ['/proyectos/revista-yorokobu', { bg: '#88C0B3', text: '#2D3234' }],
    ['/proyectos/el-convento', { bg: '#011D45', text: '#F1F7F8' }],
    ['/proyectos/choose-packaging', { bg: '#D0C9BD', text: '#2D3234' }],
    ['/proyectos/nixon', { bg: '#067E71', text: '#F1F7F8' }],
    ['/proyectos/portada-cursivas', { bg: '#B79F41', text: '#2D3234' }],
    ['/proyectos/cliffhanger-magazine', { bg: '#000000', text: '#F1F7F8' }],
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
