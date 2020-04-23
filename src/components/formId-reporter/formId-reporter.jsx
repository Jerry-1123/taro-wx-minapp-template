import Taro from '@tarojs/taro'
import { Button, Form } from '@tarojs/components'
import Common from '@/common/common'

import './formId-reporter.scss'

/**
 * formId上报器
 */
function FormIdReporter(props) {

    const handleSubmit = (e) => {
        const { formId } = e.detail
    }

    return (
        <Form reportSubmit onSubmit={handleSubmit}>
            <Button className='form-btn' formType="submit" hoverClass='none'>
                {props.children}
            </Button>
        </Form>
    )
}

export default FormIdReporter