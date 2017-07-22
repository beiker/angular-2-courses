import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filter: string): any {
        if (value.length === 0 || !filter) {
            return value;
        }
        const itemsArray = value.filter((val) => {
            return val.status === filter;
        });
        return itemsArray;
    }
}