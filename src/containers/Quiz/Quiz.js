import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Spinner from '../../components/UI/Spinner/Spinner'
import {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz
} from '../../store/actions/quiz'

class Quiz extends Component {
  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.retryQuiz()
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {this.props.loading || !this.props.quiz ? (
            <Spinner />
          ) : this.props.isFinished ? (
            <FinishedQuiz
              results={this.props.results}
              quiz={this.props.quiz}
              onRetry={this.props.retryQuiz}
            />
          ) : (
            <ActiveQuiz
              question={this.props.quiz[this.props.activeQuestion].question}
              answers={this.props.quiz[this.props.activeQuestion].answers}
              onAnswerClick={this.props.quizAnswerClick}
              quizLength={this.props.quiz.length}
              questionNumber={this.props.activeQuestion + 1}
              state={this.props.answerState}
            />
          )}
        </div>
      </div>
    )
  }
}

const MapStateToProps = state => {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  }
}

const MapDispatchToProps = dispatch => {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Quiz)
