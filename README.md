Communication App Backend API
Overview
The Communication App Backend API provides endpoints to send automated voice calls, SMS messages, and WhatsApp messages to Indian phone numbers.

Endpoints
1. Send WhatsApp Message
Endpoint: /message
Method: POST
Request:

Parameters:
to (string, required): The recipient's phone number in the format '+91XXXXXXXXXX'.
message (string, required): The message to be delivered via WhatsApp.
Example Request:

json
Copy code
POST /message
{
  "to": "+919876543210",
  "message": "This is an automated WhatsApp message."
}
Response:

Success Response (HTTP 200 OK):
success (boolean): Indicates if the message was sent successfully.
message (string): A success or error message.
Example Response (Success):

json
Copy code
HTTP 200 OK
{
  "success": true,
  "message": "Message sent successfully"
}
Error Response (HTTP 400 Bad Request):
success (boolean): Indicates if the message delivery failed.
message (string): An error message.
Example Response (Error):

json
Copy code
HTTP 400 Bad Request
{
  "success": false,
  "message": "Invalid Indian phone number"
}
2. Send Text Message
Endpoint: /text
Method: POST
Request:

Parameters:
to (string, required): The recipient's phone number in the format '+91XXXXXXXXXX'.
message (string, required): The message to be delivered via SMS.
Example Request:

json
Copy code
POST /text
{
  "to": "+919876543210",
  "message": "This is an automated SMS message."
}
Response:

Success Response (HTTP 200 OK):
success (boolean): Indicates if the message was sent successfully.
message (string): A success or error message.
Example Response (Success):

json
Copy code
HTTP 200 OK
{
  "success": true,
  "message": "Message sent successfully"
}
Error Response (HTTP 400 Bad Request):
success (boolean): Indicates if the message delivery failed.
message (string): An error message.
Example Response (Error):

json
Copy code
HTTP 400 Bad Request
{
  "success": false,
  "message": "Invalid Indian phone number"
}
3. Make a Voice Call
Endpoint: /call
Method: POST
Request:

Parameters:
to (string, required): The recipient's phone number in the format '+91XXXXXXXXXX'.
message (string, required): The message to be delivered via voice call.
Example Request:

json
Copy code
POST /call
{
  "to": "+919876543210",
  "message": "This is an automated voice call message."
}
Response:

This endpoint initiates a voice call to the provided phone number using Twilio's API.
Error Handling
The API returns appropriate error messages for invalid phone numbers or other errors. Be sure to check the success field in the response to determine the success or failure of the request.

Technologies Used
Express.js for the backend server.
CORS for handling cross-origin requests.
Twilio for sending messages and making voice calls.
dotenv for environment variable management.
Running the Application
The application listens on port 9000. Make sure to set up the required environment variables, such as accountSid, authToken, and PORT, in a .env file before running the application.

Usage
To use this API, make POST requests to the respective endpoints (/message, /text, /call) with the required parameters as described in the examples above.

This documentation provides an overview of the available API endpoints and their usage. Please make sure to set up the necessary environment variables and handle error responses appropriately in your frontend application.




