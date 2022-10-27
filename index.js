

const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');

app.use(cors());

const topics= require('./data/course.json');
const topicsDetails = require('./data/coursesDetails.json');


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/topics', (req, res) => {
    res.send(topics);
  })

app.get('/course/:id', (req, res) => {

    const  id = req.params.id;
    const all_course = topicsDetails.filter(n => n.category_id === id);
    res.send(all_course );
  })
  app.get('/topicsDetails/:id', (req, res) => {
    const id = req.params.id;
    const selectedTopic = topicsDetails.find(n => n._id === id);
    res.send(selectedTopic);
});

  




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })