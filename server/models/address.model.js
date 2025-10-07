import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address_line : {
        tupe : String,
        default :""
    },
    city : {
        type : String,
        default :""
    },
    state :{
        type : String,
        default :""
    },
    pincode :{
        Type :String
    },
    country :{
        type : String
    },
    mobile : {
        type : Number,
        default: null
    },
    status : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

const AddreesModel = mongoose.model('address', addressSchema)

export default AddressModel