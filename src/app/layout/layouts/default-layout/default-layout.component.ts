import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

    /**
     * Constructor
     */
    constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router
  )
  {
  }
}
