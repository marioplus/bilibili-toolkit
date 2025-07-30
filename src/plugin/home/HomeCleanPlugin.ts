import {IPlugin} from '../IPlugin'
import style from '../../style/home/home-clean.less?inline'
import {loadStyles} from '../../utils/StyleUtils'

/**
 * 移除首页推荐卡片插件
 * 隐藏B站首页的各种推荐内容，包括直播、课堂、番剧等卡片和轮播图广告
 */
export class HomeCleanPlugin implements IPlugin {

    support(): boolean {
        return window.location.host === 'www.bilibili.com'
    }

    execute(): void {
        // 直播 / 课堂 / 番剧 ...卡片
        loadStyles(style)
    }

}
