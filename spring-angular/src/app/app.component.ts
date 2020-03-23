import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "./interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Spring Mvc Angular Tutorial";

  // Object to save the response returned from the service.
  myresponse: any;
  employeeDetails: Employee;

  // Url to fetch the employee records from the spring application.
  readonly APP_URL = "http://localhost:8082/Springmvcangular";

  constructor(private _http: HttpClient) {
    console.log("Hello..........");
  }

  // Method to fetch all employees from the database table.
  getAllEmployees() {
    this._http.get(this.APP_URL + "/getemployees").subscribe(
      data => {
        this.myresponse = data;
      },
      error => {
        console.log("Error occured", error);
      }
    );
  }

  getEmployeeDetails(id: number) {
    this._http.get<Employee>(this.APP_URL + "/getemployee/?id=" + id).subscribe(
      data => {
        this.employeeDetails = data;
      },
      error => {
        console.log("Error occured", error);
      }
    );
  }

  editEmployee(details: Employee) {
    console.log(details);
    this._http.put<Employee>(this.APP_URL + "/editemployee", details).subscribe(
      data => {
        this.employeeDetails = data;
      },
      error => {
        console.log("Error occured", error);
      }
    );
  }
}
