document.getElementById('sendButton').addEventListener('click', async () => {
  const input = document.getElementById('userInput').value;

  const response = await fetch('/.netlify/functions/ask-openai', {
    method: 'POST',
    body: JSON.stringify({ message: input }),
  });

  const data = await response.json();

  document.getElementById('responseBox').innerText = data.reply;
});
