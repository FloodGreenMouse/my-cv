export const screenSize = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const screenDevice = {
  mobile: `(max-width: ${screenSize.mobile})`,
  tablet: `(max-width: ${screenSize.tablet})`,
  laptop: `(max-width: ${screenSize.laptop})`,
  laptopL: `(max-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`
}
