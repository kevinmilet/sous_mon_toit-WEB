import styled from 'styled-components'
import colors from "./colors";

export const StyledBtnPrimary = styled.button`
    width: 175px;
    height: 50px;
    color: ${colors.backgroundPrimary};
    border-radius: 50px;
    background: ${colors.primaryBtn};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    &:hover {
         color: ${colors.primaryBtn};
         background: ${colors.backgroundPrimary};
         border: 2px solid ${colors.primaryBtn};
    }
    &:focus {
        outline: none;
        box-shadow: none;
    }
`
export const StyledBtnSecondary = styled.button`
    width: 175px;
    height: 50px;
    color: ${colors.secondaryBtn};
    border-radius: 50px;
    background: ${colors.backgroundPrimary};
    border: 2px solid ${colors.secondaryBtn};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    &:hover {
         color: ${colors.primaryBtn};
         background: ${colors.backgroundPrimary};
         border: 2px solid ${colors.primaryBtn};
    }
    &:focus {
        outline: none;
        box-shadow: none;
    }
`
export const StyledInput = styled.input`
    border-radius: 50px;
    border: 2px solid ${colors.secondaryBtn};
    &:focus {
        outline: none;
        box-shadow: none;
    }
`
export const StyledTextarea = styled.textarea`
    border-radius: 25px;
    resize: none;
    border: 2px solid ${colors.secondaryBtn};
`
