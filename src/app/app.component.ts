import { Component, OnInit } from "@angular/core";
import { Bucket } from "./bucket";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public showIcon: boolean;
  
  constructor() {
    console.log("contructor");
  }
  
  ngOnInit() {
    console.log("ngOnit");
    this.showIcon = false;
  }

  showsidebar(event) {
    this.showIcon = event;
    console.log('this is an' + event)
  }
}
