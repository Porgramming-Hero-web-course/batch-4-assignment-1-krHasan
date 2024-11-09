type Circle = {
    shape: "circle";
    radius: 5;
};
type Rectangle = {
    shape: "rectangle";
    width: 4;
    height: 6;
};

function calculateShapeArea(obj: Circle | Rectangle): number | null {
    if (obj.shape === "circle") {
        return parseFloat((Math.PI * obj.radius * obj.radius).toFixed(2));
    } else if (obj.shape === "rectangle") {
        return obj.width * obj.height;
    }

    return null;
}

// console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
// console.log(
//     calculateShapeArea({
//         shape: "rectangle",
//         width: 4,
//         height: 6,
//     })
// );
