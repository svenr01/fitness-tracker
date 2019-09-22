import { Subject, from } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService {

    loadingStateChanged = new Subject<boolean>();

    constructor(private snackbar: MatSnackBar) { }

    showSnachbar(message, action, duration) {
        this.snackbar.open(message, action, {
            duration: duration
        });

    }

}