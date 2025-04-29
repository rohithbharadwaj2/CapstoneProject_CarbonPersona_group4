import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = '';

  constructor() {}

  ngOnInit() {
    // Get the username from localStorage
    this.username = localStorage.getItem('username') || 'User';
  }
}
