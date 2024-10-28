// Chatbot

document.addEventListener("DOMContentLoaded", function() {
  const chatbotIcon = document.getElementById("harmony-chatbot-icon");
  const chatbot = document.getElementById("harmony-chatbot");
  const closeBtn = document.getElementById("harmony-close-btn");
  const sendBtn = document.getElementById("harmony-send-btn");
  const userInput = document.getElementById("harmony-user-input");
  const messagesContainer = document.getElementById("harmony-messages");

  // Generic bot response
  const genericResponse = "Thank you for your message! We'll get back to you shortly.";

  // Toggle chatbot visibility when the chatbot icon is clicked
  chatbotIcon.addEventListener("click", function() {
    chatbot.style.display = "block";
  });

  // Close the chatbot when the close button is clicked
  closeBtn.addEventListener("click", function() {
    chatbot.style.display = "none";
  });

  // Function to display user and bot messages
  function displayMessage(message, sender) {
    const messageContainer = document.createElement("p");
    messageContainer.textContent = sender === 'user' ? `You: ${message}` : `Bot: ${message}`;
    messageContainer.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messagesContainer.appendChild(messageContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;  // Auto-scroll to the bottom
  }

  // Handle send button click and process user input
  sendBtn.addEventListener("click", function() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      displayMessage(userMessage, 'user');
      displayMessage(genericResponse, 'bot');
      userInput.value = "";  // Clear the input field
    }
  });

  // Handle pressing Enter to send the message
  userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
});







// menu js
let myList = document.getElementById("filterList");
let myDzo = document.getElementById("listImage");

// lets add a event listerner to the filter - list
myList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    let dataGroupOne = e.target.getAttribute("data-group");
    // we will add loop through each card in the gallery
    // img
    let callList = document.querySelectorAll("#listImage li");
    callList.forEach(function (card) {
      let dataGroupTwo = card.getAttribute("data-group");
      // show or hide the card on the selected category
      if (dataGroupOne === "0" || dataGroupOne === dataGroupTwo) {
        card.style.display = "inline-block";
      } else {
        card.style.display = "none";
      }
    });
  }
});




// contact
document.querySelector('.uniqueContactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  // Check if all fields are filled   
  if (name && email && message) {
      alert('Your order has been received. We will get back to you shortly!');
  } else {
      event.preventDefault(); 
      alert('Please fill in all required fields.');
  }
});




// Footer request Quote
function requestOrder() {
  var name1 = document.getElementById('name1').value;
  var email2 = document.getElementById('email1').value;
  
  if (name1 && email2) {
      alert("Thank you, " + name1 + "! We have received your request. A quote will be sent to " + email2 + ".");
  } else {
      alert("Please enter both your name and email.");
  }
}