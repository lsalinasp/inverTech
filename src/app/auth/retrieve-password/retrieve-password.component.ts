import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorCodeService } from 'src/app/services/firebase-error-code.service';

@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.css']
})
export class RetrievePasswordComponent {
  retrieveUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorCodeService){
      
    this.retrieveUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    }

    recuperar(){
      const email = this.retrieveUser.value.email;

      this.afAuth.sendPasswordResetEmail(email).then(() =>{
        this.toastr.info('Te enviamos un mensaje a tu correo para restablecer tu contraseña ','Recuperar contraseña')
        this.router.navigate(['/login']);

      }).catch((error) =>{
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      })
    }

}
