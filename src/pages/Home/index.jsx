import { useState } from 'react'
import { Header } from '../../components/Header'
import { PersonalProfile } from '../../components/PersonalProfile'
import { Skills } from '../../components/Skills'
import { AcademicEducation } from '../../components/AcademicEducation'
import { ProfessionalHistory } from '../../components/ProfessionalHistory'
import { HighlightProjects } from '../../components/HighlightProjects'
import { Contacts } from '../../components/Contacts'
import { Footer } from '../../components/Footer'
import { TbArrowUp } from 'react-icons/tb'
import { ArrowUp, Container, Divider } from './styles'

export function Home() {
    const [arrowUp, setArrowUp] = useState(false)

    function BackToTopArrow() {
        window.scrollTo({ top: '0' })
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 650) {
            setArrowUp(true)
        } else {
            setArrowUp(false)
        }
    })

    return (
        <Container>

            <Header />

            <Divider id="personalProfile"></Divider>
            <PersonalProfile />

            <Divider id="skills"></Divider>
            <Skills />

            <Divider id="academicEducation"></Divider>
            <AcademicEducation />

            <Divider id="professionalHistory"></Divider>
            <ProfessionalHistory />

            <Divider id="highlightProjects"></Divider>
            <HighlightProjects />

            <Divider id="contacts"></Divider>
            <Contacts />

            <Divider id=""></Divider>

            <Footer />

            {arrowUp && (
                <ArrowUp onClick={BackToTopArrow}>
                    <a href="#home"><TbArrowUp /></a>
                </ArrowUp>
            )}

        </Container>
    )
}