import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: 
    [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        MaterialModule
    ],
    exports: 
    [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        MaterialModule
    ]
})

export class SharedModule{

}