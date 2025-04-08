import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { InstallComponent } from './components/install/install.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    WelcomeComponent,
    IntroductionComponent,
    AdvantagesComponent,
    ReviewsComponent,
    InstallComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Landing-page'; 
}