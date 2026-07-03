const score = JSON.parse(localStorage.getItem('score')) || {
            wins:0, 
            losses: 0,
            ties: 0
          };


        updatescore();
       
          
         console.log(localStorage.getItem('score'));


        function playGame(playerMove){


          const computerMove = pickComputerMove();

          let result = '';
          if (playerMove === 'Scissors' ){

          
            if (computerMove === 'Rock') {
              result ='YOU lose';

            }else if (computerMove === 'Paper') {
              result ='YOU win';
            }
            else if (computerMove === 'Scissors') {
              result ='tie';
            }
          }
        
          else if(playerMove === 'Paper'){

              const computerMove = pickComputerMove();

              if (computerMove === 'Paper') {
                result = 'tie';

              }else if(computerMove === 'Rock') {
                result = 'You win';
              }else if(computerMove === 'Scissors'){
                result = 'You lose';
              }
        }

        else if (playerMove === 'Rock') {
          const computerMove = pickComputerMove();
        
          if (computerMove === 'Rock') {
            result = 'tie';
          }else if (computerMove === 'Paper'){
            result = 'You lose';
          }else if (computerMove === 'Scissors') {
            result = ' You win';
          }
        }

        if (result === 'You win'){
          score.wins += 1;
        }else if (result === 'You lose'){
          score.losses += 1;
        }else if(result === 'tie'){
          score.ties +=1;
        }


      localStorage.setItem('score', JSON.stringify(score));
      
      updatescore();

        document.querySelector('.js-result').
        innerHTML = result;

        document.querySelector('.js-moves').
        innerHTML = `You 
        <img src="images/${playermove}-emoji.png " class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
      }


        function updatescore(){
          document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
        };



        function pickComputerMove(){
          const randomNumber = Math.random();

          if (randomNumber >=0 && randomNumber < 1/3 ) {
            computerMove = 'Rock';
          }else if (randomNumber >=1/3 && randomNumber < 2/3) {
            computerMove = 'Paper';
          }else if (randomNumber >=2/3 && randomNumber < 1){
            computerMove = 'Scissors';
          }
          return computerMove;
        }
