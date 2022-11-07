import mongoose from 'mongoose';


//interface is a 
interface Ilotrcharacter {
    name: string
    helmet: string
    timestamp: number
    weapon: string
    level: number
    
}

interface lotrModelInterface extends mongoose.Model<lotrDoc>{
    build(attr: Ilotrcharacter): lotrDoc
}

interface lotrDoc extends mongoose.Document {
    name: string
    helmet: string
    timestamp: number
    weapon: string
    level: number
}
//Schema is like a struct in python, essentially its a blueprint
const lotrSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    helmet:{
        type: String,
        required: true
    },
    timestamp:{
        type: Number,
        required: true
    },
    level:{
        type: Number,
        required: true
    },
    weapon:{
        type: String,
        required: true
    }

})

lotrSchema.statics.build=(attr: Ilotrcharacter) => {
    return new Lotr(attr)
}

const Lotr = mongoose.model<lotrDoc, lotrModelInterface>('lotr', lotrSchema)


const build = (attr: Ilotrcharacter) => {
    return new Lotr(attr)
}


export { Lotr }