
async function sleep(millis) {
return new Promise(resolve =>
    setTimeout(resolve, millis));}
 let millis = Date.now();
 sleep(100).then(() =>{
    console.log(Date.now() - millis);
 })