import React from 'react'
import '../assets/less/footer.css'

function Footer() {
  return (
    <footer>
      <div className="cotainer">
        <div className="background">
          <div className="column-content">
            <div className="content-1">
              <h4>Hỗ Trợ - Dịch Vụ</h4>
              <ul>
                <li>Mua hàng trả góp</li>
                <li>Hướng dẫn đặt hàng và thanh toán</li>
                <li>Chính sách bảo hành</li>
                <li>Phạm vi, điều khoản gói bảo hành mở rộng</li>
                <li>Chính sách bảo mật</li>
                <li>Chính sách giải quyết khiếu nại</li>
                <li>Điều khoản mua bán hàng hóa</li>
                <li>Câu hỏi thường gặp</li>
              </ul>
            </div>
            <div className="content-2">
              <h4>Thông Tin Liên Hệ</h4>
              <ul>
                <li>Bán hàng Online</li>
                <li>Chăm sóc Khách Hàng</li>
                <li>Hỗ trợ Kỹ thuật</li>
                <li>Hỗ trợ Bảo hành & Sửa chữa</li>
                <li>Liên hệ khối văn phòng</li>
                <li>Hợp tác kinh doanh</li>
                <li>Trung tâm bảo hành</li>
              </ul>
            </div>
            <div className="content-3">
              <h4>Hệ thống 126 siêu thị trên toàn quốc</h4>
              <ul>
                <li>Hệ thống 126 siêu thị trên toàn quốc</li>
              </ul>
            </div>
            <div className="content-4">
              <h4>Tổng đài</h4>
              <ul>
                <li><a className='hotline' href="tel:1900.2091">1900.2091</a></li>
              </ul>
            </div>
            <div className="content-5">
              <h4>Thanh toán miễn phí</h4>
              <ul className='list-logo'>
                <li>
                  <img src="https://hoanghamobile.com/Content/web/img/logo-visa.png"/>
                  <img src="https://hoanghamobile.com/Content/web/img/logo-master.png"/>
                </li>
                <li>
                  <img src="https://hoanghamobile.com/Content/web/img/logo-jcb.png"/>
                  <img src="https://hoanghamobile.com/Content/web/img/logo-samsungpay.png"/>
                </li>
                <li>
                  <img src="https://hoanghamobile.com/Content/web/img/logo-atm.png"/>
                  <img src="https://hoanghamobile.com/Content/web/img/logo-vnpay.png"/>
                </li>
              </ul>
            </div>
            <div className="content-6">
              <h4>Hình thức vận chuyển</h4>
              <ul className="list-logo">
                <img src="https://hoanghamobile.com/Content/web/img/nhattin.jpg"/>
                <img src="https://hoanghamobile.com/Content/web/img/vnpost.jpg"/>
              </ul>
            </div>
          </div>
          <div className="info"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
