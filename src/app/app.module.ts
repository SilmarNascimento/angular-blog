import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { SideCardComponent } from './components/side-card/side-card.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { SocialMediaContactComponent } from './components/social-media-contact/social-media-contact.component';
import { LucideAngularModule, File, Home, Menu, UserCheck, TwitterIcon } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    SideCardComponent,
    MainCardComponent,
    MenuBarComponent,
    CarouselComponent,
    CommentSectionComponent,
    SocialMediaContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({File, Home, Menu, UserCheck, TwitterIcon})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
