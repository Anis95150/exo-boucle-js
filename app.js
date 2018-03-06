//-----------------------EXO 1---------------------------


function looper(){

    var divv = document.getElementById('loupun');
    
     var tab1 = ['Anis', 'Darassas', 'Gazouza',6, 'badoo', 'visual'];
    n = 0;
    
    while(n<=5){
        
        console.log(tab1[n])
        
        n++;
    }   

    return tab1;

    var divv = document.getElementById('loupun');

    
}


var btn = document.getElementById('btn');

btn.onclick = looper;

//----------------------------------------EXO2-------------------------------

function looper2(){

    var tab2 =['Anis', 'Darassas', 'Gazouza',6, 'badoo', 'visual',true,false];
    var resultBoolean =[];
    var resultNumber =[];
    var btn2 =document.getElementById('btn2');
    var div = document.getElementById('result_looper2');
   
    
    for(var i = 0; i<tab2.length; i++){

        console.log(typeof tab2[i]);

        if(typeof tab2[i] == "boolean" ){

            resultBoolean.push(tab2[i]);

        }

        else if (typeof tab2[i] == 'number'){

            resultNumber.push(tab2[i]);
        }

    }


    // var max = Math.max(resultBoolean.length,resultNumber.length);
    // console.log("Le plus grand tableau contient "+max+" case");
    

    function affichage(){


        if (Math.max(resultBoolean.length, resultNumber.length) == resultBoolean.length) {

            return "resultBoolean";
       }else { 

           return "resultNumber";
       };
   }

   div.textContent = "resultNumber fait une taille de " + resultNumber.length + " resultBoolean fait une taille de " + resultBoolean.length + " Le tableau contenant le plus de cases est " + affichage()	

}
    


btn2.onclick = looper2;










