var s = require('node-schedule');

var job  = s.scheduleJob('*/1 * * * *', function(){
  console.log('Run!');
});
