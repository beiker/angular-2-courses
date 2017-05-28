import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/Rx';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    myNumbersSubscription: Subscription;
    myObservableSubscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        const myNumbers = Observable.interval(1000);
        this.myNumbersSubscription = myNumbers.subscribe(
            (number: number) => {
                console.log(number);
            }
        );

        const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('First package');
            }, 2000);
            setTimeout(() => {
                observer.next('Second package');
            }, 4000);
            setTimeout(() => {
                observer.error('Error occured');
            }, 8000);
            setTimeout(() => {
                observer.complete();
            }, 6000);
        })
        this.myObservableSubscription = myObservable.subscribe(
            (data: string) => {
                console.log(data);
            },
            (data: string) => {
                console.log(data);
            },
            () => {
                console.log('completed');
            },
        );
    }

    ngOnDestroy() {
        this.myNumbersSubscription.unsubscribe();
        this.myObservableSubscription.unsubscribe();
    }
}

