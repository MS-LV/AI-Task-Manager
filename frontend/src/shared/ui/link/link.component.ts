import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterLink],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  svg = input<string>();
  label = input.required<string>();
  link = input.required<string>();

  private sanitizer: DomSanitizer = inject(DomSanitizer);
  svgHTML = computed(() => {
    return this.sanitizer.bypassSecurityTrustHtml(this.svg() ?? '');
  });
}
