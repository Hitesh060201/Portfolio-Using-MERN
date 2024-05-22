const express =require('express')
const cors = require('cors')
const dotenv =require('dotenv');
const path = require('path')


//dotenv configuration
dotenv.config();


//rest object
const app = express();

//midlewares
app.use(cors())
app.use(express.json());

//static files access
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


//routes
app.use("/api/v1/portfolio",require("./routes/PortfolioRoute"))


//port
const PORT =process.env.PORT || 8080



//listen
app.listen(PORT, () => {
    console.log(`Server Running On PORT ${PORT}`);
});
