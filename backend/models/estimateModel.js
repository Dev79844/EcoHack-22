const mongoose = require('mongoose');

const Schema =mongoose.Schema
const estimateSchema = new Schema({
    energyperunitsofGDP : {
            type: Float32Array,
            required: true
    },
    energyuseperCapita : {
        type: Float32Array,
        required: true
},
co2emissions : {
    type: Float32Array,
    required: true
},
c02emissionsperCapita : {
    type: Float32Array,
    required: true
},
c02emissionsperunitGDP : {
    type: Float32Array,
    required: true
},
otherghgemissions : {
    type: Float32Array,
    required: true
},
methanech4 : {
    type: Float32Array,
    required: true
},
no2emissions : {
    type: Float32Array,
    required: true
},
avgannualppt : {
    type: Float32Array,
    required: true
},
investinEnergywithPrivate : {
    type: Float32Array,
    required: true
}
})

module.exports = mongoose.model('estimates',estimateSchema);