
async function sendToAPI() {
  const userMessage = document.getElementById('userInput').value;
  const responseBox = document.getElementById('responseBox');

  responseBox.textContent = "Thinking...";

  try {
    const response = await fetch('/.netlify/functions/ask-openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    responseBox.textContent = data.reply || "No response.";
  } catch (error) {
    responseBox.textContent = "Error: " + error.message;
  }
}
