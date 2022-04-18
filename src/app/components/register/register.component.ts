import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  registerForm= new FormGroup({
    nom : new FormControl(''),
    prenom : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl('')

  })
  onRegister(){
    const user = this.registerForm.value
    // if(this.registerForm.valid && this.registerForm.value.password == this.registerForm.value.confirmPassword){
      this.authService.register(user)
    // } 
   }

}
