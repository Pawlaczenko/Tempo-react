const ErrorHandler = require('../utils/errorHandler');

const handleDevError = (err,res) =>{
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
}

const handleProductionError = (err, res) => {
    if(err.isOperational){
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong :('
        });
    }
}

const handleCastError = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new ErrorHandler(message,400);
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    console.log(err);

    if(process.env.NODE_ENV === 'production'){
        let error = err;
        
        console.log(error);

        if(error.name === 'CastError') error = handleCastError(error);
        
        handleProductionError(error,res);
    } else {
        handleDevError(err,res);
    }
}