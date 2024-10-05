const NamHoc = require("../model/NamHoc");
const Diem = require("../model/Diem");

const AdminManyControllers ={
    updateNamHocMany: async (req, res) => {
        try {
            const namhocData = req.body; // Lấy dữ liệu từ body
            const namhoc = await NamHoc.insertMany(namhocData); // Truyền dữ liệu vào insertMany
            if (!namhoc) {
                return res.status(404).json({ message: "Không tìm thấy năm" });
            }
            return res.status(200).json(namhoc);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    updateDiemMany: async (req, res) => {
        try {
            const DiemData = req.body; // Lấy dữ liệu từ body
            const diem = await Diem.insertMany(DiemData); // Truyền dữ liệu vào insertMany
            if (!diem) {
                return res.status(404).json({ message: "Không tìm thấy điểm tương ứng" });
            }
            return res.status(200).json(diem);
        } catch (err) {
            return res.status(500).json(err);
        }
    }


}

module.exports = AdminManyControllers;