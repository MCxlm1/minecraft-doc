/**
 * @beta
 * 当尝试注册一个之前未注册的世界时钟时，使用 /reload 命令后会抛出此错误。
 * 重载期间无法添加新的世界时钟。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockReloadNewWorldClockError extends Error {
    private constructor();
}