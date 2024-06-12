import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-offerings',
    templateUrl: './offerings.component.html',
    styleUrls: ['./offerings.component.scss'],
    standalone: true,
    imports: [FlexModule, MatTabGroup, MatTab, MatCard, MatCardHeader, MatCardContent, MatIcon]
})
export class OfferingsComponent{


}
