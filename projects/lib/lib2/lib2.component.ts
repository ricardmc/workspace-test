import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib2-lib',
  template: `
    <p>
      lib2 works!
    </p>
  `,
  styles: [
  ]
})
export class Lib2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('lib2')
  }

}
