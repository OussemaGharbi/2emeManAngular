import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
   
    email : new FormControl(''),
    password : new FormControl('')

  })

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const user = this.loginForm.value
    if(this.loginForm.valid){
      this.authService.login(user)
    }
    console.log(this.loginForm.value)

  }

}
