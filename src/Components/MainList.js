import React from 'react'
import ListItem from './ListItem'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { filterItems, clearList } from '../Slices/listSlice'
const textArr = [
  {
    name: 'All',
  },
  {
    name: 'Active',
  },
  {
    name: 'Completed',
  },
]
const MainList = () => {
  const { filteredList, activeBtn } = useSelector((store) => store.list)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='main-list-container'>
        {filteredList.map((value) => {
          return <ListItem {...value} key={value.id} />
        })}

        <div className='activity-container'>
          {textArr.map((value, index) => {
            const { name } = value
            return (
              <p
                className={`${activeBtn === name ? 'active-btn' : null}`}
                onClick={() => dispatch(filterItems(name))}
                key={index}
              >
                {name}
              </p>
            )
          })}
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='clear-btn'
            onClick={() => dispatch(clearList())}
          >
            Clear List
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .main-list-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
  }

  .list-item {
    width: 350px;
    min-height: 30px;
    background: var(--white-color);
    border: solid 1px var(--black-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    margin: 0.5rem;
    border-radius: 10px;
  }

  .activity-container {
    width: 350px;
    min-height: 30px;
    background: var(--white-color);
    border: solid 1px var(--black-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    margin: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
  }

  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .check-container {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: solid 1px black;
    cursor: pointer;
  }

  p {
    margin-left: 1rem;
  }

  span {
    margin: 0.5rem;
    font-size: 1.1em;
    cursor: pointer;
    user-select: none;
  }

  .close-icon {
    color: red;
    font-size: 1em;
    cursor: pointer;
    user-select: none;
  }

  .btn-container {
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 200px;
    height: 40px;
    font-family: 'roboto';
    border-radius: 5px;
    border: none;
    background: #f51a1a;
    color: var(--white-color);
    cursor: pointer;
    user-select: none;
    font-size: 1em;
  }

  .active-check {
    background: black;
  }

  .active-text {
    opacity: 0.8;
    text-decoration: line-through;
  }

  .active-btn {
    text-decoration: underline;
  }
`

export default MainList
