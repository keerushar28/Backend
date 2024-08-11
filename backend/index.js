import express from 'express';
import 'dotenv/config'
const app = express()
const port = process.env.PORT || 3000


app.get ('/', (req,res)=>{
    res.send('Hello World');
})

//list of fruits
app.get('/api/fruits',(req,res) => {
    const fruits = [
                {name: 'apple', color: 'red'},
                {name: 'banana', color: 'yellow'},
                {name: 'orange', color: 'orange'},
                {name: 'mango', color: 'green'}
                        
        ];
    res.send(fruits);
})
app.get('/api/users',(req,res)=>{
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',

        },
        {
            id: 2,
            name: 'Kiran Gautam',
            email: 'kiran.gautam@example.com',

        },
        {
            id: 3,
            name: 'Rohan Kumar', 
            email: 'rohan.kumar@example.com',
        }
    ]
    res.send(users);
})
app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
        })
