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
  words.forEach((line) => {
    const numberString = line.match(/\d+/g)?.join("");
                if (numberString) {
        if (numberString.length === 1) {
        calibrationValueSum += +(numberString[0] + numberString[0]);
      } else {
        calibrationValueSum += +(
          numberString[0] + numberString[numberString.length - 1]
        );
      }
    }
  });
  return calibrationValueSum;
}

main();
