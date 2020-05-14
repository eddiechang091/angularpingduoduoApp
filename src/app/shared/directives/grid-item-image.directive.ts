import { Directive, OnInit, Input, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit{
  @Input() appGridItemImage = '2rem';
  constructor(private elr: ElementRef, private render : Renderer2) { }
  ngOnInit(): void {
   this.setStyle('grid-area','image');
   this.setStyle('width',this.appGridItemImage);
   this.setStyle('height',this.appGridItemImage);
   this.setStyle('object-fit','cover');
  }
  private setStyle(styleName: string, styleValue: string|number){
    this.render.setStyle(this.elr.nativeElement,styleName,styleValue );
  }
  @HostListener('click',['$even.target'])
  handleClick(ev){
    console.log(ev)
  }

}
