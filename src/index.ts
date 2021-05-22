import express from 'express';
import cors from 'cors';
import routes from './router';
const app = express();

//function getUsername(){
  //  return 'Gabriel@';
//}

//const username = getUsername();

app.use(cors());
app.use(routes);
app.get('/', (req, res) =>{
    return res.send('Hello World 2');
});

app.listen(3333);