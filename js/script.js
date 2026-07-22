let sanPhamDangChon = null;

function timKiem() {

    let tuKhoa = document.getElementById("txtSearch").value.trim().toLowerCase();

    let sp = dsSanPham.find(function(item) {
        return item.tenSP.toLowerCase().includes(tuKhoa);
    });

    if (sp == undefined) {
        document.getElementById("ketqua").innerHTML = `
            <div class="alert alert-danger">
                Không tìm thấy sản phẩm phù hợp!
            </div>
        `;
        return;
    }

    sanPhamDangChon = sp;
    hienThiSanPham(sp);
}


function hienThiSanPham(sp) {

    let option = "";

    sp.mauSac.forEach(function(mau, index) {
        option += `
            <option value="${index}">
                ${mau.tenMau}
            </option>
        `;
    });

    document.getElementById("ketqua").innerHTML = `
        <div class="card shadow mt-3">
            <div class="row g-0">

                <div class="col-md-5">
                    <img id="imgSP"
                         src="${sp.mauSac[0].hinhAnh}"
                         class="img-fluid rounded-start"
                         alt="${sp.tenSP}">
                </div>

                <div class="col-md-7">
                    <div class="card-body">

                        <h3>${sp.tenSP}</h3>

                        <p><strong>Mã sản phẩm:</strong> ${sp.maSP}</p>

                        <p><strong>Giá:</strong> ${sp.giaSP.toLocaleString()} VNĐ</p>

                        <p><strong>Mô tả:</strong> ${sp.moTa}</p>

                        <label class="form-label">
                            Chọn màu:
                        </label>

                        <select id="cmbMau"
                                class="form-select"
                                onchange="doiMau()">

                            ${option}

                        </select>

                    </div>
                </div>

            </div>
        </div>
    `;
}


function doiMau() {

    let viTri = document.getElementById("cmbMau").value;

    document.getElementById("imgSP").src =
        sanPhamDangChon.mauSac[viTri].hinhAnh;
}
