import {HomeCleanPlugin} from './plugin/home/HomeCleanPlugin'
import {RedirectDynamicToVideoTabPlugin} from './plugin/home/RedirectDynamicToVideoTabPlugin'
import {LiveRoomCleanPlugin} from './plugin/live/LiveRoomCleanPlugin'
import {LiveRoomHighestLiveQuality} from './plugin/live/LiveRoomHighestLiveQuality'
import {VideoCleanPlugin} from './plugin/video/VideoCleanPlugin'

const plugins = [
    new HomeCleanPlugin(),
    new RedirectDynamicToVideoTabPlugin(),

    new VideoCleanPlugin(),

    new LiveRoomCleanPlugin(),
    new LiveRoomHighestLiveQuality()
]

plugins
    .filter(plugin => plugin.support())
    .forEach(plugin => plugin.execute())
