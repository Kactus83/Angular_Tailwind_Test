import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RuzeScrollbarModule } from '../../directives/scrollbar/public-api';
import { RuzeHorizontalNavigationBasicItemComponent } from './horizontal/components/basic/basic.component';
import { RuzeHorizontalNavigationBranchItemComponent } from './horizontal/components/branch/branch.component';
import { RuzeHorizontalNavigationDividerItemComponent } from './horizontal/components/divider/divider.component';
import { RuzeHorizontalNavigationSpacerItemComponent } from './horizontal/components/spacer/spacer.component';
import { RuzeHorizontalNavigationComponent } from './horizontal/horizontal.component';
import { RuzeVerticalNavigationAsideItemComponent } from './vertical/components/aside/aside.component';
import { RuzeVerticalNavigationBasicItemComponent } from './vertical/components/basic/basic.component';
import { RuzeVerticalNavigationCollapsableItemComponent } from './vertical/components/collapsable/collapsable.component';
import { RuzeVerticalNavigationDividerItemComponent } from './vertical/components/divider/divider.component';
import { RuzeVerticalNavigationGroupItemComponent } from './vertical/components/group/group.component';
import { RuzeVerticalNavigationSpacerItemComponent } from './vertical/components/spacer/spacer.component';
import { RuzeVerticalNavigationComponent } from './vertical/vertical.component';

@NgModule({
    declarations: [
        RuzeHorizontalNavigationBasicItemComponent,
        RuzeHorizontalNavigationBranchItemComponent,
        RuzeHorizontalNavigationDividerItemComponent,
        RuzeHorizontalNavigationSpacerItemComponent,
        RuzeHorizontalNavigationComponent,
        RuzeVerticalNavigationAsideItemComponent,
        RuzeVerticalNavigationBasicItemComponent,
        RuzeVerticalNavigationCollapsableItemComponent,
        RuzeVerticalNavigationDividerItemComponent,
        RuzeVerticalNavigationGroupItemComponent,
        RuzeVerticalNavigationSpacerItemComponent,
        RuzeVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        RuzeScrollbarModule
    ],
    exports     : [
        RuzeHorizontalNavigationComponent,
        RuzeVerticalNavigationComponent
    ]
})
export class RuzeNavigationModule
{
}
