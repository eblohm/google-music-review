import styled from "styled-components";
import { Button, Input, MenuItem, Select } from "@material-ui/core";
import { AbsoluteCenter } from "./styles";

const FormUpload = styled(Input)``;

const FormButton = styled(Button)`
  background-color: ${props => props.theme.primary};
  text-transform: none;

  &.reset-button {
    margin-left: 47%;
    margin-right: 47%;
    width: 6%;
  }

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
    margin-bottom: 0.5rem;

    .form-error {
      background-color: #e57373;
      border: 1px solid #e53935;
      border-radius: 4px;
      padding: 8px;
      position: absolute;
      top: -60%;
    }

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

const FormItem = styled(MenuItem)`
  &.MuiListItem-root.Mui-selected,
  &.MuiListItem-root.Mui-selected:hover,
  &.MuiListItem-root:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const FormSelect = styled(Select)``;

export default FormStyles;
export { FormUpload, FormButton, FormItem, FormSelect };
