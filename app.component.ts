import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./service/accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AccountsService],
})
export class AppComponent implements OnInit {
  // onAccountAdded(newAccount: { name: string; status: string }) {
  //   // this.accounts.push(newAccount);
  // }
  // onStatusChanged(updateInfo: { id: number; newStatus: string }) {
  //   // this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
  // don't need account added and status change method here as we transfered the work to service class

  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
