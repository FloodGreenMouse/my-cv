import styled from 'styled-components'
import { IconGitHub } from '../icons/IconGitHub.tsx'
import { IconLinkedIn } from '../icons/IconLinkedIn.tsx'
import { useMemo } from 'react'

type Props = {
  icon?: string,
  type?: string,
  info?: string,
  link?: string
}

export function SocialItem ({ icon, type, info, link }: Props) {
  const iconElement = useMemo(() => {
    switch (icon) {
      case 'GITHUB':
        return <IconGitHub />
      case 'LINKEDIN':
        return <IconLinkedIn></IconLinkedIn>
      default:
        return <></>
    }
  }, [icon])
  return (
    <>
      <SocialItemComponent>
        <Icon>
          { iconElement }
        </Icon>
        <div>
          <Type>{type}</Type>
          <Info>
            { link ? <a href={link} target="_blank">{info}</a> : <span>{info}</span> }
          </Info>
        </div>
      </SocialItemComponent>
    </>
  )
}

const SocialItemComponent = styled.div`
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
  font-weight: 500;
`

const Info = styled.div`
  font-size: 14px;
  line-height: 20px;
  
  a, span {
    color: var(--color-text);
  }
`
