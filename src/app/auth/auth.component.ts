import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl(),
  //   password: new FormControl()
  // })
  registerForm: any
  loginForm: any
  // registerForm = new FormGroup({
  //   name: new FormControl("", Validators.required),
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   password: new FormControl("", Validators.required),
  //   cfpassword : new FormControl()
  // })
  changePage: boolean = true;
  isRegister: boolean = false;
  isAuthFetching: boolean = false;
  constructor(public fb: FormBuilder, public api: ApiService) {
    this.registerForm = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      display_name: [null, Validators.required]
    }),
      this.loginForm = fb.group({
        username: [null, Validators.required],
        password: [null, Validators.required]
      })
  }

  ngOnInit(): void {

  }

  onChangePage() {
    if (this.changePage == true) {
      this.changePage = false;
    } else {
      this.changePage = true;
    }
  }

  getAllAdmin() {
    this.api.getAdminAll().subscribe(res => {
      console.log(res);
    })
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.api.login(this.loginForm.value).subscribe(res => {
      console.log(res);

    })
  }

  onSubmitRegisterAdmin() {
    console.log(this.registerForm.value);

    this.isRegister = false;
    const registerArr = new FormData();
    registerArr.append('username', this.registerForm.value.username)
    registerArr.append('display_name', this.registerForm.value.display_name)
    registerArr.append('email', this.registerForm.value.email)
    registerArr.append('password', this.registerForm.value.password)

    this.api.createProfileAdmin(registerArr).subscribe(response => {
      
      console.log(response);
    })
  }


}
