/**
 * 包含注册脚本事件回调时的附加选项。
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * 可选的命名空间列表，用于过滤传入的脚本事件消息。
     *
     */
    namespaces: string[];
}