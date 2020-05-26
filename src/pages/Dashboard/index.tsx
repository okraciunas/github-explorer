import React, { FunctionComponent } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logo from './../../assets/svg/logo.svg'
import { Title, Form, Repositories } from './styles'

const Dashboard: FunctionComponent = () => (
  <>
    <img src={logo} alt="Github Exloprer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/1759484?s=460&u=88225ada1b7c7214270a12002e8e25ae43213e9c&v=4"
          alt="Leonardo Oliva Kraciunas"
        />
        <div>
          <strong>okraciunas/github-explorer</strong>
          <p>Aplicação React</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/1759484?s=460&u=88225ada1b7c7214270a12002e8e25ae43213e9c&v=4"
          alt="Leonardo Oliva Kraciunas"
        />
        <div>
          <strong>okraciunas/github-explorer</strong>
          <p>Aplicação React</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/1759484?s=460&u=88225ada1b7c7214270a12002e8e25ae43213e9c&v=4"
          alt="Leonardo Oliva Kraciunas"
        />
        <div>
          <strong>okraciunas/github-explorer</strong>
          <p>Aplicação React</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
)

export default Dashboard
