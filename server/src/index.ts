import express from "express";
import { routes } from "./features/routes";


const app = express()
const port = 3000

app.use(express.json());
/*app.get('/', (_req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello World! and goodbye')
})*/
app.use("/", routes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})