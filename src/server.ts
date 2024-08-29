// src/server.ts
import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`FIFA WWC API listening at http://localhost:${port}`)
);