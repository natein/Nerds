function openForm(id) {
    var frm= document.getElementById(id);
    frm.style.display = 'inline'; 
}

function closeForm(id) {
    var frm= document.getElementById(id);
    frm.style.display = 'none';    
}

var current = 1;
var last = 3;

function swithcSlider() {

    var timerId = setInterval(function() {        
        var slide = document.getElementById('slider' + current);
        slide.style.display = 'block';
        var slide = document.getElementById('slider' + last);
        slide.style.display = 'none';
        var dot;
        switch (current) {
            case 1:
                dot = document.getElementById('dot1');
                dot.classList.add('icon-circle-dot');
                dot.classList.remove('icon-circle');
                dot = document.getElementById('dot2');
                dot.classList.add('icon-circle');
                dot.classList.remove('icon-circle-dot');         dot = document.getElementById('dot3');
                dot.classList.add('icon-circle');
                dot.classList.remove('icon-circle-dot');
                break;
            case 2:
                dot = document.getElementById('dot2');
                dot.classList.add('icon-circle-dot');
                dot.classList.remove('icon-circle');
                dot = document.getElementById('dot1');
                dot.classList.add('icon-circle');
                dot.classList.remove('icon-circle-dot');         dot = document.getElementById('dot3');
                dot.classList.add('icon-circle');
                dot.classList.remove('icon-circle-dot');
                break;
            case 3:
                dot = document.getElementById('dot3');
                dot.classList.add('icon-circle-dot');
                dot.classList.remove('icon-circle');
                dot = document.getElementById('dot1');
                dot.classList.add('icon-circle');
                dot.classList.remove('icon-circle-dot');         dot = document.getElementById('dot2');
                dot.classList.add('icon-circle');
                dot.classList.remove('icon-circle-dot');
                break;                
        }     
        if(current<3) current=current+1;
        else current=1;
        if(current!==1) last=current-1;
        else last=3;
    }, 2000);
}

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.93901016, 30.31953953],
        zoom: 17,
        controls:[]
    }, {
        searchControlProvider: 'yandex#search'
    }),
        myPlacemark = new ymaps.Placemark([59.938631, 30.323055], { hintContent: 'Nerds', balloonContent: 'Nerds' }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://drive.google.com/uc?export=download&id=0B5x-k62opfncR0F4MGlmTkFrU2M',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-100, -190]
        });

    myMap.geoObjects.add(myPlacemark);
});
