var ngrok = require('ngrok');
var ngrokOptions = {
    addr: '0.0.0.0:4200',
    region: 'ap',
};
ngrok.connect(ngrokOptions, function(err, url){
  if (err) {
    console.log('Something error happen: ' + err);
    return;
  }
  console.log('Forwarding webpack-dev-server: ' +
    ngrokOptions.addr +
    '.\nTUNNELING URL: ' + url)
});
