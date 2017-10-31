//interact with the DOM functions

$('#avgform').on('input', function(){
    //$('#area').html(average());
    $('#foot').html(average());
    //console.log(getmax());
    var getmaxx = getmax();
    console.log(getmaxx);
    if(getmaxx[2] === getmaxx[0]){
      addmore();
    }
    if((getmaxx[2]+1)<getmaxx[0] && getmaxx[0] > 2){
      removeone();
    }
})

$(document).keypress(function(e) {
    if(e.which == 13) {
        $('.form-control').next().focus();
    }
});

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
    $('#inputgrp').append('<input type="number" class="form-control" id='+getmax()[1]+' style="text-align:center;"></input>');
}

function removeone(){
  $('#'+getmax()[0]).remove();
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
