

const users = (req, res, next) => {
    console.log('User middleware');
    next();
};


// Middleware to log the current time
const middleware = (req, res, next) => {
    // log information about the request
    
    next(); // Call the next middleware or route handler
}

