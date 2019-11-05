const computeWaterAmount = (rockHeightArr = []) => {
    let maxRockHeight = rockHeightArr.findIndex(el => el === Math.max(...rockHeightArr)),
        dividedArr = [[...rockHeightArr].slice(0, maxRockHeight), [...rockHeightArr].slice(maxRockHeight + 1)];
    const calcRangeSum = (dividedArrIndex) => {
        if (dividedArr[dividedArrIndex].length > 1) {
            let maxHeight = Math.max(...dividedArr[dividedArrIndex]),
                spliceArgs = !dividedArrIndex
                    ? [dividedArr[dividedArrIndex].indexOf(maxHeight)]
                    : [0, dividedArr[dividedArrIndex].lastIndexOf(maxHeight) + 1],
                newRange = dividedArr[dividedArrIndex].splice(...spliceArgs);
            return newRange.reduce((prev, curr) => prev + (maxHeight - curr), 0);
        }
        return 0;
    };
    return rockHeightArr.reduce((prevAmount) => {
        return prevAmount + calcRangeSum(0) + calcRangeSum(1);
    }, 0);
};

let testArrays = [
    [2, 5, 1, 3, 1, 2, 1, 7, 7, 6],
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
    [7, 0, 1, 3, 4, 1, 2, 1],
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
    [2, 2, 1, 2, 2, 3, 0, 1, 2],
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8],
    [2, 2, 2, 2, 2]
];

testArrays.forEach(rockHeightArr => console.log(computeWaterAmount(rockHeightArr)));
