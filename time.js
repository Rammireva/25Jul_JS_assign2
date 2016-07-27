var d = new Date();
var hr = d.getHours();
var tm = d.getMinutes();

hr = '00'+hr;
if(tm<10) {
    tm = '0' + tm;
}
document.getElementById('sol1').innerHTML = hr+':'+tm;