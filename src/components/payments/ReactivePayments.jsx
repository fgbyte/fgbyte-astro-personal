import Modal from "./Modal.jsx";
import Payment from "./Payment.jsx";
import { useState } from "react";

const ReactivePayments = ({ data }) => {
  const [qrData, setQrData] = useState({ img: "", label: "", value: "" });

  const processData = Object.values(data);

  return (
    <>
      <Modal qrData={qrData} />
      {processData.map((item) => (
        <Payment
          key={item.label}
          img={item.img}
          label={item.label}
          value={item.value}
          setQrData={(v) => setQrData(v)}
        />
      ))}
    </>
  );
};

export default ReactivePayments;
