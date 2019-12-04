import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-search-filter",
  templateUrl: "./search-filter.component.html",
  styleUrls: ["./search-filter.component.css"]
})
export class SearchFilterComponent implements OnInit, OnChanges {
  @Input() public searchdata;
  @Output() public selecteddata = new EventEmitter();
  
  public selectedType: string = " ";
  public selectedAvailbility: string = "";
  public selectedName: string = "";

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.searchdata);
  }

  onChange(event){
    const searchObject = {
      type: this.selectedType,
      isAvailable: this.selectedAvailbility,
      name: this.selectedName
    }
    this.selecteddata.emit(searchObject);
  }
}
