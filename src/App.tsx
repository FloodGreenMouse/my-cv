import { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './i18n.ts'
import { useTranslation } from 'react-i18next';
import { Sidebar } from './components/Sidebar/Sidebar.tsx'
import { ContentSection } from './components/ContentSection/ContentSection.tsx'
import { screenDevice } from './utils/screen-size.ts'
import { IconDownload } from './components/icons/IconDownload.tsx'
import styled from 'styled-components'


function App () {
  const { t } = useTranslation()
  const currentLang = localStorage.getItem('lang') || 'en'
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const switchLang = () => {
    const lang = localStorage.getItem('lang') === 'en' ? 'ru' : 'en'

    localStorage.setItem('lang', lang)
    window.location.reload()
  }

  useEffect(() => {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
  })

  return (
    <>
      <AppComponent ref={contentRef}>
        <ButtonDownloadPdf onClick={reactToPrintFn} target="_blank">
          <IconDownload/>
          <span>PDF</span>
        </ButtonDownloadPdf>

        <ButtonChangeLang onClick={switchLang} title={t('changeLanguage')}>
          { currentLang === 'en' ? 'RU' : 'EN' }
        </ButtonChangeLang>
        <Sidebar/>
        <ContentSection/>
      </AppComponent>
    </>
  )
}

const AppComponent = styled.div`
  display: flex;

  @media ${screenDevice.mobile} {
    display: block;
  }
`

const ButtonDownloadPdf = styled.a`
  position: fixed;
  display: inline-flex;
  align-items: center;
  background-color: #9251F7;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  color: #FFFFFF;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  z-index: 999;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 12px;
    line-height: 1;
    font-weight: 600;
  }

  svg {
    width: 16px;
    margin-right: 8px;
  }

  @media print {
    display: none;
  }
`

const ButtonChangeLang = styled.a`
  position: fixed;
  display: inline-flex;
  align-items: center;
  background-color: #9251F7;
  border: 0;
  padding: 4px 8px;
  border-radius: 0 0 0 4px;
  font-size: 11px;
  color: #FFFFFF;
  right: 0;
  top: 0;
  cursor: pointer;
  z-index: 999;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 12px;
    line-height: 1;
    font-weight: 600;
  }

  svg {
    width: 16px;
    margin-right: 8px;
  }

  @media print {
    display: none;
  }
`

export default App
