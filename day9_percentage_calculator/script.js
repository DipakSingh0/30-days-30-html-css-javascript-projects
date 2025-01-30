document.getEventListener("DOMContentLoaded", function () {
  const percentageSlider = document.getElementById("percentageSlider");

  const percentageValue = document.getElementById("percentageValue");

  percentageSlider.addEventListener("input", function () {
    percentageValue.textContent = `${percentageSlider.value}%`;
  });
});

function calculatePercentage() {
  const percentageValue = document.getElementById("percentageValue");

  const baseNumber = document.getElementById("baseNumber").value;

  if(baseNumber == ""){
    alert("Please enter a base number");
    return 
  }

  const result =parseFloat((baseNumber) * (percentageSlider.value / 100)).toFixed(2);
  
  document.getElementById("result").innerHTML  = `result: ${result}` ;

}
