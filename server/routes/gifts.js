import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import GiftsController from '../controllers/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../../client/gift.html'))
})


export default router