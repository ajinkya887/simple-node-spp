import React from "react";
import AddUserForm from "../components/addUserForm";
import UserList from "../components/UserList";

const Home = () => {
    return(
        <div>
            <h1>User</h1>
            <AddUserForm />
            <UserList />
        </div>
    )
}

export default Home;