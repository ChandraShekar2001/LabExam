// usign the required modules
const express = require('express');
const path = require('path'); 
const sqlite3 = require('sqlite3').verbose();
const app = express();
const bodyParser = require('body-parser');
// using the express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true}))
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

//establishing database connection
var db = new sqlite3.Database(':memory:');
const db_name= path.join(__dirname,"S20200010217.db")
db =new sqlite3.Database(db_name,err=>{
    if(err){
        return console.log(err.message)
    }
    console.log('Database connection successfully established')
})
app.listen(8000, () => {
    console.log("LISTENING TO PORT:8000");
  });


const sql = `CREATE TABLE IF NOT EXISTS s20200010217(ts TIMESTAMP,gender VARCHAR(20),favcuisine varchar(255),curhabits varchar(255),skipbreakfast varchar(255),coffeefreq varchar(255));`;

db.run(sql, err=>{
    if(err){
        return console.log(err.message);
    }
    console.log('Table created successfully');
})


// app.get('/', (req, res) => {
//     // res.render('S20200010217_dataentry');
// })

app.get('/S20200010217_display',(req, res) => {
    const sql = 'SELECT * FROM s20200010217 order by ts desc';  
    db.all(sql,(err,rows)=>{
        if(err){
            res.send({message:"failed",error:{err}})
        }
        // res.render("S20200010217_rendering",{model: rows});
        res.send({message:"success",data:{model: rows}});
        
    })   
})
app.post('/S20200010217_display',(req, res)=>{
    // console.log(req.body);
    const gender = req.body.gender;
    const favcuisine = req.body.favcuisine;
    const curhabits = req.body.curhabits;
    const skipbreakfast = req.body.skipbreakfast;
    const coffeefreq = req.body.coffeefreq;
    const query = "insert into s20200010217 values (CURRENT_TIMESTAMP,?,?,?,?,?);";
    const result=[gender,favcuisine,curhabits,skipbreakfast,coffeefreq]

    db.run(query,result,err=>{
        if(err){
            res.send({message:"failed",error:{err}})
        }
        // res.redirect('/S20200010217_display')
        res.send({message:"success",data:result});
    })
})

