import { Component, OnInit, Input } from "@angular/core";
import { IntermediateService } from "../intermediate.service";

@Component({
  selector: "app-list-data",
  templateUrl: "./list-data.component.html",
  styleUrls: ["./list-data.component.css"]
})
export class ListDataComponent implements OnInit {
  @Input() public bucketdata;

  public buttonName: any = "Add";
  public cartCount = 1;
  public countresult = 0;

  constructor(private intermediateService: IntermediateService) {}
  ngOnInit() {}

  selectedItem(itemdata) {
    this.intermediateService.setCartList(itemdata);
    // if (itemdata) {
    itemdata.selected = !itemdata.selected;
    console.log(itemdata.selected);
    if (!itemdata.selected) {
      this.countresult -= this.cartCount;
    } else {
      this.countresult += this.cartCount;
    }
    // }
  }
}
