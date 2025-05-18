import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, pairwise, startWith } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        startWith(null),
        pairwise()
      )
      .subscribe(([prev, curr]: any) => {
        const from = prev?.urlAfterRedirects || '';
        const to = curr?.urlAfterRedirects || '';

        const saliendoDeWork = from === '/' || from.includes('/work');
        const entrandoEnDetalle = to !== '/' && !to.includes('/work');

        if (saliendoDeWork && entrandoEnDetalle) {
          this.themeService.resetBodyStyles();
        }
      });
  }
}