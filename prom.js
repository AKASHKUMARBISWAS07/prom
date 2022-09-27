1. 

ans:


let Akash = function() {  
    console.log("Akash will print after 5 secnds");
}
 
setTimeout(Akash,5000);


or

setTimeout(function(){
    console.log("Akash")
},5000)



2. "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Explain callback hell.
Numbers
1
2
3
4
5
6
7"


ans:

setTimeout(function(){
    console.log("1")
    setTimeout(function(){
    console.log("2")
    setTimeout(function(){
    console.log("3")
    setTimeout(function(){
    console.log("4")
    setTimeout(function(){
    console.log("5")
    setTimeout(function(){
    console.log("6")
    setTimeout(function(){
    console.log("7")
},7000)
},6000)
},5000)
},4000)
},3000)
},2000)
},1000)


3. "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Numbers
1
2
3
4
5
6
7"

ans:

let promise = new Promise((resolve,reject) => {
    resolve();
})

    promise
    .then(() => {
    setTimeout(() => {
    console.log("1");
    }, 1000)})
    .then(() => {
    setTimeout(() => {
    console.log("2");
    }, 2000)})
    .then(() => {
    setTimeout(() => {
    console.log("3");   
    },3000)})
    .then(() => {
    setTimeout(() => {
    console.log("4");   
    },4000)})
    .then(() => {
    setTimeout(() => {
    console.log("5");  
    },5000)})
    .then(() => {
    setTimeout(() => {
    console.log("6"); 
    },6000)})
    .then(() => {
    setTimeout(() => {
    console.log("7");   
    },7000)})



4.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 


ans:

let promise = new Promise((resolve,reject) => {
reject();//if use resolve(); then it'll print "Promise resolved"
    })
promise
.then((data) => {
console.log("Promise resolved")})
.catch((error) => {
console.log("promise rejected")})


5. Create examples to explain callback function


function first(){
    console.log("1st function: Akash");
}

function second(){
    console.log("2nd function: Kumar");
}

function third(){
    console.log("3rd function: Biswas")
}

first();
second();
third();


6.Create examples to explain callback hell function

ans:

function callbackHell(){
    setTimeout(()=>{
    console.log("1")
    setTimeout(()=>{
    console.log("2")
    setTimeout(()=>{
    console.log("3")
    setTimeout(()=>{
    console.log("4")
    setTimeout(()=>{
    console.log("5")
},5000)
},4000)
},3000)
},2000)
},1000)}
callbackHell()


7. Create examples to explain promises function

ans:

let promise = new Promise((resolve,reject) => {
    reject();//if use resolve(); then it'll print "Promise resolved"
        })
    promise
    .then((data) => {
    console.log("Promise resolved")})
    .catch((error) => {
    console.log("promise rejected")})

8. Create examples to explain async await function

ans:

let prom = new Promise(function(resolve,reject){
    setTimeout(function ()
    {
    resolve("resolved")}, 2000); 
    });
async function asyncFunc() 
    {
    let result = await prom; 
    console.log(result);
    console.log("Thank you Akash");
    }
asyncFunc();

9. Create examples to explain promise.all function

ans: 


let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
