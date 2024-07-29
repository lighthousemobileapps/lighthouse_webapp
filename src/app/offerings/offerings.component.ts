import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-offerings',
    templateUrl: './offerings.component.html',
    styleUrls: ['./offerings.component.scss'],
    standalone: true,
    imports: [FlexModule, MatTabsModule, MatCardModule, MatIconModule],
})
export class OfferingsComponent{


}
