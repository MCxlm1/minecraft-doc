/**
 * @beta
 * 当尝试在系统启动事件之外
 * 注册世界时钟时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockInvalidRegistryError extends Error {
    private constructor();
}