import { useState, useEffect, useRef, useCallback } from "react"
import "./App.css"

const App = () => {
  const [item, setItem] = useState({})
  const [currentPlayer, setCurrentPlayer] = useState("x")
  const isInitialMount = useRef(true)

  const isFull = useCallback(() => Object.keys(item).length === 9, [item])

  const handleClick = (event) => {
    if (
      item[event.target.dataset.place] === "x" ||
      item[event.target.dataset.place] === "o"
    ) {
      alert("Place is already occupied, please consider another one!")
      return
    } else {
      event.target.classList.add(currentPlayer)
      setItem({ ...item, [event.target.dataset.place]: currentPlayer })
    }
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      setCurrentPlayer((prevPlayer) => {
        if (prevPlayer === "x") {
          setCurrentPlayer("o")
        } else {
          setCurrentPlayer("x")
        }
      })

      if (isFull()) {
        alert("Oops! Match is tied! Better luck next time!")
        setItem({})
        setCurrentPlayer("x")
        Array.from(document.getElementsByClassName("item")).map((element) =>
          console.log(element.classList.remove("x", "o"))
        )
      }
    }
  }, [item, isFull])

  return (
    <div className="app">
      <h1 className="app__heading">Tic Tac Toe - Play and Enjoy!</h1>
      <div className="board__wrapper">
        <table className="board">
          <tbody>
            <tr className="board__row">
              <td
                onClick={(event) => handleClick(event)}
                data-place="1"
                className="item item__left item__top"
              >
                {item[1]}
              </td>
              <td
                onClick={(event) => handleClick(event)}
                data-place="2"
                className="item item__center item__top"
              >
                {item[2]}
              </td>
              <td
                onClick={(event) => handleClick(event)}
                data-place="3"
                className="item item__right item__top"
              >
                {item[3]}
              </td>
            </tr>
            <tr className="board__row">
              <td
                onClick={(event) => handleClick(event)}
                data-place="4"
                className="item item__left item__middle"
              >
                {item[4]}
              </td>
              <td
                onClick={(event) => handleClick(event)}
                data-place="5"
                className="item item__center item__middle"
              >
                {item[5]}
              </td>
              <td
                onClick={(event) => handleClick(event)}
                data-place="6"
                className="item item__right item__middle"
              >
                {item[6]}
              </td>
            </tr>
            <tr className="board__row">
              <td
                onClick={(event) => handleClick(event)}
                data-place="7"
                className="item item__left item__bottom"
              >
                {item[7]}
              </td>
              <td
                onClick={(event) => handleClick(event)}
                data-place="8"
                className="item item__center item__bottom"
              >
                {item[8]}
              </td>
              <td
                onClick={(event) => handleClick(event)}
                data-place="9"
                className="item item__right item__bottom"
              >
                {item[9]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
