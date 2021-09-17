import mongoose from "mongoose";

interface ITodo {
    title: string;
    desc: string;
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
    build(attr: ITodo):TodoDoc
}

interface TodoDoc extends mongoose.Document {
    title: string;
    desc:string;
}
const todoSchema = new mongoose.Schema({

    imei:{
        type: Number,
        required: true
    },
    isActive: {
        type: String,
        required: true
    },
    imsi: {
        type: Number,
        required: true
    },
    Adhar: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    registered: {
        type: Number,
        required: true
    },
    updated: {
        type: Number,
        required: true
    }

})

todoSchema.statics.build = (attr: ITodo) => {
    return new Devices(attr)
}

const Devices = mongoose.model<any, todoModelInterface>('Devices', todoSchema)

// const build = (attr:ITodo) =>{
//     return new Todo (attr)
// }


Devices.build({
    title: "Some title",
    desc: "Some Description"
})

export { Devices };