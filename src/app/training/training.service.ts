import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';
import { DocumentChangeAction, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainingService {

    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    finishedExercisesChanged = new Subject<Exercise[]>();

    private availableExercises: Exercise[] = [];

    private runningExercise: Exercise;    

    constructor(private db: AngularFirestore) { }

    fetchAvailableExercises() {
        this.db
            .collection('availableExercises')
            .snapshotChanges()
            //.map(docArray => {
            .map((docArray: DocumentChangeAction<Exercise>[]) => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        name: doc.payload.doc.data().name,
                        duration: doc.payload.doc.data().duration,
                        calories: doc.payload.doc.data().calories
                    };
                });
            })
            .subscribe((exercises: Exercise[]) => {
                this.availableExercises = exercises;
                this.exercisesChanged.next([...this.availableExercises]);
            });
    }

    startExercise(selectedID: string) {
        this.runningExercise = this.availableExercises.find(
            ex => ex.id === selectedID
        );
        this.exerciseChanged.next({ ...this.runningExercise });
    }

    completeExercise() {

        this.addDtaToDatabase({
            ...this.runningExercise,
            date: new Date(),
            state: 'completed'
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancleExercise(progres: number) {

        this.addDtaToDatabase({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progres / 100),
            calories: this.runningExercise.calories * (progres / 100),
            date: new Date(),
            state: 'cancelled'
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);

    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }

    fetchCompletedOrCancelledExercises() {
        this.db.collection('finishedExercises')
            .valueChanges()
            .subscribe((exercises: Exercise[]) => {                
                this.finishedExercisesChanged.next(exercises);
            });
    }

    private addDtaToDatabase(exercise: Exercise) {
        this.db.collection('finishedExercises').add(exercise);
    }
}