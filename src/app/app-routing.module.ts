import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SigninGuard } from './services/signin.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { ViewVideoComponent } from './view-video/view-video.component';

const routes: Routes = [
  {
    path: "",
    component: SidebarComponent,
   
        children: [
          {
            path: "view-video/:videoId",
             component: ViewVideoComponent,
          }
        ]
  },
  {   
    path: "upload",   
    canActivate:[SigninGuard],    
      component:StudioUploadComponent,
      children: [
        {
          path: "videoUpload",
          component:VideoUploadComponent,
    
        },
        {
          path:"livestream",
          component:StudioLivestreamComponent,
        }
      ]
    },
    {
      path:"authentication",
      component:AuthenticationComponent,
      children:[
        {
      path:"register",
      component:RegisterComponent,
        },        
        {
          path:"login",
          component:LoginComponent,
        }
      ]
}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
