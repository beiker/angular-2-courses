import {Component} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';
@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
    // providers: [LoggingService]
})
export class NewAccountComponent {
    // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
    constructor(private loggingService: LoggingService,
                private accountsService: AccountsService) {
        this.accountsService.statusUpdated.subscribe(
            (status: string) => alert('new status = ' + status)
        );
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        // this.accountAdded.emit({
        //     name: accountName,
        //     status: accountStatus
        // });
        // console.log('A server status changed, new status: ' + accountStatus);
        this.accountsService.addAccount(accountName, accountStatus);
        // this.loggingService.logStatusChange(accountStatus);
        this.accountsService.statusUpdated.emit(accountStatus);
    }
}
