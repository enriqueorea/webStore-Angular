import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: any;
  isActive: boolean = false;
  constructor(private router: Router) {}
  data: string = '';
  ngOnInit(): void {
    this.user = localStorage.getItem('profile');
    this.user = JSON.parse(this.user);
    if (this.router.url !== '/home') {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  logOut() {
    this.router.navigateByUrl('/login');
    localStorage.clear();
  }
}
