import React from "react";
import Button from "react-bootstrap/esm/Button";

function UserBlockAccount(props) {
  return (
    <div>
      <p className="fs-5">Are you sure to block your account?</p>
      <p className="text-primary fs-5">
        After your account is blocked, you cannot logged in and this cannot be
        rollback!
      </p>
      <p className="text-primary fs-5">You can only contact with admin to re-open your account.</p>
      <Button className="btn-danger">Block my account</Button>
    </div>
  );
}

export default UserBlockAccount;
