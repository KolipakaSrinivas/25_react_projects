import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [eneableMultiSelectionOption, SetEnableMultiSelectionOption] =
    useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSelection = (id) => {
    setSelected(id == selected ? null : id);
    console.log(selected);
  };

  const multipleHandleSelection = (id) => {
    const copyArray = [...multiple];
    const index = copyArray.indexOf(id);
    if (index == -1) {
      copyArray.push(id);
    } else {
      copyArray.splice(index, 1);
    }
    setMultiple(copyArray);
    console.log(copyArray);
  };

  return (
    <div className="acc-wrapper">
      <button
        onClick={() =>
          SetEnableMultiSelectionOption(!eneableMultiSelectionOption)
        }
      >
        Enable Multi selction option
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div key={dataItem.id} className="item">
                <div>
                  <h1
                    className="title"
                    onClick={
                      eneableMultiSelectionOption
                        ? () => multipleHandleSelection(dataItem.id)
                        : () => handleSelection(dataItem.id)
                    }
                  >
                    {dataItem.question}
                  </h1>
                </div>

                {eneableMultiSelectionOption ? (
                  multiple.indexOf(dataItem.id) !== -1 && (
                    <div>
                      <p className="acc-content">{dataItem.answer}</p>
                    </div>
                  )
                ) : selected == dataItem.id ? (
                  <div>
                    <p className="acc-content">{dataItem.answer}</p>
                  </div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Accordian;
