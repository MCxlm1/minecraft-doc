/**
 * 包含客户端实例的设备信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
    private constructor();
    /**
     * @remarks
     * 客户端选择的区域设置（例如 en_US、fr_FR、ja_JP）。请注意，在大多数情况下，服务器脚本不应使用此属性手动本地化文本。相反，应使用带有 translate 字段的 {@link RawMessage} 来发送本地化键，让每个客户端自动以自己的语言解析。直接使用 locale 进行本地化是脆弱的，并且当同一服务器上有不同语言的玩家时可能会产生意外结果。
     *
     */
    readonly locale: string;
    /**
     * @remarks
     * 设备的最大渲染距离（以区块为单位）。
     *
     */
    readonly maxRenderDistance: number;
    /**
     * @remarks
     * 设备的平台类型。
     *
     */
    readonly platformType: PlatformType;
}