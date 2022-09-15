const express = require("express");
const app = express();
const cors = require("cors")
const connect =  require("./db/connect")
const router = require("./router/userRouter")
const cookieParser = require("cookie-parser");
app.use(cors({origin: 'https://postiit.netlify.app', credentials:true, exposedHeaders:['Set-Cookie', 'Date', 'ETag']}))
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(router)
connect(app)