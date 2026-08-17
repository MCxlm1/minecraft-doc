/**
 * 包含用于注册脚本事件回调的额外选项。
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * 用于过滤入站脚本事件消息的可选命名空间列表。
     *
     */
    namespaces: string[];
}