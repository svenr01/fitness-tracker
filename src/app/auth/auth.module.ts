import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { TrainingRoutingModule } from '../training/training-routing.module';

@NgModule({
    declarations: 
    [
        SingupComponent,
        LoginComponent,
    ],
    imports: 
    [        
        ReactiveFormsModule,        
        AngularFireAuthModule,
        SharedModule,
        AuthRoutingModule,
        TrainingRoutingModule
    ],
    exports: []
})

export class AuthModule {

}