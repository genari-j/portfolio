// Imgs
import DeliveryAppOne from '../../assets/HighlightProjects/deliveryStoreOne.jpg'
import DeliveryAppTwo from '../../assets/HighlightProjects/deliveryStoreTwo.jpg'
import patientSys from '../../assets/HighlightProjects/patientSys.jpg'
import cardInRealTime from '../../assets/HighlightProjects/cardInRealTime.jpg'

// CSS
import {
    Container, DeliveryApp, FirstImageAndDescriptions,
    SecondImageAndUsersList, PatientSys, PatientDescriptions,
    CardSimulator, CardSimulatorDescriptions
} from "./styles";


export function HighlightProjects() {
    return (
        <Container>
            <h2>Principais Projetos</h2>

            <DeliveryApp>
                <h3>Delivery App</h3>

                <FirstImageAndDescriptions>
                    <img src={DeliveryAppTwo} alt="Delivery App Imagem" />
                    <div>
                        <p>Esse é um projeto que representa a criação completa de uma aplicação de delivery e todo o Front-end está sendo desenvolvido
                            em React.js. Já o Back-end, está online em Node.js, ambos estão sendo atualizados conforme o decorrer do desenvolvimento.</p>
                        <p>Muitas funcionalidades/interações no Front-end já estão em funcionamento, pois está ocorrendo o consumo de uma API Rest com
                            seu conjunto de regras.</p>
                        <p>Mesmo com meu foco estando maior no Front-end, também sou responsável por algumas funcionalidades
                            do Back-end.</p>
                    </div>
                </FirstImageAndDescriptions>

                <SecondImageAndUsersList>
                    <div>
                        <ul>
                            <li>Usuário:</li>
                            <li>Navegue pela aplicação entre as rotas abertas;</li>
                            <li>Crie uma conta de login;</li>
                            <li>Esteja logado para realizar determinadas ações;</li>
                            <li>Clique no produto para visualizar de forma detalhada;</li>
                            <li>Navegue por categorias, visualizando apenas itens desejados;</li>
                            <li>Tenha acesso sobre informações da loja;</li>
                            <li>Veja a lista de contatos para suporte;</li>
                        </ul>

                        <ul>
                            <li>Administrador:</li>
                            <li>Navegue em qualquer tela da aplicação;</li>
                            <li>Crie novos produtos;</li>
                            <li>Atualize produtos existentes;</li>
                            <li>Remova qualquer produto da aplicação;</li>
                        </ul>
                    </div>
                    <img src={DeliveryAppOne} alt="Delivery App Imagem" />
                </SecondImageAndUsersList>
            </DeliveryApp>

            <PatientSys>
                <h3>patientSys</h3>
                <PatientDescriptions>
                    <div>
                        <p>Este projeto foi desenvolvido simulando um sistema para cadastro de pacientes. Para conseguir utilizar a
                            aplicação, é necessário realizar um cadastro e efetuar login.</p>
                        <p>Apenas assim é possível acessar as demais telas. Podemos cadastrar nossos pacientes e eles irão aparecer
                            listados em tela na ordem de cadastro. Assim como podemos cadastrar pacientes, podemos também, editar ou remover.</p>
                    </div>
                    <img src={patientSys} alt="patientSys Imagem" />
                </PatientDescriptions>
            </PatientSys>

            <CardSimulator>
                <h3>Card Simulator</h3>
                <CardSimulatorDescriptions>
                    <img src={cardInRealTime} alt="Card In Real Time Imagem" />
                    <div>
                        <p>Este projeto foi desenvolvido simulando uma proposta de como queríamos os dados em nosso cartão bancário. Confome
                            digitamos os dados no formulário, ele aparece em tempo real dentro do layout do cartão.</p>
                        <p>Após feito isso, a ideia foi que os dados pessoais também fossem informados para um futuro retorno sobre a proposta.</p>
                    </div>
                </CardSimulatorDescriptions>
            </CardSimulator>
        </Container>
    )
}