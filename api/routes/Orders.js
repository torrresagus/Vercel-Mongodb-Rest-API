const express = require('express')
const Orders = require('../models/Orders')

const router = express.Router()


router.get('/', (req, res) => {
   Orders.find()
    .exec()
    .then(x => {
        res.status(200).send(x)
    })
    .catch(err => {
        res.status(500).send({
            error: err
        })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Orders.findById(id)
    .exec()
    .then(x => {
        res.status(200).send(x)
    })
    .catch(err => {
        res.status(500).send({
            error: err
        })
    })
})

router.post('/', (req, res) => {
    Orders.create(req.body)
    .then(x => {
        res.status(201).send(x)
    })
    .catch(err => {
        res.status(500).send({
            error: err
        })
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    Orders.findOneAndUpdate(id, req.body)
    .then(() => res.sendStatus(204))
    .catch(err => {
        res.status(500).send({
            error: err
        })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Orders.findOneAndDelete(id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(err => {
        res.status(500).send({
            error: err
        })
    })
})

module.exports = router
