import Taro from '@tarojs/taro'
import Config from '@/config/config'
import Util from '@/util/util'
import Global from '@/common/global'

const Common = {
    /**
     * 更新APP
     */
    updateApp: () => {
        const updateManager = Taro.getUpdateManager()
        updateManager.onUpdateReady(() => {
            Taro.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: (res) => {
                    if (res.confirm) {
                        updateManager.applyUpdate()
                    }
                }
            })
        })
    },

    
}