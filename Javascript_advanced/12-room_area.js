const roomDimensions = {
    width : 50,
    length: 100,

    getArea: function () {
        return this.width * this.length;
    }
};

// bind the method getArea to the object roomDimensions
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea());
