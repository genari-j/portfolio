import PersonalProfilePic from '../../assets/CodeImg/code.jpg'
import { Container, PersonalSection, Span, SectionDetails, SecondDetail, FisrtDetail } from './styles'

export function PersonalProfile() {
    return (
        <Container>
            <h2>Perfil Pessoal</h2>
            <PersonalSection>
                <img src={PersonalProfilePic} alt="Imagem Representativa" />
                <p>Tenho experiência em Frontend, trabalhando com <Span>HTML</Span>, <Span>CSS</Span>, <Span>Bootstrap</Span>, <Span>SCSS</Span>, <Span>SASS</Span>, <Span>Javascript</Span>, <Span>React.js</Span> e <Span>Styled-Components</Span>, o que me permite criar interfaces responsivas, modernas e agradáveis para o usuário.</p>
                <p>Além disso, tenho habilidades em ferramentas de versionamento, trabalhando com <Span>Git</Span>, <Span>Github</Span> e <Span>Gitlab</Span>. Dessa forma, é notável maior controle e segurança para os projetos de trabalho.</p>
                <p>Venho expandindo meus conhecimentos em Backend, estudando <Span>Node.js</Span>, <Span>Express.js</Span> e <Span>MySQL</Span>, para me tornar um desenvolvedor mais completo e capaz de criar soluções que englobam tanto o Frontend quanto o Backend.</p>
                <p>Sou familiarizado com as metodologias ágeis <Span>Scrum</Span> e <Span>Kanban</Span>, o que me permite trabalhar em equipe de forma mais eficiente e entregando valor de forma constante.</p>
                <p>Também tenho experiência em trabalhar com <Span>API Rest</Span>, <Span>NPM</Span>, <Span>Yarn</Span> e <Span>Vite</Span>, ferramentas essenciais para o desenvolvimento de software moderno.</p>
                <p>Estou investindo na minha educação, estudando <Span>Análise e Desenvolvimento de Sistemas</Span> pela Estácio, SP e fazendo cursos profissionalizantes em outras instituições, como <Span>Rocketseat</Span> e <Span>Udemy</Span>.</p>
                <p>Dentro de um ambiente de trabalho, tenho fácil capacidade em trabalhar em equipe e me comunicar com outras pessoas, independente do setor/área.</p>
                <p>Recentemente consegui minha primeira oportunidade fixa após a migração de área e agora faço parte da equipe de Desenvolvedores da Primi Tecnologia. Sendo assim, apareceu também, a oportunidade de aprender <Span>Flutter/Dart</Span> para desenvolvimento Mobile.</p>

                <SectionDetails>
                    <FisrtDetail></FisrtDetail>
                    <SecondDetail></SecondDetail>
                </SectionDetails>
            </PersonalSection>
        </Container>
    )
}