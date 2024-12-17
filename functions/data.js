exports.handler = async (event, context) => {
  // SOLO POST REQUESTS:
  if (event.httpMethod !== "POST") {
    console.log("Invalid method");
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body);

    if (!body.email) {
      console.log("Validation Error: Email is missing");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    console.log("Valid Email Received:", body.email);

    // SIMULA IL SALVATAGGIO AD UN DATABASE:
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email saved successfully", data: body }),
    };
  } catch (error) {
    console.error("Error processing request:", error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
