import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path : 'contact', component : ContactComponent}
        ])
    ],
    declarations:[ContactComponent]
})
export class ContactNgModule{}