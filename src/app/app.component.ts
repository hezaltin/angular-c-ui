import { Component,ElementRef } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { FindValueSubscriber } from 'rxjs/operators/find';
import { AuthService } from './services/auth.service';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isCollapsed:boolean =true;
    isAuthenticated:boolean;
    currentUrl:any;

    loggedIn : boolean;
    public userInfo: any = null;
    private subscription: Subscription;
    public isIframe: boolean;
  
    constructor(private router: Router,private elementRef:ElementRef,private authService:AuthService, private authServiceMsal : MsalService,private broadcastService: BroadcastService) {
        this.isIframe = window !== window.parent && !window.opener;
   if(this.authServiceMsal.getUser())
    {
      this.loggedIn = true;
      this.router.navigate(['/product']);
    }
   else {
     this.loggedIn = false;
   }
    }

    login()
    {
     this.authServiceMsal.loginPopup(["user.read" ,"api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"]);
    }
  
    logout()
    {
     this.authServiceMsal.logout();
    }
  

    ngOnInit(){
        console.log(this.router)
        // this.router.events.subscribe((event: Event) => {
        //     console.log(event);
        //     if (event instanceof NavigationEnd ) {
        //       this.currentUrl = event.url;
        //       console.log( this.currentUrl);
        //     }
        //   });
        //  this.authService.isAuthValid(false)


          this.authService.getAuthValidation.subscribe(auth=>{
              console.log(auth)
              
            //   if(!auth) {
            //       this.authService.isAuthValid(false)
            //       this.router.navigate(['/product']);
            //   }
              this.isAuthenticated = auth

          })
        this.broadcastService.subscribe("msal:loginFailure", (payload) => {
            console.log("login failure " + JSON.stringify(payload));
            this.loggedIn = false;
          });
      
          this.broadcastService.subscribe("msal:loginSuccess", (payload) => {
            console.log("login success " + JSON.stringify(payload));
            this.loggedIn = true;
            this.router.navigate(['/product']);
          });

          this.broadcastService.subscribe("msal:acquireTokenSuccess", (payload) => {
            console.log('payloadSuccess==>',payload)
       });
        
       this.broadcastService.subscribe("msal:acquireTokenFailure", (payload) => {
        console.log('payloadFailure==>',payload)
             // do something here
       });
    }

    collapsiable(){
        this.isCollapsed = !this.isCollapsed
       // console.log(this.elementRef.nativeElement)
    }
    ngOnDestroy() {
        this.broadcastService.getMSALSubject().next(1);
        if(this.subscription) {
          this.subscription.unsubscribe();
        }
      }
}
