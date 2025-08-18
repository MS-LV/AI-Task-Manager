import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from '@widgets/header';
import { SidebarComponent } from '@widgets/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'AI Task Manager';
  isAsideClosed = signal(true);

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}
