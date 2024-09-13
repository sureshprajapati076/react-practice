import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Franskisko", "Seattle", "Thimi", "Nepal"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <Alert>
          <h2>WORLD</h2>
        </Alert>
      </div>

      <div>
        <Button color="danger" onClick={() => console.log("Clicked")}>
          My Button Name
        </Button>
        <Button onClick={() => console.log("Clicked")}>My Button Name</Button>
      </div>
    </>

    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
  );
}

export default App;
