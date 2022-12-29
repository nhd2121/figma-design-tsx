import "./TableDanhSachNganSachNam.scss";
import TableContentNganSachNam from "./TableContentNganSachNam";
// import TablePageNganSachNam from "./TablePageNganSachNam";

export default function TableDanhSachNganSachNam() {
  return (
    <>
      <div className="table-data">
        <TableContentNganSachNam />
        {/* <TablePageNganSachNam /> */}
      </div>
    </>
  );
}
