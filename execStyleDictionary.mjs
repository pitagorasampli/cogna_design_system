/* eslint-disable import/no-extraneous-dependencies */
import { writeFile } from 'fs/promises';
import fetch from 'node-fetch';
import executeStyleDictionary from './buildStyleDictionary.mjs';


const execStyleDictionary = async (outputPath) => {
  try { 
    executeStyleDictionary(outputPath);
    console.log('Style Dictionary successfully executed :)')
    } catch (error) {
    console.error('Error:', error);
  }
};

const outputPath = './src/jsonTokens/output.json';

execStyleDictionary(outputPath);
