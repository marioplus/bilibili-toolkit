import {IPlugin} from '../IPlugin'
import style from '../../style/video/video-clean.less?inline'
import {loadStyles} from '../../utils/StyleUtils'
export class VideoCleanPlugin implements IPlugin {

    support(): boolean {
        return /https:\/\/www.bilibili.com\/video/.test(window.location.href)
    }

    execute(): void {
        loadStyles(style)
    }
}
