//object property shorthand

const name = "firstName"
const userAge = 21

const user = {

    name,
    age:  userAge,
    location: 'Melbourne'
}

//console.log(user)

//object destructure

const product = {

    lable: 'Green book',
    price: 30,
    stock: 120,
    salesPrice: undefined
}

//const lable = product.lable
//const stock = product.stock

//OR

const {lable, stock:stockLeft, rating = 5} = product

console.log (lable,stockLeft, rating)

const transaction = (type, {lable,price})=>{

    console.log(lable, price)

}
transaction('order',product)