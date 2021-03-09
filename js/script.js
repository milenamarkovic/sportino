//DINAMICKO ISPISIVANJE NAVIGACIONOG MENIJA
var navData = [
    {
        id: 'pocetna',
        text: 'Početna',
        url: 'index.html'
    },
    {
        id: 'sport',
        text: 'Sport',
        url: 'sport.html',
        opcije: [
            {
                id: 'kosarka',
                text: 'Kosarka',
                url: 'sport.html#kosarka'
            },
            {
                id: 'fudbal',
                text: 'Fudbal',
                url: 'sport.html#fudbal'
            },
            {
                id: 'plivanje',
                text: 'Plivanje',
                url: 'sport.html#plivanje'
            },
            {
                id: 'gimnastika',
                text: 'Gimnastika',
                url: 'sport.html#gimnastika'
            },
            {
                id: 'tenis',
                text: 'Tenis',
                url: 'sport.html#tenis'
            },
            {
                id: 'rukomet',
                text: 'Rukomet',
                url: 'sport.html#rukomet'
            },
            {
                id: 'orijentiring',
                text: 'Orijentiring',
                url: 'sport.html#orijentiring'
            }
        ]
    },
    {
        id: 'galerija',
        text: 'Galerija',
        url: 'galerija.html'
    }
    
];
function generateNav(data, listClass) {
    var nav = "<ul class='" + listClass + "'>";

    for(var i = 0; i < data.length; i++) {
        var item = data[i];

        nav += '<li id="nav-item-' + item.id + '" class="nav-item">';

        nav += '<a href="' + item.url + '">' + item.text + '</a>';

        if (item.opcije) {
            nav += generateNav(item.opcije, 'sub-menu');
        }

        nav += '</li>';
    }

    nav += '</ul>';

    return nav;
}
document.getElementById('navigacija').insertAdjacentHTML('afterbegin', generateNav(navData, 'main-nav'));

//DINAMICKO ISPISIVANJE DATUMA
var datum_polje = document.getElementById("datum");
var n=setInterval("vrati_datum()",1000);

