import { EventEmitter } from "@angular/core";

export class AccountsService {
  accounts: { name: string; status: string }[] = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  statusUpdated = new EventEmitter<string>();

  addAccount(newName: string, newStatus: string): void {
    this.accounts.push({ name: newName, status: newStatus });
  }

  updateStatus(id: number, newStatus: string): void {
    this.accounts[id].status = newStatus;
  }
}
