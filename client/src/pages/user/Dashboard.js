import React from "react";

// import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import WithLayout from "../../component/Layout/Layout";

const Dashboard = () => {
  const [auth,setAuth] = useAuth();
  return (
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            {/* <UserMenu /> */}
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WithLayout(Dashboard);