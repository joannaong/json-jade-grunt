# Read JSON inside JADE, using grunt.

This is a short tutorial on how to read a json file inside jade (html templating language).

##Setup
- run ```npm install```
- edit src/data.json as needed
- edit your jade file
- preview the changes on [localhost]/[your-folder]/demo/index.html

###Gruntfile.js
The magic happens when you set a the json file inside the data key.
```javascript
pageData: grunt.file.readJSON('src/data.json'),
jade: {
  dist: {
    options: {
      pretty: true,
      data: {
        data: '<%= pageData %>'
      }
    },
    files: {
      "demo/index.html": "src/index.jade"
    }
  }
}
```

##References
- http://gruntjs.com/
- http://jade-lang.com/