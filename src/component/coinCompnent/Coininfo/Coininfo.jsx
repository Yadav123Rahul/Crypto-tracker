import { useState } from "react";

function Coininfo({ heading, desc }) {
  // console.log("heading>>>>",desc);
  const [checkDesc, setCheckDesc] = useState(false);

  const smallDesc = desc.slice(0, 600) + "<span class='readmore'> Read More...</span>";
  const largeDesc = desc + "<span class='readmore'> Read Less...</span>";

  function ReadMore() {
    // console.log("sdjkds");
    setCheckDesc(!checkDesc);
  }

  return (
    <div>
      <h2>{heading}</h2>
      <p
      onClick={ReadMore}
        className="coin_desc"
        dangerouslySetInnerHTML={{ __html: checkDesc ? largeDesc : smallDesc }}
      />
    </div>
  );
}

export default Coininfo;
