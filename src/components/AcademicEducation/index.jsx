import { GiGraduateCap } from 'react-icons/gi'
import { RiComputerFill } from 'react-icons/ri'
import { Container, SectionContent, Card, EstacioIcon } from "./styles";

export function AcademicEducation() {
    return (
        <Container>
            <h2>Formação Acadêmica</h2>

            <Card>
                <EstacioIcon>
                    <GiGraduateCap />
                </EstacioIcon>
                <h3>Faculdade Estácio, São Paulo</h3>
                <span>Análise e Desenvolvimento de Sistemas</span>
                <span>Janeiro 2022 - Julho 2024</span>
            </Card>

            <SectionContent>
                <Card>
                    <i><RiComputerFill /></i>
                    <h3>Rocketseat</h3>
                    <span>Ignite - React.js</span>
                    <span>Fevereiro 2022 - Novembro 2022</span>
                </Card>

                <Card>
                    <i><GiGraduateCap /></i>
                    <h3>Universidade Anhembi Morumbi</h3>
                    <span>Gestão Comercial</span>
                    <span>Janeiro 2020 - Maio 2021</span>
                </Card>
            </SectionContent>
        </Container>
    )
}