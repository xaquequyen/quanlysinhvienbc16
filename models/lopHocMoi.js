function lopHocMoi() {
    this.malopHocMoi = '';
    this.tenlopHocMoi = '';
    this.hienThiThongTinlopHocMoi = function () {
        console.log('Thông tin môn học', this.tenlopHocMoi, this.malopHocMoi);
    }
}