// Hooks
import { useState } from 'react'

// Icons
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FiDownloadCloud } from 'react-icons/fi'
import { CgMenu } from 'react-icons/cg'

// Imgs
import PersonalImage from '../../assets/Personal/victorImg.png'

// CSS
import {
    Container, FirstSection, SecondSection,
    SecondSectionContent, MenuMobile
} from './styles'


export function Header() {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    function handleOpenMenuMobile() {
        setOpenMenuMobile(true)
    }

    function handleCloseMenuMobile() {
        setOpenMenuMobile(false)
    }

    return (
        <Container id="home">

            <FirstSection>
                <div>
                    <a href="https://www.linkedin.com/in/victorgenari/" target="_blank"> <FaLinkedinIn /> </a>
                    <a href="https://github.com/victorgenari" target="_blank"> <FaGithub /> </a>
                </div>

                <nav>
                    <ul>
                        <li> <a href="#home">INÍCIO</a> </li>
                        <li> <a href="#personalProfile">PERFIL</a> </li>
                        <li> <a href="#skills">HABILIDADES</a> </li>
                        <li> <a href="#academicEducation">FORMAÇÃO</a> </li>
                        <li> <a href="#professionalHistory">HISTÓRICO</a> </li>
                        <li> <a href="#highlightProjects">PROJETOS</a> </li>
                        <li> <a href="#contacts">CONTATO</a> </li>
                    </ul>
                </nav>

                <div>
                    <button type="button" onClick={handleOpenMenuMobile}><CgMenu /></button>
                </div>
            </FirstSection>

            <SecondSection>
                <SecondSectionContent>
                    <div>
                        <img src={PersonalImage} alt="João Victor Imagem" />
                    </div>

                    <div>
                        <p>Olá, meu nome é</p>
                        <h2>João Victor Genari</h2>
                        <p>Sou desenvolvedor Front-end, focado em criações de novos projetos/interfaces com React.js. Procuro sempre
                            criar aplicações com conteúdos modernos, com fácil entendimento/acessibilidade aos usuários.</p>
                        <a href="https://drive.google.com/file/d/1vEQC-eOhaytB--03NOOeC1XrAKuH6rIp/view?usp=share_link" target="_blank" download><FiDownloadCloud /> Currículo</a>
                    </div>
                </SecondSectionContent>
            </SecondSection>

            {openMenuMobile && (
                <MenuMobile>
                    <nav>
                        <ul>
                            <li> <a href="#home" onClick={handleCloseMenuMobile}>INÍCIO</a> </li>
                            <li> <a href="#personalProfile" onClick={handleCloseMenuMobile}>PERFIL</a> </li>
                            <li> <a href="#skills" onClick={handleCloseMenuMobile}>HABILIDADES</a> </li>
                            <li> <a href="#academicEducation" onClick={handleCloseMenuMobile}>FORMAÇÃO</a> </li>
                            <li> <a href="#professionalHistory" onClick={handleCloseMenuMobile}>HISTÓRICO</a> </li>
                            <li> <a href="#highlightProjects" onClick={handleCloseMenuMobile}>PROJETOS</a> </li>
                            <li> <a href="#contacts" onClick={handleCloseMenuMobile}>CONTATO</a> </li>
                        </ul>
                    </nav>
                </MenuMobile>
            )}

        </Container>
    )
}