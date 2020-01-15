import styled from 'styled-components';
import { Button, Input, Select } from '@material-ui/core';

const theme = {
  black: 'hsl(0, 0%, 0%)',
  orange: 'hsl(14, 100%, 57%)',
  white: 'hsl(0, 0%, 100%)',
};

const AbsoluteCenter = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FileUpload = styled(Input)``;

const FormButton = styled(Button)`
  background-color: ${props => props.theme.orange};
  text-transform: none;

  span {
    color: ${props => props.theme.black};
  }
`;

const FormStyles = styled(AbsoluteCenter)`
  position: absolute;
  text-align: center;

  .file-upload {
    align-items: center;
    display: flex;
    justify-content: center;

    label {
      margin-right: 0.5rem;
    }
  }

  .data-selector {
    display: flex;
    margin-bottom: 1rem;

    .slice-select,
    .year-select {
      label {
        margin-right: 0.5rem;
      }
    }

    .slice-select {
      margin-right: 0.5rem;
    }
  }
`;

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

const MusicStyles = styled.li`
  list-style-type: none;

  .music--name {
    font-size: 3rem;
  }
`;

const SectionStyles = styled.section``;

const SectionHeader = styled.h2``;

const SelectStyles = styled(Select)``;

const SiteHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

export {
  theme,
  FileUpload,
  FormStyles,
  FormButton,
  ModalActivator,
  ModalBackground,
  ModalStyles,
  MusicStyles,
  SectionStyles,
  SectionHeader,
  SelectStyles,
  SiteHeader,
};
