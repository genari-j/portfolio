import { Container } from "./styles"
import { FaLinkedinIn, FaGithub, FaMailBulk } from 'react-icons/fa'
import { RiWhatsappFill, RiContactsBookFill } from 'react-icons/ri'

export const FloatingContacts = () => {
    return (
        <Container>
            <i><RiContactsBookFill /></i>
            <a
                href="https://www.linkedin.com/in/victorgenari"
                target="_blank"
            >
                <FaLinkedinIn />
            </a>
            <a
                href="https://www.github.com/victorgenari"
                target="_blank"
            >
                <FaGithub />
            </a>
            <a
                href="mailto:victor.olr@hotmail.com"
                target="_blank"
            >
                <FaMailBulk />
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=++5511960343362&amp;text=Olá, João Victor Genari. Tudo bem? Estou entrando em contato devido .."
                target="_blank"
            >
                <RiWhatsappFill />
            </a>
        </Container>
    )
}