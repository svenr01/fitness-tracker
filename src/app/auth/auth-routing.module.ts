import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';



export class AuthingModule { }

const routes: Routes =
    [
        { path: 'singup', component: SingupComponent },
        { path: 'login', component: LoginComponent },
    ];

@NgModule({
    imports:
        [
            RouterModule.forChild(routes)
        ],

    exports:
        [
            RouterModule
        ]
})

export class AuthRoutingModule { }