import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

authForm: FormGroup;
configs = {
isSingnIn: true,
action: 'Login',
actionChange: 'Create account'
};

private nameControl = new FormControl('',[Validators.required,Validators.minLength(3)])

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(3)]]
    })
  }

  get name():FormControl {
    return <FormControl>this.authForm.get('email');
  } 

  get email():FormControl {
    return <FormControl>this.authForm.get('email');
  } 

  get password():FormControl {
    return <FormControl>this.authForm.get('password');
  }

  changeAuthAction(): void {
    this.configs.isSingnIn = !this.configs.isSingnIn;
    const { isSingnIn } = this.configs;
    this.configs.action = isSingnIn ? 'Login' : 'Sign Up';
    this.configs.actionChange = isSingnIn ? 'Create account' : 'Eu ja Possuo Uma Conta';
    !isSingnIn
    ?this.authForm.addControl('name', this.nameControl)
    :this.authForm.removeControl('name');
  }
 
  onSubmit(): void{
    console.log('authForm:', this.authForm.value);
  }
}

