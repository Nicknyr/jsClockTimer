var deadline = 'August 22 2017 23:59:59';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60);
  var minutes = Math.floor( (t/1000/60) % 60);
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/ (1000 * 60 * 60 * 24));

  return {
    'total' : t,
    'minutes' : minutes,
    'seconds' : seconds,
    'hours' : hours,
    'days' : days
  };
}

var minutesRemaining = getTimeRemaining(deadline).minutes;
var secondsRemaining = getTimeRemaining(deadline).seconds;
var hoursRemaining = getTimeRemaining(deadline).hours;
var daysRemaining = getTimeRemaining(deadline).days;

console.log('There are ' + secondsRemaining + ' seconds, ' + minutesRemaining + ' minutes, ' + hoursRemaining + ' hours, ' + daysRemaining + ' days, until ' + deadline);
