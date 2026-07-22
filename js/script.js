let sanPhamDangChon = null;

function timKiem() {
    let keyword = document
        .getElementById("txtSearch")
        .value
        .toLowerCase()
        .trim();

    if (!keyword) {
        document.getElementById("ketqua").innerHTML = `
            <div class="alert alert-warning">
                Vui lòng nhập tên sản phẩm để tìm kiếm.
            </div>
        `;
        return;
    }

    sanPhamDangChon = dsSanPham.find(sp =>
        sp.tenSP.toLowerCase().includes(keyword)
    );

    if (!sanPhamDangChon) {
        document.getElementById("ketqua").innerHTML = `
            <div class="alert alert-danger">
                Không tìm thấy sản phẩm phù hợp.
            </div>
        `;
        return;
    }

    hienThiSanPham(sanPhamDangChon);
}

function hienThiSanPham(sp) {
    let option = "";

    sp.mauSac.forEach((mau, index) => {
        option += `
            <option value="${index}">
                ${mau.tenMau}
            </option>
        `;
    });

    document.getElementById("ketqua").innerHTML = `
        <div class="card shadow">
            <div class="row g-0">
                <div class="col-md-5">
                    <img
                        id="imgSP"
                        src="${sp.mauSac[0].hinhAnh}"
                        class="img-fluid rounded-start"
                        alt="${sp.tenSP}">
                </div>

                <div class="col-md-7">
                    <div class="card-body">
                        <h3>${sp.tenSP}</h3>

                        <p><b>Mã sản phẩm:</b> ${sp.maSP}</p>

                        <p><b>Giá:</b> ${sp.giaSP.toLocaleString()} VNĐ</p>

                        <p><b>Mô tả:</b> ${sp.moTa}</p>

                        <label class="form-label">Chọn màu</label>

                        <select
                            id="cmbColor"
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
    if (!sanPhamDangChon) {
        return;
    }

    let index = document.getElementById("cmbColor").value;
    let imgElement = document.getElementById("imgSP");

    if (imgElement && sanPhamDangChon.mauSac[index]) {
        imgElement.src = sanPhamDangChon.mauSac[index].hinhAnh;
    }
