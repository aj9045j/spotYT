const express = require("express");
const mongoose = require('mongoose');
const User = require('./models/users.js')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const { searchPlaylist, redirectAuth } = require('./controllers/searchPlaylist')

const { fetchPlaylist } = require('./controllers/fetchPlaylist.js')
const { handlelogin } = require('./controllers/login.js');
const { register } = require('./controllers/newuser.js');
const { userDetail } = require('./controllers/userDetail')
const {fetchSong} = require('./controllers/fetchSong.js');
const { fetchurl } = require('./controllers/fetchurl.js');
const { fetchImage } = require('./controllers/fetchImage.js');
const { searchyt } = require('./controllers/searchyt.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

mongoose.connect('mongodb+srv://aj9045j:joshi9045@cluster0.xz5qt4p.mongodb.net/user_details?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



app.post('/login', handlelogin);
app.post('/register', register);
app.post('/search', searchPlaylist);
app.post('/searchyt', searchyt);

app.get('/api/getuser', userDetail);
app.get('/auth', redirectAuth);
app.get('/fetchsong/:playlistId', fetchSong);
app.get('/fetchurl/:query', fetchurl);
app.get('/fetchPlaylist/:email', fetchPlaylist);
app.get('/fetchImage/:query', fetchImage);


const PORT = 5000;
app.listen(`${PORT}`, () => {
    console.log(`server is listening on port no ${PORT}`);
})

