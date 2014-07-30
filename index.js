var dnd = require('drag-and-drop-files')

module.exports = function (dropTarget, callback, check) {
  dnd(dropTarget, function (files) {
    var file = files[0]
    
    // end this if the check fails
    if(check && !check(file)) return
  
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      callback.call(dropTarget, reader.result)
    }
  })
}