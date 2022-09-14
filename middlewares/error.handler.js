
export const logErrors = (error, req, res, next) => {
    console.error(error);
    next(error)
}

export const errorHandler = (error, req, res, next) => {
    console.error(error);
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    })
}

export const boomErrorHandler = (error, req, res, next) => {
    if(error.isBoom){
        const { output } = error
        res.status(output.statusCode).json({
            message: output.payload
        })
    }

    next(error)
}
