const Ordinal = (n, x = n % 100) => x + (o[(x - 20) % 10] || o[x] || o[0]);

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th","st","nd","rd"];

color.forEach((ele, id) => {
    console.log(Ordinal(id + 1) + " " + ele);
});
