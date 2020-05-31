import React, { FunctionComponent } from 'react'
import { useRouteMatch } from 'react-router-dom'

interface RepositoriesParams {
  repository: string
}

const Repositories: FunctionComponent = () => {
  const { params } = useRouteMatch<RepositoriesParams>()

  return <h1>Repositório: {params.repository}</h1>
}

export default Repositories
