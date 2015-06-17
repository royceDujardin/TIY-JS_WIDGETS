$(document).ready(function(){

  var text_max = 99;

  $('#textarea_feedback').html(text_max + ' characters remaining');

  $('#textarea-max-length').keyup(function(){

    var text_length = $('#textarea-max-length').val().length;
    var text_remaining = text_max - text_length;

    $('#textarea_feedback').html(text_remaining + ' characters remaining');

  });


});
