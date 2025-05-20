import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private backgroundColor: string | null = null;
  private textColor: string | null = null;

  // 💡 Aquí defines los colores por ruta UNA VEZ
  private routeColors = new Map<string, { bg: string; text: string }>([
    ['tooting-police-station', { bg: '#6F45D7', text: '#F1F7F8' }],
    ['concilio', { bg: '#FEE50E', text: '#2D3234' }],
    ['dagenham', { bg: '#C44522', text: '#F1F7F8' }],
    ['clarity-ai', { bg: '#9DEAD3', text: '#2D3234' }],
    ['barkers-of-kensington', { bg: '#39493A', text: '#F1F7F8' }],
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