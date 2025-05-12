import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-image animate-slide-in">
            <img src="/api/placeholder/600/400" alt="About PresentWell">
          </div>
          <div class="about-content">
            <h2>Why Choose PresentWell?</h2>
            <p>PresentWell was created by presentation experts with over 15 years of experience. We understand the challenges of creating engaging presentations that captivate your audience.</p>
            <p>Our platform combines ease of use with powerful features that help you tell your story effectively, whether you're pitching to investors, teaching a class, or presenting at a conference.</p>
            <a href="#" class="btn">Learn Our Story</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
