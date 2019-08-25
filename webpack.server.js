const  path = require('path');
module.exports={
    //we are bundling a bundle for nodejs,rather than for the browser
    target: 'node',
    //Tell webpack the root file of out server application
    entry:'./src/index.js',
    // Tell webpack where to put the output file that is generated
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    // Tell webpack to run babel on every file it runs through
    module:{
        rules:[
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets:[
                        'react',
                        'stage-0',
                        ['env',{targets:{browsers:['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}
