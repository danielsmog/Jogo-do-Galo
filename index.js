$(document).ready(function() {
    
        var lines;


        var jogador = 'orange';
        var orange = 'orange';
        var pink = 'pink';

        function changeClass() {
            if (jogador===orange) { 
                jogador=pink
            }
            else {
                jogador=orange
            }
        }
        // testar se houve um vencedor
        function winner() { // recebe o evento. não esquecer que tens de por $(ev.currentTarget)
           var row = $(ev.currentTarget).attr('data-id=');
           // .attr('y') do 'elemento'
           var col = $(ev.currentTarget).parent.attr('data-id=');
           // .parent().attr('x') do elemento
           debugger;
           /* teste de linha */

           for( lines=0;  lines < row; lines++) {
              
               for( col=0 ; row < col ; col++ ) {
                 if ( !$(ev.currentTarget).attr('data-id=' +row+ 'class') { 

                 };
           };

           // for (i = 0, i < n ,   )
           // tens de testar desde o td y = 0 desta linha x que recebeste ate n
           // hasClass(jogador)

           /*teste de coluna*/
        };

   
        function addEvent() {
            $('td').click(function(ev) {
                $(ev.currentTarget).addClass(jogador);
                changeClass();
                // testar se houve um vencedor
                winner();
            });                      
        }

        $.ajax({
            url:"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new",
            data: {num:1, min:2, max:5, base:10, col:1, format:"plain"},
            error: function(xhl, errorcode) { },
            success: function(data, code, xhl) { 
                n = data; 
                for(var i = 0; i< n; i++) {
                    $('table').append('<tr data-id="'+i+'"></tr>');
                };
                for(var i = 0; i< n; i++) {   
                    $('tr').append('<td data-id"'+i+'"></td>');
                };  
                addEvent();
                
            }
        })
});