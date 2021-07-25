/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { invoice } from "./InvoiceHistory.json";
import { Table, Button, Space, Input, Typography } from "antd";
import { isEmpty } from "lodash";
import { FilePdfOutlined } from "@ant-design/icons";
import jsPDF from "jspdf";

const Invoice = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  let [filteredData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  //const linkdata = "https://jsonplaceholder.typicode.com/comments";

  const loadData = async () => {
    setLoading(true);
    //const response = await axios.get(linkdata); //ruta del json
    setGridData(invoice);
    setLoading(false);
  };

  const modifiedData = gridData.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
    info: (
      <div style={{ width: "max-content", margin: "auto" }}>
        <Typography>Usted es: {item.client}</Typography>
        <Typography>Su estado es: {item.status}</Typography>
        <Typography>La fecha es: {item.invoiceDate}</Typography>
        <Typography>Forma de pago: {item.paymentMethod}</Typography>
        <Typography>Cantidad de productos: {item.invoiceItems}</Typography>
        <Typography>
          Lista de productos:
          {item.listProducts ? item.listProducts : "no encontrado"}
        </Typography>
        <div>
          {invoice.map((lista) => (
            <h4> {lista.listProducts} </h4>
          ))}
        </div>
      </div>
    ),
    //info: `Mi name is ${item.email.split("@")[0]} and i am ${Math.floor(Math.random()*6)+20} years old`,
    //comment: body,
    comment: isEmpty(body) ? item.comment : body,
  }));

  const pdfClient = (key) => {
    //const filterpdf=  invoice.filter(x => x.id === key)
    //console.log(filterpdf);

    invoice
      .filter((x) => x.id === key)
      .map((elem) => {
        const {
          id,
          ruc,
          status,
          invoiceDate,
          client,
          employee,
          worksShop,
          invoiceItems,
          paymentMethod,
        } = elem;
        //alert([id,ruc, status, invoiceDate, client, employee, worksShop])
        var doc = new jsPDF("landscape", "px", "a4", "false");
        //doc.addImage(carlogo, "svg-icons", 65, 105, 500, 400);
        doc.setFont("Century Gothic", "bold");
        doc.setTextColor(55, 37, 104);
        doc.text(60, 40, "AutoPro");
        doc.text(520, 40, "23/07/2021");

        doc.text(250, 65, "FACTURA DE COMPRA");
        doc.text(60, 115, "Cliente");
        doc.text(60, 140, "Ruc");
        doc.text(60, 165, "Estado");
        doc.text(60, 190, "Taller");
        doc.text(60, 215, "Metodo de pago");
        doc.text(60, 240, "Total de productos");
        doc.setFont("Century Gothic", "normal");
        doc.text(160, 115, `: ${client}`);
        doc.text(160, 140, `: ${ruc}`);
        doc.text(160, 165, `: ${status}`);
        doc.text(160, 190, `: ${worksShop}`);
        doc.text(160, 215, `: ${paymentMethod}`);
        doc.text(160, 240, `: ${invoiceItems}`);
        //doc.addImage(sellogracias, "svg-icons", 380, 105, 110, 110);
        doc.setTextColor("red");
        doc.text(
          60,
          410,
          "Nota: Acuda al taller con la constancia de la reservación de cita para agilizar el servicio."
        );
        doc.save(`Factura de compra - ${id}.pdf`);
      });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ruc",
      dataIndex: "ruc",
      align: "center",
    },
    {
      title: "Employee",
      dataIndex: "employee",
      align: "center",
      editable: true,
    },
    {
      title: "WorksShop",
      dataIndex: "worksShop",
      align: "center",
      editable: true,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      render: (_, record) => {
        return (
          <Button
            onClick={() => pdfClient(record.key)}
            type="dashed"
            icon={<FilePdfOutlined />}
            size="large"
          />
        );
      },
    },
  ];

  //console.log("modifiedData es:", modifiedData);

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      loadData();
    }
  };

  const globalSearch = () => {
    filteredData = modifiedData.filter((value) => {
      return (
        value.ruc.toLowerCase().includes(searchText.toLowerCase()) ||
        value.employee.toLowerCase().includes(searchText.toLowerCase()) ||
        value.worksShop.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setGridData(filteredData);
  };

  const clearAll = () => {
    setSearchText("");
    loadData();
  };

  return (
    <>
      <Typography.Title level={2}>Historial de compras</Typography.Title>
      <div style={{ width: "51%", background: "white", margin: "auto" }}>
        <Space style={{ marginBottom: 16, marginTop: 16 }}>
          <Input
            placeholder="Enter Search Text"
            onChange={handleSearch}
            onPressEnter={globalSearch}
            type="text"
            allowClear
            value={searchText}
          />
          <Button type="primary" onClick={globalSearch}>
            Search
          </Button>
          <Button onClick={clearAll}>Clear All</Button>
        </Space>
      </div>
      <Table
        loading={loading}
        columns={mergedColumns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}> {record.info} </p>
          ),
          rowExpandable: (record) => record.info !== "Not Expandable",
        }}
        dataSource={
          filteredData && filteredData.length ? filteredData : modifiedData
        }
        bordered
      />
    </>
  );
};

export default Invoice;
