import mongoose from 'mongoose';

const Connection = async(username, password) =>{
     const URL = `mongodb://${username}:${password}@ac-texc1by-shard-00-00.uhihe4h.mongodb.net:27017,ac-texc1by-shard-00-01.uhihe4h.mongodb.net:27017,ac-texc1by-shard-00-02.uhihe4h.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-54h2l4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
   
   

    try{
        //mongoose takes 2 arguments 1st is URL and 2nd is object
       await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser: true });
       console.log('Database connected successfully');
    }catch (error){
        console.log('Error while connecting with the database', error);
    }

}
export default Connection;