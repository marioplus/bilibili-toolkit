import {HomeCleanPlugin} from './plugin/home/HomeCleanPlugin'
import {RedirectDynamicToVideoTabPlugin} from './plugin/home/RedirectDynamicToVideoTabPlugin'
import {LiveRoomCleanPlugin} from './plugin/live/LiveRoomCleanPlugin'
import {LiveRoomHighestLiveQuality} from './plugin/live/LiveRoomHighestLiveQuality'

const plugins = [
    new HomeCleanPlugin(),
    new RedirectDynamicToVideoTabPlugin(),
    new LiveRoomCleanPlugin(),
    new LiveRoomHighestLiveQuality()
]

plugins
    .filter(plugin => plugin.support())
    .forEach(plugin => plugin.execute())
