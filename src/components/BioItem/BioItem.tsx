import styled from 'styled-components'
import { IconMail } from '../icons/IconMail.tsx'
import { IconPhone } from '../icons/IconPhone.tsx'
import { IconSpot } from '../icons/IconSpot.tsx'

type BioItem = {
  icon?: string
  type?: string
  info?: string,
  link?: string
}

export function BioItem ({ icon, type, info, link }: BioItem) {
  const getIcon = () => {
    switch (icon) {
      case 'MAIL':
        return <IconMail />
      case 'PHONE':
        return <IconPhone />
      case 'LOCATION':
        return <IconSpot />
      default:
        return <></>
    }
  }

  return (
    <>
      <BioItemComponent>
        <Icon>
          {getIcon()}
        </Icon>
        <div>
          <Type>{type}</Type>
          <Info>
            {link ? <a href={link}>{info}</a> : <span>{info}</span>}
          </Info>
        </div>
      </BioItemComponent>
    </>
  )
}

const BioItemComponent = styled.div`
  display: flex;
  align-items: center;
  
  & + & {
    margin-top: 16px;
  }
`

const Icon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const Type = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #79819A;
  font-weight: 600;
`

const Info = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  
  a, span {
    color: var(--color-text);
  }
`
