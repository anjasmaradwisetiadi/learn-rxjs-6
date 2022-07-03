const { fromEvent, throttleTime, map, subscribe, Observable } = rxjs;

const clickButton = document.getElementById("clicked");
/* clickButton.addEventListener('click',(event) => {
    console.log(event)
})
 */

/* fromEvent(clickButton, 'click')
    .pipe(
        throttleTime(1000),
        map((x)=> x.clientY)
    )
    .subscribe((cordinate)=>{
        console.log("click now !")
        console.log(cordinate)
        }) */

const valObservable = {
    next(value){
        console.log(value)
    },
    error(erroring){
        console.log(erroring)
    },
    complete(){
        console.log('complete')
    }
}

const observer = new Observable((obs)=>{
    obs.next('a value')

/*     obs.error('error Time') */
/*     setTimeout(()=>{
        obs.complete()
    },2000) */

/*     obs.next('pending 2') */
    clickButton.addEventListener('click',(click)=>{
        console.log('data baru')
    })
}).subscribe(valObservable)