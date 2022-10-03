// Imgs
import PersonalProfilePic from '../../assets/CodeImg/code.jpg'

// CSS
import { Container, PersonalSection, SectionDetails, SecondDetail, FisrtDetail } from './styles'


export function PersonalProfile() {
    return (
        <Container>
            <h2>Perfil Pessoal</h2>
            <PersonalSection>
                <img src={PersonalProfilePic} alt="Imagem Representativa" />
                <p>Atualmente, estou trabalhando em um projeto de delivery para a XC Tech, uma startup no ramo de delivery. O projeto no qual atuo, foi construído em React.js, Node.js, banco MySQL e AWS.</p>
                <p>Faço parte da squad responsável pelo front-end da aplicação. Mesmo com o foco maior no front-end, também sou responsável por algumas funcionalidades no back-end.</p>
                <p>Venho aprimorando cada vez mais as habilidades no back-end &#40;Criações de APIs com banco de dados MySQL&#41;. Também estou cursando Análise e Desenvolvimento de Sistemas pela instituição de ensino Estácio, e faço um curso profissionalizante pela Rocketseat voltado para front-end &#40;React.js/Typescript&#41; e back-end &#40;Node.js/Typescript&#41;.</p>

                <SectionDetails>
                    <FisrtDetail></FisrtDetail>
                    <SecondDetail></SecondDetail>
                </SectionDetails>
            </PersonalSection>
        </Container>
    )
}