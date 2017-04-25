$(document).ready(function() {
        newGame();

        var n;

       
        var jogador = 'orange';
        var orange = 'orange';
        var pink = 'pink';

        var player1Score = 0;
        var player2Score = 0;

        var gameOver = false;

        var jogadas = 0;

        function changeClass() {
            if (jogador===orange) { 
                jogador=pink
            }
            else {
                jogador=orange
            }
        }

        function printScore(){
            $("#player1").html(player1Score);
            $("#player2").html(player2Score);
        }


         // testar se houve um vencedor
        function winner(events) { 


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
                return true;
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
                return true;                
            }
     
        /* teste linha 1ª diagonal  */
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
                return true;
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
                return true;
            }        

            return false;    
        }

        // if ( n = elemento.  ) {
                        
        
           // tens de testar desde o td y = 0 desta linha x que recebeste ate n
           // hasClass(jogador)

              
     
        function addEvent() {
            $('td').click(function(ev) {
                navigator.vibrate(500);
                if (gameOver){
                    alert("O jogo terminou. Jogue novamente.");
                    newGame();
                    return;   
                }
                var elemento = $(ev.currentTarget);
                if( elemento.hasClass("pink") || elemento.hasClass("orange") ){
                    return;
                }
                elemento.addClass(jogador);


                // testar se houve um vencedor
               
                if (winner()) {
                    if (jogador == 'orange'){
                       player1Score++ ;
                    }
                    else{
                        player2Score++ ;
                    }          
                    
                    if( player1Score == 3 || player2Score == 3 ) {
                        player1Score = 0 ;
                        player2Score = 0 ;
                        alert("Parabens! Ganhou o melhor de 3 jogos");
                    }
                    printScore();
                    
                    gameOver = true;      

                } 
        
           
                 
                               
                changeClass();
           
                //caso de empate
                
                jogadas ++;
               
                    if( jogadas == n*n && gameOver == false ){
                        alert("Empate! Tente Novamente");
                        newGame();
                        return;   
                    }
                
            });                      
        }

        function newGame() {
            gameOver = false;
            jogadas = 0;
            $.ajax({
            url:"https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new",
            data: {num:1, min:3, max:4, base:10, col:1, format:"plain"},
            error: function(xhl, errorcode) { },
            success: function(data, code, xhl) { 
                $('table').empty();
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
    }

    $('a').click(function(){
        
        newGame();
    });

});