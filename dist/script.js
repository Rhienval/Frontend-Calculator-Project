let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}

function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid input or operation");
    // Clear the output screen in case of error
    outputScreen.value = "";
  }
}