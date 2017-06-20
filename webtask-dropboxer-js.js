var Dropbox = require('dropbox');

const fs = require('fs');
const download = require('download');

module.exports = function (ctx, done) 
{
  var dbx = new Dropbox({ accessToken: ctx.data.auth || done(null, 'no auth key.') });
  
  dbx.filesSaveUrl({path: '/Link Downloads/' + ctx.data.name || '/Link Downloads/download.jpg', url: ctx.data.url || done(null, 'no url.') })
        .then(function(response) 
        {
          console.log(response);
        })
        .catch(function(error) 
        {
          console.error(error);
          done(null, response)
        });
        
  dbx.filesListFolder({path: ''}).then(function(response) {
    console.log(response);
    done(null, response);
  }).catch(function(error) 
  {
    console.log(error);
    done(null, response);
  });
}