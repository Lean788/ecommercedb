const express = require('express');
const app = express();
const { sequelize } = require('./models/index');



//configure
app.set('json spaces', 2);
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use(require('./routes'));

app.get('*', (req, res)=> {
    
    return res.status(404).send('Route not found')
}); 




    
    app.listen(PORT, () => {
        console.log(`The server is listening on port ${PORT}`);

        //connection to BD
        
        sequelize.authenticate().then(() => {
            console.log('DB is connected');
        }).catch(error => {
            console.log('An error has occurred')
        })

    });
