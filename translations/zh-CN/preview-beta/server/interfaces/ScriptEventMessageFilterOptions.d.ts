/**
 * 包含用于注册脚本事件回调的附加选项。
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * 可选的命名空间列表，用于过滤入站脚本事件消息。
     *
     */
    namespaces: string[];
}