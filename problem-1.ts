function sumArray(inputArr: number[]): number {
    let sum = 0;
    inputArr.forEach((element) => {
        sum += element;
    });
    return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5]));
