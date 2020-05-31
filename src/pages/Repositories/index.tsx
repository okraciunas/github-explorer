import React, { FunctionComponent } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logo from './../../assets/svg/logo.svg'

import { Header, RepositoryInfo, Issues } from './styles'

interface RepositoriesParams {
  repository: string
}

const Repositories: FunctionComponent = () => {
  const { params } = useRouteMatch<RepositoriesParams>()

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/1759484?v=4"
            alt="Github Avatar"
          />
          <div>
            <strong>okraciunas/github-explorer</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`dfgdfgd`}>
          <div>
            <strong>Titulo</strong>
            <p>Descição</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repositories
