import { Sidebar } from './components/Sidebar/Sidebar.tsx'
import { ContentSection } from './components/ContentSection/ContentSection.tsx'
import { screenDevice } from './utils/screen-size.ts'
import { IconDownload } from './components/icons/IconDownload.tsx'
import styled from 'styled-components'

function App () {
  return (
    <>
      <AppComponent>
        <ButtonDownloadPdf href="/cv-sergei-platitsin.pdf" download>
          <IconDownload/>
          <span>PDF</span>
        </ButtonDownloadPdf>
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
`

export default App
