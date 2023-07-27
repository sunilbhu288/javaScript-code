// fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
//   return response.json();
// }).then(function(data){
//   console.log(data)
//   for(var x in data){
//     document.write(`${data[x].name} <br>`)
//     document.write(`${data[x].email} <br>`) 
//   }
//   for(let x in data){
//     document.write(`${data[x].address.city}<br>`)
//   }
// })


//----------------------------------------------------------
//await allways used in under the async function...
// async function show(){
//   console.log("message1");
//   console.log("message2");
//   await fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
//     return response.json();
//   }).then(function(result){
//     for(let i in result){
//       console.log(`${result[i].name} <br>`)
//     }
//   })
// }
// show();
// console.log("message3");