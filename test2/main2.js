// Node.js filesystem module.
const fs = require('fs');
// Node.js path module.
const path = require('path');

// path of the current directory
const pathDir = __dirname;

function readTestFile(fileName) {
  // The content contained in the file convert to array.
  function parseToArray(s) {
    return s.slice(1, s.length - 1).split(',');
  }

  // Reads contents of file in string.
  const inputs = fs.readFileSync(fileName).toString();
  const parsedInput = parseToArray(inputs);
  return [parsedInput];
}

function solution(n) {
  /* 10000000000 미만의 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
  예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
  단, 10000000000 이상의 자연수는 빈배열 []을 리턴합니다. */
  let array;

  if (n > 10000000000) return [];

  array = n
    .toString(10)
    .split('')
    .reverse()
    .map(str => +str);

  return array;

  // if (n > 0 && n <= 10000000000) {
  // array = n
  // .toString(10)
  // .split('')
  // .reverse()
  // .map(str => +str);
  // }
  // return array;
}

// Reads the contents of a directory.
fs.readdir(pathDir, (err, files) => {
  /* 
  files => Array of the names of the files in pathDir.
  [
    'main1.js',
    'text_a.txt',
    'text_b.txt',
    'text_c.txt'
  ] 
  */
  files.forEach(file => {
    if (file.split('.')[1] !== 'txt') {
      return;
    }

    console.log(`Testing ${file}...`);
    console.log('====================================');
    console.log('Test Ouput:');

    // path.join => Making path by combining two arguments... ex) pathDir/file.
    const parsedInputs = readTestFile(path.join(pathDir, file));

    const tStart = new Date().getTime();
    answer = solution(...parsedInputs);
    console.log(answer);
    const tDiff = new Date().getTime() - tStart;

    console.log(`${tDiff} ms ellapsed.`);
    console.log('====================================\n');
  });
});
