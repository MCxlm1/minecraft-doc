/**
 * 当尝试在系统启动事件之外注册自定义维度时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionInvalidRegistryError extends Error {
    private constructor();
}