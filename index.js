const express = require('express')
const cors = require('cors')

const app = express()
const dataService = require('./services/dataservice')

app.use(express.json())


app.listen(3000,()=>{
    console.log('server started at 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))

//getAllProcuts api

app.get('/all-products',(req,res)=>{
    console.log('inside getallproducts function');
    dataService.getAllProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
})

//add to whishlist

app.post('/add-to-wishlist',(req,res)=>{
    console.log('inside add-to-wishlist function');
    console.log(req.body);
    dataService.addToWishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get wishlist function

app.get('/get-wishlist',(req,res)=>{
    console.log('inside get-wishlist function');
   dataService.getWishlist()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete('/delete-item-wishlist/:id',(req,res)=>{
    console.log('inside delete-item-wishlist function');
    dataService.deletefrmwishlist(req.params.id)
     .then((result)=>{
         res.status(result.statusCode).json(result)
     }) 
})








