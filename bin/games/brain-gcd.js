#!/usr/bin/env node
import { game, getRandomNumber } from '../../src/index.js';

const randomQuestionGcd = () => {
  const number1 = getRandomNumber(101, 1);
  const number2 = getRandomNumber(101, 1);
  const question = `${number1} ${number2}`;

  let maxNumber;
  let minNumber;
  let correctAnswer;

  if (number1 > number2) {
    maxNumber = number1;
    minNumber = number2;
  } else {
    maxNumber = number2;
    minNumber = number1;
  }

  for (let i = minNumber; i >= 1; i -= 1) {
    if (maxNumber % i === 0 && minNumber % i === 0) {
      correctAnswer = i;
      break;
    }
  }

  correctAnswer = String(correctAnswer);
  return [question, correctAnswer];
};

const rulesGame = 'Find the greatest common divisor of given numbers.';

game(rulesGame, randomQuestionGcd);
