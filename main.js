//תרגילי Promise

//תרגיל 1+2
function promiseFunc() {
    return new Promise ((resolve, reject)=>{
        let myDate= new Date () 
        if (myDate.getHours()<11) {
            resolve ("Good morning")
        }
        else {
            reject ("Good afternoon")
        }
    })
}
function funcOne() {
promiseFunc()
.then((date)=>{my_h1.innerText= date})
.catch ((err)=>{my_h1.innerText= err})
}


//תרגיל 3+4
function numFunc(num1, num2) {
    return new Promise ((resolve,reject)=>{
        if (num2 % num1 ==0) {
            resolve ("Yes")
        }
        else {
            reject ("No")
        }
    })
}
function funcTwo() {
numFunc(2,3)
.then((data)=>{h2.innerText= data})
.catch ((err)=>{h2.innerText=err})
}


//תרגיל 5+6
function arrayFunc(num, array) {
    return new Promise ((resolve,reject)=> {
        if (array.includes(num)) {
            resolve ("Yes")
        }
        else {
            reject ("No")
        }
    })
}
function funcThree(){
arrayFunc(90, [2,5,8,25,4,95])
.then ((data)=>{h3.innerText=data})
.catch ((err)=>{h3.innerText=err}) 
}


//תרגילי Asynce-Await
//תרגיל 8
async function asyncFunc() {
    try {
    await arrayFunc(8, [2,5,8,25,4,95])
    .then ((data)=>{console.log(data);})  
    }
    catch (err) {
        console.log(err);
    } 
}
asyncFunc()

//תרגילי Fetch
async function fetchFunc() {
    my_div.innerHTML= `<img style= "width: 30vw" src= giphy.gif> </img>`
    btn.disabled= true
    try {
      await fetch("https://moviesmern.herokuapp.com/movies/all")
    .then ((data)=>{console.log(data);})
    }
    catch (err) {
        console.log(err);
    }
    finally {
        my_div.innerHTML= ""
        btn.disabled= false
    }
    
}

async function myFunc() {
    div2.innerHTML= `<img style= "width: 30vw" src= Loading_2.gif> </img>`
    btn2.disabled= true
    try {
        await fetch (`https://cat-fact.herokuapp.com/facts`) 
        .then (data=>{console.log(data);})
    }
    catch (error) {
        console.log(error);
    }
    finally {
        div2.innerHTML= ""
        btn2.disabled= false
    }
}

async function someFunc() {
    div3.innerHTML= `<img style= "width:30vw" src= Loading_3.gif> </img>`
    btn3.disabled= true
    try {
        await fetch ("https://placekeanu.com/200/150")
        .then(data=>{console.log(data);})
    }
    catch (error) {
        console.log(error);
    }
    finally {
        div3.innerHTML=""
        btn3.disabled= false
    }
}

async function finelFunc() {
    div4.innerHTML= `<img style= "width:30vw" src= Loading_4.gif> </img>`
    btn4.disabled= true
    try {
        await fetch ("https://api.jikan.moe/v4/anime")
        .then((myData)=>{return myData.json()})
    
    }
    catch (error) {
        console.log(error);
    }
    finally {
        div4.innerHTML= ""
        btn4.disabled= false
    }

}
