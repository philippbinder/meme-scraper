/*
-----------------------  S T E P S  -----------------------
Idea: Create a command that goes for the src in <img> in <div>, maybe saves it under it's own variable?, does that and additional 9 times for the next 9 cases and displays them?

can I use the fetch() method to gather the data?

- find a way to (auto)-create a "memes"-folder on other PC's so that other users can download and use my file.
https://nodejs.org/api/fs.html#fs_fs_mkdir_path_options_callback
https://www.geeksforgeeks.org/node-js-fs-mkdir-method/

- fetch html from meme webside
- take the html fetched as a string and transform in into something usefel - do this with Cheerio


-----------------------  I M P O R T A N T  -----------------------
installed dependancies:
  - Node Fetch https://www.npmjs.com/package/node-fetch - for fechting the images from the meme page
  - ESM https://reactgo.com/node-es6-imports/ - for making Node Fetch work - not used???
  - maybe instead https://www.npmjs.com/package/esm
  - Cheerio https://www.npmjs.com/package/cheerio

miscellaneous:
  https://www.geeksforgeeks.org/node-js-fs-mkdir-method/ - shows me the code I need to write for dir on other PC's who use my file
  Meme Webside https://memegen-link-examples-upleveled.netlify.app/ - webside to fetch the memes from
  Avoid __dirname not available error: https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag
*/

import * as cheerio from 'cheerio';
// or without "* as"?
// idea: import node-fetch from package.json
import fs from 'fs'; // part of node-fetch
import fetch from 'node-fetch';
import path, { dirname } from 'path'; // gemäß Karl umgeschrieben, siehe Quelle unten
import { fileURLToPath } from 'url'; // This line and the line above come from https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag

// import { string } from 'prop-types'; - Ist automatisch kreiert worden im Rahmen der Anwendung Cheerios auf die Fetch-Request?

// import instead of require because require causes errors

// //idea: import node-fetch from package.json
// const fs = require('fs');
// const path = require('path');
const currentDir = dirname(fileURLToPath(import.meta.url)); // __dirname umgeschrieben
fs.mkdir(path.join(currentDir, 'memes'), { recursive: true }, (err) => {
  // __dirname umgeschrieben
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');
});

const __dirname = dirname(fileURLToPath(import.meta.url));
// creates new dir ond users PC

// const fetchedText = fetch(
//   'https://memegen-link-examples-upleveled.netlify.app/',
// )
//   .then((response) => response.text()) // Die Webside ist unter inspect html text
//   .then((data) => console.log(data));
// console.log(fetchedText);
// Working fetch request and console log

// fetches the wabpage
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);

const body = await response.text();

// load the const body into cheerio
const $ = cheerio.load(body);

// console.log($.html());
// evidence that the comamnd above works

// search for the sction with the id images (which contains all divs with imags) in the html of the webpage
// Der untere Code sucht alle images raus die Kinder (also auch Enkelkinder) von #images (section im html text) sind und speichert sie unter der const images. Anschließend müssen diese in ein array umgewandelt werden damit ich anschließend die ersten 10 raussuchen kann.
const images = $('#images img');
// render  the document
console.log($.html(images));
// find string.trim() to transform the images into an array
// for ( i= 0, i < 10, i++) {}

/*
  ----------------------------------------------------------------------------------------------------------
 fetch needs await before the code can continue - async await und anschließend library (cheerio) finden die mir den html string in etwas brauchbares umwandelt. Irgendwann muss das Ergebnis in einer Variable gespeichert werden. Braucche Cheerio um den String dess HTML-Textes den ich bekomme in etwas umzuwnadeln mit dem ich arbeiten kann.
 */

console.log('test');

// const url = 'https://memegen-link-examples-upleveled.netlify.app.json';
// async function download() {
//   const response = await fetch(url);
//   const buffer = await response.buffer();
//   fs.writeFile(`./image.jpg`, buffer, () =>
//     console.log('finished downloading!'),
// )};

/* Doonerstagabend, 09.09.2021:
- fixed error message appearing after memes dir has allready been created
- fixed fetched html text not beeing shown in the console
  -> makes me wonder if it this is necessary in the first place or is it sufficient to not be shown in the console?
- created a backup dir in the projects dir containing a fall-back version of the index.js file
*/
