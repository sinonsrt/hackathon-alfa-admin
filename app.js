const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cadastroUsersRouter = require('./routes/cadastroUsers')
const cadastroBrandRouter = require('./routes/cadastroBrand')
const cadastroColorsRouter = require('./routes/cadastroColors')
const cadastroVehiclesRouter = require('./routes/cadastroVehicles')
const saveUserRouter = require('./routes/saveUsers')
const saveBrandRouter = require('./routes/saveBrand')
const saveColorsRouter = require('./routes/saveColors')
const saveVehiclesRouter = require('./routes/saveVehicles')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')
const listUsersRouter = require('./routes/listUsers')
const listColorsRouter = require('./routes/listColors')
const listBrandRouter = require('./routes/listBrand')
const loginAuthRouter = require('./routes/loginAuth');
const editUsersRouter = require('./routes/editUsers');
const editColorsRouter = require('./routes/editColors');
const editBrandRouter = require('./routes/editBrand');
const atualizarUsersRouter = require('./routes/atualizarUsers');
const atualizarColorsRouter = require('./routes/atualizarColors');
const atualizarBrandRouter = require('./routes/atualizarBrand');
const excluirBrandRouter = require('./routes/destroyBrand');
const excluirColorsRouter = require('./routes/destroyColors');
const excluirUsersRouter = require('./routes/destroyUsers');

const vehiclesRoutes = require('./routes/vehicleRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap')));
app.use(express.static(path.join(__dirname, 'node_modules/@popperjs/core')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cadastroUsers', cadastroUsersRouter);
app.use('/cadastroBrand', cadastroBrandRouter);
app.use('/cadastroColors', cadastroColorsRouter);
app.use('/cadastroVehicles', cadastroVehiclesRouter);
app.use('/saveUsers', saveUserRouter)
app.use('/saveBrand', saveBrandRouter)
app.use('/saveColors', saveColorsRouter)
app.use('/saveVehicles', saveVehiclesRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/listUsers', listUsersRouter)
app.use('/listColors', listColorsRouter)
app.use('/listBrand', listBrandRouter)
app.use('/loginAuth', loginAuthRouter)
app.use('/editUsers', editUsersRouter)
app.use('/editColors', editColorsRouter)
app.use('/editBrand', editBrandRouter)
app.use('/atualizarUsers', atualizarUsersRouter)
app.use('/atualizarColors', atualizarColorsRouter)
app.use('/atualizarBrand', atualizarBrandRouter)
app.use('/excluirBrand', excluirBrandRouter)
app.use('/excluirColors', excluirColorsRouter)
app.use('/excluirUsers', excluirUsersRouter)

app.use('/veiculos', vehiclesRoutes);

// rotas API
app.use('/', vehiclesRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;