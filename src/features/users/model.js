
import mongoose, { version } from "mongoose";
const UserSchema = new mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

    role: {
        type: String,
        enum: ['admin', 'Entry'],
        required: true,
        default: 'Entry'
    },
}, 
    {timestamps: true, versionKey: false}
);

// HAShing passowrds

    UserSchema.pre('save', async function(next) {
        if(!this.isModified('password')) return next(); 
        this.password = await bcrypt.hash(this.password, 10);
        next();
    });

    const model = mongoose.model('User', UserSchema);

 export default model;
