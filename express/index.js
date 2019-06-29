const express = require('express')
const app = express()
var router = express.Router()
app.use('/', (req, res) => res.send('ello World!'))
app.use('/about',(req, res) => res.send('Hello World2!'))
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
  })
app.listen(3000, () => console.log('Example app listening on port 3000!'))
// app.use(express.static('public'))
// app.get('/users/:userId/books/:bookId', function (req, res) {
//     res.send(req.params)
//   })
//   app.get('/example/b', function (req, res, next) {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, function (req, res) {
//     res.send('Hello from B!')
//     // res.render();
//     // res.redirect()
//     // res.sendFile()
//     // res.download()
//   })
//   router.param('id', function (req, res, next, id) {
//     console.log('CALLED ONLY ONCE');
//     next();
//   });
  
//   router.get('/user/:id', function (req, res, next) {
//     console.log('although this matches');
//     next();
//   });
  
//   router.get('/user/:id', function (req, res) {
//     console.log('and this matches too');
//     res.end();
//   });

//   router.route('/users/:user_id')
// .all(function(req, res, next) {
//   // runs for all HTTP verbs first
//   // think of it as route specific middleware!
//   next();
// })
// .get(function(req, res, next) {
//   res.json(req.user);
// })
// .put(function(req, res, next) {
//   // just an example of maybe updating the user
//   req.user.name = req.params.name;
//   // save user ... etc
//   res.json(req.user);
// })
// .post(function(req, res, next) {
//   next(new Error('not implemented'));
// })
// .delete(function(req, res, next) {
//   next(new Error('not implemented'));
// });