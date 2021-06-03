// Styles
import "../App.css";

export const Table = (props) => {
  return props.headers ? (
    <div className="table">
      <div className="tableRow">
        {props.headers.map((header) => (
          <div className="cell cellHeader">
            <p className="cellText cellTextHeader">{header}</p>
          </div>
        ))}
      </div>
      {props.data.map((row) => (
        <div className="tableRow">
          {props.headers.map((header) => (
            <div className={`cell cell${props.data.indexOf(row) % 2}`}>
              <p className="cellText">{row[header]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  ) : null;
};
