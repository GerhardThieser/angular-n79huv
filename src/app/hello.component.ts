import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Hallo {{name | uppercase }}!</h2>`,
  styles: [`h2 { font-family: Lato; color: black; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
