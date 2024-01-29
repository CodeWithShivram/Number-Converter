function decimalToBinary() {
    const decimalInput = document.getElementById('decimal').value;
    const binaryOutput = parseInt(decimalInput).toString(2);
    document.getElementById('binary').value = binaryOutput;
  }
  
  function decimalToOctal() {
    const decimalInput = document.getElementById('decimal').value;
    const octalOutput = parseInt(decimalInput).toString(8);
    document.getElementById('octal').value = octalOutput;
  }
  
  function binaryToDecimal() {
    const binaryInput = document.getElementById('binary').value;
    const decimalOutput = parseInt(binaryInput, 2);
    document.getElementById('decimal').value = decimalOutput;
  }
  
  function octalToDecimal() {
    const octalInput = document.getElementById('octal').value;
    const decimalOutput = parseInt(octalInput, 8);
    document.getElementById('decimal').value = decimalOutput;
  }
  