var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:dateInput', function(request,response,next){
    var dateInput = request.params.dateInput;
    if(isNaN(Number(dateInput.slice(-4)))){
        var unixTime=null;
        var naturalTime=null;
    } else if(isNaN(dateInput)){
        var unixTime=Date.parse(dateInput)/1000;
        var naturalTime=dateInput;
    } else {
        var date1 = new Date(dateInput*1000);
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var year = date1.getFullYear();
        var month = months[date1.getMonth()];
        var date2 = date1.getDate();
        var unixTime=Number(dateInput);
        var naturalTime=month+" "+date2+", "+year;
    }   
    var obj={
        "unix": unixTime,
        "natural": naturalTime
    }
    response.end(JSON.stringify(obj));
});

module.exports = router;
