const express = require("express");
const app = express();
const port = 3000;
//uuid
const { v4: uuidv4 } = require("uuid");
// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to initiate contact
app.post("/initiate-contact", (req, res) => {
  // Logic to initiate contact goes here
  const {
    LanguagePreference,
    Username,
    OrganizationId,
    CallbackUrl,
    ClientIdentifier,
  } = req.body;
  const data = {
    LanguagePreference,
    Username,
    OrganizationId,
    CallbackUrl,
    ClientIdentifier,
  };
  console.log("===================");
  console.log("Initiated contact:", data);
  console.log("===================");
  res.send({ ContactId: uuidv4() });
});

// Endpoint to handle messages for a specific contact ID
app.post("/:contactId/messages", (req, res) => {
  const { contactId } = req.params;
  const { Content, OrganizationId } = req.body;
  const data = {
    contactId,
    Content,
    OrganizationId,
  };
  console.log("===================");
  console.log("Received message:", data);
  console.log("===================");
  res.status(200).send();
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
