import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect} from 'chai'
import {spy} from 'sinon'

import {MessageTextContainer} from 'containers'
import {MessageTextArea} from 'components'

describe('<MessageTextContainer/>', () => {
  it('should contain <MessageTextArea/>', () => {
    const wrapper = shallow(<MessageTextContainer/>)
    expect(wrapper.find(MessageTextArea).exists()).to.equal(true)
  })

  it('should pass handleChange() to <MessageTextArea/> as prop', () => {
    const wrapper = shallow(<MessageTextContainer/>)
    const MessageTextAreaComponent = wrapper.find(MessageTextArea)
    const handleChange = wrapper.instance().handleChange

    expect(MessageTextAreaComponent.prop('onChangeText')).to.equal(handleChange)
  })

  it('should pass handleSubmit() to <MessageTextArea/> as prop', () => {
    const wrapper = shallow(<MessageTextContainer/>)
    const MessageTextAreaComponent = wrapper.find(MessageTextArea)
    const handleSubmit = wrapper.instance().handleSubmit

    expect(MessageTextAreaComponent.prop('onSubmitText')).to.equal(handleSubmit)
  })

  it('should bind handleChange() function to <MessageTextArea/>', () => {
    const wrapper = mount(<MessageTextContainer/>)

    const handleChangeSpy = spy(wrapper.instance(), 'handleChange')
    const MessageTextAreaComponent = wrapper.find(MessageTextArea)
    const event = {target: {value: 'This works, but is not called by a Sinon spy'}}

    expect(handleChangeSpy.calledOnce).to.equal(false)
    MessageTextAreaComponent.simulate('change', event)
    expect(handleChangeSpy.calledOnce).to.equal(true)
  })

  it('should bind handleSubmit() function to <MessageTextArea/>', () => {
    const wrapper = mount(<MessageTextContainer/>)

    const handleSubmitSpy = spy(wrapper.instance(), 'handleSubmit')
    const MessageTextAreaComponent = wrapper.find(MessageTextArea)
    const event = {target: {value: 'This works, and is called by a Sinon spy'}}

    MessageTextAreaComponent.prop('onChangeText')(event)

    expect(handleSubmitSpy.calledOnce).to.equal(false)
    MessageTextAreaComponent.prop('onSubmitText')()
    expect(handleSubmitSpy.calledOnce).to.equal(true)
  })
})
