// let complete = true;
// let prom = new Promise(function(resolve,reject){
//    if(complete){
//     resolve("This is successfull.");
//    }
//    else{
//     reject("This is failed..")
//    }
// })
// console.log(prom);

//------------------------------------------------------

// function prom(complete){
//   return new Promise(function(resolve,reject){
//     if(complete){
//       resolve("This is successfull.");
//     }
//     else{
//       reject("This is failed..");
//     }
//   });
// }
// // console.log(prom(false));
// let ans = prom(true);
// console.log(ans);

//----------------------------------------------------------------
// function prom(complete){
//   return new Promise(function(resolve,reject){
//     if(complete){
//       resolve("successfull...")
//     }
//     else{
//       reject("failed.....")
//     }
//   })
// }
// let onFulfilment = function(result){
//   console.log(result)
// }
// let onRejection = function(error){
//   console.log(error);
// }
// prom(true).then(onFulfilment);
// prom(true).catch(onRejection);

//----------------------------------------------------------------------------

// function prom(a,b){
//   return new Promise(function(resolve,reject){
//     console.log("fatching data,please wait.......");
//     let c = a/b;
//     setTimeout(()=>{
//       if(a,b){
//       resolve(`Your answer is : ${c}`);
//       }
//       else{
//         reject("Failed to calculate..")
//       }
//     },3000)
//   })
// }

// prom(5,2).then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
// })

//-------------------------------------------------
// async function its used for promise statement...
// async function test(){
//   return "Hello"
// }
// test().then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
// })

//--------------------------------------------
//await its used allways under the async function...

// async function test(){
//   console.log("1");
//   await console.log("2");
//   console.log("3");
// }
// console.log("4");
// test();
// console.log("5")

//-----------------------------------------------------------------------------------
// write function in different forms....

// function hello(){
//   console.log("Hello World!");
// }
// hello();

// let ans = function(){
//   console.log("Hello World!");
// }
// ans();

// Arrow function....
// const ans = ()=>{
//   console.log("Hello World!");
// }
// ans();

// const ans = ()=>"Hello World!";
// console.log(ans());

//back tick used in js...

// const ans = function(firstName, lastName){
//   return `My first name is : ${firstName} and last name is : ${lastName},`
// }
// const res = ans("Ankit","Singh");
// console.log(res);

//----------------------------------------------------
// const ans = (name)=>{
//   return `my name is :${name}`
// }
// const res = ans("Ankit");
// console.log(res);

// const ans = (myname)=>{
//   console.log(`my name is :${myname}`)
// }
// ans("Amritesh")


//----------------------------------------------------------
// let in function used in js....

// function ans(a1,a2,a3,a4,a5){
//   let sum = 0;
//   for(let i in arguments){
//     sum = sum + arguments[i];
//   }
//   console.log("sum of the numbers are :"+sum);
// }
// ans(1,2,3,4,5);

//Rest Operator, its use for take multiple values in ones time
//before use of Rest Opearator we write three dots(...) and it use in function.

// function test(name,...args){
//   console.group(`My name is : ${name}`)
//   let sum = 0;
//   for(let i in args){
//     sum = sum + args[i];
//   }
//   console.log(sum);
// }
// test("Ankit Kumar",25,30,10,5)

//----------------------------------------------
//spread operator its use during the calling or print time..
//  function test( name,...args){
//   console.log(`My name is : ${name}`)
//   let sum = 0;
//   for(let i in args){
//     sum = sum + args[i];
//   }
//   console.log(sum);
//  }
//  const arr = [10,20,30,40,50];
//  test("Ankit",...arr);

//---------------------------------------------------------------------
//Object Operation in javaScript ......

// const student = {
//   name : "Ankit Singh",
//   roll : 30
// }
// console.log(student.name);
// console.log(student.roll)

// const student = {
//   name : "Sunil Patel",
//   roll_no : 20

//   }
//    show = function(){
//     console.log(this.name)
//   }
// console.log(show())

//----------------------------------------------------------------
//Destructering Array in javaScript............
// let user= ["Ankit Singh","Delhi",23];
// let[name,city,age] = user;
// console.log(name);
// console.log(city);
// console.log(age);

// we can also use nested loop...
// let user=["Ankit Singh","Delhi",24,["Male",3000]]
// let[name,city,age,[Gender,salary]]=user;
// console.log(name);
// console.log(city);
// console.log(age);
// console.log(Gender);
// console.log(salary);

//----------------------------------------------------------------------
//Destructering Object in javaScript...........

// let user={
//   name:"Ankit",
//   age:28,
//   gender:"male"
// }
//let{name,age,gender}= user;
// console.log(name);
// console.log(age);
// console.log(gender);
//we can also write this another form like..
// let{name:n,age:a,gender:g}=user
// console.log(n);
// console.log(a);
// console.log(g);

//----------------------------------------------------------------------
//Object Oriented Programing in javaScript..
// class user{
//   show(){
//     console.log("This is method statement")
//   }
//   seat(){
//     console.log("its used for seat methode")
//   }
// }
//  let t = new user();
//  t.show();
//  t.seat();

//------------------------------------------------------
//types of methode....
//1.constructor methode
//2.prortotype methode
//3.static methode

//1.constructor methode
//its that type of methode when create the object then its called automatically without called object refrence

// class Test{
//   constructor(){
//     console.log("This is constructor methode");
//   }
// }
// let a = new Test();

// class Student{
//   constructor(){
//     let name;
//     console.log("constructor function");
//   }
//   hello(){
//     console.log("Hello my name is :"+this.name)
//   }
// }
// let a = new Student();
// a.name="Ankit Singh";
// a.hello();

//-----------------------------------------------------------------
//we can also write this is another form like..
// class Test {
//   constructor(name) {
//     this.studentName = name;
//   }
//   hello() {
//     console.log("Hello my name is :" + this.studentName);
//   }
// }
// let a = new Test("Ankit Kumar");
// a.hello();

//------------------------------------------------------------------------Practice.......................
// let complete = false;
// let prom = new Promise(function(resolve,reject){
//   if(complete){
//     resolve("Successfull..........");
//   }
//   else{
//     reject("Error...");
//   }
  
// })
// console.log(prom);
//--------------------------------------------------------
// function prom(complete){
//   return new Promise(function(resolve,reject){
//     if(complete){
//       resolve("SuccessFull...");
//     }
//     else{
//       reject("Error!");
//     }
//   })
// }
// prom(false).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })
//------------------------------------------------------
function checkRatio(a,b){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      let c = a/b;
      if(a,b){
        resolve(`The result is : ${c}`)
      }
      else{
        reject("Error!....")
      }
    },2000)
  })
}
  checkRatio(5,0).then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.log(error)
  })
