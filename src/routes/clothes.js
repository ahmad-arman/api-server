// 'use strict';

// const express = require('express');

// const ClothesCon = require('../models/food');
// const myClothes = new ClothesCon();//object
// const router = express.Router();

// router.get('/', getMyClothes);
// router.get('/:id', getOneClothesWithId);
// router.post('/', createClothes);
// router.put('/:id', updateClothes);
// router.delete('/:id', deleteClothes);

// // controller
// function deleteClothes(req, res) {
//     const resObj = myClothes.delete(req.params.id);
//     res.json(resObj);
// }

// function updateClothes(req, res) {
//     const personObj = req.body;
//     const resObj = myClothes.update(req.params.id, personObj);
//     res.json(resObj);
// }

// function createClothes(req, res) {
//     const personObj = req.body;
//     const resObj = myClothes.create(personObj);
//     res.status(201).json(resObj);
// }

// function getMyClothes(req, res) {
//     const resObj = myClothes.read();
//     res.json(resObj);
// }

// function getOneClothesWithId(req, res) {
//     const resObj = myClothes.read(req.params.id);
//     res.json(resObj);
// }

// module.exports = router;

'use strict';

const express = require('express');
const DataManger = require('../models/mangerData.js');
const clothesModel = require('../models/clothes.js');
const mangerData = new DataManger(clothesModel);
const router = express.Router();

router.get('/', getMyClothes);
router.get('/:id', getMyClothesWithId);
router.post('/', createMyClothes);
router.put('/:id', updateMyClothes);
router.delete('/:id', deleteMyClothes);

// controller
async function getMyClothes(req, res, next) {
    try {
        const resObj = await mangerData.read();
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function getMyClothesWithId(req, res, next) {
    try {
        const resObj = await mangerData.read(req.params.id);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function createMyClothes(req, res, next) {
    try {
        const personObj = req.body;
        const resObj = await mangerData.create(personObj);
        res.status(201).json(resObj);
    } catch (error) {
        next(error);
    }
}

async function updateMyClothes(req, res, next) {
    try {
        const personObj = req.body;
        const resObj = await mangerData.update(req.params.id, personObj);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function deleteMyClothes(req, res, next) {
    try {
        const resObj = await mangerData.delete(req.params.id);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

module.exports = router;
