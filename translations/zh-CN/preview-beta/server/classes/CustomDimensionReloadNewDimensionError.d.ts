/**
 * 在使用 /reload 命令后，尝试注册之前未注册的自定义维度时抛出。
 * 重载期间无法添加新的自定义维度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionReloadNewDimensionError extends Error {
    private constructor();
}