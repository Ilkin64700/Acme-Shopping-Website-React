import React from "react";

const Local = ({localdata,bgimage,widthadjustment,textadjustment,mgbottom,fntweight,sctnheight}) => {
 
  // console.log('localdata',localdata)
  return (
    <section className={`local ${sctnheight}`}>
      <div className="container">
        <div className="local-imagetext">
          <div className={`local-image ${bgimage}`} />
          <div className={`local-right ${widthadjustment}`}>
            <div className={`local-text ${textadjustment}`}>
              <h2 className="local-header">{localdata[0].title}</h2>
              <p>
               {localdata[0].textone}
              </p>
              <p>
               {localdata[0].texttwo}
              </p>
              <p>
               {localdata[0].textthree}
              </p>
              <p>{localdata[0].textfour}</p>
              <p className={mgbottom}>{localdata[0].textfive}</p>
              <p className={fntweight}>{localdata[0].textsix}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Local;
