export class LoggingService {
  logStatusChange(status: string): void {
    console.log("the server status is changed, the new staus is " + status);
  }
}
