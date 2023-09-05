const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 80;
const path = require('path')

//db connection using mongoose


//middleware
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());

//headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

//api



//static components
app.use('/upload', express.static(path.join(__dirname, '/../uploads')))
app.use(express.static(path.join(__dirname, '/../frontend/build')))


//error resolution
app.get('*', (req,res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    } catch (error) {
        res.send('An Error has occured.')
    }
    
})

//cors
app.use(cors());

//Server listening to the port
app.listen(PORT, () => {
    console.log(`Listening on Port - ${PORT}`);
})
