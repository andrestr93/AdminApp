import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    templateUrl: './no-page-found.component.html',
    styleUrl: './no-page-found.component.css'
})
export class NoPageFoundComponent {

    public year = new Date().getFullYear()


}
