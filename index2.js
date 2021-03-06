const { 
    from,
    interval, 
    throttleTime,
    map, 
    subscribe, 
    Observable, 
    Subject,
    fromEvent,
    debounceTime,
    distinctUntilChanged,
    filter,
    reduce,
    pluck,
    mergeMap
} = rxjs;

const inputUsername = document.getElementById('inputUsername');
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const observableData = interval(1000)
const observableSubject = new Subject()
const valueCollect = from([1,2,3,4,5]);
const observable = from([10, 20, 30]);

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

/* use Debounce Time and distinctUntil Change */
/* const eventInput = fromEvent(inputUsername, 'input')
function eventInputTrigger(){
    eventInput.pipe(
        map((value)=> value.target.value),
        debounceTime(2000),
        distinctUntilChanged()
    )
    .subscribe((value)=>{
        console.log('change input')
        console.log(value)
    })
} */

/* use reduce Time */
function reduceUsing(){
   valueCollect.pipe(
        reduce((total, current) => {return total+current},0)
    ). subscribe((value)=>{
        console.log('value ssss')
        console.log(value)
    })
}

//* use  pluck*/
const eventInput = fromEvent(inputUsername, 'input')
function eventInputTrigger(){
    eventInput.pipe(
        pluck('target','value'),
        debounceTime(2000),
        distinctUntilChanged()
    )
    .subscribe((value)=>{
        console.log('change input')
        console.log(value)
    })
}

/* use mergeMap */
const eventInputOne = fromEvent(inputOne, 'input');
const eventInputTwo = fromEvent(inputTwo, 'input');

function eventMerge(){
    eventInputOne.pipe(
        mergeMap( eventOne => {
            return eventInputTwo.map((eventTwo)=>{
               return eventOne.target.value +' ' +eventTwo.target.value
            })
        })
    )
    .subscribe((data)=>{
        console.log('data mergeMap')
        console.log(data)
    })
}

reduceUsing();
eventInputTrigger();
eventMerge();