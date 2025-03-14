const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-slate-950 p-8 text-white">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="">
          <div className="flex items-center justify-center">
            <img src="/netflix.png" alt="" className="w-16 sm:w-28" />
          </div>
          <p className="mt-2 text-justify text-sm">
            Website xem phim trực tuyến chất lượng cao, cập nhật phim mới nhất
            vietsub mỗi ngày, xem miễn phí hàng nghìn bộ phim HD/4K đa thể loại.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Phim Mới</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim chiếu rạp
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim lẻ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim bộ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim hành động
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim viễn tưởng
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim tâm lý
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim hài hước
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Phim Hay</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim Mỹ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim Hàn Quốc
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim Trung Quốc
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim Thái Lan
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim Việt Nam
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim Ma Kinh Dị
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phim Hoạt Hình
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Phim Hot</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Phimmoi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Trợ giúp</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Hỏi đáp
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Liên hệ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Tin tức
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Thông tin</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Chính sách riêng tư
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Khiếu nại bản quyền
              </a>
            </li>
            <li className="mt-4 text-gray-400">©Phạm A Hoàng</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
