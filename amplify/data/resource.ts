import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Service: a
    .model({
      serviceId: a.id(),
      name: a.string().required(),
      image: a.string().required(),
      price: a.float().required(),
      description: a.string().required(),
      time: a.float().required(),
      typeService: a.string().required(),
      typePrice: a.string().required(),
      available: a.boolean().required(),
      serviceid:a.id(),
      customer: a.hasOne('Order', 'tripId'),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.publicApiKey().to(["read"]),
    ]),

  Order: a
    .model({
      name: a.string().required(),
      email: a.string().required(),
      phone: a.string().required(),
      tripId: a.id().required(),
      datepickup: a.string().required(),
      addresspickup: a.string().required(),
      addressdrop: a.string().required(),
      todo:a.boolean().required(),
      time:a.string().required(),
      serviceId:a.belongsTo('Service', 'tripId'),
    })
    .authorization((allow) => [
      allow.publicApiKey(),
    ]),

});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
