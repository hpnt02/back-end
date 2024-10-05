const  moment =require('moment')
const User = require('../model/User')
const bcrypt = require('bcrypt')

//Model
const HocSinh = require('../model/HocSinh')
const ChucVu = require('../model/ChucVu')
const PhuHuynh = require('../model/PhuHuynh')
const GiaoVien = require('../model/GiaoVien')
const VienChuc = require('../model/VienChuc')
const LopHoc = require('../model/LopHoc')
const Nganh = require('../model/Nganh')
const MonHoc = require('../model/MonHoc')
const Khoa = require('../model/Khoa')
const LoaiDiem = require('../model/LoaiDiem')
const Diem = require('../model/Diem')
const HocKy = require('../model/HocKy')
const NamHoc = require('../model/NamHoc')
const LichHoc = require('../model/LichHoc')
const HSLH = require('../model/HSLH')
const HSMH = require('../model/HSMH')
const LoiViPham = require('../model/LoiViPham')
const DRL = require('../model/DRL')


const AdminControllers ={

    //Thêm mới học sinh
    createStudents: async(req, res) =>{  
        try{
            const ngaySinh = moment.utc(req.body.NgaySinh, 'DD/MM/YYYY').toDate();
           
            const newStudent = await new HocSinh({
                MaHS: req.body.MaHS,
                HoHS:req.body.HoHS,
                TenHS: req.body.TenHS,
                GioiTinh: req.body.GioiTinh,
                NgaySinh: ngaySinh,
                DiaChi: req.body.DiaChi,
                SDT: req.body.SDT,
                CCCD: req.body.CCCD,
                PhuHuynh: req.body.PhuHuynh,
                LopHoc: req.body.LopHoc
            });
            //Save to DB
            const students = await newStudent.save();
           return res.status(200).json(students)
      }catch(err){
           return res.status(500).json(err)
      }
},


  //Thêm mới phụ huynh
  createPhuHuynh: async(req, res) =>{  
    try{
        const newPhuHuynh = await new PhuHuynh({
            HocSinh:req.body.HocSinh,
            HoTenMe:req.body.HoTenMe,
            NgheNghiepMe: req.body.NgheNghiepMe,
            SDTMe: req.body.SDTMe,
            HoTenCha: req.body.HoTenCha,
            NgheNghiepCha: req.body.NgheNghiepCha,
            SDTCha: req.body.SDTCha,      
        });
        //Save to DB
        const PhuHuynhs= await newPhuHuynh.save();
       return res.status(200).json(PhuHuynhs)
  }catch(err){
       return res.status(500).json(err)
  }
},
    //Thêm mới giáo viên
    createTeachers: async(req, res) =>{  
        try{
            const ngaySinh = moment.utc(req.body.NgaySinh, 'DD/MM/YYYY').toDate();
            const newTeachers = await new GiaoVien({
                MaGV: req.body.MaGV,
                HoGV:req.body.HoGV,
                TenGV: req.body.TenGV,
                GioiTinh: req.body.GioiTinh,
                NgaySinh: ngaySinh,
                DiaChi: req.body.DiaChi,
                SDT: req.body.SDT,
                CCCD: req.body.CCCD,
               Khoa:req.body.Khoa
            });
            //Save to DB
            const teachers = await newTeachers.save();
           return res.status(200).json(teachers)
      }catch(err){
           return res.status(500).json(err)
      }
},

createVienChuc: async(req, res) =>{  
    try{
        const ngaySinh = moment.utc(req.body.NgaySinh, 'DD/MM/YYYY').toDate();
         
        const newVienChucs = await new VienChuc({
            MaVC: req.body.MaVC,
            HoVC:req.body.HoVC,
            TenVC: req.body.TenVC,
            GioiTinh: req.body.GioiTinh,
            NgaySinh: ngaySinh,
            DiaChi: req.body.DiaChi,
            SDT: req.body.SDT,
            CCCD: req.body.CCCD,
        });
        //Save to DB
        const vienchucs = await newVienChucs.save();
       return res.status(200).json(vienchucs)
  }catch(err){
       return res.status(500).json(err)
  }
},


    //Thêm quyền
    createChucVu: async(req, res) =>{  
    try{
    
        const newChucVu = await new ChucVu({
            MaChucVu: req.body.MaChucVu,
            TenChucVu:req.body.TenChucVu,
        });
        //Save to DB
        const ChucVus = await newChucVu.save();
       return res.status(200).json(ChucVus)
  }catch(err){
       return res.status(500).json(err)
  }
},
//Thêm lớp
createLopHoc: async(req, res) =>{  
    try{
    
        const newLopHoc = await new LopHoc({
            MaLopHoc: req.body.MaLopHoc,
            TenLopHoc:req.body.TenLopHoc,
            GiaoVien:req.body.GiaoVien,
            Nganh:req.body.Nganh
        });
        //Save to DB
        const LopHocs = await newLopHoc.save();
       return res.status(200).json(LopHocs)
  }catch(err){
       return res.status(500).json(err)
  }
},
    

//Thêm ngành
createNganh: async(req, res) =>{  
    try{
    
        const newNganh = await new Nganh({
            MaNganh: req.body.MaNganh,
            TenNganh:req.body.TenNganh,
            Khoa: req.body.Khoa
        });
        //Save to DB
        const Nganhs = await newNganh.save();
       return res.status(200).json(Nganhs)
  }catch(err){
       return res.status(500).json(err)
  }
},

createKhoa: async(req, res) =>{  
    try{
    
        const newKhoa = await new Khoa({
            MaKhoa: req.body.MaKhoa,
            TenKhoa:req.body.TenKhoa,
        });
        //Save to DB
        const Khoas = await newKhoa.save();
       return res.status(200).json(Khoas)
  }catch(err){
       return res.status(500).json(err)
  }
},
    
createMonHoc: async(req, res) =>{  
    try{
    
        const newMonHoc = await new MonHoc({
            MaMonHoc: req.body.MaMonHoc,
            TenMonHoc:req.body.TenMonHoc,
            SoTC: req.body.SoTC,
            LyThuyet:req.body.LyThuyet,
            ThucHanh:req.body.ThucHanh,
            Thi:req.body.Thi,
            Nganh:req.body.Nganh,
            LoaiMonHoc:req.body.LoaiMonHoc
        });
        //Save to DB
        const MonHocs = await newMonHoc.save();
       return res.status(200).json(MonHocs)
  }catch(err){
       return res.status(500).json(err)
  }
},


createLoaiDiem: async(req, res) =>{  
    try{
    
        const newLoaiDiem = await new LoaiDiem({
            MaLoaiDiem:req.body.MaLoaiDiem,
            TenLoaiDiem:req.body.TenLoaiDiem,
        });
        //Save to DB
        const LoaiDiems = await newLoaiDiem.save();
       return res.status(200).json(LoaiDiems)
  }catch(err){
       return res.status(500).json(err)
  }
},

createDiem: async(req, res) =>{  
    try{
    
        const newDiem = await new Diem({
            HocSinh:req.body.HocSinh,
            MonHoc:req.body.MonHoc,
            Diem: req.body.Diem,
            LoaiDiem: req.body.LoaiDiem,
            HocKy:req.body.HocKy,
            NamHoc:req.body.NamHoc

        });
        //Save to DB
        const Diems = await newDiem.save();
       return res.status(200).json(Diems)
  }catch(err){
       return res.status(500).json(err)
  }
},

createHocKy: async(req, res) =>{  
    try{
    
        const newHocKy = await new HocKy({
            MaHocKy:req.body.MaHocKy,
            TenHocKy:req.body.TenHocKy,
           
        });
        //Save to DB
        const HocKys = await newHocKy.save();
       return res.status(200).json(HocKys)
  }catch(err){
       return res.status(500).json(err)
  }
},

createNamHoc: async(req, res) =>{  
    try{
    
        const newNamHoc = await new NamHoc({
            MaNamHoc:req.body.MaNamHoc,
            TenNamHoc:req.body.TenNamHoc,
           
        });
        //Save to DB
        const NamHocs = await newNamHoc.save();
       return res.status(200).json(NamHocs)
  }catch(err){
       return res.status(500).json(err)
  }
},

createLichHoc: async(req, res) =>{  
    try{
        const ngayBD = moment.utc(req.body.NgayBD, 'DD/MM/YYYY').toDate();
       
        const newLichHoc = await new LichHoc({
            LopHoc: req.body.LopHoc,
            GiaoVien:req.body.GiaoVien,
            MonHoc:req.body.MonHoc,
            NhomHP:req.body.NhomHP,
            PhongHoc: req.body.PhongHoc,
            Thu: req.body.Thu,
            Tiet: req.body.Tiet,
            NamHoc: req.body.NamHoc,
            HocKy: req.body.HocKy,
            NgayBD:ngayBD
        });
        //Save to DB
        const LichHocs = await newLichHoc.save();
       return res.status(200).json(LichHocs)
  }catch(err){
       return res.status(500).json(err)
  }
},

createHSLH: async(req, res) =>{  
    try{
    
        const newHSLH = await new HSLH({
            HocSinh:req.body.HocSinh,
            LichHoc:req.body.LichHoc,
           
        });
        //Save to DB
        const HSLHs = await newHSLH.save();
       return res.status(200).json(HSLHs)
  }catch(err){
       return res.status(500).json(err)
  }
},


createHSMH: async(req, res) =>{  
    try{
       
        const newHSMH = await new HSMH({
            HocSinh:req.body.HocSinh,
            MonHoc: req.body.MonHoc,
            NamHoc: req.body.NamHoc,
            HocKy: req.body.HocKy,
        });
        //Save to DB
        const HSMHs = await newHSMH.save();
       return res.status(200).json(HSMHs)
  }catch(err){
       return res.status(500).json(err)
  }
},
  
createLoiViPham: async(req, res) =>{  
    const ngayViPham = moment.utc(req.body.NgayViPham, 'DD/MM/YYYY').toDate();
    try{
        const newLoiViPham = await new LoiViPham({
            HocSinh:req.body.HocSinh,
            MonHoc: req.body.MonHoc,
            GiaoVien: req.body.GiaoVien,
            TenLoi: req.body.TenLoi,
            NgayViPham: ngayViPham,
            NamHoc: req.body.NamHoc,
            HocKy: req.body.HocKy,
        });
        //Save to DB
        const LoiViPhams = await newLoiViPham.save();
       return res.status(200).json(LoiViPhams)
  }catch(err){
       return res.status(500).json(err)
  }
},

createDRL: async(req, res) =>{  
    try{
        const newDRL= await new DRL({
            HocSinh:req.body.HocSinh,
            DiemRenLuyen: req.body.DiemRenLuyen,
            NamHoc: req.body.NamHoc,
            HocKy: req.body.HocKy,
        });
        //Save to DB
        const DRLs = await newDRL.save();
       return res.status(200).json(DRLs)
  }catch(err){
       return res.status(500).json(err)
  }
},
  
   } 


module.exports = AdminControllers;