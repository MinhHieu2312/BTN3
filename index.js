const express = require('express');
const app = express();

//2. Set 'public' static folder
app.use(express.static(__dirname + '/public'));

//3. Configure View Engine
const expressHbs = require('express-handlebars');
const hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'

});
app.engine('hbs', hbs.engine);
app.set('view engine','hbs');

app.get('/', (req, res) => {
    res.render('index'); //Pour this 'index' hbs file into {{{body}}} in 'layout.hbs'
});

const myRouter = require('./routes/route');
const categoryRouter = require('./routes/categoryRoute');
const detailRouter = require('./routes/categoryRoute');

app.use('/', myRouter);
app.use('/category', categoryRouter);
app.use('/single-product', detailRouter);

module.exports = app;

//1. Create Server and start
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Sever is running at port ${app.get('port')}`);
}
);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });