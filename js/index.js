//interact with the DOM functions

$('#avgform').on('input', function(){
    $('#area').html(average());
    console.log(getmax());
    if(getmax()[2] === getmax()[0]){
      addmore();
    }
})

//helper functions

function getmax(){
  
  var formarr = [];
  var formarrnum = [];
  var maxinput = 2;
  var maxnuminput;
  var nextmax = maxinput + 1;
  
  $('.form-control').each(function(i){
    formarr.push(parseInt($(this).attr('id')));
  })
  
  $('.form-control').each(function(i){
    
    if(!isNaN(parseInt($(this).val()))){
        formarrnum.push(parseInt($(this).attr('id')));
     }
    
  })
  
  maxinput = Math.max.apply(null, formarr);
  maxnuminput = formarrnum.length;
  nextmax = maxinput + 1;
  
  return [maxinput,nextmax, maxnuminput];
}

function addmore(){
    $('#inputgrp').append('<input class="form-control" id='+getmax()[1]+' style="text-align:center;"></input>');
}

function average(){
  var total =0;
  var avg;
  
  $('.form-control').each(function(i){
      if(!isNaN(parseInt($(this).val()))){
        total = total + parseInt($(this).val())
      }
    
   })
   
  avg = total / (getmax()[2]);
   
       
  return avg;
    
}

if ('ontouchstart' in window) {
    /* cache dom references */ 
    var $body = $('body'); 

    /* bind events */
    $(document)
    .on('focus', 'input', function() {
        $body.addClass('fixfixed');
    })
    .on('blur', 'input', function() {
        $body.removeClass('fixfixed');
    });
}

var focus = 0;
var yourInput = $(".form-group, .form-control, .inputgrp, input");
yourInput.focusin(function(){
    if(!focus) {
        yourInput.blur();
        $("html, body").scrollTop($(document).height());
        focus = 1;
    }
    if(focus) {
        yourInput.focus();
        focus = 0;
    }
});
