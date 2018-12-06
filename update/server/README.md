### install
sudo npm install nodemon -g
npm install graphql express-graphql
npm install mongoose
npm install lodash
npm install cors --save

### start
nodemon app.js

### test query 
http://localhost:4000/graphql?
    * query all objects
    {
        users{  
            name
            github
        }
    }

    {
        sleephours{  
            date
            hour
        }
    }    

    * query singe object
    {
        user(id: "5c07fdc2fb6fc038cbb3ca14"){  
            name
            github
        }
    }


    * mutation
    mutation{
        addUser(name: "coolman", github:"https://github.com/coolman"){
            name 
            github
        }
    }

    mutation{
        addSleephour(date: "2018-10-04", hour: 7){
            date 
            hour
        }
    }


### setting connect to mongodb
mongoose.connect('mongodb://profile:Ml4820806@ds113636.mlab.com:13636/test_db')
mongoose.connect('mongodb://shaun:test123@ds123834.mlab.com:23834/glq-ninja');
