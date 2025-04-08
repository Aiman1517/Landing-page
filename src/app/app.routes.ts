import { RouterModule, Routes } from '@angular/router';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { InstallComponent } from './components/install/install.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: ':lang', component: AppComponent, children: [
    { path: 'advantages', component: AdvantagesComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'install', component: InstallComponent },
    { path: 'footer', component: FooterComponent },
    { path: '', redirectTo: 'advantages', pathMatch: 'full' }
  ]},
  { path: '', redirectTo: '/kz', pathMatch: 'full' } 
];