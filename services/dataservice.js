//getallproducts function
const db = require('./db')

const getAllProducts = ()=>{
  return db.Product.find()
  .then((data)=>{
    if(data){
        return{
            statusCode:200,
            result:data
        }
    }
    else{
        return{
            statusCode:404,
            message:'failed to fetch the data from data'
        }
       
    }
  });
} 

//add to whishlist

const addToWishlist = (id,title,price,description,image)=>{
  return db.Wishlist.findOne({
    id
  }).then((result)=>{
    if(result){
      return {
        statusCode : 404,
        message : 'product already in wishlist'
      };

    } 
    else{
      const newProduct = new db.Wishlist({
        id,
        title,
        price,
        description,
        image,
       
      });
      newProduct.save()
      return {
        statusCode:200,
        message:'product successfully added to your wishlist'
      }
    }
  });
};


//getWishlist

const getWishlist = ()=>{
  return db.Wishlist.find()
  .then((data)=>{
    if(data){
        return{
            statusCode:200,
            result : data
        }
    }
    else{
        return{
            statusCode:404,
            message:'your wishlist is empty'
        }
       
    }
  });

}

//deletefrmwishlist

const deletefrmwishlist = (id)=>{
  return db.Wishlist.deleteOne({
    id
  })
  .then(
    (data)=>{
      if(data){
        

 return db.Wishlist.find()
  .then((data)=>{
    if(data){
        return{
            statusCode:200,
            Wishlist : data,
            message:'product is removed from wishlist'
        };
    }
    else{
        return{
            statusCode:404,
            message:'your wishlist is empty'
        }
       
    }
  });


      }
      else{
        return{
          statusCode:404,
          message:'product not available'
        };
      }
    }
  )

}




  module.exports={
    getAllProducts,
    addToWishlist,
    getWishlist,
    deletefrmwishlist

    
  };
