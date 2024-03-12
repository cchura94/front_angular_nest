import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  console.log("_________ *** GUARDS AUTH");
  

  const token = localStorage.getItem("access_token") || "";
  if(token.length > 0){
    return true;
  }else{
    router.navigate(["/auth/login"]);
    return false
  }
};
