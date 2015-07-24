* `npm install; npm start` - will start a live reloading watching server
* Output is all built to `public/`, perfect for surge or whatever
* Package.json has build/start scripts that wrap grunt, to run grunt from the command line you'll need to `npm install -g grunt-cli`
* Everything in `assets/` will be copied straight to `public/`, so images, etc can go in there.

### https

If you need https, make the following changes:

```js
watch: {
    build: {
        ...
        options: {
            /* change the livereload key to this: */
            livereload: {
                key: grunt.file.read('node_modules/grunt-contrib-connect/tasks/certs/server.key'),
                cert: grunt.file.read('node_modules/grunt-contrib-connect/tasks/certs/server.crt'),
            },
            atBegin: true
        }
        ...
    }
},
```


```js
connect: {
    server: {
        options: {
            port: 9001,
            protocol: 'https', // <-- and add this
            base: 'public',
            ...
```
