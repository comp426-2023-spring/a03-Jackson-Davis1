#!/usr/bin/env node

export {rps, rpsls}
const playableOptions = ["rock", "paper", "scissors", "lizard", "spock"]
function rps(shot){
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