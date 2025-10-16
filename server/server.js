import express from 'express'
import "./config/dotenv.js";
import giftsRouter from './routes/gifts.js'
import cors from 'cors';


const app = express()

app.use(cors());
app.use(express.json()); //CHANGED THIS --> HAS TO COME BEFORE 



app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

app.use('/gifts', giftsRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

