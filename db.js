const {Client}= require ("pg")
const client = new Client ({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"1234",
    database:"online_vidya"
});
client.connect();
client.query('select * from student',(err, result)=>{
    if(!err){
        console.log(result.rows)
    }
    client.end();
});

