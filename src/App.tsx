import { useCallback, useMemo, useRef, useState } from "react";

import { Column } from "react-table";

import { useHotkeys } from "react-hotkeys-hook";

import Accordion from "@/components/accordion";
import Table from "@components/table";
import Form from "@components/form";
import Button from "./components/button";
import ImageGallery from "@components/imageGallery";

import useRTClient from "./hooks/RTClient";

import "./App.css";

import pic1 from "@assets/images/pic_1.jpg";
import pic2 from "@assets/images/pic_2.jpg";
import pic3 from "@assets/images/pic_3.jpg";
import pic4 from "@assets/images/pic_4.jpg";
import pic5 from "@assets/images/pic_5.jpg";
import pic6 from "@assets/images/pic_6.jpg";
import pic7 from "@assets/images/pic_7.jpg";
import pic8 from "@assets/images/pic_8.jpg";
import Input from "./components/form/input";
import Label from "./components/form/label";
import SelectDemo from "./components/form/select";

export type Data = {
  paymentType: string;
  paymentWay: string;
  date: string;
  operation: string;
  via: string;
};

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [via, setVia] = useState<string>("");

  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  const [test, setTest] = useState(0);
  const keys = ["ctrl+f", "ctrl+g"];

  const connection = useRTClient();

  const ocrInputRef = useRef(null);

  useHotkeys(keys[test], () => console.log("ATALHOOOOOOOO"), {
    preventDefault: true,
  });

  useHotkeys("ctrl+q", () => ocrInputRef.current.focus(), {
    preventDefault: true,
  });

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: "Data / Hora",
        accessor: "date", // accessor is the "key" in the data
      },
      {
        Header: "Via",
        accessor: "via",
      },
      {
        Header: "Operação",
        accessor: "operation",
      },
      {
        Header: "Tipo Pagamento",
        accessor: "paymentType",
      },
      {
        Header: "Forma Pagamento",
        accessor: "paymentWay",
      },
    ],
    []
  );

  const handleRevievedData = useCallback(({ date, via, operation }: Data) => {
    console.log("RECEBEU", via);
    setData((d) => [
      ...d,
      {
        date,
        via,
        operation,
        paymentType: "TIPO PAGAMENTO",
        paymentWay: "FORMA PAGAMENTO",
      },
    ]);
  }, []);

  const [currentEvent, setCurrentEvent] = useState<string | undefined>();

  const sendFilter = async () => {
    if (connection) {
      setData([]);
      console.log("ENTROU MESMO");
      if (currentEvent) connection.off(currentEvent);
      setCurrentEvent(via + "eventName");
      connection.on(via + "eventName", handleRevievedData);
      await connection.invoke("FilterAnomalies", via, via + "eventName");
    }
  };

  return (
    <>
      {/* <Button onClick={() => (test === 0 ? setTest(1) : setTest(0))}>
        TROCA: {keys[test]}
      </Button>*/}
      <Accordion.Container type="multiple" className="accordion-container">
        <Accordion.Item value="item1">
          <Accordion.Header>
            <Accordion.Trigger>Filtros</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            style={{
              display: "flex",
              alignItems: "center",
              width: "30%",
              marginLeft: "24px",
            }}
          >
            <Form.Container>
              <Form.Field name="via">
                <Form.Label>Via</Form.Label>
              </Form.Field>
            </Form.Container>
            <Input
              type="text"
              value={via}
              onChange={(e) => setVia(e.target.value)}
            />
            <Button onClick={sendFilter}>Enviar Filtro</Button>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Container>
      <div
        style={{
          backgroundColor: "#F2F2F3",
          height: "100%",
          padding: "0 0 24px",
        }}
      >
        <div style={{ display: "flex", padding: "50px" }}>
          <ImageGallery images={images} />

          <div
            style={{
              width: "40%",
              backgroundColor: "white",
              margin: "8px",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <Form.Container>
              <Form.Field name="ocr">
                <Form.Label>OCR</Form.Label>
                <Input type="text" ref={ocrInputRef} />
              </Form.Field>
            </Form.Container>
            <Form.Container>
              <Form.Field name="ocr">
                <Form.Label>Formas de pagamento</Form.Label>
                <SelectDemo />
              </Form.Field>
            </Form.Container>
            <Button
              style={{ marginTop: "88%" }}
              onClick={() => (test === 0 ? setTest(1) : setTest(0))}
            >
              TROCA: {keys[test]}
            </Button>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

export default App;
