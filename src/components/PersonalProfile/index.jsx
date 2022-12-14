import PersonalProfilePic from '../../assets/CodeImg/code.jpg'
import { Container, PersonalSection, SectionDetails, SecondDetail, FisrtDetail } from './styles'

export function PersonalProfile() {
    return (
        <Container>
            <h2>Perfil Pessoal</h2>
            <PersonalSection>
                <img src={PersonalProfilePic} alt="Imagem Representativa" />
                <p>Recentemente consegui minha primeira oportunidade fixa na área e agora faço parte da equipe de desenvolvedores da Primi Tecnologia. Venho me adequando aos padrões/projetos da empresa e interagindo com a integração de novos projetos.</p>
                <p>Mesmo com o foco maior no front-end, também venho estudando/aprimorando cada vez mais as habilidades no back-end &#40;Criações de APIs com banco de dados MySQL&#41;.</p>
                <p>Também estou cursando Análise e Desenvolvimento de Sistemas pela instituição de ensino Estácio, e faço um curso profissionalizante pela Rocketseat voltado para front-end (React.js) e back-end (Node.js), ambos com Typescript.</p>

                <SectionDetails>
                    <FisrtDetail></FisrtDetail>
                    <SecondDetail></SecondDetail>
                </SectionDetails>
            </PersonalSection>
        </Container>
    )
}