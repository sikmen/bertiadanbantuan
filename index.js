import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ credentials:true, origin:'*'}));
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(port, ()=> console.log('Server Up and Running'));