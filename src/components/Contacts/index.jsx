import {
    Container, ContactsBackg, ContactsName,
} from "./styles";

export function Contacts() {
    return (
        <Container>
            <h2>Contatos</h2>

            <ContactsBackg>
                <ContactsName>
                    <div>
                        <a href="https://www.linkedin.com/in/victorgenari" target="_blank">LinkedIn</a>
                        <a href="https://www.github.com/victorgenari" target="_blank">Github</a>
                    </div>
                    <div>
                        <a href="mailto:victor.olr@hotmail.com" target="_blank">E-mail</a>
                        <a href="https://api.whatsapp.com/send?phone=++5511960343362&amp;text=Olá, João Victor Genari. Tudo bem? Estou entrando em contato devido .." target="_blank">Celular</a>
                    </div>
                </ContactsName>
            </ContactsBackg>
        </Container>
    )
}