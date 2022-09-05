import { Component, EventEmitter, Output } from "@angular/core";
import { AccountsService } from "../service/accounts.service";
import { LoggingService } from "../service/logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    // console.log('A server status changed, new status: ' + accountStatus);

    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // manually creating the instance of service class is not correct way
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
