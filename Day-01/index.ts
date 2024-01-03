import * as fs from "fs";

function main(): void {
  const input = readInput();
  const answer = processLine(input);
  console.log(answer);
}

function readInput(): string[] {
  const words = fs.readFileSync("./input.txt", "utf-8");
  return words.split("\n");
}

function processLine(words: string[]): number {
  let calibrationValueSum = 0;
  words.forEach((word) => {
    word = transformLetterNumbersToNumbers(word);
    const numberString = word.match(/\d+/g)?.join("");
    if (numberString) {
      if (numberString.length === 1) {
        calibrationValueSum += (+(numberString[0] + numberString[0]));
      } else {
        calibrationValueSum += (+(numberString[0] + numberString[numberString.length - 1]));
      }
    }
  });
  console.log('calSum: ', calibrationValueSum);
  return calibrationValueSum;
}

function transformLetterNumbersToNumbers(word: string): string {
  const textToNumberMapping: Record<string, string> = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
  };

  const pattern = new RegExp(Object.keys(textToNumberMapping).join('|'), 'g');
  let match = word.match(pattern);

  while (match) { 
    match.forEach((m) => {
      word = word.replace(m, textToNumberMapping[m] + m[m.length - 1]);
    });
    match = word.match(pattern);
  }

  return word;
}


main();
