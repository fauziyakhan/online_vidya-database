const Client= require ('./db1');
Client.connect();
 Client.query("INSERT INTO student VALUES(6,'joey', 6234567890, 'joe@gmail.com', 'B.E.IT')",(err,result)=>
 {
     if(!err){
         console.log("data inserted successfully");
     }
 Client.end();
})