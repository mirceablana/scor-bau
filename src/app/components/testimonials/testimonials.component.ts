import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Customers Say</h2>
          <p>Trusted by thousands of professionals worldwide</p>
        </div>
        <div class="testimonial-slider">
          <div class="testimonial-card">
            <div class="testimonial-quote">
              "PresentWell has completely transformed how I create presentations. The templates are stunning, and the interface is so intuitive. I've received countless compliments on my slides since switching!"
            </div>
            <div class="testimonial-author">Sarah Johnson</div>
            <div class="testimonial-role">Marketing Director at TechCorp</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {}
