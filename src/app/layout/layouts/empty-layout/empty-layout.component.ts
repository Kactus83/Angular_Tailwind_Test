import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empty-layout',
  templateUrl: './empty-layout.component.html',
  styleUrls: ['./empty-layout.component.scss']
})
export class EmptyLayoutComponent {

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
