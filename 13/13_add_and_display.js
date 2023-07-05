document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById("input");
    let arr = Array();
    let text = "";

    document.querySelector("#adding").addEventListener('click', () => {
        arr.push(input.value);
        text += input.value + ", "; // Store the value in the text variable
        input.value = "";
    });

    document.querySelector("#displaying").addEventListener('click', () => {
        console.log(arr);
    });
    console.log(arr);
});
