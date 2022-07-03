const { interval, throttleTime, map, subscribe, Observable } = rxjs;

const observableData = interval(1000)
const observableSubject = new Subject()

const valObservable = {
    next: (value) => {
        console.log(value)
    },
    error: (value) =>{
        console.log(value)
    },
    complete: () =>{
        console.log('complete')
    }
}


/* use map dan throlleteTime */
/* observableData
.pipe(
    map((x)=> 'Number: '+x),
    throttleTime(1900)
)
.subscribe(valObservable) */

/* use Subject */
observableSubject.subscribe({
    next: (value) => {
        console.log(value)
    },
    error: (value) =>{
        console.log(value)
    },
    complete: () =>{
        console.log('complete')
    }
})

observableSubject.subscribe({
    next: function(value){
        console.log(value)
    }
})

observableSubject.next('A new data Piece')
observableSubject.complete()