texts = ['Hi there, my name is Le Nhat Phuong, nice to see you all!',
         'Wilkommen, mein Freunde, mein Name ist Le Nhat Phuong',
         'Bonjour, je suis Le Nhat Phuong, et toi?']

document.addEventListener("DOMContentLoaded", function() {
    var typingElement = document.getElementById('typingText');
    var textToType = texts[Math.floor(Math.random() * texts.length)]

    var speed = 150
    var delay = 1000

    function autotype() {
        console.log()
        var index = 0;

        var timer = setInterval(() => {
            if (index != textToType.search('Le Nhat Phuong') || delay <= 0) {
                typingElement.textContent += textToType[index++]
            } else {
                delay -= speed;
            }
            if (index == textToType.length) {
                clearInterval(timer);
            }
        }, speed)    
    }
    setTimeout(autotype, 1000);
})
