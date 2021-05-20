
'use strict';

const express = require('express');
const DataManger = require('../models/mangerData.js');
const foodModel = require('../models/food.js');
const mangerData = new DataManger(foodModel);
const router = express.Router();

router.get('/', getMyFood);
router.get('/:id', getMyFoodWithId);
router.post('/', createMyFood);
router.put('/:id', updateMyFood);
router.delete('/:id', deleteMyFood);

// controller
async function getMyFood(req, res, next) {
    try {
        const resObj = await mangerData.read();
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function getMyFoodWithId(req, res, next) {
    try {
        const resObj = await mangerData.read(req.params.id);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function createMyFood(req, res, next) {
    try {
        const personObj = req.body;
        const resObj = await mangerData.create(personObj);
        res.status(201).json(resObj);
    } catch (error) {
        next(error);
    }
}

async function updateMyFood(req, res, next) {
    try {
        const personObj = req.body;
        const resObj = await mangerData.update(req.params.id, personObj);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function deleteMyFood(req, res, next) {
    try {
        const resObj = await mangerData.delete(req.params.id);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

module.exports = router;
