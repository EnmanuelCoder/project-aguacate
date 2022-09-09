import React, { useState } from "react";
import arrow from "../assets/icons/arrowBottom.svg";

const FqaInfo = ({ question, info }) => {
  const [close, setClose] = useState(false);
  return (
    <article id="faq" className="w-full mx-auto h-auto font-roboto">
      <div className="flex justify-between border-b-2 border-primary">
        <h4 className="font-bold text-xl pb-3">{question}</h4>
        <figure onClick={() => setClose(!close)} className="">
          <img src={arrow} alt="Icon arrow"/>
        </figure>
      </div>
      {
        close &&
        <div className="container mx-auto text-lg font-roboto pt-10">
          <p>{info}</p>
        </div>
      }
    </article>
  );
};

export default FqaInfo;
