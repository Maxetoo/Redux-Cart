import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { valueInput, submitValue } from '../Slices/listSlice'

const InputSection = () => {
  const { inputValue } = useSelector((store) => store.list)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='input-container'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(
              submitValue({
                id: new Date().getTime().toString(),
                title: inputValue,
                count: 0,
                completed: false,
              })
            )
          }}
        >
          <input
            type='text'
            placeholder='Create new list..'
            onChange={(e) => dispatch(valueInput(e.target.value))}
            value={inputValue}
          />
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 50vw;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding: 1.5rem;
    box-shadow: 1px 2px 3px #c3c2c2;
  }
`

export default InputSection
