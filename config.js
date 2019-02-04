if (process.env['NODE_ENV'] !== 'production') {
    require('dotenv').config();
}

module.exports = {
    ServerPort: process.env['PORT']
};