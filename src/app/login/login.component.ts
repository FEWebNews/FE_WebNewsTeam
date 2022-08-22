import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup
  url : string ='http://localhost:3000/user'

  public formData = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',Validators.required)
  })

  constructor(private auth : AuthService, private router : Router) { }



  ngOnInit(): void {

  }
  onSignIn(){
    const {email, password} = this.formData.value
    this.auth.signIn(email, password)
    .then((data)=>{
      console.log('data signIn',data)
      this.router.navigate([''])
    })
  }
}
