import React, { FunctionComponent, FormEvent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@github-explorer:repositories',
    )

    if (storageRepositories) {
      return JSON.parse(storageRepositories)
    }

    return []
  })
  const [searchRepository, setSearchRepository] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    localStorage.setItem(
      '@github-explorer:repositories',
      JSON.stringify(repositories),
    )
  }, [repositories])

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
          <Link
            key={repository.id}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
