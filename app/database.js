const moongose = require('mongoose');

moongose.connect('mongodb://localhost/playp9', {
    useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.cath(err => console.error(err));
