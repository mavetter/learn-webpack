const path = require('path');

module.exports = {
    plugins: {
        'postcss-extract-media-query': {
            entry: path.resolve(__dirname, 'src/app.css'),
            output: {
                path: path.resolve(__dirname, 'dist/assets'),
                name: '[name]-[query].[ext]'
            },
            queries: {
                'screen and (min-width: 800px)': 'medium',
                'screen and (min-width: 1200px)': 'large',
            },
            combine: true
        }
    }
};
