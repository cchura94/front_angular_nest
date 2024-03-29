import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';


@Injectable()
export class peticionInterceptor implements HttpInterceptor {

  constructor(private router: Router,){}
  
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + req.url);

    const token = localStorage.getItem('access_token');

        let peticion = req.clone({
          setHeaders: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+token
          }
        })

        return handler.handle(peticion).pipe(tap(() => {},

        (error: any) =>  {
          console.log("ERROR****** ")
      
          if(error instanceof HttpErrorResponse) {
            if(error.status !== 401){
              return
            }
            localStorage.removeItem('access_token')
      
            this.router.navigate(["/auth/login"]);
          }
        }
        
        ));
  }
}

/*
export function peticionInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
        //add the jwt token
        console.log("REQQQQQQQ")
        const token = localStorage.getItem('acces_token');

        let peticion = req.clone({
          setHeaders: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+token
          }
        })

        return next(peticion)
    
}*/


/*
export const peticionInterceptor: HttpInterceptorFn = (req, next) => {


  const token = localStorage.getItem('acces_token');

  let peticion = req.clone({
    setHeaders: {
      'Accept': 'application/json',
      'Authorization': 'Bearer '+token
    }
  })

  return next(peticion).pipe(tap(() => {},

  (error: any) =>  {
    console.log("ERROR****** ")

    if(error instanceof HttpErrorResponse) {
      if(error.status !== 401){
        return
      }
      localStorage.removeItem('acces_token')

      
    }
  }
  
  ));
};
*/
