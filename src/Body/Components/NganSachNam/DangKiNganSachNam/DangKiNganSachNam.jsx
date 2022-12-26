import "./DangKiNganSachNam.scss";
import TableDanhSachNganSachNam from "./TableData/TableDanhSachNganSachNam";

export default function DangKiNganSachNam() {
  return (
    <>
      <div className="title">Danh sách đăng kí ngân sách năm</div>
      <TableDanhSachNganSachNam />
    </>
  );
}
