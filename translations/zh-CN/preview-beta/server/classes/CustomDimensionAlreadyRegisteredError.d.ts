/**
 * 当尝试注册一个名称已经被注册的自定义维度时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionAlreadyRegisteredError extends Error {
    private constructor();
}