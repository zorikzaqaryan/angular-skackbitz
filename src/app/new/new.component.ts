import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"]
})
export class NewComponent implements OnInit {
  todos:any =[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log("ca>>>>>>>>>>>>");
    this.apiService.getNonCompletedData().subscribe(data => {
      console.log("data>>>>>>>>>>>>>", data);
      this.todos = data;
    });
  }
}
