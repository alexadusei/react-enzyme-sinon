import React, {Component} from 'react'
import {MessageTextArea} from 'components'

export default class MessageTextContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const text = e.target.value

    console.log('handleChange() has been called:', text)
    this.setState({text})
  }

  handleSubmit () {
    console.log('handleSubmit() has been called')
  }

  render () {
    return <MessageTextArea
             text={this.state.text}
             onChangeText={this.handleChange}
             onSubmitText={this.handleSubmit}/>
  }
}
