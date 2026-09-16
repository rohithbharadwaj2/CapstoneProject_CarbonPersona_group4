import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userService = inject(UserService);
  router = inject(Router);

  role = "";
  isRegisterMode = false;

  userobj: any = {
    "email": '',
    "password": ''
  };

  regobj: any = {
    "email": '',
    "name": '',
    "phonenumber": '',
    "password": ''
  };

  switchToRegister(event: MouseEvent) {
    event.preventDefault();
    this.isRegisterMode = true;
  }

  onRegister() {
    const { email, name, phonenumber, password } = this.regobj;

    if (!this.validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!this.validateName(name)) {
      alert("Name must contain only letters and spaces, and be at least 2 characters long.");
      return;
    }
    if (!this.validatePhoneNumber(phonenumber)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
    if (!this.validatePassword(password)) {
      alert("Password must contain:\n- At least 1 uppercase letter\n- At least 1 lowercase letter\n- At least 1 number\n- At least 12 characters.");
      return;
    }

    this.userService.register(this.regobj).subscribe((res: any) => {
      if (res.isSuccess) {
        alert("Register Success");
        this.isRegisterMode = false;
      } else {
        alert(res.message);
      }
    });
  }

  onLogin() {
    const { email, password } = this.userobj;

    if (!this.validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!this.validatePassword(password)) {
      alert("Invalid password. Must contain:\n- At least 1 uppercase letter\n- At least 1 lowercase letter\n- At least 1 number\n- At least 8 characters.");
      return;
    }

    this.userService.login(this.userobj).subscribe({
      next: (res: any) => {
        if (res.isSuccess) {
          alert("Login Success");

          // Extract username from the response and set it in localStorage
          const username = res.result.user.name;

          // Save the username and other details
          localStorage.setItem('username', username);
          localStorage.setItem("user", JSON.stringify(res.result.user));
          localStorage.setItem("token", res.result.token);
          localStorage.setItem("role", res.result.role);

          this.role = res.result.role;

          this.router.navigateByUrl('home');
        } else {
          alert(res.message);
        }
      },
      error: (err) => {
        console.error("Login API error", err);
        alert("Failed to connect to the server. Please try again later.");
      }
    });
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateName(name: string): boolean {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    return nameRegex.test(name);
  }

  validatePhoneNumber(phone: string): boolean {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  validatePassword(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLengthValid = password.length >= 8; // Minimum 12 characters for register
    return hasUpperCase && hasLowerCase && hasNumber && isLengthValid;
  }
}
