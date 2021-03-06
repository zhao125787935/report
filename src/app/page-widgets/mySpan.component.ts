import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MyTitleComponent } from './myTitle.component';
import { MyButtonComponent } from './myButton.component';
import { MyFormGroupCheckboxComponent } from './myFormGroup-checkbox.component';
import { MyFormGroupRadioButtonComponent } from './myFormGroup-radiobutton.component';
import { MyFormGroupDropdownComponent } from './myFormGroup-dropdown.component';
import { MyFormGroupDatePickerComponent } from './myFormGroup-datepicker.component';
import { MyFormGroupEditboxComponent } from './myFormGroup-textbox.component';
import { MyNavbarComponent } from './myNavbar.component';


/*
* mySpan is container component.
*/
@Component({
selector: 'my-span',
directives: [ ROUTER_DIRECTIVES, MyTitleComponent, MyButtonComponent, MyFormGroupCheckboxComponent, 
              MyFormGroupRadioButtonComponent, MyFormGroupDropdownComponent, 
              MyFormGroupDatePickerComponent, MyFormGroupEditboxComponent, MyNavbarComponent],
template: `
<span [class] = "options.klass">
    <span *ngFor="let d of options.children">
        <!-- title -->
        <my-title *ngIf="d.type === 'myTitle' "
                  [options] = d.options>
        </my-title>

        <!-- button, !important: pageContent reference to top page object, so we can access every control. -->
        <my-button *ngIf="d.type === 'myButton' " 
                    [options] = d.options
                    [pageContext] = "pageContext">
        </my-button>

        <my-form-group-checkbox *ngIf="d.type === 'myFormGroupCheckbox' " 
                                [options] = d.options
                                [pageContext] = "pageContext">
        </my-form-group-checkbox>

        <my-form-group-radiobutton *ngIf="d.type === 'myFormGroupRadiobutton' " 
                                   [options] = d.options
                                   [pageContext] = "pageContext">
        </my-form-group-radiobutton>

        <my-form-group-dropdown *ngIf="d.type === 'myFormGroupDropdown' " 
                                [options] = d.options
                                [pageContext] = "pageContext">
        </my-form-group-dropdown>

        <my-form-group-datepicker *ngIf="d.type === 'myFormGroupDatepicker' " [options] = d.options>
        </my-form-group-datepicker>

        <my-form-group-editbox *ngIf="d.type === 'myFormGroupTextbox' " [options] = d.options>
        </my-form-group-editbox>

        <my-navbar *ngIf="d.type === 'myNavbar' " [options] = d.options [pageContext] = "pageContext">
        </my-navbar>

    </span>
</span>
`
})
export class MySpanComponent {
    @Input() options: any;
    @Input() pageContext: any;
    constructor(){
    }
}