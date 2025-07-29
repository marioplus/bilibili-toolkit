import {GM_addStyle} from '$'

export function loadStyles(...css: string[]) {
    GM_addStyle(css.join('\n'))
    // return style
}
