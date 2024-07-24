import { screenDevice } from '../../utils/screen-size.ts'
import styled from 'styled-components'

type Props = {
  position?: string,
  period?: string
  universityName?: string,
  department?: string,
  speciality?: string
}

export function EducationItem ({ position, period, universityName, department, speciality }: Props) {
  return (
    <>
      <EducationItemComponent>
        <ItemHead>
          <Position>{position}</Position>
          <Period>{period}</Period>
        </ItemHead>

        <CompanyName>{universityName}</CompanyName>
        <div><span>{department}</span></div>
        <div>
          <span><strong>Специальность:</strong> {speciality}</span>
        </div>
      </EducationItemComponent>
    </>
  )
}

const EducationItemComponent = styled.div`
  justify-content: space-between;
  overflow: hidden;
  cursor: default;
  background: #F7F9FC;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ECF4F9;
`

const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Position = styled.div`
  display: block;
  margin-bottom: 4px;
  color: #79819A;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;

  @media ${screenDevice.mobile} {
    font-size: 12px;
  }
`

const CompanyName = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  white-space: pre-line;

  @media ${screenDevice.mobile} {
    font-size: 16px;
  }
`

const Period = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
`
