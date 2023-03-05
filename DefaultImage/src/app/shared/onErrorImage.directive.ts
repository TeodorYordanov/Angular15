import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnErrorImage]'
})
export class OnErrorImageDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("error") onError(){
    let elementImage = this.elementRef.nativeElement.src = "/assets/image/Default_Image.png";
   }

   @HostListener('load') onLoad(){ 
    let url = this.elementRef.nativeElement.src;
    if(url == ""){
      this.elementRef.nativeElement.src = "/assets/image/Default_Image.png";
    }
   }

}
