import styled from "styled-components";
import { Button } from "@material-ui/core";
import { AbsoluteCenter } from "./styles";

const ModalActivator = styled(Button)`
  bottom: 5%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`;

const ModalBackground = styled.div`
  background-color: hsla(0, 0%, 0%, 0.8);
  height: 100vh;
  left: 0;
  max-width: 100vw;
  position: absolute;
  top: 0;
  width: 100vw;
`;

const ModalStyles = styled(AbsoluteCenter)`
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  padding: 1rem;

  .modal--header {
    text-align: right;

    .modal--close {
      background-color: ${props => props.theme.white};
      border: none;
      font-size: 1.5rem;
    }
  }

  .inspiration {
    text-align: center;
  }

  a {
    color: blue;
  }
`;

export default ModalStyles;
export { ModalActivator, ModalBackground };
