import { SchemaComposer } from "graphql-compose";
import { graphqlHTTP } from "express-graphql";

const schemaComposer = new SchemaComposer();

import { FruitQuery, FruitMutation } from "./fruits/FruitsGraphQLContorller.js";

schemaComposer.Query.addFields({
  ...FruitQuery,
});

schemaComposer.Mutation.addFields({
  ...FruitMutation,
});

export default (app) => {
  const schema = schemaComposer.buildSchema();

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
};
