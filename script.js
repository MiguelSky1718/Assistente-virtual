function toggleChat() {
    const chatContainer = document.getElementById("chatContainer");
    const chatToggle = document.getElementById("chatToggle");
  
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
      chatContainer.style.display = "flex";
      chatToggle.style.display = "none";
    } else {
      chatContainer.style.display = "none";
      chatToggle.style.display = "flex";
    }
  }