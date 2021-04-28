// setTimeout(()=>{


    
// },2000)

// const names = ['abc','xyz','tyu'];

// const shortNames = names.filter((name)=>{

//     console.log(name);
//     return name.length >= 3

// })

// names.forEach((name)=>{

//     console.log("FOR EACH: " + name);
// })

// console.log(shortNames);

const geocode = (address,callback) =>{
    
        const data = {

            latitude : 0,
            longitude : 0
        }
        callback(data);
  
}

geocode('melbourne',(data)=>{

    console.log(data);

})


// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add = (arg1, arg2, callback) =>{

        const total = arg1+ arg2;
        callback(arg1+arg2);
   
}

add(1, 4, (sum) => {


    console.log(sum) // Should print: 5
})

















