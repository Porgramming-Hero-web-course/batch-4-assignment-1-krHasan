function removeDuplicates(inputArr: number[]): number[] {
    let newArr: number[] = [];
    inputArr.forEach((element) => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
