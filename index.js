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
  - ESM https://reactgo.com/node-es6-imports/ - for making Node Fetch work
  - maybe instead https://www.npmjs.com/package/esm
  - Cheerio https://www.npmjs.com/package/cheerio

miscellaneous:
  https://www.geeksforgeeks.org/node-js-fs-mkdir-method/ - shows me the code I need to write for dir on other PC's who use my file
  Meme Webside https://memegen-link-examples-upleveled.netlify.app/ - webside to fetch the memes from
*/

import * as cheerio from 'cheerio';
// or without "* as"?
// idea: import node-fetch from package.json
// const fs = require('fs');
// const path = require('path');
/* converted the lines above to the lines bellow to make them work (and compatible with
import fs from 'fs';
import fetch from 'node-fetch';
*/
import fs from 'fs';
import fetch from 'node-fetch';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// //idea: import node-fetch from package.json
// const fs = require('fs');
// const path = require('path');
const currentDir = dirname(fileURLToPath(import.meta.url));
fs.mkdir(path.join(currentDir, 'memes'), { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');
});
// if not err don't show anything

const __dirname = dirname(fileURLToPath(import.meta.url));
// __dirname yellow line will disappear once I recomment the creation of the memes dir in

// creates new dir ond users PC

/*
import getCookie from './util/cookies/getCookie.js';
// const getCookie = require('./util/cookies/getCookie.js');

// const getCookie = require('./util/cookies/getCookie.js');
*/

// const fetchedText = fetch(
//   'https://memegen-link-examples-upleveled.netlify.app/',
// )
//   .then((response) => response.text()) // Die Webside ist unter inspect html text
//   .then((data) => console.log(data));
// console.log(fetchedText);
// Working fetch request and console log

// fetches teh wabpage
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);

// time to tell cheerio to make something useful with the string fetched in the command above
const body = await response.text();

const $ = cheerio.load(body);

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>

// $(body);
// $.root().html();
// unnötig da ich nicht ide ganze Webside will?

// console.log(body);

/*
Remove variable to avoid promise pending - but shouldn't I work around that?

Without console.log:
fetch('https://memegen-link-examples-upleveled.netlify.app/').then((response) =>
   response.text(),
 );
With console.log:
fetch('https://memegen-link-examples-upleveled.netlify.app/').then((response) =>
  response.text().then((data) => console.log(data)),
  );




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
