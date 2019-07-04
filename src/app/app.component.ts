import { Component,ElementRef } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { FindValueSubscriber } from 'rxjs/operators/find';
import { AuthService } from './services/auth.service';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from "./store";
import { State } from './store';


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
    public getToken ;
    public isFilterEnabled:boolean = false;
    constructor(private router: Router,private elementRef:ElementRef,private authService:AuthService, private authServiceMsal : MsalService,private broadcastService: BroadcastService,private store: Store<State>) {
        this.isIframe = window !== window.parent && !window.opener;
        console.log('this.authServiceMsal.getUser()==>',this.authServiceMsal.getUser())
   if(this.authServiceMsal.getUser())
    {
      this.loggedIn = true;
      this.userInfo = this.authServiceMsal.getUser();
      this.store.dispatch(new fromStore.LoadUsers());
      this.router.navigate(['/product']);

    }
   else {
     this.loggedIn = false;
   }
    }

    login()
    {
     this.authServiceMsal.loginPopup(["user.read"]);
    }
  
    logout()
    {
     this.authServiceMsal.logout();
    }
  

    ngOnInit(){
        console.log(this.router)
        this.authService.getSearchBooks('name').subscribe(name=>{
          console.log('name==>',name)
        })

        this.store.select(fromStore.getRouterState).subscribe(next=>{
          console.log('routerSTate==>',next)
          if(!next){
            return
          }

          const urlEnabledFIlter = ["/analytics",'/datavisualization']
            this.isFilterEnabled = urlEnabledFIlter.some(item=>item === next.state.url)

        })


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
            this.userInfo = this.authServiceMsal.getUser();
            this.store.dispatch(new fromStore.LoadUsers());
            this.router.navigate(['/product']);
          });

          setTimeout(()=>{
              this.authServiceMsal.clearCacheForScope(this.getToken)
          },10000)

          this.broadcastService.subscribe("msal:acquireTokenSuccess", (payload) => {
            console.log('payloadSuccess==>',payload)
            this.getToken = payload;
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
