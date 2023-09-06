CREATE DATABASE `database_04_DuongTrungKien` 
USE database_04_DuongTrungKien;

CREATE TABLE
  `CHI_TIET_SU_DUNG_DV` (
    `MaDatPhong` varchar(50),
    `MaDV` varchar(50),
    `SoLuong` int DEFAULT 0,
    PRIMARY KEY (`MaDatPhong`, `MaDV`)
  );

CREATE TABLE
  `DICH_VU_DI_KEM` (
    `MaDV` varchar(50) PRIMARY KEY,
    `TenDV` varchar(255),
    `DonViTinh` varchar(100),
    `DonGia` float DEFAULT 0
  );

CREATE TABLE
  `DAT_PHONG` (
    `MaDatPhong` varchar(50) PRIMARY KEY,
    `MaPhong` varchar(50),
    `MaKH` varchar(50),
    `NgayDat` timestamp,
    `GioBatDau` timestamp,
    `GioKetThuc` timestamp,
    `TienDatCoc` int DEFAULT 0,
    `GhiChu` text,
    `TrangThaiDat` text
  );

CREATE TABLE
  `PHONG` (
    `MaPhong` varchar(50) PRIMARY KEY,
    `LoaiPhong` varchar(100),
    `SoKhachHangToiDa` int,
    `GiaPhong` int,
    `MoTa` text
  );

CREATE TABLE
  `KHACH_HANG` (
    `MaKH` varchar(50) PRIMARY KEY,
    `TenKH` varchar(255),
    `DiaChi` varchar(255),
    `SoDT` varchar(20)
  );

ALTER TABLE `CHI_TIET_SU_DUNG_DV` ADD FOREIGN KEY (`MaDatPhong`) REFERENCES `DAT_PHONG` (`MaDatPhong`);

ALTER TABLE `CHI_TIET_SU_DUNG_DV` ADD FOREIGN KEY (`MaDV`) REFERENCES `DICH_VU_DI_KEM` (`MaDV`);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaKH`) REFERENCES `KHACH_HANG` (`MaKH`);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaPhong`) REFERENCES `PHONG` (`MaPhong`);

INSERT INTO
  PHONG (
    MaPhong,
    LoaiPhong,
    SoKhachHangToiDa,
    GiaPhong,
    MoTa
  )
VALUES
  ('P01', 'Loại 1', 25, 600000, NULL),
  ('P02', 'Loại 4', 15, 300000, NULL),
  ('P03', 'Loai 2', 20, 500000, NULL),
  ('P04', 'Loại 3', 10, 200000, NULL);

INSERT INTO
  KHACH_HANG (MaKH, TenKH, DiaChi, SoDT)
VALUES
  ('KH001', 'Nguyen Van A', 'Ha Noi', '098743567'),
  ('KH002', 'Nguyen Van B', 'Thai Binh', '0937281564'),
  ('KH003', 'Nguyen Van C', 'Quang Ninh', '0847624378'),
  ('KH004', 'Nguyen Van D', 'Hai Phong', '0846371826');

INSERT INTO
  DICH_VU_DI_KEM (MaDV, TenDV, DonViTinh, DonGia)
VALUES
  ('DV01', 'Beer', 'lon', 17000),
  ('DV02', 'Nuoc ngot', 'lon', 15000),
  ('DV03', 'Nuoc suoi', 'chai', 10000),
  ('DV04', 'Mi goi', 'goi', 15000);

INSERT INTO
  DAT_PHONG (
    MaDatPhong,
    MaPhong,
    MaKH,
    NgayDat,
    GioBatDau,
    GioKetThuc,
    TienDatCoc,
    GhiChu,
    TrangThaiDat
  )
VALUES
  (
    'DP01',
    'P01',
    'KH002',
    '2018-03-26 00:00:00',
    '2018-03-26 11:00:00',
    '2018-03-26 13:30:00',
    100000,
    NULL,
    'Da dat'
  ),
  (
    'DP02',
    'P01',
    'KH003',
    '2018-03-27 00:00:00',
    '2018-03-27 17:15:00',
    '2018-03-27 19:15:00',
    50000,
    NULL,
    'Da huy'
  ),
  (
    'DP03',
    'P02',
    'KH0002',
    '2018-03-26 00:00:00',
    '2018-03-26 20:30:00',
    '2018-03-26 22:15:00',
    100000,
    NULL,
    'Da dat'
  ),
  (
    'DP04',
    'P03',
    'KH003',
    '2018-04-01 00:00:00',
    '2018-04-01 19:30:00',
    '2018-04-01 21:15:00',
    200000,
    NULL,
    'Da dat'
  );

INSERT INTO
  CHI_TIET_SU_DUNG_DV (MaDatPhong, MaDV, SoLuong)
VALUES
  ('DP01', 'DV01', 20),
  ('DP01', 'DV03', 1),
  ('DP01', 'DV02', 10),
  ('DP02', 'DV02', 10),
  ('DP02', 'DV03', 1),
  ('DP03', 'DV03', 2),
  ('DP03', 'DV04', 10);

SELECT
  MaDatPhong,
  MaDV,
  SoLuong
FROM
  CHI_TIET_SU_DUNG_DV
WHERE
  SoLuong > 3
  AND SoLuong < 10;

UPDATE PHONG
SET
  GiaPhong = GiaPhong + 10000
WHERE
  SoKhachHangToiDa > 10;

DELETE FROM CHI_TIET_SU_DUNG_DV
WHERE
  MaDatPhong IN (
    SELECT
      MaDatPhong
    FROM
      DAT_PHONG
    WHERE
      TrangThaiDat = 'Da huy'
  );

DELETE FROM DAT_PHONG
WHERE
  TrangThaiDat = 'Da huy';

SELECT
  TenKH
FROM
  KHACH_HANG
WHERE
  TenKH LIKE 'H%'
  OR TenKH LIKE 'N%'
  OR TenKH LIKE 'M%'
  AND LENGTH (TenKH) <= 20;

SELECT DISTINCT
  TenKH
FROM
  KHACH_HANG;

SELECT
  MaDV,
  TenDV,
  DonViTinh,
  DonGia
FROM
  DICH_VU_DI_KEM
WHERE
  (
    DonViTinh = 'lon'
    AND DonGia > 10000
  )
  OR (
    DonViTinh = 'Cai'
    AND DonGia < 5000
  );

SELECT
  DP.MaDatPhong,
  DP.MaPhong,
  P.LoaiPhong,
  P.SoKhachHangToiDa,
  P.GiaPhong,
  DP.MaKH,
  KH.TenKH,
  KH.SoDT,
  DP.NgayDat,
  DP.GioBatDau,
  DP.GioKetThuc,
  CTDV.MaDV,
  CTDV.SoLuong,
  DV.DonGia
FROM
  DAT_PHONG AS DP
  JOIN PHONG AS P ON DP.MaPhong = P.MaPhong
  JOIN KHACH_HANG AS KH ON DP.MaKH = KH.MaKH
  JOIN CHI_TIET_SU_DUNG_DV AS CTDV ON DP.MaDatPhong = CTDV.MaDatPhong
  JOIN DICH_VU_DI_KEM AS DV ON CTDV.MaDV = DV.MaDV
WHERE
  YEAR (DP.NgayDat) IN (2016, 2017)
  AND P.GiaPhong > 50000;