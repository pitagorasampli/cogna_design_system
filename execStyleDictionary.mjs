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

// const url = 'https://cognads.zeroheight.com/api/token_file/823f9fc63f16/share';
//const url = 'https://cognads.zeroheight.com/api/token_file/cba51213d7f5/share';
const url = 'https://cognads.zeroheight.com/api/token_file/02bbc2ece9a9/share';
//const url = 'https://cognads.zeroheight.com/api/token_file/cd7ed96e43ba/share'

const outputPath = './src/jsonTokens/output.json';

execStyleDictionary(outputPath);
