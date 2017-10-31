//interact with the DOM functions

$('#avgform').on('input', function(){
    //$('#area').html(average());
    $('#foot').html(average());
    //console.log(getmax());
    var getmaxx = getmax();

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
    formarr.push(parseFloat($(this).attr('id')));
  })

  $('.form-control').each(function(i){

    if(!isNaN(parseFloat($(this).val()))){
        formarrnum.push(parseFloat($(this).attr('id')));
     }

  })

  $('input').ForceNumericOnly();



  maxinput = Math.max.apply(null, formarr);
  maxnuminput = formarrnum.length;
  nextmax = maxinput + 1;

  return [maxinput,nextmax, maxnuminput];
}

function addmore(){
    $('#inputgrp').append('<input type="number" step="any" class="form-control" id='+getmax()[1]+' style="text-align:center;"></input>');
}

function removeone(){
  $('#'+getmax()[0]).remove();
}

function average(){
  var total =0;
  var avg;

  $('.form-control').each(function(i){
      if(!isNaN(parseFloat($(this).val()))){
        total = total + parseFloat($(this).val())
      }

   })

  avg = total / (getmax()[2]);


  return avg;

}

// Numeric only control handler
jQuery.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 ||
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};
