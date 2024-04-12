import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  homeRef = "index.html";
  routes = [["index.html", "Home"], ["about.html", "About"], ["services.html", "Services"]];
  isHamburgerMenuOpen = false;
  isLightModeOn = true;

  toggleHamburgerMenu() {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  }

  toggleLightMode() {
    this.isLightModeOn = !this.isLightModeOn;
    if (this.isLightModeOn) {
      this.renderer.removeClass(this.document.body, 'dark-mode');
    } else {
      this.renderer.addClass(this.document.body, 'dark-mode');
    }
  }

  goHome() {
    window.location.href = this.homeRef;
  }
}
