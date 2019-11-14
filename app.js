const express = require('express');
const app = express();
const router = express.Router();

//require multer
const multer = require('multer')
const upload = multer({ dest: 'storage/'});

router.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

router.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

router.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  const filename = req.file.originalname;
  const fileSize = req.file.size;
  res.json({
    filename,
    size: `${fileSize} bytes`
  })
})


module.exports = router;