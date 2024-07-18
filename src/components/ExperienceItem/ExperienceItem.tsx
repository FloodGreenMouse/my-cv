import { screenDevice } from '../../utils/screen-size.ts'
import styled from 'styled-components'

type Props = {
  position: string,
  companyName: string,
  period: string,
  current?: boolean,
  list?: string[]
}

export function ExperienceItem ({ position, companyName, period, current, list }: Props) {
  return (
    <>
      <ExperienceItemComponent $current={current || false}>
        <Container>
          <ItemHead>
            <Position>{position}</Position>
            <Period>
              <span>{period}</span>
            </Period>
          </ItemHead>

          <CompanyInfo>
            <CompanyName dangerouslySetInnerHTML={{__html: companyName}} />
            {current && <Current>Текущая</Current>}
          </CompanyInfo>
        </Container>
        {list && <List>
          {list.map((item, i) => <ListItem key={i} dangerouslySetInnerHTML={{__html: item}}></ListItem>)}
        </List>}
      </ExperienceItemComponent>
    </>
  )
}

const ExperienceItemComponent = styled.div<{ $current: boolean }>`
  background-color: ${props => props.$current ? '#F8F2FC' : '#F7F9FC'};
  border: 1px solid;
  border-color: ${props => props.$current ? '#EFE2F9' : '#ECF4F9'};
  padding: 8px 16px;
  cursor: default;
  border-radius: 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.01);
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:nth-child {
    border-radius: 0;
    background-color: red !important;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }

  & + & {
    margin-top: 8px;
  }
`

const Container = styled.div`
`

const ItemHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Position = styled.div`
  display: block;
  margin-bottom: 4px;
  color: #79819A;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;

  @media ${screenDevice.mobile} {
    font-size: 12px;
  }
`

const CompanyName = styled.div`
  color: var(--color-text);
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;

  a {
    color: var(--color-text);
    text-underline-offset: 2px;
    text-decoration-color: rgba(46, 46, 72, 0.5);
    transition: text-underline-offset 0.2s ease;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;

    &:visited {
      color: var(--color-text);
    }
    
    &:hover {
      text-underline-offset: 1px;
    }
  }

  @media ${screenDevice.mobile} {
    font-size: 16px;
    line-height: 1;
    
    a {
      font-size: 16px;
      line-height: 1;
    }
  }
`

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
`

const Period = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: var(--color-text);

  span {
    font-weight: 600;
  }

  @media ${screenDevice.mobile} {
    font-size: 12px;
  }
`

const Current = styled.span`
  color: #9251F7;
  background-color: #EFE2F9;
  padding: 2px 4px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  margin-left: 10px;

  @media ${screenDevice.mobile} {
    font-size: 12px;
    margin-bottom: 4px;
  }
`

const List = styled.ul`
  margin: 8px 0;
  padding-left: 20px;
`

const ListItem = styled.li`
  font-size: 14px;
  line-height: 24px;

  a {
    color: var(--color-text)
  }
`
