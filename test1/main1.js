// Node.js filesystem module.
const fs = require('fs');
// Node.js path module.
const path = require('path');

// path of the current directory
const pathDir = __dirname;

function readTestFile(fileName) {
  // The content contained in the file convert to array.
  function parseToArray(s) {
    return s.slice(2, s.length - 2).split(' ');
  }

  // Reads contents of file in string.
  const inputs = fs.readFileSync(fileName).toString();
  const parsedInputs = parseToArray(inputs);
  return parsedInputs;
}

function solution(s) {
  // 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
  /* 1 ~ 5 자리의 문자열이 들어오면 해당 문자열을 숫자타입으로 변환하여 반환하나, 아닐 경우 0을 반환. */
  let answer;

  if (s.length > 5) return 0;
  answer = Number(s);

  return answer(s);

  // if (s.length <= 5) {
  // answer = +s;
  // }
  // return answer;
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
