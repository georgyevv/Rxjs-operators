import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  public originalItemsDemo1 = [1, 2, 3, 4, 5];
  public modifiedItemsDemo1 = [];

  public originalItemsDemo2 = [{ name: "Joe", age: 30 }, { name: "Frank", age: 20 }, { name: "Ryan", age: 50 }];
  public modifiedItemsDemo2 = [];

  ngOnInit() {
    // DEMO 1
    const observableDemo1 = from(this.originalItemsDemo1);
    observableDemo1
      .pipe(map(item => item + 10))
      .subscribe(item => this.modifiedItemsDemo1.push(item));

    // DEMO 2
    const observableDemo2 = from(this.originalItemsDemo2);
    observableDemo2
      .pipe(map(({ name }) => name))
      .subscribe(item => this.modifiedItemsDemo2.push(item));
  }
}
