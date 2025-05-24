// transition.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransitionService {
  private loadingSubject = new BehaviorSubject(false);
  isLoading$ = this.loadingSubject.asObservable();

  private backgroundColorSubject = new BehaviorSubject<string>('black');
  backgroundColor$ = this.backgroundColorSubject.asObservable();

  private currentBg: string = 'black';

  setBackground(color: string) {
    this.currentBg = color;
    this.backgroundColorSubject.next(color);
  }

  resetBackground() {
    this.currentBg = 'black';
    this.backgroundColorSubject.next('black');
  }

  start() {
    this.loadingSubject.next(true);
  }

  stop(afterMs: number = 0) {
    setTimeout(() => {
      this.loadingSubject.next(false);
      this.resetBackground();
    }, afterMs);
  }
}

