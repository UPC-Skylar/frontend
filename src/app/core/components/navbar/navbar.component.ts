import {Component, inject, OnDestroy, signal} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatIconButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  imports: [
    MatButtonToggle,
    TranslatePipe,
    MatIcon,
    MatToolbar,
    MatButtonToggleGroup,
    MatIconButton,
    RouterLink,
    RouterLinkActive,
    MatAnchor,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatButtonToggleModule,
    MatSidenavContent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {
  protected readonly fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  protected readonly fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );
  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  snav: any;

  constructor(private translate: TranslateService) {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  protected readonly shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host,
  );

  setLanguage(language: string): void {
    this.translate.use(language);
  }
}

