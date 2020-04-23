import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export function Index() {

  return (
    <View className='index'>
      哈哈哈哈哈哈
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}

export default Index