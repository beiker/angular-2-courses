export class CounterService {
    totalActiveUsers: number = 0;
    totalInactiveUsers: number = 0;

    sumActiveUsers() {
        this.totalActiveUsers += 1;
    }

    sumInactiveUsers() {
        this.totalInactiveUsers += 1;
    }
}