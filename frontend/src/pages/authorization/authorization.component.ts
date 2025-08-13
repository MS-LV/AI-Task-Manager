import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@widgets/header";

@Component({
  selector: 'app-authorization',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

}
