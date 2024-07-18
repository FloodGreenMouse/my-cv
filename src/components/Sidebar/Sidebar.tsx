import styled from 'styled-components'
import { BioItem } from '../BioItem/BioItem.tsx'
import { SocialItem } from '../SocialItem/SocialItem.tsx'
import { LanguageItem } from '../LanguageItem/LanguageItem.tsx'
import { screenDevice } from '../../utils/screen-size.ts'

import { InfoBio, InfoSocials, InfoLanguages } from '../../utils/info.ts'

export function Sidebar () {
  return (
    <>
      <SidebarComponent>
        <AvatarSection>
          <img src="/photo.jpg" alt="Avatar"/>
        </AvatarSection>

        <NameSection>
          <h1>Платицин Сергей</h1>
          <span>Frontend developer</span>
        </NameSection>

        <hr/>

        <BioSection>
          <Subtitle>Контакты</Subtitle>
          { InfoBio.map((item, i) => <BioItem
            key={i}
            icon={item.icon}
            type={item.type}
            info={item.info}
            link={item.link}/>
          )}
        </BioSection>

        <hr/>

        <SocialSection>
          <Subtitle>Социальные сети</Subtitle>
          { InfoSocials.map((item, i) => <SocialItem
            key={i}
            icon={item.icon}
            type={item.type}
            info={item.info}
            link={item.link}/>
          )}
        </SocialSection>

        <hr/>

        <LanguagesSection>
          <Subtitle>Языки</Subtitle>
          { InfoLanguages.map((item, i) => <LanguageItem
            key={i}
            icon={item.icon}
            type={item.type}
            info={item.info}/>
          )}
        </LanguagesSection>

        <Background>
          <div/>
          <div/>
          <div/>
        </Background>
      </SidebarComponent>
    </>
  )
}

const SidebarComponent = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 20px 20px 80px 20px;
  box-shadow: -5px 0 10px 0 rgba(46, 46, 72, 0.04) inset;
  
  hr {
    background-color: #E2E6EE;
    border: none;
    height: 1px;
    margin: 16px 8px;
  }
  
  @media ${screenDevice.mobile} {
    min-height: initial;
    padding: 16px 8px;
    box-shadow: none;
  }
`

const Subtitle = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
`

const AvatarSection = styled.div`
  max-width: 250px;
  width: 100%;
  margin: auto;
  margin-bottom: 6px;

  img {
    width: 100%;
    border-radius: 8px;
  }
`

const NameSection = styled.div`
  h1 {
    text-align: center;
    margin: 0 0 8px 0;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    color: var(--color-text);
  }
  
  span {
    text-align: center;
    display: block;
    font-size: 20px;
    line-height: 1;
    font-weight: 600;
    color: #9251F7;
  }
`

const BioSection = styled.div``

const SocialSection = styled.div``

const LanguagesSection = styled.div``

const Background = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  //background: linear-gradient(to right, #FFFFFF, #ECE9E6);
  display: flex;
  flex-grow: 1;
  z-index: -1;

  div {
    position: absolute;
    border-radius: 100%;
    height: 0;
    filter: blur(240vw);
    opacity: 0.4;
  }

  div:nth-child(1) {
    background: linear-gradient(132deg, #1FCFC3 0.00%, #1F91CF 100.00%);
    width: 130%;
    padding-top: 30%;
    left: 100%;
    top: 20%;
    transform: translateX(-50%) translateY(-50%);
  }

  div:nth-child(2) {
    background: linear-gradient(132deg, #0800FF 0.00%, #E32BE3 100.00%);
    width: 100%;
    padding-top: 50%;
    left: 100%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  div:nth-child(3) {
    background: linear-gradient(132deg, #1FCFC3 0.00%, #1F91CF 100.00%);
    width: 115%;
    padding-top: 115%;
    left: 0%;
    top: 80%;
    transform: translateX(-50%) translateY(-50%);
  }
`
