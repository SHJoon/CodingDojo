const express = require('express');
const cors = require('cors');
const app = express();

require("./config/mongoose.config")("players");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./routes/player.route")(app);

app.listen(8000, () => {
    console.log(`Listening on port 8000 for REQuests to RESpond to.`)
})