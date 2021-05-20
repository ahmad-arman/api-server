'use strict';
const { server } = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(server);
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOOSE_TEST_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
// }, async () => {// delete everything from db after tests
//   await mongoose.connection.db.dropDatabase();
});





describe('Server Module', ()=> {
    it(' should return 404 on a bad route', async ()=> {

        let response = await request.get('/any-rout-not-found');
        expect(response.status).toEqual(404);

    });
    it(' should  return 404 on a bad method', async ()=> {

        let response = await request.delete('/api/v1/food');
        expect(response.status).toEqual(404);

    });

    
});
let _id;

describe('server', () => {

    afterAll(() => {// we need to close the connection after tests
        mongoose.connection.close();
      });
  
    it('should create a new food using post request', async () => {
        //arrange
        let food = {
            name: 'meats',
            role: 'romani'
        }
        //act
        const response = await request.post('/api/v1/food').send(food);
        //assert
        // console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',response.body);
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('meats');
        expect(response.body.role).toEqual('romani');
        expect(response.body._id.length).toBeGreaterThan(0);

        _id = response.body._id;
    });

   

   

    it('should read all food using get request', async () => {

       
        //arrange
        let food = {
            name: 'meats',
            role: 'romani'
        }
        //act
        const response = await request.get('/api/v1/food').send(food);
        //assert
        // console.log('adddddddddddddddddd',response.body);
        expect(response.status).toEqual(200);
        expect(response.body[response.body.length-1].name).toEqual('meats');
        expect(response.body[response.body.length-1].role).toEqual('romani');
        expect(response.body[response.body.length-1]._id.length).toBeGreaterThan(0);

        // id = response.body.id;
    });

    it('should read  food using get request', async () => {

       
        //arrange
        let food = {
            name: 'meats',
            role: 'romani'
        }
        //act
        const response = await request.get(`/api/v1/food/${_id}`).send(food);
        //assert
        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',response.body);
        expect(response.status).toEqual(200);
        expect(response.body[0].name).toEqual('meats');
        expect(response.body[0].role).toEqual('romani');
        expect(response.body[0]._id.length).toBeGreaterThan(0);

        // id = response.body.id;
    });


    it('should update a food using put request', async () => {
        //arrange
        let editFood = {
            name: 'meats',
            role: 'romani'
        };
        //act
        const response = await request.put(`/api/v1/food/${_id}`)
            .send(editFood);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body.role).toEqual('romani');
    });

    it('should delete a food using delete request', async () => {

        //arrange
        let editFood = {
            name: 'meats',
            role: 'romani'
        };
        //act
        const response = await request.delete(`/api/v1/food/${_id}`)
            .send(editFood);
        //asert
        // console.log(response.body,"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('meats');
    });



    it('should create a new clothes using post request', async () => {
        //arrange
        let food = {
            name: 'meats',
            role: 'romani'
        }
        //act
        const response = await request.post('/api/v1/clothes').send(food);
        //assert
        console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',response.body);
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('meats');
        expect(response.body.role).toEqual('romani');
        expect(response.body._id.length).toBeGreaterThan(0);

        _id = response.body._id;
    });

   

   

    it('should read all clothes using get request', async () => {

       
        //arrange
        let food = {
            name: 'meats',
            role: 'romani'
        }
        //act
        const response = await request.get('/api/v1/clothes').send(food);
        //assert
        // console.log('adddddddddddddddddd',response.body);
        expect(response.status).toEqual(200);
        expect(response.body[response.body.length-1].name).toEqual('meats');
        expect(response.body[response.body.length-1].role).toEqual('romani');
        expect(response.body[response.body.length-1]._id.length).toBeGreaterThan(0);

        // id = response.body.id;
    });

    it('should read  clothes using get request', async () => {

       
        //arrange
        let food = {
            name: 'jacket',
            role: 'red'
        }
        //act
        const response = await request.get(`/api/v1/clothes/${_id}`).send(food);
        //assert
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',response.body);
        expect(response.status).toEqual(200);
        expect(response.body[0].name).toEqual('meats');
        expect(response.body[0].role).toEqual('romani');
        expect(response.body[0]._id.length).toBeGreaterThan(0);

        // id = response.body.id;
    });


    it('should update a clothes using put request', async () => {
        //arrange
        let editFood = {
            name: 'meats',
            role: 'romani'
        };
        //act
        const response = await request.put(`/api/v1/clothes/${_id}`)
            .send(editFood);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body.role).toEqual('romani');
    });

    it('should delete a clothes using delete request', async () => {

        //arrange
        let editFood = {
            name: 'meats',
            role: 'romani'
        };
        //act
        const response = await request.delete(`/api/v1/clothes/${_id}`)
            .send(editFood);
        //asert
        // console.log(response.body,"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('meats');
    });



    
});





