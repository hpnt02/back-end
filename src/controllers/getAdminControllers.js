const HocSinh = require("../model/HocSinh");
const LopHoc = require('../model/LopHoc')
const Nganh = require('../model/Nganh')
const Khoa = require('../model/Khoa')
const GiaoVien = require('../model/GiaoVien')
const MonHoc = require('../model/MonHoc')
const PhuHuynh = require('../model/PhuHuynh')
const User = require('../model/User')
const VienChuc = require('../model/VienChuc')
const LichHoc = require('../model/LichHoc')
const NamHoc = require('../model/NamHoc')
const HocKy = require('../model/HocKy');
const HSLH = require("../model/HSLH");
const Diem = require("../model/Diem");
const LoaiDiem = require("../model/LoaiDiem");
const HSMH = require("../model/HSMH");
const LoiViPham = require("../model/LoiViPham");
const DRL = require("../model/DRL");


const getAdminController = {

    //Lấy ra tất cả tài khoản hiện có
    getAccount: async (req, res) => {
      try {
          const user = await User.find();
          res.status(200).json(user);
      } catch (err) {
          res.status(500).json(err);
      }
  },

  //Lây ra năm học
  getNamHoc: async (req, res) => {
    try {
        const namhoc = await NamHoc.find().sort({'_id':-1});
        res.status(200).json(namhoc);
    } catch (err) {
        res.status(500).json(err);
    }
},

getHocKy: async (req, res) => {
  try {
      const hocky = await HocKy.find();
      res.status(200).json(hocky);
  } catch (err) {
      res.status(500).json(err);
  }
},


    getHocSinh: async (req, res) => {
      try {
        const hocsinh = await HocSinh.find();
        res.status(200).json(hocsinh);
    } catch (err) {
        res.status(500).json(err);
    }
      },

    getLop: async (req, res) => {
        try {
            const lophoc = await LopHoc.find();
            res.status(200).json(lophoc);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getNganh: async (req, res) => {
        try {
            const nganh = await Nganh.find();
            
            res.status(200).json(nganh);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getKhoa: async (req, res) => {
        try {
            const khoa = await Khoa.find();
    
            
            res.status(200).json(khoa);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getGiaoVien: async (req, res) => {
      try {
        const giaovien = await GiaoVien.find();
        res.status(200).json(giaovien);
    } catch (err) {
        res.status(500).json(err);
    }
    },

    getVienChuc: async (req, res) => {
      try {
          const vienchuc = await VienChuc.find();
          res.status(200).json(vienchuc);
      } catch (err) {
          res.status(500).json(err);
      }
  },

  getLichHoc: async (req, res) => {
    try {
        const lichhoc = await LichHoc.find().sort({'Thu':1});
        res.status(200).json(lichhoc);
    } catch (err) {
        res.status(500).json(err);
    }
},

getHSTLH: async (req, res) => {
  try {
      const hocsinhtlophoc = await HSLH.find();
      res.status(200).json(hocsinhtlophoc);
  } catch (err) {
      res.status(500).json(err);
  }
},


getHSMH: async (req, res) => {
  try {
      const hsmh = await HSMH.find();
      res.status(200).json(hsmh);
  } catch (err) {
      res.status(500).json(err);
  }
},

getDiem: async (req, res) => {
  try {
      const diemtheomon = await Diem.find();
      res.status(200).json(diemtheomon);
  } catch (err) {
      res.status(500).json(err);
  }
},

getLoaiDiem: async (req, res) => {
  try {
      const loaidiem = await LoaiDiem.find();
      res.status(200).json(loaidiem);
  } catch (err) {
      res.status(500).json(err);
  }
},

    getMonHoc: async (req, res) => {
      try {
        const loaidiem = await MonHoc.find();
        res.status(200).json(loaidiem);
    } catch (err) {
        res.status(500).json(err);
    }
  },
      
      

      getPhụHuynh: async (req, res) => {
        try {
            const phuhuynh = await PhuHuynh.find();
            res.status(200).json(phuhuynh);
        } catch (err) {
            res.status(500).json(err);
        }
      },

      getLoiViPham: async (req, res) => {
        try {
            const loivipham = await LoiViPham.find();
            res.status(200).json(loivipham);
        } catch (err) {
            res.status(500).json(err);
        }
      },

      getDRL: async (req, res) => {
        try {
            const diemrenluyen = await DRL.find();
            res.status(200).json(diemrenluyen);
        } catch (err) {
            res.status(500).json(err);
        }
      },
}

module.exports = getAdminController;