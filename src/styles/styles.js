import styled from "styled-components";

const theme = {
  white: "hsl(0, 0%, 100%)"
};

const AbsoluteCenter = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FormStyles = styled(AbsoluteCenter)`
  position: absolute;
  text-align: center;

  .file-upload {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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

  a {
    color: blue;
  }
`;

const MusicStyles = styled.li`
  list-style-type: none;

  .music--name {
    font-size: 3rem;
  }
`;

const SectionStyles = styled.section``;

const SectionHeader = styled.h2``;

const SiteHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

export {
  theme,
  FormStyles,
  ModalBackground,
  ModalStyles,
  MusicStyles,
  SectionStyles,
  SectionHeader,
  SiteHeader
};
