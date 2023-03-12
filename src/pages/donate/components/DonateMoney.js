import { Link } from "react-router-dom";
import { donateitemdata } from "../componentsdata/DonateData";

const DonateMoney = () => {
  return (
    <section className="donatemoney">
      <div className="container">
        <div className="donatemoneylist">
          {donateitemdata.map((item, index) => (
            <div className="donatemoney-item">
              <Link
                to="/productitem"
                state={item}
                className="donatebuttoncolor"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonateMoney;
