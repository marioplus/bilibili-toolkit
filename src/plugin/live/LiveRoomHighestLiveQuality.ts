import {IPlugin} from '../IPlugin'
import {unsafeWindow} from '$'

interface LivePlayer {
    getPlayerInfo: () => PlayerInfo;
    switchQuality: (qn: number) => void;
}

interface PlayerInfo {
    quality: string | number;
    qualityCandidates: QualityCandidate[];
    playurl?: string;
}

interface QualityCandidate {
    qn: string | number;
    desc: string;
    hdrType: number;
}

/**
 * 自动切换至最高画质
 * https://greasyfork.org/zh-CN/scripts/467427-bilibili-%E8%87%AA%E5%8A%A8%E5%88%87%E6%8D%A2%E7%9B%B4%E6%92%AD%E7%94%BB%E8%B4%A8%E8%87%B3%E6%9C%80%E9%AB%98%E7%94%BB%E8%B4%A8
 * // playerInfo
 * {
 *     "type": 1,
 *     "version": "3.10.30",
 *     "playerType": "HTML5",
 *     "liveStatus": 1,
 *     "playerStatus": 0,
 *     "playingStatus": true,
 *     "playurl": "https://d1--cn-gotcha208.bilivideo.com/live-bvc/514843/live_35359510_1658732_prohevc/index.m3u8?expires=1753887515&len=0&oi=0x240e03bb06575b206b83f5243cf53283&pt=web&qn=10000&trid=10074bfb6c2a358ecef74bf307d769688a25&bmt=1&sigparams=cdn,expires,len,oi,pt,qn,trid,bmt&cdn=cn-gotcha208&sign=a5f6f1121145dba30eadeadba0724cc3&site=21aa5108aebd2a0fc1c1cb41be09e3fa&free_type=0&mid=4872143&sche=ban&bvchls=1&trace=16&isp=ct&rg=South&pv=Guangdong&hdr_type=0&codec=1&strategy_id=24&strategy_types=0,1&long_ab_flag=live_default_longitudinal&info_source=cache&pp=rtmp&media_type=0&suffix=prohevc&ld=gjz&expected_qn=10000&hot_cdn=909709&strategy_version=latest&sl=2&deploy_env=prod&origin_bitrate=1020803&long_ab_flag_value=test&sk=657866af8fc16d8b2b84dfdde3e98143a3dc308b223ddad3e3e2f65932188943&flvsk=1304f646dfeb4df8b6e7ff33c167d3adda26bb4da5f21f1459ebf5b3c7780c72&strategy_type=0&strategy_ids=24,24&score=46&p2p_type=1&long_ab_id=45&source=puv3_onetier&vd=bc&src=puv3&order=1",
 *     "guid": "03c2fcb3-296d-4fed-b599-1fb605f7d9be",
 *     "quality": "10000",
 *     "hdrType": 0,
 *     "qualityCandidates": [
 *         {
 *             "qn": "10000",
 *             "desc": "1080P 原画（高帧率）",
 *             "hdrType": 0
 *         },
 *         {
 *             "qn": "400",
 *             "desc": "1080P 蓝光",
 *             "hdrType": 0
 *         },
 *         {
 *             "qn": "250",
 *             "desc": "720P 超清",
 *             "hdrType": 0
 *         }
 *     ],
 *     "timeShift": 0,
 *     "streamName": "live_35359510_1658732_prohevc",
 *     "volume": {
 *         "disabled": false,
 *         "value": 100
 *     },
 *     "danmaku": {
 *         "display": true,
 *         "opacity": 61,
 *         "fontScale": 90,
 *         "density": 51,
 *         "area": 1,
 *         "showMaskOption": false,
 *         "enableMask": true
 *     }
 * }
 */
export class LiveRoomHighestLiveQuality implements IPlugin {

    private get livePlayer(): LivePlayer | undefined {
        const player = unsafeWindow.livePlayer as LivePlayer | undefined
        if (player
            && player.getPlayerInfo()
            && player.getPlayerInfo().playurl
            && typeof player.switchQuality === 'function') {
            return player
        }
        return undefined
    }

    support(): boolean {
        return /https:\/\/live.bilibili.com\/\d+/.test(window.location.href)
    }

    execute(): void {
        let switched = false
        const timer = setInterval(() => {
            if (this.autoSwitchToHighestQuality()) {
                switched = true
            }

            // 如果已经切换成功或者超过5分钟，则清除定时器
            if (switched || Date.now() - startTime > 1000 * 60 * 5)
                clearInterval(timer)
        }, 1000)

        const startTime = Date.now()
    }

    /**
     * 自动切换到最高画质
     */
    autoSwitchToHighestQuality(): boolean {
        if (!this.livePlayer) {
            return false
        }

        const highestQualityNumber = this.getHighestQualityNumber()
        if (highestQualityNumber !== null && highestQualityNumber !== this.getCurrentQualityNumber()) {
            this.switchQuality(highestQualityNumber)
        }
        return true
    }

    /**
     * 获取最高画质编号
     */
    getHighestQualityNumber(): number {
        return unsafeWindow.livePlayer.getPlayerInfo().qualityCandidates[0].qn
    }

    /**
     * 获取当前画质编号
     */
    getCurrentQualityNumber(): number {
        return unsafeWindow.livePlayer.getPlayerInfo().quality
    }

    /**
     * 切换画质
     * @param qn 画质编号
     */
    switchQuality(qn: number): void {
        unsafeWindow.livePlayer.switchQuality(qn)
    }

}


