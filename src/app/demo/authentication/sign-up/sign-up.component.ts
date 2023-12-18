import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export default class SignUpComponent {
  signUpForm: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchPassword });
  }

  matchPassword(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  register() {
    if (this.signUpForm.invalid || this.signUpForm.errors?.['notSame']) {
      // Manejar errores aquí
      return;
    }

    const userData = {
      useraccount: this.signUpForm.value.username,
      emailaccount: this.signUpForm.value.email,
      passaccount: this.signUpForm.value.password,
      type_user_id_user: 2,
      agrupation_id_agrupation: null
    };

    this.loginService.registerUser(userData).subscribe(response => {
      Swal.fire({
        title: 'Registro Exitoso',
        text: 'Tu cuenta ha sido creada',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/auth/signin']);
        }
      });
      this.resetForm();
    }, error => {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al crear tu cuenta',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    });
  }

  resetForm() {
    this.signUpForm.reset();
  }
}
