import styled from 'styled-components'
import { useMemo } from 'react'
import { IconFlagEnglish } from '../icons/IconFlagEnglish.tsx'

type Props = {
  icon?: string,
  type?: string,
  info?: string
}

export function LanguageItem ({ icon, type, info }: Props) {
  const iconElement = useMemo(() => {
    switch (icon) {
      case 'ENGLISH':
        return <IconFlagEnglish />
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
            <span>{info}</span>
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
  width: 36px;
  height: 27px;
  margin-right: 8px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const Type = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #79819A;
  font-weight: 500;
`

const Info = styled.div`
  font-size: 12px;
  line-height: 20px;
  
  a, span {
    color: var(--color-text);
  }
`
