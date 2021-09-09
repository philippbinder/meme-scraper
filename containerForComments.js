
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