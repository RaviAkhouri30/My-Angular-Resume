import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
  }

  public onMenuClick = () => {
    const linkDisplay = this.el.nativeElement.querySelector('.links').style.display;
    if (linkDisplay === 'block') {
      this.el.nativeElement.querySelector('.links').style.display = 'none';
      this.el.nativeElement.querySelector('.menu-bar i').style['background-color'] = 'transparent';
      return;
    }
    this.el.nativeElement.querySelector('.links').style.display = 'block';
    this.el.nativeElement.querySelector('.menu-bar i').style['background-color'] = '#222831';
  }

  public onLinkClick = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw > 1080) {
      return;
    }
    const linkDisplay = this.el.nativeElement.querySelector('.links').style.display;
    if (linkDisplay === 'block') {
      this.el.nativeElement.querySelector('.links').style.display = 'none';
      this.el.nativeElement.querySelector('.menu-bar i').style['background-color'] = 'transparent';
      return;
    }
    this.el.nativeElement.querySelector('.links').style.display = 'block';
    this.el.nativeElement.querySelector('.menu-bar i').style['background-color'] = '#222831';
  }

}
