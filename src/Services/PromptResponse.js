import axios from "axios";

const SecretKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; //Replace with your Valid API Keyy..
const endPoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${SecretKey}`;

async function runPrompt(prompt) {
  const data = {
    contents: [
      {
        parts: [
          {
            text: prompt.toString(),
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(endPoint, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    // Return the response data directly
    return response.data;
  } catch (error) {
    console.error("Error fetching the API:", error);
    return error;
  }
}

export default runPrompt;
