/**
 * @beta
 * 在使用 /reload 命令后，尝试使用无效的时间标记重新注册已有世界时钟时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockReloadTimeMarkerError extends Error {
    private constructor();
}