({
    baseUrl: "js",
    paths: {
        "URIjs": 'library/uri.js/src'
    },
    shim: {

        'library/underscore/underscore'              : {
            exports: '_'
        },
        'library/jquery-cookie/jquery.cookie'           : ['library/jquery/dist/jquery'],
        'library/sticky/jquery.sticky'                  : ['library/jquery/dist/jquery'],
        'library/jquery-validation/dist/jquery.validate': ['library/jquery/dist/jquery']
    },
    dir: 'js/builds',
    map: {
        "*": {
            "jquery": "library/jquery/dist/jquery"
        }
    },
    optimize: process.env.optimize || "uglify",
    modules: [
        {
            name: 'page1',
            include: [],
            exclude: [
                'library/jquery/dist/jquery',
                'library/jquery-cookie/jquery.cookie',
                'library/underscore/underscore'
            ]
        },
        {
            name: 'page2',
            include: [],
            exclude: [
              'library/jquery/dist/jquery',
              'library/jquery-cookie/jquery.cookie',
              'library/underscore/underscore'
            ]
        },
        {
            name: 'page3',
            include: [],
            exclude: [
              'library/jquery/dist/jquery',
              'library/jquery-cookie/jquery.cookie',
              'library/underscore/underscore'
            ]
        }
    ]
})