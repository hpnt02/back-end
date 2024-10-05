

const User = require('../model/User')
const HocSinh = require('../model/HocSinh')
const Diem = require('../model/Diem')
const MonHoc = require('../model/MonHoc')
const LopHoc = require('../model/LopHoc')
const Nganh = require('../model/Nganh')
const Khoa = require('../model/Khoa')
const HSLH = require('../model/HSLH')
const LichHoc= require('../model/LichHoc')
const GiaoVien= require('../model/GiaoVien')
const LoiViPham= require('../model/LoiViPham')


const userController = {
    getAllUser: async(req, res)=>{
        try{
             user = await HocSinh.findById({ _id: req.params.id }).populate('LopHoc').populate('PhuHuynh')
            // Trả về thông tin học sinh
            res.status(200).json(user);
        }catch(err){
                res.status(500).json(err)
        }
    },

    getLopHoc: async(req, res)=>{
        try{
             user = await LopHoc.findById({ _id: req.params.id }).populate('GiaoVien')
            // Trả về thông tin học sinh
            res.status(200).json(user);
        }catch(err){
                res.status(500).json(err)
        }
    },

    getNganh: async(req, res)=>{
        try{
             user = await Nganh.findById({ _id: req.params.id }).populate('Khoa')
            // Trả về thông tin học sinh
            res.status(200).json(user);
        }catch(err){
                res.status(500).json(err)
        }
    },

    getKhoa: async(req, res)=>{
        try{
             user = await Khoa.findById({ _id: req.params.id })
            // Trả về thông tin học sinh
            res.status(200).json(user);
        }catch(err){
                res.status(500).json(err)
        }
    },

    getHSLH: async (req, res) => {
        try {
          const user = await HSLH.find({ HocSinh: req.params.HocSinh }).populate({
            path: 'LichHoc',
            populate: [
              { path: 'LopHoc' },    
              {path:'GiaoVien'},
              {path:'MonHoc'},               
              { path: 'NamHoc' },
              { path: 'HocKy' }
              // Thêm các trường con khác mà bạn muốn lấy ở đây
            ]
          });
      
          // Trả về thông tin học sinh
          res.status(200).json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    
      //Lấy điểm học sinh

      getDiem: async (req, res) => {
        try {
          const user = await Diem.find({ HocSinh: req.params.HocSinh }).populate('LoaiDiem').populate('MonHoc').populate('NamHoc').populate('HocKy');
          // Trả về thông tin học sinh
          res.status(200).json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      update: async (req, res) => {
        try {
          const hocSinh = await HocSinh.findByIdAndUpdate(
            req.params.id, // ID của học sinh cần cập nhật
            { MaHS: req.body.MaHS,
              HoHS: req.body.HoHS ,
              TenHS: req.body.TenHS ,
               NgaySinh: req.body.NgaySinh,
               GioiTinh: req.body.GioiTinh,
               DiaChi: req.body.DiaChi,
               CCCD: req.body.CCCD,
               LopHoc: req.body.LopHoc,
              updateAt: Date.now()
              },
            // Dữ liệu mới cho trường MaHS
            { new: true } // Tùy chọn để trả về học sinh đã được cập nhật
          );
          if (!hocSinh) {
            return res.status(404).json({ message: "Không tìm thấy học sinh" });
          }
          return res.status(200).json(hocSinh);
        } catch (err) {
          return res.status(500).json(err);
        }
      },

      updateGiaoVien: async (req, res) => {
        try {
          const giaovien = await GiaoVien.findByIdAndUpdate(
            req.params.id, // ID của học sinh cần cập nhật
            { MaGV: req.body.MaGV,
              HoGV: req.body.HoGV,
              TenGV: req.body.TenGV,
               NgaySinh: req.body.NgaySinh,
               GioiTinh: req.body.GioiTinh,
               DiaChi: req.body.DiaChi,
               SDT: req.body.SDT,
               CCCD: req.body.CCCD,
               Khoa: req.body.Khoa,
                updateAt: Date.now()
              },
            // Dữ liệu mới cho trường MaHS
            { new: true } // Tùy chọn để trả về học sinh đã được cập nhật
          );
          if (!giaovien) {
            return res.status(404).json({ message: "Không tìm thấy giao viên" });
          }
          return res.status(200).json(giaovien);
        } catch (err) {
          return res.status(500).json(err);
        }
      },

      updateLopHoc: async (req, res) => {
        try {
          const lophoc = await LopHoc.findByIdAndUpdate(
            req.params.id, // ID của học sinh cần cập nhật
            { MaLopHoc: req.body.MaLopHoc,
              TenLopHoc: req.body.TenLopHoc ,
              GiaoVien: req.body.GiaoVien ,
               Nganh: req.body.Nganh,
               update: Date.now()
             },
            // Dữ liệu mới cho trường MaHS
            { new: true } // Tùy chọn để trả về học sinh đã được cập nhật
          );
          if (!lophoc) {
            return res.status(404).json({ message: "Không tìm thấy lớp học" });
          }
          return res.status(200).json(lophoc);
        } catch (err) {
          return res.status(500).json(err);
        }
      },

      updateNganh: async (req, res) => {
        try {
          const nganh = await Nganh.findByIdAndUpdate(
            req.params.id, // ID của học sinh cần cập nhật
            { MaNganh: req.body.MaNganh,
              TenNganh: req.body.TenNganh ,
               Khoa: req.body.Khoa,
               update: Date.now()
             },
            // Dữ liệu mới cho trường MaHS
            { new: true } // Tùy chọn để trả về học sinh đã được cập nhật
          );
          if (!nganh) {
            return res.status(404).json({ message: "Không tìm thấy nganh" });
          }
          return res.status(200).json(nganh);
        } catch (err) {
          return res.status(500).json(err);
        }
      },
      updateKhoa: async (req, res) => {
        try {
          const khoa = await Khoa.findByIdAndUpdate(
            req.params.id, // ID của học sinh cần cập nhật
            { MaKhoa: req.body.MaKhoa,
              TenKhoa: req.body.TenKhoa,
              update: Date.now()
             },
            // Dữ liệu mới cho trường MaHS
            { new: true } // Tùy chọn để trả về học sinh đã được cập nhật
          );
          if (!khoa) {
            return res.status(404).json({ message: "Không tìm thấy khoa" });
          }
          return res.status(200).json(khoa);
        } catch (err) {
          return res.status(500).json(err);
        }
      },
      updateMonHoc: async (req, res) => {
        try {
          const monHoc = await MonHoc.findByIdAndUpdate(
            req.params.id, // ID của học sinh cần cập nhật
            { MaMonHoc: req.body.MaMonHoc,
              TenMonHoc:req.body.TenMonHoc,
              SoTC: req.body.SoTC,
              LyThuyet:req.body.LyThuyet,
              ThucHanh:req.body.ThucHanh,
              Thi:req.body.Thi,
              Nganh:req.body.Nganh,
              LoaiMonHoc:req.body.LoaiMonHoc,
              update: Date.now()
             },
            // Dữ liệu mới cho trường MaHS
            { new: true } // Tùy chọn để trả về học sinh đã được cập nhật
          );
          if (!monHoc) {
            return res.status(404).json({ message: "Không tìm thấy môn học" });
          }
          return res.status(200).json(monHoc);
        } catch (err) {
          return res.status(500).json(err);
        }
      },
    //Delete
    
    deleteUser: async (req, res) =>{
            try{
                 await HocSinh.findByIdAndDelete({ _id: req.params.id })
               res.status(200).json("Thành công") 
            } catch(err){
                res.status(500).json(err)
            }
    },


    deleteLopHoc: async (req, res) =>{
      try{
           await LopHoc.findByIdAndDelete({ _id: req.params.id })
         res.status(200).json("Thành công") 
      } catch(err){
          res.status(500).json(err)
      }
},

deleteMonHoc: async (req, res) =>{
  try{
       await MonHoc.findByIdAndDelete({ _id: req.params.id })
     res.status(200).json("Thành công") 
  } catch(err){
      res.status(500).json(err)
  }
},

deleteLoiViPham: async (req, res) =>{
  try{
       await LoiViPham.findByIdAndDelete({ _id: req.params.id })
     res.status(200).json("Thành công") 
  } catch(err){
      res.status(500).json(err)
  }
},

deleteNganh: async (req, res) =>{
  try{
       await Nganh.findByIdAndDelete({ _id: req.params.id })
     res.status(200).json("Thành công") 
  } catch(err){
      res.status(500).json(err)
  }
},

deleteKhoa: async (req, res) =>{
  try{
       await Khoa.findByIdAndDelete({ _id: req.params.id })
     res.status(200).json("Thành công") 
  } catch(err){
      res.status(500).json(err)
  }
},

deleteGiaoVien: async (req, res) =>{
  try{
       await GiaoVien.findByIdAndDelete({ _id: req.params.id })
     res.status(200).json("Thành công") 
  } catch(err){
      res.status(500).json(err)
  }
},

deleteHSLH: async (req, res) =>{
  try{
       await HSLH.findByIdAndDelete({ _id: req.params.id })
     res.status(200).json("Thành công") 
  } catch(err){
      res.status(500).json(err)
  }
},



deleteLichHoc: async (req, res) =>{
  try{
       await LichHoc.findByIdAndDelete({ _id: req.params.id })
     res.status(200).json("Thành công") 
  } catch(err){
      res.status(500).json(err)
  }
},

}


module.exports = userController;