import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib1',
  template: `
    <p>
      lib works!
    </p>
    <!-- <lib2-lib></lib2-lib> -->
  `,
  styles: [
  ]
})
export class Lib1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
