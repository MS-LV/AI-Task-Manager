import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'AI Task Manager';

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}
