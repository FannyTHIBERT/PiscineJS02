window.onload = function () {

    let mesParagraphes = $("p");
    mesParagraphes.on('click', function(){
        mesParagraphes.html("");    
    });
    mesParagraphes.on('mouseover', function(){
        mesParagraphes.css("color" , "grey"); 
    });
    mesParagraphes.on('mouseout', function(){
        mesParagraphes.css("color" , "black"); 
    });
   
    

    
}