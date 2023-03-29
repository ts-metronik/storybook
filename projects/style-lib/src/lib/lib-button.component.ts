import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `<button type="button">{{ text }}</button>`,
  styles: [`button { border: 2px solid blue; }`],
})
export class LibButtonComponent {
  @Input() text: string | undefined = 'Lib Button';
}
