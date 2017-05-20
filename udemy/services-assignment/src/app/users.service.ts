import {CounterService} from './counter.service';
import {Injectable} from '@angular/core';
@Injectable()
export class UsersService {
    activeUsers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {
    }

    setActiveUser(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.sumActiveUsers();
    }

    setInactiveUser(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.sumInactiveUsers();
    }

    getTotalActive(): number {
        return this.counterService.totalActiveUsers;
    }

    getTotalInactive(): number {
        return this.counterService.totalInactiveUsers;
    }
}