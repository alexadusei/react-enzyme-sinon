import React from 'react'
import {Form, TextArea, Button} from 'semantic-ui-react'

export default function MessageTextArea ({text, onChangeText, onSubmitText}) {
  return (
    <div>
      <Form>
        <TextArea value={text} onChange={onChangeText} />
        <Button type='button' content='Submit' onClick={onSubmitText} />
      </Form>
    </div>
  )
}