function vrati_datum()
{
    var datum=new Date();
    var mm=datum.getMonth()+1;
    var sekunde=datum.getSeconds();
    var minute=datum.getMinutes();
    var sati=datum.getHours();
    if(sekunde<10){
        sekunde="0"+sekunde;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(sati<10){
        sati="0"+sati;
    }
    datum_polje.innerHTML=datum.getDate()+"."+mm+"."+datum.getFullYear()+"     "+sati+":"+minute+":"+sekunde;
}
var datum_polje = document.getElementById("datum");
var n=setInterval("vrati_datum()",1000);

var sportovi = [
    {
        id: 'kosarka',
        naslov: 'Košarka',
        slika: 'pictures/sportovi/kosarka.jpg',
        text: 'Košarka je vrsta timskog sporta,igra se loptom pomoću ruku.Dve ekipe sastavljene od pet igrača pokušavaju postići što više poena koša po određenim pravilima.Pobednik je ekipa koja postigne više poena.Tokom vremena košarka je dosta razvila uobicajene tehnike šutiranja,dodavanja i vođenja lopte,kao i poyicije igrača.Ako se odlučite za bas ovaj sport ,nećete se pokajati jer će uz vas biti vrhunski treneri našeg tima.'
    },
    {
        id: 'fudbal',
        naslov: 'Fudbal',
        slika: 'pictures/sportovi/fudbal.jpg',
        text: 'Fudbal je svi znamo najpopularniji sport svuda u svetu i znamo da svako od vas ima svoje idole kao sto su Ronaldo i Mesi dodjite da napravimo od vas bas takve zvezde i od malih nogu vas naučimo najboljim veštinama fudbala uz naravno najbolje trenere i novu opremu specijalno napravljenu za naše polaznike'
    },
    {
        id: 'plivanje',
        naslov: 'Plivanje',
        slika: 'pictures/sportovi/plivanje.jpg',
        text: 'Najbolji bazeni sa toplom vodom spremni su za vaš skok ,učićemo sve od plivanja,skokova do najsjajnijih igara u vodi .Sa nama će uvek biti spasioci i posebna oprema koja je pre svega sigurna .Zabavljaćemo se i učiti zajedno ,ronićemo u svet pravih iskusnih plivača i nezaboravnim avanturama .I za one mališane koji nisu sigurni ,ne brinite tu smo mi da ih naučimo svemu'
    },
    {
        id: 'gimnastika',
        naslov: 'Gimnastika',
        slika: 'pictures/sportovi/gimnastika.jpg',
        text: 'Gimnastika zahteva spretnost,snagu i kordinaciju pokreta.Sa nama će biti svega vežbica na razboju ,gredi ,parteru,karikama ,konju sa hvataljkama i bez njih.Ne morate da se rodite kao talenat ,ali vam obećavamo da ćete uz nas postati talenat i to pravi uspesni .'
    },
    {
        id: 'tenis',
        naslov: 'Tenis',
        slika: 'pictures/sportovi/tenis.jpg',
        text: 'Svi mi zelimo da budemo Novak Đoković ili Ana Ivanovic ,a da bi to stvarno postali potrebno je mnogo truda i napredka .Mi ćemo vam pomoči da se priblizite tom sportu i da uz vašu volju i želju učinimo da postanete pravi teniser '
    },
    {
        id: 'rukomet',
        naslov: 'Rukomet',
        slika: 'pictures/sportovi/rukomet.jpg',
        text: 'Rukomet je ekipni sport sa loptom,u kom se takmiče dve ekipe sa po 7 igrača na svakoj strani.Igra traje dva puta po 30 minuta ,a cilj je dati više golova od protivnika.Lopta se između igrača dodaje rukama slično kao u košarci ali sa nešto manjom loptom i uz drgačija pravila.Ako želis i ti da naučis sva pravila ove igre zovemo te da dođes i da se pridružis pravoj ekipi.'
    },
    {
        id: 'orijentiring',
        naslov: 'Orijentiring',
        slika: 'pictures/sportovi/orijentiring.jpg',
        text: 'Orijentiring je sport koji kod nas nije baš najpopularniji ,ali smo svesni da deca sve više provode vreme kod kuće uz računare i telefone pa smo sa zeljom da ih odbacimo od toga upravo ubacili i ovaj sport,gde ćemo zajedno šetati ,trčati i istraživati prelepe predele i prirodu.Ako si pravi avanturista ovo je upravo ono sto si oduvek tražio'
    }
];

function generisiSportove() {
    var str = '';

    for (var i = 0; i < sportovi.length; i++) {
        var sport = sportovi[i],
            even = i % 2 === 0;

        str += 
        '<section id="' + sport.id + '" class="container-fluid">' +
            '<div class="row">' +
                '<div class="col-md-4">' +
                    '<h2 class="naslov">' + sport.naslov + '</h2>' +
                    '<hr>' +
                '</div>' +
            '</div>' +
            '<div class="row sport5">' +
                '<div class="col-md-5 slikeSport order-' + (even ? 1 : 2 ) + '">' +
                    '<img src="' + sport.slika + '" class="slike" alt="' + sport.naslov + '">' +
                '</div>' +
                '<div class="col-md-5 offset-md-1 sport10 order-' + (even ? 2 : 1) + '">' +
                    '<p>' + sport.text + '</p>' +
                '</div>' +
            '</div>' +
        '</section>';
    }

    return str;
}

if (window.location.href.indexOf('sport.html') !== -1) {
    document.getElementById('sport-placeholder').insertAdjacentHTML('afterbegin', generisiSportove());
}



$(document).ready(function(){
    $('#autor').hover(function(){
      $(this).animate({width: '+=25px'}, 200);
    }, function(){
      $(this).animate({width: '-=25px'}, 200);
    });
  });