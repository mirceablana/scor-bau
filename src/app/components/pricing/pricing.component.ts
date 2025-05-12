import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that works best for you</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-header">
              <div class="pricing-name">Basic</div>
              <div class="pricing-price">$9</div>
              <div class="pricing-period">per month</div>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature">10 Presentations</li>
              <li class="pricing-feature">Basic Templates</li>
              <li class="pricing-feature">2GB Storage</li>
              <li class="pricing-feature">Email Support</li>
            </ul>
            <div class="pricing-footer">
              <a href="#" class="btn btn-outline">Get Started</a>
            </div>
          </div>
          <div class="pricing-card">
            <div class="pricing-header featured">
              <div class="pricing-name">Pro</div>
              <div class="pricing-price">$19</div>
              <div class="pricing-period">per month</div>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature">Unlimited Presentations</li>
              <li class="pricing-feature">Premium Templates</li>
              <li class="pricing-feature">10GB Storage</li>
              <li class="pricing-feature">Priority Support</li>
              <li class="pricing-feature">Advanced Analytics</li>
            </ul>
            <div class="pricing-footer">
              <a href="#" class="btn btn-accent">Get Started</a>
            </div>
          </div>
          <div class="pricing-card">
            <div class="pricing-header">
              <div class="pricing-name">Team</div>
              <div class="pricing-price">$49</div>
              <div class="pricing-period">per month</div>
            </div>
            <ul class="pricing-features">
              <li class="pricing-feature">Everything in Pro</li>
              <li class="pricing-feature">Team Collaboration</li>
              <li class="pricing-feature">50GB Storage</li>
              <li class="pricing-feature">24/7 Support</li>
              <li class="pricing-feature">Custom Branding</li>
            </ul>
            <div class="pricing-footer">
              <a href="#" class="btn btn-outline">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PricingComponent {}
