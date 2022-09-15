import { Fragment, useState } from "react";
import "./style.scope.scss";
import { StAlert } from "../../../Components";
import FormOne from "./formOne";
import FormTwo from "./formTwo";

const Steps = () => {
  const [firstShow, setFirstShow] = useState<boolean>(true);
  const [secShow, setSecShow] = useState<boolean>(false);
  const [alertShow, setAlertShow] = useState<boolean>(false);
  const onClickFirst = () => {
    if (firstShow === true && secShow === false) {
      setFirstShow(false);
      setSecShow(true);
    }
  };
  const Alert = () => {
    return (
      <StAlert className={"fade-out"} alertTitle="Oooppss!" severity="success" variant="standard">
        Operation Successful
      </StAlert>
    );
  };
  const onClickSec = () => {
    if (secShow === true) {
      setSecShow(false);
      setAlertShow(true);
    }
  };
  return (
    <Fragment>
      {firstShow && <FormOne className={"fade-out"} onclick={onClickFirst}></FormOne>}
      {secShow && <FormTwo onclick={onClickSec}></FormTwo>}
      {alertShow && <Alert />}
    </Fragment>
  );
};

export default Steps;
