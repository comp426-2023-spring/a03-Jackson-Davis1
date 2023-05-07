#!/usr/bin/env node

export {rps, rpsls}
const playableOptions = ["rock", "paper", "scissors", "lizard", "spock"]
function rps(shot){
    if (!shot){
        return {"player": playableOptions[Math.floor(Math.random()*3)]};
    }
    if (!playableOptions.includes(shot)){
        console.error(shot + " is out of range");
        console.log(`Rules for Rock Paper Scissors:
        
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`);
        process.exit(1);
    }
    let playerShot = shot.toLowerCase();
    let opponentShot = playableOptions[Math.floor(Math.random()*3)];
    let gameInfo = {"player": shot,"opponent": opponentShot,"result": ""};
    if (playerShot === 'rock'){
        gameInfo['result'] = opponentShot === 'scissors' ? 'win' : opponentShot === 'rock' ? 'tie' : 'lose';
    }
    if (playerShot === 'paper'){
        gameInfo['result'] = opponentShot === 'rock' ? 'win' : opponentShot === 'paper' ? 'tie' : 'lose';
    }
    if (playerShot === 'scissors'){
        gameInfo['result'] = opponentShot === 'paper' ? 'win' : opponentShot === 'scissors' ? 'tie' : 'lose';
    }
    return gameInfo
}


function rpsls(shot){
    let playerShot = shot.toLowerCase();
    let opponentShot = playableOptions[Math.floor(Math.random()*5)];
    let gameInfo = {"player": shot,"opponent": opponentShot,"result": ""};
    if (playerShot === 'rock'){
        gameInfo['result'] = opponentShot === 'scissors' || opponentShot == 'lizard' ? 'win' : opponentShot === 'rock' ? 'tie' : 'lose';
    }
    if (playerShot === 'paper'){
        gameInfo['result'] = opponentShot === 'rock' || opponentShot == 'spock' ? 'win' : opponentShot === 'paper' ? 'tie' : 'lose';
    }
    if (playerShot === 'scissors'){
        gameInfo['result'] = opponentShot === 'paper' || opponentShot == 'lizard' ? 'win' : opponentShot === 'scissors' ? 'tie' : 'lose';
    }
    if (playerShot === 'spock'){
        gameInfo['result'] = opponentShot === 'scissors' || opponentShot == 'rock' ? 'win' : opponentShot === 'spock' ? 'tie' : 'lose';
    }
    if (playerShot === 'lizard'){
        gameInfo['result'] = opponentShot === 'paper' || opponentShot == 'spock' ? 'win' : opponentShot === 'lizard' ? 'tie' : 'lose';
    }
    return gameInfo
}