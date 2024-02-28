import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Observable, tap } from 'rxjs';

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
    
}


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
