console.log("#9. JavaScript homework example file");

function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);

  if (button) {
    button.addEventListener("click", () => {
      console.log(message);
    });
  }
}

function trackMousePosition() {
  document.addEventListener("mousemove", (event) => {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
}

function setupEventDelegation(selector) {
  const list = document.querySelector(selector);

  if (list) {
    list.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const text = event.target.textContent.trim();
        console.log(`Item clicked: ${text}`);
      }
    });
  }
}

export { handleButtonClick, trackMousePosition, setupEventDelegation };

handleButtonClick("myButton", "Button clicked!");
trackMousePosition();
setupEventDelegation("#testList");
