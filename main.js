const computeWaterAmount = (rockHeightArr = []) => {
    let maxRockHeight = rockHeightArr.findIndex(el => el === Math.max(...rockHeightArr)),
        dividedArr = [[...rockHeightArr].slice(0, maxRockHeight), [...rockHeightArr].slice(maxRockHeight + 1)];
    let waterAmount = rockHeightArr.reduce((prevAmount) => {
        if (dividedArr[0].length > 1) {
            let maxHeight = Math.max(...dividedArr[0]),
                divided = dividedArr[0].splice(dividedArr[0].findIndex(height => height === maxHeight));
            return prevAmount + divided.reduce((prev, curr) => prev + (maxHeight - curr), 0);
        }
        return prevAmount;
    }, 0);
    return rockHeightArr.reduce((prevAmount) => {
        if ((dividedArr[1].length > 1)) {
            let maxHeight = Math.max(...dividedArr[1]),
                divided = dividedArr[1].splice(0,
                    dividedArr[1].lastIndexOf(maxHeight) + 1);
            return prevAmount + divided.reduce((sum, current) => sum + (maxHeight - current), 0);
        }
        return prevAmount;
    }, waterAmount) || waterAmount;
}

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
