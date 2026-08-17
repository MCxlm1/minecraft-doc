Thrown when trying to register a custom dimension with a
name that has already been registered.
当尝试注册一个名称已被注册的自定义维度时抛出。
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionAlreadyRegisteredError extends Error {
    private constructor();
}