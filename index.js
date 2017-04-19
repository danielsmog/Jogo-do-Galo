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
        function winner(events) { 
            // recebe o evento. não esquecer que tens de por $(ev.currentTarget)
            // var col = events.data('x');
            // .attr('y') do 'elemento'
            // var line = parent().data('y');
            // .parent().attr('x') do elemento

           var win = true;
           /* teste de linha horizontal */
            for (y = 0; y < n; y++) {
                win=true;
                for (x = 0; x < n; x++){
                    if(!$('tr[data-y=' + y + '] > td[data-x=' + x + ']').hasClass(jogador)){
                        win = false;
                        break;
                    }
                }
                if (win==true){
                    break;                     
                }
            }

            if (win==true) {
                setTimeout(function(){
                    alert("Winner");
                }, 100);
                return;
            }

            /* teste de linha vertical */            
            for ( x = 0; x < n; x++ ) {
                for (y = 0; y < n; y++) {
                    win=true;
                    if (!$('tr[data-y=' + y + '] > td[data-x=' + x + ']').hasClass(jogador)){
                        win = false;
                        break;
                     }
                }
                if (win==true){
                    break;
                }
            }

            if (win==true) {
                setTimeout(function(){
                    alert("Winner");
                }, 100);
                return;
            }
     
        /* teste linha 1ª diagonal 1 */
            for ( x = 0; x < n; x++){
                win=true;
                if(!$('tr[data-y=' + x +'] > td[data-x=' + x + ']').hasClass(jogador)){
                    win=false;
                    break;
                }
        
            }

            if (win==true) {
                setTimeout(function(){
                    alert("Winner");
                }, 100);
                return;
            }            
        /* teste linha 2ª diagonal */
            for (x = 0; x < n; x++){
                
                win=true;
                var aux = n-1-x;
                if(!$('tr[data-y=' + aux +'] > td[data-x=' + x + ']').hasClass(jogador)){
                    win=false;
                    break;
                }
            
            }

            if (win==true) {
                setTimeout(function(){
                    alert("Winner");
                }, 100);
                return;
            }            
        }

           // tens de testar desde o td y = 0 desta linha x que recebeste ate n
           // hasClass(jogador)

           /*teste de coluna*/
     
        function addEvent() {
            $('td').click(function(ev) {
                $(ev.currentTarget).addClass(jogador);
                // testar se houve um vencedor
                winner();
                changeClass();
            });                      
        }

        $.ajax({
            url:"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new",
            data: {num:1, min:2, max:5, base:10, col:1, format:"plain"},
            error: function(xhl, errorcode) { },
            success: function(data, code, xhl) { 
                n = data; 
                for(var i = 0; i< n; i++) {
                    $('table').append('<tr data-y="'+i+'"></tr>');
                };
                for(var i = 0; i< n; i++) {   
                    $('tr').append('<td data-x="'+i+'"></td>');
                };  
                addEvent();
                
            }
        })
});