// const handleSubmit = (event) => {
//   event.preventDefault(); // stop page refresh

//     const value = document.getElementById("num").value;
//     const output = document.getElementById("output");

//     output.textContent =
//       value > 0 ? "Positive" :
//       value < 0 ? "Negative" : "Zero";
// };
// document.getElementById("myForm").addEventListener("submit", handleSubmit);

const handleSubmit = (event) => {
  event.preventDefault(); // stop page refresh

    const value = document.getElementById("num").value;
    const output = document.getElementById("output");

    output.textContent =
      value > 0 ? "Positive" :
      value < 0 ? "Negative" : "Zero";
};
document.getElementById("myForm").addEventListener("submit", handleSubmit);
