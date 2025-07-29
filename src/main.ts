import {HomeCleanPlugin} from './plugin/home/HomeCleanPlugin'
import {RedirectDynamicToVideoTabPlugin} from './plugin/home/RedirectDynamicToVideoTabPlugin'
import {LiveRoomCleanPlugin} from './plugin/live/LiveRoomCleanPlugin'

const plugins = [
    new HomeCleanPlugin(),
    new RedirectDynamicToVideoTabPlugin(),
    new LiveRoomCleanPlugin()
]

plugins
    .filter(plugin => plugin.support())
    .forEach(plugin => plugin.execute())
