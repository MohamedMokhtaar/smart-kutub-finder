
import UserModel  from "./model.js";

export const createUser = async (req, res) => {
    try {
        const user = new UserModel.create(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ status: "failed", message: error.message });
    }
}
