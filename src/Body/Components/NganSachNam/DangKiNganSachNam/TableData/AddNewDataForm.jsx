import "./addNewDataForm.scss";
import { Button, Form, Input } from "antd";

export default function AddNewDataForm(props) {
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    props.setDataInput({ ...props.dataInput, [name]: value });
  };

  return props.isOpenCreateForm ? (
    <div className="form">
      <div className="form-inner">
        <h2 className="form-title">Form tạo mới ngân sách</h2>
        <Form>
          <Form.Item name={"MaPhieu"} label={"Mã phiếu"}>
            <Input
              name="MaPhieu"
              value={props.dataInput.MaPhieu}
              onChange={handleChangeInput}
              placeholder={"e.g NSDTMB202301"}
            />
          </Form.Item>
          <Form.Item name={"Nam"} label={"Năm"}>
            <Input
              name="Nam"
              value={props.dataInput.Nam}
              onChange={handleChangeInput}
              placeholder={"e.g 2022"}
            />
          </Form.Item>
          <Form.Item name={"CompanyCode"} label={"Company Code"}>
            <Input
              name="CompanyCode"
              value={props.dataInput.CompanyCode}
              onChange={handleChangeInput}
              placeholder={"e.g DTMB"}
            />
          </Form.Item>
          <Form.Item name={"PhongBan"} label={"Phòng ban"}>
            <Input
              name="PhongBan"
              value={props.dataInput.PhongBan}
              onChange={handleChangeInput}
              placeholder={"e.g Đầu tư Miền Bắc"}
            />
          </Form.Item>
          <Form.Item name={"NguoiTao"} label={"Người tạo"}>
            <Input
              name="NguoiTao"
              value={props.dataInput.NguoiTao}
              onChange={handleChangeInput}
              placeholder={"e.g nhd21"}
            />
          </Form.Item>
          <Form.Item name={"NgayTao"} label={"Ngày tạo"}>
            <Input
              name="NgayTao"
              value={props.dataInput.NgayTao}
              onChange={handleChangeInput}
              placeholder={"e.g dd/mm/yyyy"}
            />
          </Form.Item>
          <Form.Item name={"TrangThai"} label={"Trạng thái"}>
            <Input
              name="TrangThai"
              value={props.dataInput.TrangThai}
              onChange={handleChangeInput}
              placeholder={"e.g Mới tạo"}
            />
          </Form.Item>
          <Form.Item name={"TrangThaiToTrinh"} label={"Trạng thái tờ trình"}>
            <Input
              name="TrangThaiToTrinh"
              value={props.dataInput.TrangThaiToTrinh}
              onChange={handleChangeInput}
              placeholder={"e.g Đã duyệt"}
            />
          </Form.Item>
        </Form>
        <div className="btn-form">
          <Button onClick={props.handleSubmit} className="btn-create-confirm">
            Tạo mới ngân sách
          </Button>
          <Button
            className="btn-cancel"
            onClick={() => props.setTrigger(false)}
          >
            Hủy
          </Button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
