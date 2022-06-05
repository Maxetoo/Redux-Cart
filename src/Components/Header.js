import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <div className='header-container'>
        <h3>Redux Todo Cart</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .header-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 3rem;
  }

  h3 {
    font-size: 1.7em;
  }
`

export default Header
