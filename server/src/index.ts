import express from "express";
import cors from "cors"
import { routes } from "./routes/routes";

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  methods: ['GET','POST','PUT','DELETE'], // optional
  credentials: true // if you need cookies/auth
}));


app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});