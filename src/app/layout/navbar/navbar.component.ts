import { Component, OnInit, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public icon: boolean;
  @Output() public sidebarIcon = new EventEmitter();

  constructor() {
    this.icon = false;
  }

  toggleIcon() {
    this.icon = !this.icon;
    this.showIcon();
  }

  showIcon() {
    this.sidebarIcon.emit(this.icon);
  }

  ngOnInit() {}
}
