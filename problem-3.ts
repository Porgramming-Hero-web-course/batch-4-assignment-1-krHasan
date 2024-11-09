function countWordOccurrences(sentence: string, word: string): number {
    const sentenceWithoutDot: string = sentence.split(".").join("");
    const allWords: string[] = sentenceWithoutDot.split(" ");
    let counter: number = 0;

    allWords.forEach((element) => {
        if (element.toLowerCase() === word.toLowerCase()) {
            ++counter;
        }
    });

    return counter;
}

// console.log(
//     countWordOccurrences(
//         "I love typescript. Typescript is a programming language. Next.js is a framework of typescript",
//         "typescript"
//     )
// );
