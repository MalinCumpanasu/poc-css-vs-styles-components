import { StyledCustomTitle, StyledSubTitle } from "./styles";
import style from "../../styles/modules/CustomTitle.module.css";

export default function CustomTitle() {
  return (
    <>
      <h2
        className={
          true ? style["custom-title-red"] : style["custom-title-blue"]
        }
      >
        My custom title
      </h2>
      <StyledSubTitle>ABCD</StyledSubTitle>
    </>
  );
}
