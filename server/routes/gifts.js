import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftData from '../data/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json(giftData)
})

router.get('/:giftId', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../../client/gift.html'))
})


export default router