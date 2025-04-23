function getComputerChoice()
{
    let rand = Math.random();
    rand = rand * 10 % 3;
    rand = parseInt(rand);

    let choice = '';
    switch (rand)
    {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    return choice;
}

getComputerChoice();

function gethumanChoice()
{
    let choice = prompt('Enter you move(rock, paper, or scissors');
    return choice;
}

//gethumanChoice();

function playRound(computerSelection , humanSelection)
{
    console.log(`You entered ${humanSelection} bot entered ${computerSelection}`);
    computerSelection = computerSelection.toLowerCase(); 
    humanSelection = humanSelection.toLowerCase();

    switch (humanSelection)
    {
        case "rock":
            if(computerSelection == "paper")
            {
                return "lose";   
            }
            return "win";
            break;

        case "paper":
            if(computerSelection == "scissors")
            {
                return "lose";   
            }
            return "win";
            break;

        case "scissors":
            if(computerSelection == "rock")
            {
                return "lose";   
            }
            return "win";
            break;
        
    }

    //console.log(computerSelection);
}

console.log(playRound(getComputerChoice(), gethumanChoice()));