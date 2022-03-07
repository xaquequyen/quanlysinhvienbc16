function monHoc() {
    this.maMonHoc = '';
    this.tenMonHoc = '';
    this.hienThiThongTinMonHoc = function () {
        console.log('Thông tin môn học', this.tenMonHoc, this.maMonHoc);
    }
}