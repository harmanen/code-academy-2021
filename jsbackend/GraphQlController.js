import { SchemaComposer } from "graphql-compose";
import { graphqlHTTP } from "express-graphql";

const schemaComposer = new SchemaComposer();

import { FruitQuery, FruitMutation } from "./fruits/FruitsGraphQLContorller.js";
import { CarQuery, CarMutation } from "./cars/CarsGraphQLContorller.js";

schemaComposer.Query.addFields({
  ...FruitQuery,
  ...CarQuery,
});

schemaComposer.Mutation.addFields({
  ...FruitMutation,
  ...CarMutation,
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
