import {IPlugin} from '../IPlugin'

/**
 * 动态页面重定向插件
 * 将带有spm_id_from参数的B站动态页面重定向到视频标签页
 */
export class RedirectDynamicToVideoTabPlugin implements IPlugin {
    support() {
        return window.location.host === 't.bilibili.com'
            && new URLSearchParams(window.location.search).has('spm_id_from')
    }

    execute() {
        window.location.href = 'https://t.bilibili.com/?tab=video'
    }
}
