var msg = document.querySelector('.welcomeMsg');

var colors = [
    'red', 'green', 'red', 'blue',
    'red', 'green', 'blue', 'green',
    'blue', 'red', 'green', 'blue',
]

var msgColorChangeTimeSet = 1500;
var colorIndex = 0;

setInterval(function colorChange() {
    msg.style.color = colors[colorIndex++];
    colorIndex %= colors.length;
}, msgColorChangeTimeSet);

setTimeout(function() {
    var foo = querySelector('.body');
    console.log(foo.innerHTML);
}, 3000);