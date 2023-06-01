/* eslint-disable import/no-extraneous-dependencies */
import { writeFile } from 'fs/promises';
import fetch from 'node-fetch';
import executeStyleDictionary from './buildStyleDictionary.mjs';


const fetchAndCreateJSON = async (url, outputPath) => {
  try {
    // Fetch JSON data
    const response = await fetch(url);
    const jsonData = await response.json();

    // Write JSON data to a file
    await writeFile(outputPath, JSON.stringify(jsonData));

    console.log(`JSON data successfully written to ${outputPath}`);
    executeStyleDictionary(outputPath);
    console.log('Style Dictionary successfully executed :)')
    } catch (error) {
    console.error('Error:', error);
  }
};

// const url = 'https://cognads.zeroheight.com/api/token_file/823f9fc63f16/share';
// const url = 'https://cognads.zeroheight.com/api/token_file/cba51213d7f5/share';
const url = 'https://cognads.zeroheight.com/api/token_file/cd7ed96e43ba/share'
const outputPath = './src/jsonTokens/output.json';

fetchAndCreateJSON(url, outputPath);
