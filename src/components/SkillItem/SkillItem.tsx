import { screenDevice } from '../../utils/screen-size.ts'
import styled from 'styled-components'

type Props = {
  skill?: string
}

export function SkillItem ({ skill }: Props) {
  return (
    <>
      <SkillItemComponent>
        <Skill>{skill}</Skill>
      </SkillItemComponent>
    </>
  )
}

const SkillItemComponent = styled.div`
  border: 1px solid #ECF4F9;
  background-color: #F7FAFC;
  padding: 4px 8px;
  border-radius: 8px;
  margin: 0 8px 8px 8px;
  cursor: default;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
  
  & + &, &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media ${screenDevice.mobile} {
    padding: 4px;
    border-radius: 2px;
    margin: 0 4px 4px 4px;
  }
`

const Skill = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #516CF7;

  @media ${screenDevice.mobile} {
    font-size: 15px;
    line-height: 1;
  }
`
