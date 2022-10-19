import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-2lx text-purple-500">Payment for {id}</h2>
    </div>
  );
};

export default Payment;
