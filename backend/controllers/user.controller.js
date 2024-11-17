import userModel from "../models/userModel.js";

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if(req.userId !== user._id){
            return res.status(403).json("You can delete only your account!");
        }
        res.status(200).json("User has been deleted");
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
};

export default deleteUser;