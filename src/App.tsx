import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css'

export const App: React.FC = () => {
  return (
    <Container className='p-3'>
      <Button variant='primary' className='mr-1'>
        Primary
      </Button>
    </Container>
  )
}

export default App
