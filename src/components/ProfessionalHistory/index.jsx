// CSS
import {
    Container, CurrentJob, DescriptionJob, TechsTitle,
    SectionDetails, FisrtDetail, SecondDetail, PreviousServices,
    Card, TimeOfService
} from './styles'


export function ProfessionalHistory() {
    return (
        <Container>
            <h2>Histórico Profissional</h2>

            <CurrentJob>
                <SectionDetails>
                    <FisrtDetail></FisrtDetail>
                    <SecondDetail></SecondDetail>
                </SectionDetails>

                <h3>Frontend Developer &#40;Freelancer&#41;</h3>
                <span>XC Tech</span>
                <span><TimeOfService>abr de 2022 - O momento</TimeOfService> • 6 meses</span>
                <span>Barueri, São Paulo - Brasil</span>
                <DescriptionJob>Desenvolvedor Front-end, focado em criações de novos projetos/interfaces com React.js. Procuro sempre
                    criar aplicações com conteúdos modernos, com fácil entendimento/acessibilidade aos usuários. Faço parte do
                    time de desenvolvimento responsável pela plataforma de delivery. Meu foco maior é o front-end, porém, também
                    sou responsável por algumas funcionalidades do Back-end.</DescriptionJob>
                <TechsTitle>Techs/Libs/Frameworks:</TechsTitle>
                <p>Javascript/Typescript, React.js - &#40;React Router Dom, ContextAPI, Styled Components, JWT&#41;</p>
                <p>Node.js, Express, Consign, Knex, Bcrypt, Jwt, Passport, MySQL, API Restful.</p>
            </CurrentJob>

            <PreviousServices>
                <Card>
                    <h3>Information Security Analyst</h3>
                    <span>Prime Work Sistemas &amp; Serviços</span>
                    <span><TimeOfService>fev. de 2015 - dez. de 2020</TimeOfService> - 5 anos 11 meses</span>
                    <span>Barueri, São Paulo - Brasil</span>
                    <DescriptionJob>Líder de área mantendo a Gestão de Processos, visando identificar falhas e agindo em melhoria contínua. Contato
                        constante com diversos departamentos e team call. Criação de novos processos e participação em recrutamento
                        de novos recursos/colaboradores.</DescriptionJob>
                    <TechsTitle>Techs:</TechsTitle>
                    <p>C-Cure 9000 (Security Software), Excel, PowerPoint, Word, Outlook &amp; etc.</p>
                </Card>

                <Card>
                    <h3>Administrative Assistant</h3>
                    <span>JTR Logística &amp; Transporte LTDA</span>
                    <span><TimeOfService>ago. de 2012 - dez. de 2013</TimeOfService> - 1 ano 5 meses</span>
                    <span>Barueri, São Paulo - Brasil</span>
                    <DescriptionJob>Monitoramento de software, cargas e veículos. Contato fulltime com liderança e colaboradores. Análise
                        de informações e sistemas para melhor andamento de processos.</DescriptionJob>
                    <TechsTitle>Techs:</TechsTitle>
                    <p>Omnilink (Security Software), Excel, Outlook &amp; etc.</p>
                </Card>
            </PreviousServices>
        </Container>
    )
}