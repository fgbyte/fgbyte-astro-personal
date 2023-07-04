import Modal from "./Modal.jsx";
import Payment from "./Payment.jsx";
import { useState } from "react";

const ReactivePayments = ({ data }) => {
  const [qrData, setQrData] = useState({ img: "", label: "", value: "" });

  return (
    <>
      <Modal qrData={qrData} />
      <Payment
        img={data.btc.img}
        label={data.btc.label}
        value={data.btc.value}
        setQrData={(v) => setQrData(v)}
      />
      <Payment
        img={data.usdt.img}
        label={data.usdt.label}
        value={data.usdt.value}
        setQrData={(v) => setQrData(v)}
      />
      <Payment
        img={data.cup.img}
        label={data.cup.label}
        value={data.cup.value}
        setQrData={(v) => setQrData(v)}
      />
      <Payment
        img={data.mlc.img}
        label={data.mlc.label}
        value={data.mlc.value}
        setQrData={(v) => setQrData(v)}
      />
    </>
  );
};

export default ReactivePayments;
