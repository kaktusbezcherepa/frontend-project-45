#!/usr/bin/env node
import { game, getRandomNumber } from '../../src/index.js';

const randomQuestionCalc = () => {
    const number1 = getRundomNumber (100);
    const number2 = getRundomNumber (100);
    const operation = getRandomNumber(3);
    let correctAnswer = 0;
    let question = '';
    if (operation === 1) {
        correctAnswer = String(number1 * number2);
        question = `${number1} * ${number2}`;
    } else if (operation === 2) {
        correctAnswer = String(number1 + number2);
        question = `${number1} + ${number2}`;
    } else {
        correctAnswer = String(number1 - number2);
        question = `${number1} - ${number2}`;
    }

    return [question, correctAnswer];
};

const rulesGame = 'What is the result of the expression?';

game(rulesGame, randomQuestionCalc);