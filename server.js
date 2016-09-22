var express = require('express');

var app = express();


app.use( '/', express.static('./') );

app.listen(8080, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
});
