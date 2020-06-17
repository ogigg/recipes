const express = require('express')
const multer = require('multer');
const cors = require('cors');

const app = express()
const port = 4000
const db = require('./sql.js');

app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage }).single('file')

app.get('/api/recipes', (req, res) => {
    res.send('Hello World!');
})

app.get('/api/recipes/random', (req, res) => {
    const recipeObj = {
        name: "Caesar salad",
        preparationTime: "45min",
        ingredients: [{quantity: '1', name: 'bread'},
        {quantity: '50g', name: 'sugar'},
        {quantity: '1kg', name: 'flour'},
        {quantity: '100g', name: 'butter'}],
    
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.",
    }
    res.send(recipeObj);
})

app.get('/api/init',(req, res) => {
    // console.log(req);
    db.addToDatabase(req);
    res.send('Hello World!');
})

app.post('/api/upload',function(req, res) { //upload image
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })
});
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))