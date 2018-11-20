import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../_services/index";
import { UserModel } from "../_models/index";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user : UserModel;
  token : String;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });
}
// convenience getter for easy access to form fields
get form() { return this.registerForm.controls; }

onSubmit(user: UserModel) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    user.role = ['ROLE_CLIENT'];
    //this.token = this.userService.registerUser(this.user)
    this.userService.registerUser(user).subscribe(token => this.token = token);
    console.log(this.token);
}

}
