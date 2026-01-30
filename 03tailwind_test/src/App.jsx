import Card from "./components/Card";

function App() {

  let myObj = {
    username: "Saheli",
    age: 24
  }

  let newArr= [1,2,3];
  return (
    <>
      <Card userName="Saheli" btnText="Read More" />
      <Card userName="Diya" />
    </>
  );
}

export default App;
