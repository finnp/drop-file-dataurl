# drop-file-dataurl

Module for creating a drop area where people can drop files and you will get 
the data-uri as a callback. Install it with `npm install drop-file-dataurl`.
This is created for the use with [Browserify](http://browserify.org/).


## Usage
```
  require('drop-file-dataurl')(droparea, callback[, check])
```
where the dataURL is passed to the `callback`. 

The optional `check` function
takes the [File object](https://developer.mozilla.org/en-US/docs/Web/API/File)
and the return value determines whether the second callback will be fired or not. 
This is useful for mime-type filtering.

## Example

### Simple Usage
```js
  var dropfile = require('drop-file-dataurl')
  var droparea = document.querySelector('#droparea')
  dropfile(droparea, function (dataURL) {
    console.log('The file', dataURL)
  })
```


### Usage with check

```js
  dropfile(droparea, 
  function (dataURL) {
    // note that the context of the callback is the droparea.
    this.querySelector('img').src = dataURL
  },
  function (file) {
    return file.type.split('/')[0] === 'image'
  })
```

### Run an example

If you have `beefy` installed, you can run an example with
`npm run example` (see `examples` folder).