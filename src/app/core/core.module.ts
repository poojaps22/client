import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../users/services/auth.service';

@NgModule({
  declarations: [NavBarComponent, FooterComponent, LandingComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [NavBarComponent, FooterComponent, LandingComponent],
})
export class CoreModule {}
