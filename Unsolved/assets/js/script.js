var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;

  // TODO: Complete function
  // This if block will finish the task it check the data-state and add the class then the data
  if (element.dataset.state === "hidden") {
    element.dataset.state = "visible";
    element.textContent = element.dataset.number;

    // bonus for toggle the box with invert the value.
  } else if (element.dataset.state === "visible") {
    element.dataset.state = "hidden";
    element.textContent = "";
  }
});
