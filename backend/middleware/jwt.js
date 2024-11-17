import jwt from 'jsonwebtoken'
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) {
            return res.status(401).json("Not authenticated");
        }

        jwt.verify(token,process.env.JWT_KEY,(err,payload)=>{
            if(err){
                return res.status(403).json("token is not valid");
            }
            req.userId = payload.id;
            req.isSeller = payload.isSeller;
        })
        next();
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
};

