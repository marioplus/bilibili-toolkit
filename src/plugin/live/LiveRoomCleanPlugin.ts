import {IPlugin} from '../IPlugin'
import style from '../../style/live/live-room-clean.less?inline'
import {loadStyles} from '../../utils/StyleUtils'

export class LiveRoomCleanPlugin implements IPlugin {

    support(): boolean {
        return /https:\/\/live.bilibili.com\/\d+/.test(window.location.href)
    }

    execute(): void {
        loadStyles(style)
    }
}
