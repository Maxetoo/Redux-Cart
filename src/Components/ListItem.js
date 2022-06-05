import React from 'react'
import { IoMdClose, IoAddOutline } from 'react-icons/io'
import { RiSubtractFill } from 'react-icons/ri'
import { MdAdd } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteItem,
  toggleActive,
  increaseCount,
  decreaseCount,
} from '../Slices/listSlice'

const ListItem = ({ title, count, id, completed }) => {
  const dispatch = useDispatch()
  return (
    <div className='list-item'>
      <div className='details'>
        <div
          className={`check-container ${completed ? 'active-check' : null}`}
          onClick={() => dispatch(toggleActive(id))}
        ></div>
        <p className={`${completed ? 'active-text' : null}`}>
          {title}
          {completed}
        </p>
      </div>
      <div className='toggle-btn'>
        <span onClick={() => dispatch(decreaseCount(id))}>
          <RiSubtractFill />
        </span>
        <span>{count}</span>
        <span onClick={() => dispatch(increaseCount(id))}>
          <MdAdd />
        </span>
      </div>
      <IoMdClose
        className='close-icon'
        onClick={() => dispatch(deleteItem(id))}
      />
    </div>
  )
}

export default ListItem
