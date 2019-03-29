const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'hihi',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: {
        hihi: 'hihi',
    },
};
