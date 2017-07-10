import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { DetailComponent } from './detail.component';

import { HttpModule } from '@angular/http';
import { ContactService } from './contact.service';

@NgModule({
    providers: [ContactService],

    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            [
                { path: 'contact', component: ContactComponent },
                { path: 'contact/:id', component: DetailComponent }
            ])
    ],
    declarations: [
        ContactComponent,
        DetailComponent
    ],
})
export class ContactNgModule { }