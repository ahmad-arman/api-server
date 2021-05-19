// 'use strict';
// const uuid = require('uuid').v4;//random

// class ClothesCon {
//     constructor() {
//         this.db = [];

//         // [{id:, data: {name, type, ...}}]
//     }

//     read(id) {
//         if (id) {
//             return this.db.find((myClothes) => myClothes.id === id);
//         } else {
//             return this.db;
//         }
//     }

//     create(obj) {
//         const clothesData = {
//             id: uuid(),
//             data: obj,
//         };
//         this.db.push(clothesData);
//         return clothesData;
//     }

//     delete(id) {
//         console.log(id);

//         this.db = this.db.filter((myClothes) => myClothes.id !== id);
//         return this.db;
//     }

//     update(id, obj) {
//         for (let i = 0; i < this.db.length; i++) {
//             let p = this.db[i];
//             if(p.id === id) {
//                 this.db[i].data = obj;
//                 return this.db[i];
//             } 
//         }
//     }
// }

// module.exports = ClothesCon;


'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String }
});

const clothesModel = mongoose.model('Clothes', clothesSchema);

module.exports = clothesModel;