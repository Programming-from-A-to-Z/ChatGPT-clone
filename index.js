const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

require('dotenv').config();
const OpenAIApi = require('openai');

const app = express();
const openai = new OpenAIApi({ apiKey: process.env.OPENAI_SECRET_KEY });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

async function generate(history) {
  let messages = [{ role: 'system', content: 'You are a helpful assistant.' }];
  messages = messages.concat(history);
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
  });
  return response.choices[0].message.content;
}

app.post('/api/chat', async (req, res) => {
  const conversationHistory = req.body.history;
  try {
    console.log(conversationHistory);
    const modelReply = await generate(conversationHistory);
    console.log(modelReply);
    res.json({ reply: modelReply });
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error);
    res.status(500).send('Error generating response');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
