const dbConnect=require('./mongodb');


const insert=async ()=>{
    const db=await dbConnect();
    const result=db.insert(
        [{name:'note 5',brand:'vivo',price:320,category:'mobile'},
        {name:'note 7',brand:'samsung',price:520,category:'mobile'},
        {name:'note 8',brand:'lenovo',price:620,category:'mobile'}
    ]
    )
    

}
insert();
