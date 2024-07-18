import styled from 'styled-components'
import { ExperienceItem } from '../ExperienceItem/ExperienceItem.tsx'
import { SkillItem } from '../SkillItem/SkillItem.tsx'
import { EducationItem } from '../EducationItem/EducationItem.tsx'
import { InfoExperience, InfoSkills, InfoEducation } from '../../utils/info.ts'
import { screenDevice } from '../../utils/screen-size.ts'

export function ContentSection () {
  return (
    <>
      <ContentSectionComponent>
        <Content>
          <ExperienceSection>
            <Title>Опыт работы</Title>
            <ExperienceItems>
              {InfoExperience.map((item, i) => <ExperienceItem
                key={i}
                position={item.position}
                period={item.period}
                companyName={item.companyName}
                current={item.current}
                list={item.list}
              />)}

            </ExperienceItems>
          </ExperienceSection>

          <SkillsSection>
            <Title>Навыки</Title>

            <div>
              {InfoSkills.map((skillsList, i) =>
                <div key={i}>
                  <SkillsTitle>{skillsList.title}</SkillsTitle>
                  <SkillItems>
                    {skillsList.skills.map((skill, i) => <SkillItem key={i} skill={skill}/>)}
                  </SkillItems>
                </div>)
              }
            </div>
          </SkillsSection>

          <EducationSection>
            <Title>Образование</Title>

            <Education>
              {InfoEducation.map((item, i) =>
                <EducationItem
                  key={i}
                  position={item.position}
                  period={item.period}
                  universityName={item.universityName}
                  department={item.department}
                />)
              }
            </Education>
          </EducationSection>
        </Content>
      </ContentSectionComponent>
    </>
  )
}

const ContentSectionComponent = styled.div`
  padding: 32px 16px;
  flex: 1;

  @media ${screenDevice.mobile} {
    padding: 16px 8px;
  }
`

const Content = styled.div`
  width: 800px;
  margin: auto;

  @media ${screenDevice.mobile} {
    width: auto;
  }

  @media ${screenDevice.laptop} {
    width: auto;
  }
`

const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  margin: 0 0 24px 0;
  color: var(--color-text);
`

const ExperienceSection = styled.div`
  margin-bottom: 32px;
`

const ExperienceItems = styled.div``

const SkillsSection = styled.div`
  margin-bottom: 32px;
`

const SkillsTitle = styled.span`
  display: block;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #79819A;

  @media ${screenDevice.mobile} {
    font-size: 12px;
    line-height: 1;
  }
`

const SkillItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;

  @media ${screenDevice.mobile} {
    margin-bottom: 8px;
  }
`

const EducationSection = styled.div`
  margin-bottom: 24px;
`

const Education = styled.div``
