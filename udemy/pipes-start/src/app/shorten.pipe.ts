import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, length: number): any {
        if (value.length > length) {
            return value.substring(0, length) + '...';
        }
        return value;
    }
}
