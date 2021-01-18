import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import classes from './QuizList.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import { fetchQuizes } from '../../store/actions/quiz'

class QuizList extends Component {
  renderQuizList() {
    return this.props.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>
        </li>
      )
    })
  }

  componentDidMount() {
    this.props.fetchQuizes()
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>

          {this.props.loading && this.props.quizes.length !== 0 ? (
            <Spinner />
          ) : (
            <ul>{this.renderQuizList()}</ul>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)
