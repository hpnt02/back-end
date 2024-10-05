const router = require('express').Router()
const AdminControllers = require('../controllers/adminControllers')
const getAdminController = require('../controllers/getAdminControllers')
const AdminManyControllers = require('../controllers/DiemMany')
//Các phương thức get để lấy api
router.get("/DSHS", getAdminController.getHocSinh)
router.get("/getlop", getAdminController.getLop)
router.get("/getnganh", getAdminController.getNganh)
router.get("/getkhoa", getAdminController.getKhoa)
router.get("/giaovien", getAdminController.getGiaoVien)
router.get("/monhoc", getAdminController.getMonHoc)
router.get("/phuhuynh", getAdminController.getPhụHuynh)
router.get("/account", getAdminController.getAccount)
router.get("/vienchuc", getAdminController.getVienChuc)
router.get("/lichhoc", getAdminController.getLichHoc)
router.get("/namhoc", getAdminController.getNamHoc)
router.get("/hocky", getAdminController.getHocKy)
router.get("/hstlh", getAdminController.getHSTLH)
router.get("/diem", getAdminController.getDiem)
router.get("/loaidiem", getAdminController.getLoaiDiem)
router.get("/hsmh", getAdminController.getHSMH)
router.get("/loivipham", getAdminController.getLoiViPham)
router.get("/diemrenluyen", getAdminController.getDRL)



router.post("/LopHoc/create",AdminControllers.createLopHoc)
router.post("/PhuHuynh/create",AdminControllers.createPhuHuynh)
router.post("/Chucvu/create",AdminControllers.createChucVu)
router.post("/Students/create",AdminControllers.createStudents)
router.post("/Teachers/create",AdminControllers.createTeachers)
router.post("/VienChuc/create",AdminControllers.createVienChuc)
router.post("/Nganh/create",AdminControllers.createNganh)
router.post("/MonHoc/create",AdminControllers.createMonHoc)
router.post("/Khoa/create",AdminControllers.createKhoa)
router.post("/LoaiDiem/create",AdminControllers.createLoaiDiem)
router.post("/Diem/create",AdminControllers.createDiem)
router.post("/HocKy/create",AdminControllers.createHocKy)
router.post("/NamHoc/create",AdminControllers.createNamHoc)
router.post("/LichHoc/create",AdminControllers.createLichHoc)
router.post("/HSLH/create",AdminControllers.createHSLH)
router.post("/HSMH/create",AdminControllers.createHSMH)
router.post("/loivipham/create",AdminControllers.createLoiViPham)
router.post("/diemrenluyen/create",AdminControllers.createDRL)


router.post("/namhocmany/create",AdminManyControllers.updateNamHocMany)
router.post("/diemmany/create",AdminManyControllers.updateDiemMany)





module.exports = router