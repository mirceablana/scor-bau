import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="cta">
      <div class="container">
        <h2>Ready to Create Amazing Presentations?</h2>
        <p>Join thousands of satisfied users who have transformed their presentation experience with PresentWell.</p>
        <a href="#" class="btn btn-lg">Start Free Trial</a>
      </div>
    </section>
  `,
})
export class CtaComponent {}