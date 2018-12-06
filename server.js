const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true, // only for development
    schema
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
