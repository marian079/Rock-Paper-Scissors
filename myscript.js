let playerSelection = 'Rock';
let computerSelection = computerPlay();
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
        let user, computer;
        let computer_score = 0;
        let user_score = 0;
    function result(user, computer)
    {
        if(user === 0 && computer == 1)
        {
        
        return "You lose, ";
        }
        else if(user === computer)
        {
    
        return "Draw!";
        }
        else
        {
     
        return "You win, ";
        }
    }
   let response = '';
    
    function playRound(playerSelection, computerSelection)
    {
        if(playerSelection === 'Rock' || playerSelection === 'ROCK')
            playerSelection = 'rock';
            else if(playerSelection === 'Scissors' || playerSelection === 'SCISSORS')
            playerSelection = 'scissors';
            else if(playerSelection === 'PAPER' || playerSelection === 'Paper')
            playerSelection = 'paper';
            
        if(playerSelection === 'rock' && computerSelection === 'scissors')
        {
            user_score++;
            response = (result(1, 0) + playerSelection + " beats " + computerSelection);
        }
            else if(playerSelection === computerSelection)
            {
                user_score = 0, computer_score = 0;
            response = (result(1, 1));
            }
            else if(playerSelection === 'scissors' && computerSelection === 'rock')
            {
                computer_score++;
            response = (result(0, 1) + computerSelection  + ' beats ' + playerSelection);
            }
            else if(playerSelection === 'paper' && computerSelection === 'rock')
            {
                user_score++;
                response = (result(1, 0) + playerSelection + ' beats ' + computerSelection);
            }
                else if(playerSelection === 'rock' && computerSelection === 'paper')
                {
                        computer_score++;
                        response = (result(0, 1) + computerSelection + ' beats ' + playerSelection);
                }
                        else if(playerSelection === 'scissors' && computerSelection === 'paper')
                        {
                            user_score++;
                        response = (result(1, 0) + playerSelection + ' beats ' + computerSelection);
                        }
                        else if(playerSelection === 'paper' && computerSelection === 'scissors')
                        {
                            computer_score++;
                        response = (result(0, 1) + computerSelection + ' beats ' + playerSelection);
                        }
                        return response;
                        

    }
    
                    
    let final_score_user = 0, final_score_computer = 0;
    function game()
    {
            for(let i = 1; i <= 5; ++i)
        {   computer_score = 0, user_score = 0;
            playerSelection =  prompt('What you chose, a rock, a paper or scissors?');
            if(playerSelection === null || playerSelection == 'stop')
            break;
           console.log(playRound(playerSelection, computerSelection));   
         
            if(computer_score)
            final_score_computer++;
            else 
                final_score_user++;
        }
        if(final_score_computer > final_score_user)
        return "Computer win!" + final_score_computer + ' - ' + final_score_user;
        else 
            return "You win!" + final_score_user + ' - ' + final_score_computer; 
    }
    console.log(game());

   playerSelection =  prompt('What you choose, a rock, a paper or scissors?', 'stop');
      