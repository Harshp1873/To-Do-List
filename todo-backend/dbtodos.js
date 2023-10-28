const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        todo: {
            type: String,
            required: true,
        },
        completion: {
            type: Boolean,
            default: false
        },
        deviceID: {
            type: String,
            default: false
        }

        
    },
    {timestamps: true}
)


// const dbtodos = new mongoose.model("todos",todoSchema)



// module.exports = dbtodos;
module.exports = mongoose.model("todos", todoSchema);

// module.exports = userdb;
