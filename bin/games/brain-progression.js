#!/usr/bin/env node
import { game, getRandomNumber } from '../../src/index.js';

const randomQuestionProgression = () => {
  let number = getRandomNumber(50);
  const len = getRandomNumber(11, 5);
  const skip = getRandomNumber(len);
  const difference = getRandomNumber(21, -20);
  const progression = [];

  let count = 0;
  while (count !== len) {
    progression.push(number);
    number += difference;
    count += 1;
  }

  const correctAnswer = String(progression[skip]);
  const question = String(progression).replaceAll(',', ' ').replace(correctAnswer, '..', 1);
  return [question, correctAnswer];
};

const rulesGame = 'What number is missing in the progression?';

game(rulesGame, randomQuestionProgression);