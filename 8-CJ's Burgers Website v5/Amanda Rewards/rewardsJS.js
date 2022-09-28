function onSubmit(event) {
    event.preventDefault(); // ! prevent page from reload after button is clicked
    const elements = [event.target[0], event.target[1]];
    console.log("Submitted!");
    for (let i = 0; i < elements.length; i += 1) {
      console.log(`${elements[i].name}:`, elements[i].value);
    }
  }
function myFunction() {
    let text = document.querySelector("#email");
    let message = document.querySelector("#message");
    message.innerHTML = "Subscribed!"
}