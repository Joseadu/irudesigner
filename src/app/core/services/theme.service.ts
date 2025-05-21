import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private backgroundColor: string | null = null;
  private textColor: string | null = null;

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
    ['el-convento-centro-social', { bg: '#011D45', text: '#F1F7F8' }],
    ['choose-packaging', { bg: '#D0C9BD', text: '#2D3234' }],
    ['nixon', { bg: '#067E71', text: '#F1F7F8' }],
    ['portada-cursivas', { bg: '#B79F41', text: '#2D3234' }],
    ['cliffhanger-magazine', { bg: '#000000', text: '#F1F7F8' }],
  ]);

  setTheme(bg: string, text: string) {
    this.backgroundColor = bg;
    this.textColor = text;
  }

  getBackgroundColor(): string | null {
    return this.backgroundColor;
  }

  getTextColor(): string | null {
    return this.textColor;
  }

  getColorsForRoute(route: string): { bg: string; text: string } | null {
    return this.routeColors.get(route) || null;
  }

  resetBodyStyles() {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
  }
}