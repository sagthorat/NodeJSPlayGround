// console.log('starting');

// setTimeout(()=>{

//     console.log("function called 0 secs");

// },6000)

// setTimeout(()=>{

//     console.log("function called");

// },5000)



// console.log('stopping');

setTimeout(()=>{


    
},2000)

const names = ['abc','xyz','tyu'];

const shortNames = names.filter((name)=>{

    console.log(name);
    return name.length >= 3

})

names.forEach((name)=>{

    console.log("FOR EACH: " + name);
})

console.log(shortNames);