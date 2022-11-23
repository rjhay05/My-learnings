import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
  const [users, setUsers] = useState([]);
 
  const userDataHandler = (data) => {
    setUsers((prevState) => {
      return [
        ...prevState, data
      ]
    })
  }


  return (
    <div className="App">
        <AddUser userData={userDataHandler}/>
        <UsersList items={users} />
    </div>
  );
}
export default App;
