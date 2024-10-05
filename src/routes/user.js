const middleWareController = require('../controllers/middleWareController')
const userControllers = require('../controllers/userControllers')
const router = require('express').Router()


router.delete("/:id/delete",userControllers.deleteUser)
router.delete("/:id/deleteLopHoc",userControllers.deleteLopHoc)
router.delete("/:id/deletenganh",userControllers.deleteNganh)
router.delete("/:id/deletekhoa",userControllers.deleteKhoa)
router.delete("/:id/deletegiaovien",userControllers.deleteGiaoVien)
router.delete("/:id/deletehslh",userControllers.deleteHSLH)
router.delete("/:id/deletelichhoc",userControllers.deleteLichHoc)
router.delete("/:id/deletemonhoc",userControllers.deleteMonHoc)
router.delete("/:id/deleteloivipham",userControllers.deleteLoiViPham)



router.get("/getdiem", userControllers.getDiem)
router.put("/:id/update", userControllers.update)
router.put("/:id/updatelophoc", userControllers.updateLopHoc)
router.put("/:id/updatenganh", userControllers.updateNganh)
router.put("/:id/updatekhoa", userControllers.updateKhoa)
router.put("/:id/updatemonhoc", userControllers.updateMonHoc)
router.put("/:id/updategiaovien", userControllers.updateGiaoVien)



router.get("/:id/getLop",middleWareController.verifyToken, userControllers.getLopHoc)
router.get("/:id/getuser",middleWareController.verifyToken, userControllers.getAllUser)
router.get("/:id/getnganh",middleWareController.verifyToken, userControllers.getNganh)
router.get("/:id/getkhoa",middleWareController.verifyToken, userControllers.getKhoa)
router.get("/:HocSinh/getdiem",middleWareController.verifyToken, userControllers.getDiem)

module.exports = router