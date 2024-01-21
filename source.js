function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3)
    switch (choice) {
        case 1:
            return 'Rock'
            break;
        case 2:
            return 'Paper'
            break;
        case 3:
            return 'Scissors'
            break;
        default:
            break;
    }
}