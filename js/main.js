$(function() {
   let number1;
   let number2;
   let action;

   $('.num').click(function() {
      let num = $(this).html();
      let current = $('.screen').html();
      current += num;
      if (current.startsWith('0')) {
         current = current.substring(1);
      }
      $('.screen').html(current);
   });
   
   $('.action').click(function() {
      number1 = Number($('.screen').html());
      action = $(this).html();
      $('.screen').html('');
   });

   $('.equal').click(function() {
      number2 = Number($('.screen').html());
      let res;
      if (action == '+') {
         res = number1 + number2;
      } else if(action == '-') {
         res = number1 - number2;
      } else if(action == '*') {
         res = number1 * number2;
      } else if(action == '/') {
         res = number / number2;
      }
      $('.screen').html(res);
   });
   $('.clear').click(function() {
      $('.screen').html(0);
   });
});

