/**
 * 描述设备属于哪种平台。
 */
export enum PlatformType {
    /**
     * @remarks
     * 专用游戏设备。
     *
     */
    Console = 'Console',
    /**
     * @remarks
     * 个人计算机（PC）。
     *
     */
    Desktop = 'Desktop',
    /**
     * @remarks
     *  手持设备，如智能手机或平板电脑。
     *
     */
    Mobile = 'Mobile',
}