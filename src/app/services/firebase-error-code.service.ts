import { Injectable } from '@angular/core';
import { FirebaseErrorCodeEnum } from '../utils/firebase-error-code';


@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorCodeService {

  constructor() { }

  codeError(code: string){
    switch(code){
      case FirebaseErrorCodeEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';
      case FirebaseErrorCodeEnum.WeakPassword:
        return 'La contraseña es muy débil';
      case FirebaseErrorCodeEnum.InvalidEmail:
        return 'Correo inválido';
      case FirebaseErrorCodeEnum.WrongPassword:
        return 'Contraseña incorrecta';
        case FirebaseErrorCodeEnum.UserNotFound:
        return 'El usuario no existe';  
      default:
      return 'Error desconocido';
    }
  }  
}