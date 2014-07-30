require('../index.js')(
  document.querySelector('#droparea'), 
  function (dataURL) {
    this.querySelector('img').src = dataURL
    this.querySelector('input').value = dataURL
  },
  function (file) {
    if(file.type.split('/')[0] === 'image') return true
    alert('This is not an image!')
  })