/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame,
} from './game';

const game = new Game();
game.start();
