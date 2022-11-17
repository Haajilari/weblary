import { Fragment } from "react";
import {
  FlexIt,
  GenerateLine,
  MultiLvlSelection,
  StAlert,
  StButton,
  StCard,
  StModal,
} from "../../Components";

const VComponent = () => {
  const LoremIps = (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
      release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  );
  return (
    <Fragment>
      <StCard title="MultiLevelSelect">
        <MultiLvlSelection />
      </StCard>
      {/* <StCard title="Generate Line">
        <GenerateLine></GenerateLine>
      </StCard>
      <StCard title="Modal">
        <StModal btnColor="secondary" btnVariant="contained" btnSize="large">
          {LoremIps}
        </StModal>
      </StCard>
      <StCard title="Alerts">
        <StAlert alertTitle="Hey" variant="filled" severity="success">
          Operation Success
        </StAlert>
        <StAlert variant="outlined" severity="error">
          Operation Failed
        </StAlert>
        <StAlert variant="standard" severity="warning">
          Warning
        </StAlert>
      </StCard>
      <StCard title="Buttons">
        <StButton onClick={() => alert("Hi")}> Hey</StButton>
      </StCard>
      <StCard title="Card">
        <FlexIt rowReverse justifyContent={{ active: true, mode: "end" }}>
          <StCard textJustify lg={8} sm={12}>
            {LoremIps}
          </StCard>
          <StCard lg={4} sm={12}>
            {LoremIps}
          </StCard>
          <StCard lg={3} sm={12}>
            {LoremIps}
          </StCard>
          <StCard lg={6} sm={12}>
            {LoremIps}
          </StCard>
          <StCard lg={3} sm={12}>
            {LoremIps}
          </StCard>
          <StCard lg={7} sm={12}>
            {LoremIps}
          </StCard> 
        </FlexIt> 
      </StCard>*/}
    </Fragment>
  );
};

export default VComponent;
