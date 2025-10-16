import express from 'express'
import "./config/dotenv.js";
import giftsRouter from './routes/gifts.js'
import cors from 'cors';


const app = express()
app.use(express.json()); //CHANGED THIS --> HAS TO COME BEFORE Otherwise, req.body will be undefined when your controller tries to destructure it.


app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

app.use('/gifts', giftsRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

