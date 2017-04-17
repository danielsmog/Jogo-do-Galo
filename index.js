$(document).ready(function() {
    
        var n;

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
           var x = $(ev.currentTarget)parent.attr('x=');
           // .attr('y') do 'elemento'
           var y = $(ev.currentTarget).attr('y=');
           // .parent().attr('x') do elemento

           /* teste de linha */
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
                    $('table').append('<tr x="'+i+'"></tr>');
                };
                for(var i = 0; i< n; i++) {   
                    $('tr').append('<td y="'+i+'"></td>');
                };  
                addEvent();
                
            }
        })
});