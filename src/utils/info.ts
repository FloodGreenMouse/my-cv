import i18n from '../i18n.ts'

export const InfoBio = [
  { icon: 'MAIL', type: 'Email', info: 'sergeypltinfo@gmail.com', link: 'mailto:sergeypltinfo@gmail.com' },
  { icon: 'PHONE', type: i18n.t('phone'), info: '+7(995)079-09-81', link: 'tel:+79950790981' },
  { icon: 'LOCATION', type: i18n.t('city'), info: i18n.t('saint') }
]

export const InfoSocials = [
  { icon: 'GITHUB', type: 'GitHub', info: 'FloodGreenMouse', link: 'https://github.com/FloodGreenMouse' },
  {
    icon: 'LINKEDIN',
    type: 'Linkedin',
    info: 'sergey-platitsin-0717851a7',
    link: 'https://www.linkedin.com/in/sergey-platitsin-0717851a7/'
  }
]

export const InfoLanguages = [
  { icon: 'ENGLISH', type: 'English', info: 'Intermediate [B1]' }
]

// eslint-disable-next-line
// @ts-ignore
export const InfoExperience = [
  {
    position: 'Frontend developer',
    companyName: '<a href="https://latech.ru/" target="_blank">Lamoda Tech</a>',
    period: `${i18n.t('months.march')} 2025`,
    current: true,
    list: i18n.t('workExperience.lamoda', { returnObjects: true })
  },
  {
    position: 'Frontend lead-developer',
    companyName: '<a href="https://i-dgtl.ru/" target="_blank">i-Digital LLC</a>',
    period: `${i18n.t('months.march')} 2020 – ${i18n.t('months.march')} 2025`,
    current: false,
    list: i18n.t('workExperience.idgtl', { returnObjects: true })
  },
  {
    position: 'Junior frontend developer',
    companyName: '<a href="https://pitch-it.ru/" target="_blank">Pitch (быв. Студия Александра Лебедева)</a>',
    period: `${i18n.t('months.february')} 2019 – ${i18n.t('months.march')} 2020`,
    list: i18n.t('workExperience.pitch', { returnObjects: true })
  },
  {
    position: 'Junior frontend developer',
    companyName: 'Freelance',
    period: `${i18n.t('months.may')} 2018 - ${i18n.t('months.february')} 2019`,
    list: i18n.t('workExperience.freelance', { returnObjects: true })
  },
  {
    position: 'Web developer (intern)',
    companyName: '<a href="https://www.soft-c.ru/" target="_blank">ООО "СОФТ-Центр"</a>',
    period: `${i18n.t('months.march')} 2018 — ${i18n.t('months.may')} 2018`,
    list: i18n.t('workExperience.intern', { returnObjects: true })
  }
]

export const InfoEducation = [
  {
    position: i18n.t('infoEducation.position'),
    universityName: i18n.t('infoEducation.universityName'),
    department: i18n.t('infoEducation.department'),
    speciality: i18n.t('infoEducation.speciality'),
    period: '2012 - 2016'
  }
]

export const InfoSkills = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript (ES6)']
  },
  {
    title: 'Frameworks',
    skills: ['Vue 2/3', 'Nuxt 2/3', 'React', 'Microfrontend']
  },
  {
    title: 'State managers',
    skills: ['Vuex', 'Pinia', 'Redux', 'Redux Toolkit', 'Zustand']
  },
  {
    title: 'Testing',
    skills: ['Cypress', 'Vue Test Utils', 'Vitest', 'Jest']
  },
  {
    title: 'Bundlers',
    skills: ['Webpack', 'Vite', 'Rollup']
  },
  {
    title: 'Styling/Templating',
    skills: ['Styled Components', 'CSS3', 'Scss/Sass/Less/Stylus', 'MJML', 'Pug', 'JSX', 'Blade']
  },
  {
    title: 'Misc',
    skills: ['Storybook', 'WebSockets', 'Gulp', 'NPM/Yarn/pnpm', 'Git', 'PhpStorm/Webstorm']
  }
]
