import React, { FunctionComponent, FormEvent, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logo from './../../assets/svg/logo.svg'
import { Title, Form, Repositories, Error } from './styles'

import api from './../../services/api'

interface Repository {
  id: number
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: FunctionComponent = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [searchRepository, setSearchRepository] = useState('')
  const [inputError, setInputError] = useState('')

  async function handleSearchRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()

    if (!searchRepository) {
      setInputError('Digite o autor/nome do repositório.')
      return
    }

    try {
      const { data } = await api.get<Repository>(`repos/${searchRepository}`)
      setRepositories([...repositories, data])
      setSearchRepository('')
      setInputError('')
    } catch (error) {
      setInputError('Erro na busca por esse repositório.')
    }
  }

  return (
    <>
      <img src={logo} alt="Github Exloprer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleSearchRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={searchRepository}
          onChange={({ target }) => setSearchRepository(target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.id} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
