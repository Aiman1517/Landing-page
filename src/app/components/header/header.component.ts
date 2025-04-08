import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  setLanguage(lang: string) {
    const currentUrl = this.router.url;
    const newUrl = currentUrl.replace(/\/(en|ru|kz)\//, `/${lang}/`);
    this.router.navigateByUrl(newUrl);
  }
}