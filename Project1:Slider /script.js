var models = [
    {
        name:'Totoro Film1',
        image:'img/totoro.jpg',
        link:'https://tr.pinterest.com/pin/492649950603280/',
        
    },
    {
        name:' The Cat Return Film2',
        image:'img/thecatreturn.jpg',
        link:'https://tr.pinterest.com/pin/117656609005731844/',
        
    },
    {
        name:'Pony Film3',
        image:'img/pony.jpg',
        link:'https://tr.pinterest.com/pin/924293523508664370/',
        
    },
    {
        name:'Kiki s Delivery Service Film4',
        image:'img/kikis.jpg',
        link:'https://tr.pinterest.com/pin/56858014038244469/',
        
    },
    {
        name:'Arietty Film5',
        image:'img/arrietiy.jpg',
        link:'https://tr.pinterest.com/pin/492649950603280/',
        
    },
];

var index = 0;
var slaytCount = models.length;

var interval;

var settings={
    duration : '1000',
    random : false,

};


init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){

    index--;
    showSlide(index);
    console.log(index);

});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){

    index++;
    showSlide(index);
    console.log(index);

});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    });
});

function init(settings){

    var prev; //önceki

    //setTimeout // belli bir sonra 1 kere işletiyor
    //setInterval // sürekli tekrar eder
    //clearInterval // sürekli tekrar eder

    interval = setInterval(function(){
        
        if(settings.random){
            do{
            index = Math.floor( Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
            //random index
            }else{
                //artan index
                if(slaytCount == index+1){
                    index = -1;
                }

                showSlide(index);
                console.log(index);
                index++;
            }
  
        showSlide(index);

    },settings.duration)


}

function showSlide(i){

    index = i;

    if ( i < 0) {
        index = slaytCount -1;
    }
    if( i >= slaytCount){
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);

}


