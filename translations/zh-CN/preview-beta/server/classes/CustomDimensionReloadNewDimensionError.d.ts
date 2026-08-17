/**
 * 在使用 /reload 命令后尝试注册一个之前未注册的自定义维度时抛出。
 * 在重载期间不能添加新的自定义维度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionReloadNewDimensionError extends Error {
    private constructor();
}