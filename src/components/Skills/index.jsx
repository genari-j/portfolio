import { FaFileCode, FaDatabase, FaEllipsisH } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import { Container, SkillCards, Card } from './styles'

export function Skills() {
    return (
        <Container>
            <h2>Habilidades</h2>

            <SkillCards>
                <Card>
                    <i><FaFileCode /></i>
                    <h3>Frontend</h3>
                    <div>
                        <BsCheckLg />
                        <span>React.js - Javascript</span>
                    </div>
                    <div>
                        <BsCheckLg />
                        <span>CSS &#40;100% Responsive&#41;</span>
                    </div>
                    <div>
                        <BsCheckLg />
                        <span>SASS &amp; Styled-Components</span>
                    </div>
                    <div>
                        <BsCheckLg />
                        <span>HTML</span>
                    </div>
                </Card>

                <Card>
                    <i><FaDatabase /></i>
                    <h3>Backend</h3>
                    <div>
                        <BsCheckLg />
                        <span>API Restful</span>
                    </div>
                    <div>
                        <BsCheckLg />
                        <span>Node.js/Express &#40;Learning&#41;</span>
                    </div>
                    <div>
                        <BsCheckLg />
                        <span>MySQL &#40;Learning&#41;</span>
                    </div>
                </Card>

                <Card>
                    <i><FaEllipsisH /></i>
                    <h3>Outros</h3>
                    <div>
                        <BsCheckLg />
                        <span>Git/Github</span>
                    </div>
                    <div>
                        <BsCheckLg />
                        <span>Vite</span>
                    </div>
                    <div>
                        <BsCheckLg />
                        <span>NPM</span>
                    </div>
                </Card>
            </SkillCards>
        </Container>
    )
}