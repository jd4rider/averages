//interact with the DOM functions

$('#avgform').on('input', function(){
    //$('#area').html(average());
    $('#foot').html(average());
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


