import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter, pairwise, startWith } from 'rxjs';
import { ThemeService } from './core/services/theme.service';
import { TransitionService } from './core/services/transition.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public transitionService: TransitionService
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(() => {
      this.transitionService.start();
    });

    this.router.events.pipe(
      filter(e =>
        e instanceof NavigationEnd ||
        e instanceof NavigationCancel ||
        e instanceof NavigationError
      )
    ).subscribe(() => {
      this.transitionService.stop(2000);
    });
  }
}