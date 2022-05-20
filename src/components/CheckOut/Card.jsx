import React, { useState } from 'react'
import style from './CheckOut.module.css'
import { removeItem } from '../../counterSlice/orderSlice'
import { useDispatch } from 'react-redux'
import { addQuantity, removeQuantity } from '../../counterSlice/orderSlice'

const Card = ({ ele, index }) => {
  const dispatch = useDispatch()

  const [alert, setAlert] = useState('')



  const addHandeler = (i) => {
    if (ele.quantity >= 10) {
      setAlert("You are not able to add more items")
    } else {
      dispatch(addQuantity(i))
      setAlert('')
    }
  }

  const fullRemoveHandeler = (x) => {
    dispatch(removeItem(x))
  }


  const removeHandeler = (p) => {
    if (ele.quantity <= 1) {
      setAlert("You are not able to delete more items")
    } else {
      dispatch(removeQuantity(p))
      setAlert('')
    }
  }

  return (
    <>

      <div className={style.card} >
        <div className={style.main}>
          <span>

            <img className={style.img} src={ele.url} />

            <h3 align="center" >MRP: Rs {ele.total()}</h3>

            <button onClick={() => addHandeler(index)}
              className={style.button} >
              Add
            </button>
            <b className={style.value}>
              {ele.quantity}
            </b>
            <button onClick={() => removeHandeler(index)}
              className={style.button2}>
              Remove
            </button>
            <br />
            <p style={{ color: "red" }}>
              {alert}
            </p>
            <br /><br />

            <button onClick={() => fullRemoveHandeler()}
              className={style.Remove_cart}>
              Remove from cart
            </button>

          </span>

        </div>
      </div>
    </>
  )
}

export default Card
