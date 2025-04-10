import { PrismaClient } from "@prisma/client";
import { where } from "sequelize";

const prisma = new PrismaClient();

export const getHistory = async (req, res) => {
  try {
    // Fetch data from the database
    const histories = await prisma.transaksiBarang.groupBy({
      by: ["nama_matakuliah", "nama_barang", "kode_barang"],
      where: {
        type: "BarangKeluar",
      },
      _sum: {
        jumlah_barang: true,
      },
    });
    res.json(histories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getGroupJenisBarang = async (req, res) => {
  try {
    // Fetch data from the database
    const histories = await prisma.peminjam.groupBy({
      by: ["nama_matakuliah", "nama_barang", "kode_barang"],
      where: {
        type: "BarangKeluar",
      },
      _sum: {
        jumlah_barang: true,
      },
    });
    res.json(histories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
