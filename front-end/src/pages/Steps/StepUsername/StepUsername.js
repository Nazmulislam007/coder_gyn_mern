import React from "react";
import Button from "../../../Components/Shared/Button/Button";
import Card from "../../../Components/Shared/Card/Card";

const StepUsername = ({ onNext }) => {
  return (
    <>
      <Card title="Username">
        <Button onClick={onNext}>Submit</Button>
      </Card>
    </>
  );
};

export default StepUsername;
