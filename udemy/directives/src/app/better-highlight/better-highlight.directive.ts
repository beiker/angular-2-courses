import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2
} from '@angular/core';
@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    // @Input() highligthColor: string = 'blue';
    @Input('appBetterHighlight') highligthColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
        // this.backgroundColor = 'blue';
        this.backgroundColor = this.highligthColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
        // this.backgroundColor = 'transparent';
        this.backgroundColor = this.defaultColor;
    }
}
