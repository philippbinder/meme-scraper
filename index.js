/*
-----------------------  S T E P S  -----------------------
Idea: Create a command that goes for the src in <img> in <div>, maybe saves it under it's own variable?, does that and additional 9 times for the next 9 cases and displays them?

can I use the fetch() method to gather the data?

- find a way to (auto)-create a "memes"-folder on other PC's so that other users can download and use my file.
https://nodejs.org/api/fs.html#fs_fs_mkdir_path_options_callback
https://www.geeksforgeeks.org/node-js-fs-mkdir-method/


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
});

/*
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
*/
// creates new dir ond users PC

/*
import getCookie from './util/cookies/getCookie.js';
// const getCookie = require('./util/cookies/getCookie.js');

// const getCookie = require('./util/cookies/getCookie.js');
*/

fetch('https://memegen-link-examples-upleveled.netlify.app.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
