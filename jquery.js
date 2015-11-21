var counter = 1;
var pageHref = "#lhtml";

$(document).on("mobileinit", function() {});

$(document).ready(function(ev) {    
    localStorage.setItem("currentId", JSON.stringify(pageHref + counter));    
    $("#startTut").on("click", function(ev) {        
        pageParse = JSON.parse(localStorage.getItem("currentId"));        
        $("#startTut").attr("href", pageParse);    
    });    
    $("#lhtml1").on("pageinit", function(ev) {        
        $(".nextPage").on("click", function(ev) {            
            counter += 1;            
            localStorage.setItem("currentId", JSON.stringify(pageHref + counter));        
        });        
        $(".backPage").on("click", function(ev) {            
            counter -= 1;            
            localStorage.setItem("currentId", JSON.stringify(pageHref + counter));        
        });    
    });
});
