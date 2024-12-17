const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  // Allow only POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Parse the incoming email from the request body
    const { email } = JSON.parse(event.body);
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email is required" }),
      };
    }

    // Path to the emails.json file
    const filePath = path.resolve(__dirname, "../emails.json");

    // Read the existing data in emails.json
    let emails = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      emails = JSON.parse(fileData);
    }

    // Append the new email to the array
    emails.push({ email, timestamp: new Date().toISOString() });

    // Save the updated array back to emails.json
    fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));

    // Success response
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: "Email saved successfully" }),
    };
  } catch (error) {
    console.error("Error saving email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
