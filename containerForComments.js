/*
fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.blob)
  .then((blob) => {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.querySelector('body').appendChild(img);
  });
// Idea is to fetch images from the meme webside.

/* fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.json())
  .then((data) => console.log(data)); */

/* const request = new Request('https://www.mozilla.org/favicon.ico');

const url = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  }); */

/*
    ESLINT-VERIFICATION DID NOT WORK

const fs = require('fs');

const num = 1;
let a = 'str';
console.log(fs, a.substr(0));

function b(num) {
  if (true) {
    console.log(num);

    // JSX does not throw an error when React is
    // not in scope because of the new JSX transform
    // https://github.com/yannickcr/eslint-plugin-react/issues/2440#issuecomment-683433266
    const jsx = <div />;
    console.log(jsx);
  }
}

b();

c();

const d = { e: { f: 1 } };

console.log(d?.e?.f);

function Component() {}
Component();

const OtherComponent = (x, y) => {};

const PascalCaseVar = 1;
const snake_case_var = 1;

OtherComponent(PascalCaseVar, snake_case_var);

OtherComponent(PascalCaseVar, snake_case_var);
*/

// ----------------------------------------- failed attempts ------------------------------------------------------

// https.get(url, (res) => {
//   // Image will be stored at this path
//   const dirPath = `${__dirname}./memes/img.jpeg`;
//   const filePath = fs.createWriteStream(dirPath);
//   res.pipe(filePath);
//   filePath.on('finish', () => {
//     filePath.close();
//     console.log('Download Completed');
//   });
// });

// --------------------------------------------------------------------------------
//  export const links2 = links;

// const createFile = (filePath, fileContent) => {
//   fs.writeFile('./memes', links2, (error) => {
//     if (error) {
//       console.error('An error occured: ', error);
//     } else {
//       console.log('Your file is made!');
//     }
//   });
// };
// https://levelup.gitconnected.com/use-node-js-to-to-create-directories-and-files-734063ce93ec
// console.log(links2);
// --------------------------------------------------------------

// console.log(links);
// export { links };
// const loop = () => {
//   for (let i = 1; i < arr.length; i++) {
//     if (i === 10) {
//       break;
//     }
//   }
// };
// console.log(loop);
// Finally!!! Break out of loop based on array index src= "https://betterprogramming.pub/three-ways-to-exit-an-array-loop-before-completion-in-javascript-56cc6ffff820"

// console.log(arr[i]);
// if ([arr[i] === arr.length[11]]) { https://love2dev.com/blog/javascript-for-loop-foreach/
// if ([i === 11]) {
//   break;
// }

// const srcArray = arr.map((functionName) => {
//   for (let i = 0; i < 10; i++) {
//     // document.getElementsByTagName('src'); // doucment is not defined
//   }
// });

// console.log(srcArray);

// ------------------------------------------
// const images3 = images2.trim();
// console.log(images3);
// const arr = images3.split(' '); // https://stackoverflow.com/questions/51010849/string-to-array-node-js-javascript
// console.log(arr);

// -----------------
// const trimedImages = images2.trim();
// console.log(trimedImages);
// find string.trim() to transform the images into an array
// for ( i= 0, i < 10, i++) {}

// const url = 'https://memegen-link-examples-upleveled.netlify.app.json';
// async function download() {
//   const response = await fetch(url);
//   const buffer = await response.buffer();
//   fs.writeFile(`./image.jpg`, buffer, () =>
//     console.log('finished downloading!'),
// )};

/* Donnerstagabend, 09.09.2021:
- fixed error message appearing after memes dir has allready been created
- fixed fetched html text not beeing shown in the console
  -> makes me wonder if it this is necessary in the first place or is it sufficient to not be shown in the console?
- created a backup dir in the projects dir containing a fall-back version of the index.js file
*/
