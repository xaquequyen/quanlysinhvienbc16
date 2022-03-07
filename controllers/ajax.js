function getData () {
    //Gọi hàm Axios, truyền vào object
    var promise = axios({
        url: '../data/data.txt', //Đường dẫn đến file hoặc link  api backend cung cấp
        method: 'GET',
        responseType:'text'
    });
    /*
    promise là đối tượng có 2 phương thức cần nhớ:
    + then() : Nhận vào 1 hàm khi request thành công
    + catch(): Nhận vào 1 hàm khi request thất bại
    */

    //Xử lý thành công
    promise.then(function(ketQua) {
        console.log('ketQua', ketQua.data);
        document.querySelector('#content').innerHTML = ketQua.data;
    });

    //Xử lý thấy bại
    promise.catch(function (error) {
        console.log('error', error);
    });

}

getData();


function getDataXML () {
    //Gọi hàm Axios, truyền vào object
    var promise = axios ({
        url: '../data/data.xml',
        method: 'GET',
        responseType: 'document'
    });

    //Xử lý thành công
    promise.then(function(ketQua){
        console.log('Kết quả',  ketQua.data);
        var hoTen = ketQua.data.querySelector('hoten').innerHTML;
        document.querySelector('#content').innerHTML = '<h1>' + hoTen + '</h1>' ;
    });

    //Xử lý thất bại
    promise.catch(function(error) {
        console.log('error', error);
    });
}
getDataXML();


function getDataJSON(){
    var promise = axios ({
        url: '../data/data.json',
        method: 'GET'
    });
    //Thành công
    promise.then (function(ketQua){
        console.log('Kết quả', ketQua.data);
        document.querySelector('#content').innerHTML = '<h3>' + ketQua.data.hoTen + '</h3>'
    });

    //Thất bại
    promise.catch(function(error) {
        console.log('error', error);
    });
};

getDataJSON();