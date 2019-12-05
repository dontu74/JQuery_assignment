
//Move left and Move Right
$(document).ready(function(){
  $('#moveBtn1').click(function(){
    $('#box').animate({
      left: '500px'
    });
  });
});
$(document).ready(function(){
  $('#moveBtn2').click(function(){
    $('#box').animate({
      left: '0px'
    });
  });
});

$(document).ready(function(){
  $('#opa1').click(function(){
    $('#box').animate({opacity: '10%'});
  });
});

$(document).ready(function(){
  $('#opa2').click(function(){
    $('#box').animate({opacity: '100%'});
  });
});
$(document).ready(function(){
  $('#cir').click(function(){
    $('#box').animate({
      opacity: '100%',
      borderRadius: '800px',
      width: '100px',
      height: '100px'
    });
  });
});
$(document).ready(function(){
  $('#pum').click(function(){
    $('#box').animate({
      opacity: '100%',
      border: '0.4em solid darken($color3, 25%)',
      borderRadius: '40%',
      position: 'relative',
      width: '19em',
      height: '10em',
    });
  });
});
$(document).ready(function(){
  $('#squ').click(function(){
    $('#box').animate({
      opacity: '100%',
      borderRadius: '5px',
      width: '200px',
      height: '200px'
    });
  });
});
$(document).ready(function(){
  $('#siz').click(function(){
    $('#box').animate({
      opacity: '100%',
      borderRadius: '5px',
      width: '500px',
      height: '200px'
    });
  });
});
$(document).ready(function(){
  $('#btn1').dblclick (function(){
    $('.para1').hide();
  });
});
$(document).ready(function(){
  $('#btn2').on('click', function(){
    $('.para1').show();
  });
});
$(document).ready(function(){
  $('#all').click(function(){
    $('*').hide();
  });
});
