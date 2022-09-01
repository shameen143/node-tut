const dbConnect=require('./mongodb');

const updateData=async ()=>{
    const data=  await dbConnect();
    let result=await data.updateOne(
        {name:'m 10'},{
            $set:{name:'max pro 5'}
        }
    )


}
updateData();