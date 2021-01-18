import React from 'react'
import { Link } from 'react-router-dom'
import classes from './FinishedQuiz.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>

      <ul>
        {props.quiz.map((quizItem, index) => {
          const iconsClasses = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]]
          ]

          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={iconsClasses.join(' ')} />
            </li>
          )
        })}
      </ul>

      <div>
        <Button onClick={props.onRetry} type='primary'>
          Повторить
        </Button>
        <Link to='/'>
          <Button type='success'>Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz
