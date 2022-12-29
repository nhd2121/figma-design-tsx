import "./TableContentNganSachNam.scss";
import { Badge, Input, Modal, Table } from "antd";
import { TableDataLists, DataList } from "./ListTableData";
import {
  ChevronDown,
  Search,
  Download,
  Add,
  TrashCan,
  Edit,
} from "@carbon/icons-react";
import { useState } from "react";
import AddNewDataForm from "./AddNewDataForm";

const newData = {
  MaPhieu: " ",
  Nam: " ",
  CompanyCode: " ",
  PhongBan: " ",
  NguoiTao: " ",
  NgayTao: " ",
  TrangThai: "",
  TrangThaiToTrinh: "",
};

export type editingData = {
  STT?: number;
  MaPhieu: string;
  Nam: string;
  CompanyCode: string;
  PhongBan: string;
  NguoiTao: string;
  NgayTao: string;
  TrangThai: string;
  TrangThaiToTrinh: string;
};

export default function TableContentNganSachNam() {
  const [dataSource, setDataSource] = useState(TableDataLists as DataList[]);
  const [dataInput, setDataInput] = useState(newData);
  const [isOpenCreateForm, setOpenCreateForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState<editingData | null>(null);

  const openCreateForm = () => {
    setOpenCreateForm(true);
  };

  const handleSubmit = () => {
    const cloneData = [...dataSource];
    const newIndex = cloneData.length + 1;
    cloneData.push({ ...dataInput, STT: newIndex });

    setOpenCreateForm(false);
    setDataSource(cloneData);
    setDataInput(newData);
  };

  const onDeleteData = (STT: number) => {
    const dataAfterDelete = dataSource.filter((data) => data.STT !== STT);
    Modal.confirm({
      title: "Chắc chắn xóa ?",
      onOk: () => {
        setDataSource(dataAfterDelete);
      },
    });
  };

  const onEditData = (record: any) => {
    setIsEditing(true);
    setEditingData({ ...record });
  };

  const resetEditingForm = () => {
    setIsEditing(false);
    setEditingData(null);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
      render: (index: number) => {
        return index;
      },
    },
    {
      title: "Mã phiếu",
      dataIndex: "MaPhieu",
      key: "MaPhieu",
      render(text: string) {
        return {
          props: {
            style: { textDecoration: "underline" },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Năm",
      dataIndex: "Nam",
      key: "Nam",
      render(text: string) {
        return {
          props: {
            style: { textDecoration: "underline" },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Company Code",
      dataIndex: "CompanyCode",
      key: "CompanyCode",
    },
    {
      title: "Phòng ban",
      dataIndex: "PhongBan",
      key: "PhongBan",
    },
    {
      title: "Người tạo",
      dataIndex: "NguoiTao",
      key: "NguoiTao",
    },
    {
      title: "Ngày tạo",
      dataIndex: "NgayTao",
      key: "NgayTao",
    },
    {
      title: "Trạng thái",
      dataIndex: "TrangThai",
      key: "TrangThai",
      render: (TrangThai: string) => {
        return (
          <div>
            {(() => {
              if (TrangThai === "Mới tạo") {
                return <Badge status="default" text={TrangThai} />;
              } else if (TrangThai === "Ban hành") {
                return <Badge status="success" text={TrangThai} />;
              } else {
                return <Badge status="warning" text={TrangThai} />;
              }
            })()}
          </div>
        );
      },
    },
    {
      title: "Trạng thái tờ trình",
      dataIndex: "TrangThaiToTrinh",
      key: "TrangThaiToTrinh",
      render: (TrangThaiToTrinh: string) => (
        <span>
          <div key={TrangThaiToTrinh}>
            <Badge
              status={TrangThaiToTrinh === "Đã duyệt" ? "success" : "warning"}
              text={TrangThaiToTrinh}
            />
          </div>
        </span>
      ),
    },
    {
      title: "Action",
      key: "Action",
      render: (record: any) => {
        return (
          <>
            <Edit
              onClick={() => {
                onEditData(record);
              }}
              style={{ color: "#0f62fe" }}
              className="icon-edit-table"
            />
            <TrashCan
              onClick={() => {
                onDeleteData(record.STT);
              }}
              style={{ color: "red", marginLeft: 12 }}
              className="icon-delete-table"
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="table-data">
        <div className="table-header">
          <div className="left-side">
            <button className="btn-table-header">
              Năm
              <ChevronDown />
            </button>
            <button className="btn-table-header">
              Phòng ban
              <ChevronDown />
            </button>
            <button className="btn-table-header">
              Trạng thái
              <ChevronDown />
            </button>
            <button className="btn-table-header">
              Trạng thái tờ trình
              <ChevronDown />
            </button>
            <button className="btn-table-header">
              <Search />
            </button>
          </div>
          <div className="right-side">
            <button className="btn-table-header">
              <Download />
            </button>
            <button
              onClick={openCreateForm}
              className="btn-table-header btn-create"
            >
              Tạo mới
              <Add />
            </button>
          </div>
        </div>
        <div className="table-content">
          <Table columns={columns} dataSource={dataSource} />
          <Modal
            className="modalEditingData"
            title="Sửa thông tin ngân sách năm"
            open={isEditing}
            okText="Lưu sửa đổi"
            cancelText="Hủy"
            onCancel={() => {
              resetEditingForm();
            }}
            onOk={() => {
              setDataSource((pre: any) => {
                return pre.map((data: any) => {
                  if (data.STT === editingData?.STT) {
                    return editingData;
                  } else {
                    return data;
                  }
                });
              });
              resetEditingForm();
            }}
          >
            <Input
              addonBefore="Mã Phiếu"
              value={editingData?.MaPhieu}
              onChange={(e) => {
                setEditingData((pre: any) => {
                  return { ...pre, MaPhieu: e.target.value };
                });
              }}
            />
            <Input
              addonBefore="Năm"
              value={editingData?.Nam}
              onChange={(e) => {
                setEditingData((pre: any) => {
                  return { ...pre, Nam: e.target.value };
                });
              }}
            />
            <Input
              addonBefore="Company Code"
              value={editingData?.CompanyCode}
              onChange={(e) => {
                setEditingData((pre: any) => {
                  return { ...pre, CompanyCode: e.target.value };
                });
              }}
            />
            <Input
              addonBefore="Phòng ban"
              value={editingData?.PhongBan}
              onChange={(e) => {
                setEditingData((pre: any) => {
                  return { ...pre, PhongBan: e.target.value };
                });
              }}
            />
            <Input
              addonBefore="Người tạo"
              value={editingData?.NguoiTao}
              onChange={(e) => {
                setEditingData((pre: any) => {
                  return { ...pre, NguoiTao: e.target.value };
                });
              }}
            />
            <Input
              addonBefore="Ngày tạo"
              value={editingData?.NgayTao}
              onChange={(e) => {
                setEditingData((pre: any) => {
                  return { ...pre, NgayTao: e.target.value };
                });
              }}
            />
            <Input
              addonBefore="Trạng thái"
              value={editingData?.TrangThai}
              onChange={(e) => {
                setEditingData((pre: any) => {
                  return { ...pre, TrangThai: e.target.value };
                });
              }}
            />
            <Input
              addonBefore="Trạng thái tờ trình"
              value={editingData?.TrangThaiToTrinh}
              onChange={(e) => {
                setEditingData((pre: any) => {
                  return { ...pre, TrangThaiToTrinh: e.target.value };
                });
              }}
            />
          </Modal>
        </div>
        <AddNewDataForm
          isOpenCreateForm={isOpenCreateForm}
          setTrigger={setOpenCreateForm}
          dataInput={dataInput}
          setDataInput={setDataInput}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
