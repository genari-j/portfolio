import {
    Container, CurrentJob, LastJob, DescriptionJob, TechsTitle,
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

                <h3>Frontend Developer</h3>

                <span>Primi Tecnologia</span>
                <span><TimeOfService>dez. de 2022 - O momento</TimeOfService> • 1 mês</span>
                <span>Santana de Parnaíba, São Paulo - Brasil</span>
                <DescriptionJob>Desenvolvedor Frontend, criando soluções para atender as necessidades da empresa e interagindo com a integração de novos projetos. Hoje, estamos trabalhando no desenvolvimento de um aplicativo interno utilizando Flutter.</DescriptionJob>
                <TechsTitle>Techs/Libs/Frameworks:</TechsTitle>
                <p>Javascript - React.js</p>
                <p>Node.js, Express, MySQL, API Restful</p>
                <p>Flutter/Dart</p>
            </CurrentJob>

            <LastJob>
                <SectionDetails>
                    <FisrtDetail></FisrtDetail>
                    <SecondDetail></SecondDetail>
                </SectionDetails>

                <h3>Frontend Developer &#40;Freelancer&#41;</h3>
                <span>XC Tech</span>
                <span><TimeOfService>jul. de 2022 - dez. de 2022</TimeOfService> - 6 meses</span>
                <span>Barueri, São Paulo - Brasil</span>
                <DescriptionJob>Desenvolvedor Front-end, focado em criações de novos projetos/interfaces com React.js. Sempre criando aplicações com conteúdos modernos, com fácil entendimento/acessibilidade aos usuários. Fiz parte do time de desenvolvimento responsável pela plataforma de delivery. Meu foco maior foi o front-end, porém, também fui responsável por algumas funcionalidades do Back-end.</DescriptionJob>
                <TechsTitle>Techs/Libs/Frameworks:</TechsTitle>
                <p>Javascript - React.js</p>
                <p>Node.js, Express, MySQL, API Restful.</p>
            </LastJob>

            <PreviousServices>
                <Card>
                    <h3>Operational Leader</h3>
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