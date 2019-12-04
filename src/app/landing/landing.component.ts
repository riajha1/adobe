import { Component, OnInit } from '@angular/core';
import {Bucket} from '../bucket';
import {Http} from '@angular/http';
import {BaseModel} from '../baseModel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public resultfinal =[];
  API_ENDPOINT ="https://api.myjson.com/bins/qhnfp"
  bucketData = [];

 constructor(
   private http: Http
 ){
   this.resultfinal =this.bucketData;
   this.fetchBucketData();
 }

  // selectedvaluedata(data) {
  //   console.log(data);
  // }

  fetchBucketData() {
    this.http.get(this.API_ENDPOINT).toPromise().then(data => {
      this.resultfinal = data.json();

      console.log(this.resultfinal)
      
     // debugger;
    })
  }
  selectSearchdataOnReceive(data) {
    // console.log(data);
   const { type, price, discount }  = data;
    console.log(type, price, discount);
  //this.resultfinal = this.bucketData.filter((item)=>item.IsAvailable);
  this.resultfinal = this.bucketData.filter((item)=>item.type.indexOf(name)>-1 );
  //.map((item)=>item.IsAvailable===true);
   //this.resultfinal = this.bucketData.filter((item)=>item.type == type);
  }
  ngOnInit() {

  }


}
