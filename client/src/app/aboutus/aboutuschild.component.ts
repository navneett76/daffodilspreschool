import { Component, Input} from '@angular/core';

@Component({
  selector: 'child',
  template: `<p>{{ reviews }}</p>`
})
export class ChildComponent {
	// onInitialized = new EventEmitter<Child>();

 //  	message = 'Hola Mundo!';
 	@Input() reviews:number;

	constructor() { }

	ngOnInit() {
	// this.onInitialized.emit(this);
	}

}