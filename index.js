// ES6 imports for necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import OpenAIApi from 'openai';
import { config } from 'dotenv';

// Load environment variables
config();

// Express app and OpenAI API setup
const app = express();
const openai = new OpenAIApi({ apiKey: process.env.OPENAI_SECRET_KEY });

// Middleware for JSON parsing and serving static files
app.use(bodyParser.json());
app.use(express.static('public'));

// Async function to call OpenAI API and generate chat completions
async function generate(history) {
  // System-level message to define the assistant's role
  let messages = [{ role: 'system', content: 'You are a helpful assistant.' }];
  // Combine system message with user's conversation history
  messages = messages.concat(history);
  // Generate a response using the OpenAI chat completion endpoint
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages,
  });
  // Return the text content of the response
  return response.choices[0].message.content;
}

// Endpoint to handle chat messages and send responses
app.post('/api/chat', async (req, res) => {
  // Extract the conversation history from the request body
  const conversationHistory = req.body.history;
  try {
    // Log conversation for debugging and get a response from the generate function
    console.log(conversationHistory);
    const modelReply = await generate(conversationHistory);
    console.log(modelReply);
    // Respond with the model's reply
    res.json({ reply: modelReply });
  } catch (error) {
    // Log errors and send an error response
    console.error('Error communicating with OpenAI API:', error);
    res.status(500).send('Error generating response');
  }
});

// Server configuration
const PORT = process.env.PORT || 3000;
// Start the server and log the listening port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
