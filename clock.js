var clock = new Vue({
    el: '#clock',
    data: {
        time: ''
    }
});


var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    var hour = cd.getHours();
    var hours = cd.getHours();
    var newformat = hour >= 24 ? 'PM' : 'AM'; 
    hours = hours % 12;
    hours = hours ? hours : 12;
    clock.time = zeroPadding(hours, 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2) + ' ' + zeroPadding(newformat);
   
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
