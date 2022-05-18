import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { VideoContentComponent } from './video-content/video-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {} from '@angular/material/form-field'


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChipsBarComponent,
    VideoContentComponent,
    StudioUploadComponent,
    VideoUploadComponent,
    StudioLivestreamComponent,
    ViewVideoComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
