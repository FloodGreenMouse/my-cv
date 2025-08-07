import styled from 'styled-components';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function SwitchLanguage ({ checked, onChange }: Props) {
  return (
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <SwitchSlider/>
    </SwitchWrapper>
  );
}

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #4caf50;
  }

  &:checked + span::before {
    transform: translateX(24px);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 24px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s;

  &::before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    top: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }
`;
