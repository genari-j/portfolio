// Icons
import { FaLinkedinIn, FaGithub, FaMailBulk } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'

// CSS
import { Container, LocalAndMap, CopyrightAndSocialMedias } from './styles'


export function Footer() {
    return (
        <Container>

            <LocalAndMap>
                <span>São Paulo, Brasil</span>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d24607.783171730847!2d-46.63480835116392!3d-23.53362261174006!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1664824452061!5m2!1spt-BR!2sbr"
                    width="200"
                    height="150"
                    frameBorder="border:0;"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </LocalAndMap>

            <nav>
                <ul>
                    <li> <a href="#home">INÍCIO</a> </li>
                    <li> <a href="#personalProfile">PERFIL PESSOAL</a> </li>
                    <li> <a href="#skills">HABILIDADES</a> </li>
                    <li> <a href="#academicEducation">FORMAÇÃO ACADÊMICA</a> </li>
                    <li> <a href="#professionalHistory">HISTÓRICO PROFISSIONAL</a> </li>
                    <li> <a href="#highlightProjects">PRINCIPAIS PROJETOS</a> </li>
                    <li> <a href="#contacts">CONTATO</a> </li>
                </ul>
            </nav>

            <CopyrightAndSocialMedias>
                <div>
                    <a href="https://www.linkedin.com/in/victorgenari" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://www.github.com/victorgenari" target="_blank"><FaGithub /></a>
                    <a href="mailto:victor.olr@hotmail.com" target="_blank"><FaMailBulk /></a>
                    <a href="https://api.whatsapp.com/send?phone=++5511960343362&amp;text=Olá, João Victor Genari. Tudo bem? Estou entrando em contato devido .." target="_blank"><RiWhatsappFill /></a>
                </div>

                <h3>© Copyright 2022</h3>
                <span>Portfólio.</span>
            </CopyrightAndSocialMedias>

        </Container>
    )
}