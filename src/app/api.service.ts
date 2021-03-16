import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ApiService {
  private toDoUrl = "https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient: HttpClient) {}

  public getNonCompletedData(): Observable<any> {
    return this.httpClient
      .get<any>(this.toDoUrl)
      .pipe(filter(data => !data.completed));
  }
}
