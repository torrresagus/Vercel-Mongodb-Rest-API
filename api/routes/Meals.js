const express = require('express')
const Meals = require('../models/Meals')

const router = express.Router()


router.get('/', (req, res) => {
   Meals.find()
    .exec()
    .then(x => {
        res.status(200).send(x)
    })
/*    .catch(err => {
        res.status(500).send({
            error: err
        })
    })
*/
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Meals.findById(id)
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
    Meals.create(req.body)
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
    Meals.findOneAndUpdate({ _id: id }, req.body)
    .then(() => res.sendStatus(204))
    .catch(err => {
        res.status(500).send({
            error: err
        })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Meals.findOneAndDelete({ _id: id })
    .exec()
    .then(() => res.sendStatus(204))
    .catch(err => {
        res.status(500).send({
            error: err
        })
    })
})

module.exports = router
