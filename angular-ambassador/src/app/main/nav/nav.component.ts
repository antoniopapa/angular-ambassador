import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Emitters} from '../../emitters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => Emitters.user = null
    );
  }
}
