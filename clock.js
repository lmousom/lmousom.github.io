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
    var hours = cd.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    var newformat = hours >= 12 ? 'PM' : 'AM'; 
    clock.time = zeroPadding(hours, 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2) + ' ' + zeroPadding(newformat);
   
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
