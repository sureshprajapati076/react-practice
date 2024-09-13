import { MouseEvent, useState } from "react";

//Reusable components Props==Properties
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Franskisko", "Seattle", "Thimi", "Nepal"];

  //let selectedIndex = -1;

  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //State Hook
  // const arr = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] //updater function

  //items = [];

  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={() => console.log(item, index)}

            //  onClick={handleClick}

            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
