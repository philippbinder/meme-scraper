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

miscellaneous:
  https://www.geeksforgeeks.org/node-js-fs-mkdir-method/ - shows me the code I need to write for dir on other PC's who use my file
  Meme Webside https://memegen-link-examples-upleveled.netlify.app/ - webside to fetch the memes from
*/

//idea: import node-fetch from package.json
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
fs.mkdir(path.join(currentDir, 'memes'), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');
  // if not err don't show anything
});

const __dirname = dirname(fileURLToPath(import.meta.url));
// __dirname yellow line will disappear once I recomment the creation of the memes dir in

// creates new dir ond users PC

/*
import getCookie from './util/cookies/getCookie.js';
// const getCookie = require('./util/cookies/getCookie.js');

// const getCookie = require('./util/cookies/getCookie.js');
*/

fetch('https://memegen-link-examples-upleveled.netlify.app/').then((response) =>
  response.text(),
); // Die Webside ist utner inspect html text
// .then((data) => console.log(data));

// fetch needs await before the code can continue - async await und anschließend library finden die mir den html string in etwas brauchbares umwandelt. Irgendwann muss das Ergebnis in einer Variable gespeichert werden. Braucche Cheerio um den String dess HTML-Textes den ich bekomme in etwas umzuwnadeln mit dem ich arbeiten kann.

// const url = 'https://memegen-link-examples-upleveled.netlify.app.json';
// async function download() {
//   const response = await fetch(url);
//   const buffer = await response.buffer();
//   fs.writeFile(`./image.jpg`, buffer, () =>
//     console.log('finished downloading!'),
//   );
// }
console.log('test');
