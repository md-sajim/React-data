import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Myfist
        Name="Md Abu Taleve"
        FatherName="Md abutl Khashem"
        MatherName="Shanaj Begum"
        Education="HSC"
        Gread="1.4"
        Section="Bussnis"
      ></Myfist>
      <Myfist
        Name="Md Abdul Motalabe"
        FatherName="Md abul Khashem"
        MatherName="Shanaj Begum"
        Education="SSC"
        Gread="4.5"
        Section="Bussnis"
      ></Myfist>
      <Myfist
        Name="Kamrun Nahar Pinke"
        FatherName="Md abutl Khashem"
        MatherName="Shanaj Begum"
        Education="BBS"
        Gread="3"
        Section="Bussnis"
      ></Myfist>
      <Myfist
        Name="Md Abul khasam"
        FatherName="Md Abudur Rohaman"
        MatherName="Jenonar Nasa"
        Education="SSC"
        Gread="Fist Grade"
        Section="Bussnis"
      ></Myfist>
      <Myfist
        Name="Shanaj Bagum"
        FatherName="Fazal Korim"
        MatherName="Taiabarnnsa"
        Education="Eaght"
        Gread="First Greade"
        Section="Bussnis"
      ></Myfist>
      <h1>Anather Section</h1>
      <Myfist2nd></Myfist2nd>
      <Myfist2nd></Myfist2nd>
      <Myfist2nd></Myfist2nd>
      <Myfist2nd></Myfist2nd>
      <Myfist2nd></Myfist2nd>
      <Myfist2nd></Myfist2nd>
    </div>
  );
}
function Myfist(props) {
  return (
    <div className="Fistclass">
      <h1>Name:{props.Name}</h1>
      <h2>FatherName:{props.FatherName}</h2>
      <h3>MotherName: {props.MotherName}</h3>
      <h3>Education: {props.Education}</h3>
      <p>Gread:{props.Gread}</p>
    </div>
  );
}
function Myfist2nd() {
  return (
    <div className="Fistclass">
      <h1>hi i am sajim</h1>
      <h1>hi i am sajim</h1>
      <h1>hi i am sajim</h1>
    </div>
  );
}
export default App;
