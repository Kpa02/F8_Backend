create database database_05_Kien;

USE database_05_Kien;

CREATE TABLE Khach_Hang (
    MaKH VARCHAR(10) NOT NULL PRIMARY KEY,
    TenKH VARCHAR(25),
    DiaChi VARCHAR(100),
    SoDT VARCHAR(15) UNIQUE
);

CREATE TABLE Phong (
    MaPhong VARCHAR(10) NOT NULL PRIMARY KEY,
    LoaiPhong VARCHAR(25) NOT NULL,
    SoKhachToiĐa INT DEFAULT 15,
    GiaPhong FLOAT NOT NULL,
    MoTa TEXT
);

CREATE TABLE Dat_Phong (
    MaDatPhong VARCHAR(10) NOT NULL PRIMARY KEY, 
    MaPhong VARCHAR(10) NOT NULL,
    MaKH VARCHAR(10) NOT NULL,
    NgayDat DATE NOT NULL,
    GioBatDau TIME NOT NULL,
    GioKetThuc TIME NOT NULL,
    TienDatCoc FLOAT DEFAULT 0,
    GhiChu VARCHAR(255),
    TrangThaiDat VARCHAR(15),
    FOREIGN KEY (MaPhong) REFERENCES Phong(MaPhong),
    FOREIGN KEY (MaKH) REFERENCES Khach_Hang(MaKH)
);

CREATE TABLE Dich_Vu_Di_Kem (
    MaDV VARCHAR(10) PRIMARY KEY, 
    TenDV VARCHAR(255),
    DonViTinh VARCHAR(30) NOT NULL,
    DonGia FLOAT
);

CREATE TABLE Chi_Tiet_Su_Dung_DV (
    MaDatPhong VARCHAR(10), 
    MaDV VARCHAR(10), 
    SoLuong INT,
    PRIMARY KEY (MaDatPhong, MaDV),
    FOREIGN KEY (MaDatPhong) REFERENCES DAT_PHONG(MaDatPhong),
    FOREIGN KEY (MaDV) REFERENCES Dich_Vu_Di_Kem(MaDV)
); 
-- Thêm dữ liệu 
INSERT INTO Phong(MaPhong, LoaiPhong, SoKhachToiĐa, GiaPhong) 
VALUES 
    ('P0001', 'Loai 1', 20, 60000),
    ('P0002', 'Loai 1', 25, 80000),
    ('P0003', 'Loai 2', 15, 50000),
    ('P0004', 'Loai 3', 20, 50000);

INSERT INTO Khach_Hang(MaKH, TenKH, DiaChi, SoDT)
VALUES
    ('KH0001', 'Nguyen Van A', 'Hoa xuan', '1111111111'),
    ('KH0002', 'Nguyen Van B', 'Hoa hai', '1111111112'),
    ('KH0003', 'Phan Van A', 'Cam le', '1111111113'),
    ('KH0004', 'Pham Van B', 'Hoa xuan', '1111111114');

INSERT INTO DAT_PHONG (MaDatPhong, MaPhong, MaKH, NgayDat, GioBatDau, GioKetThuc, TienDatCoc, TrangThaiDat) 
VALUES 
    ('DP0001', 'P0001', 'KH0002', '2018-03-26', '10:00:00', '13:30:00', 100000, 'Da dat'),
    ('DP0002', 'P0001', 'KH0003', '2018-03-27', '17:15:00', '19:15:00', 50000, 'Da dat'),
    ('DP0003', 'P0002', 'KH0002', '2018-03-26', '20:30:00', '22:15:00', 100000, 'Da huy'),
    ('DP0004', 'P0003', 'KH0001', '2018-04-01', '19:30:00', '22:15:00', 200000, 'Da dat');
    

INSERT INTO Dich_Vu_Di_Kem (MaDV, TenDV, DonViTinh, DonGia) 
VALUES 
    ('DV001', 'Bia', 'lon', 10000),
    ('DV002', 'Nuoc ngot', 'lon', 8000),
    ('DV003', 'Trai cay', 'dia', 35000),
    ('DV004', 'Khan uot', 'cai', 2000);


INSERT INTO Chi_Tiet_Su_Dung_DV (MaDatPhong, MaDV, SoLuong) 
VALUES 
    ('DP0001', 'DV001', 20),
    ('DP0001', 'DV003', 3),
    ('DP0001', 'DV002', 10),
    ('DP0002', 'DV002', 10),
    ('DP0002', 'DV003', 1),
    ('DP0003', 'DV003', 2),
    ('DP0003', 'DV004', 10);
-- 	câu 1: Hiển thị MaDatPhong, MaPhong, LoaiPhong, GiaPhong, TenKH, NgayDat, TongTienHat, TongTienSuDungDichVu, TongTienThanhToan tương ứng với từng mã đặt phòng có trong bảng DAT_PHONG. 
-- Những đơn đặt phòng nào không sử dụng dịch vụ đi kèm thì cũng liệt kê thông tin của đơn đặt phòng đó ra
SELECT DAT_PHONG.MaDatPhong, DAT_PHONG.MaPhong, Phong.LoaiPhong, Phong.GiaPhong, Khach_Hang.TenKH, Dat_Phong.NgayDat,
 (Phong.GiaPhong * TIME_TO_SEC(TIMEDIFF(Dat_Phong.GioKetThuc, DAT_PHONG.GioBatDau)) / 3600) AS TongTienHat,
	IFNULL(SUM(Dich_Vu_Di_Kem.DonGia * Chi_Tiet_Su_Dung_DV.SoLuong), 0) AS TongTienSuDungDichVu,
   (Phong.GiaPhong * TIME_TO_SEC(TIMEDIFF(DAT_PHONG.GioKetThuc, DAT_PHONG.GioBatDau)) / 3600) + IFNULL(SUM(Dich_Vu_Di_Kem.DonGia * Chi_Tiet_Su_Dung_DV.SoLuong), 
   0) - DAT_PHONG.TienDatCoc AS TongTienThanhToan
 FROM DAT_PHONG
INNER JOIN Phong ON DAT_PHONG.MaPhong = Phong.MaPhong
INNER JOIN Khach_Hang ON DAT_PHONG.MaKH = Khach_Hang.MaKH
LEFT JOIN
    Chi_Tiet_Su_Dung_DV ON DAT_PHONG.MaDatPhong = Chi_Tiet_Su_Dung_DV.MaDatPhong
LEFT JOIN
    Dich_Vu_Di_Kem ON Chi_Tiet_Su_Dung_DV.MaDV = Dich_Vu_Di_Kem.MaDV
GROUP BY
    DAT_PHONG.MaDatPhong, Phong.MaPhong, Khach_Hang.TenKH, DAT_PHONG.NgayDat
ORDER BY
    DAT_PHONG.MaDatPhong;
    
-- câu 2:
SELECT Khach_Hang.MaKH, Khach_Hang.TenKH, Khach_Hang.DiaChi, Khach_Hang.SoDT
FROM Khach_Hang 
INNER JOIN DAT_PHONG  ON Khach_Hang.MaKH = DAT_PHONG.MaKH
WHERE DAT_PHONG.TrangThaiDat = 'Đã đặt' AND Khach_Hang.DiaChi = 'Hoa Xuan';
