const Payment = ({ img, label, value, setQrData }) => {
  return (
    <>
      <label
        htmlFor="modal-qr"
        target="_blank"
        className="btn btn-outline w-full md:w-96 gap-2 flex justify-between m-auto"
        onClick={() => setQrData({ img, label, value })}
      >
        <img src={img} className="w-9 h-9" />
        <div>{label}</div>
        <div className="w-9 h-9"></div>
      </label>
    </>
  );
};

export default Payment;
