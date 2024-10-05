const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/User')
const HocSinh = require('../model/HocSinh')

let refreshTokens = [];

const authController = {
      createAccount: async(req, res) =>{  
            try{
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            const newUser = await new User({
                  userName: req.body.userName,
            password: hashed,
            HocSinh:req.body.HocSinh,
            GiaoVien:req.body.GiaoVien,
            VienChuc:req.body.VienChuc,
            ChucVu:req.body.ChucVu
            });      
            //Save to DB
            const user = await newUser.save();
           return res.status(200).json(user)
      }catch(err){
           return res.status(500).json(err)
      }
     
    },

      //Generate Access Taken
      generateAccessToken: (user) =>{
            return jwt.sign(
                  {
                        id: user.id,
                        role: user.role
                  },
                  process.env.JWT_ACCESS_KEY,
                  {
                        expiresIn:"30d"
                  }                 
            )
      },
      //Generate Refresh token
      generateRefreshToken: (user) =>{
            return jwt.sign(
                  {
                        id: user.id,
                        role: user.role
                  },
                  process.env.JWT_REFRESH_KEY,
                  {
                        expiresIn:"365d"
                  }                 
            )
      },

      //LOGIN
      login: async(req, res) =>{
            try{
                  // const HocSinh = await HocSinh.findOne({TaiKhoan: req.body.TaiKhoan})
                const user = await User.findOne({userName: req.body.userName}).populate('ChucVu')
                if(user.ChucVu.MaChucVu === "1"){
                  await user.populate('VienChuc')
                }else if(user.ChucVu.MaChucVu === "2"){
                  await user.populate('GiaoVien')
                }else if(user.ChucVu.MaChucVu === "3"){
                  await user.populate('HocSinh')
                }
                if(!user){
                 return res.status(404).json('Wrong username')
                }
                const validPassword = await bcrypt.compare(
                  req.body.password,
                  user.password
                )
                if(!validPassword){
                 return res.status(404).json('wrong password')
                }
                if(user && validPassword){
                  const accessToken =  authController.generateAccessToken(user)
                  const refreshToken =  authController.generateRefreshToken(user)
                  refreshTokens.push(refreshToken)
                  res.cookie("refreshToken", refreshToken,{
                        httpOnly:true,
                        secure:false,
                        path:"/",
                        sameSite:"strict",
                  })
                  

            const {password, ...others} = user._doc
                 return res.status(200).json({...others,accessToken })
                }
               

            }catch(err){
                return  res.status(500).json(err)
            }
             
      },

      requestRefreshToken: async(req, res) =>{
            // Take refresh token from user
            const refreshToken = req.cookies.refreshToken
            if(!refreshToken) return res.status(401).json("You're not authenticated")
            if(!refreshTokens.includes(refreshToken)){
                  res.status(403).json("Refresh token is valid")
            }
            jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) =>{
                  if(err){
                        console.log(err)
                  }
                  refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
                  refreshTokens.push(refreshToken)

                  const newAccessToken = authController.generateAccessToken(user)
                  const newRefreshToken = authController.generateRefreshToken(user)
                  res.cookie("refreshToken", newRefreshToken,{
                        httpOnly:true,
                        secure:false,
                        path:"/",
                        sameSite:"strict",
                  })
                  res.status(200).json({accessToken: newAccessToken})
      })    
      },

      logOut: async(req, res) =>{
            res.clearCookie("refreshToken")
            refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken)
            res.status(200).json("Logged out!")
      }


}



module.exports = authController;