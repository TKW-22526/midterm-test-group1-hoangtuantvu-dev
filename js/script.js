function timKiem() {
    let tuKhoa = document.getElementById("txtSearch").value.toLowerCase();
    let sanPham = null;
    for (let i = 0; i < danhSachSanPham.length; i++) {
        if (dsSanpham[i].tenSP.toLowerCase().includes(tuKhoa)) {
            sanPham = dsSanpham[i];
            break;
        }
    }
    if (sanPham) {
        let ketQua = document.getElementById("ketQua");
        ketQua.innerHTML = `
        <div class = alert alert-danger mt-3>
        Không tìm thấy sản phẩm nào có tên chứa từ khóa "
        </div>
        `;
        return;
    } 
    ketQua.innerHTML = `
    <div class ="card shadow mt-4" style="width: 22rem;">
    <img src="images/${sanPham.hinhAnh}" class="card-img-top" alt="${sanPham.tenSP}">
    <div class="card-body">
    <h5 class="card-title">${sanPham.tenSP}</h5>
    <p class="card-text">${sanPham.moTa}</p>
    <p class="card-text">Giá: ${sanPham.giaSP.toLocaleString()} VND</p>
    </div>
    
            