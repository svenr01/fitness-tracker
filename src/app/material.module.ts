import { NgModule } from '@angular/core';

import 
{
     MatButtonModule,
     MatIconModule,
     MatFormFieldModule,
     MatInputModule,    
     MatNativeDateModule,
     MatDatepickerModule,
     MatCheckboxModule,
     MatSidenavModule,
     MatToolbarModule,
     MatMenuModule,
     MatCardModule,
     MatListModule,    
     MatTabsModule,
     MatSelectModule,
     MatProgressSpinnerModule,     
     MatDialogModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
     MatSnackBarModule,
     
    
} from '@angular/material';


import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports: 
    [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        MatListModule,
        MatTabsModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule
    ],
    exports: 
    [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        MatListModule,
        MatTabsModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule
    ]
})

export class MaterialModule{

}