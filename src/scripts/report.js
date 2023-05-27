'use strict';

document.querySelector('.report-btn').addEventListener('click', function(){
    let display = document.querySelector('.report-toggle').style.display;
    
    if( display ===""){
        document.querySelector('.report-toggle').style.display = "block";
    }
    else document.querySelector('.report-toggle').style.display = "";
});

document.querySelector('.report-send').addEventListener('click', function(){

    alert('Sua denúncia foi enviada para análise!');
    document.querySelector('.report-toggle').style.display = "";
});
