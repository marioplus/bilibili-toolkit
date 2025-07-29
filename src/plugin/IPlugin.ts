/**
 * 插件接口
 * 所有插件都必须实现此接口，定义插件的支持条件和执行逻辑
 */
export interface IPlugin {

    /**
     * 是否支持
     */
    support(): boolean

    /**
     * 执行
     */
    execute(): void
}
