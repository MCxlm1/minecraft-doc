/**
 * 当尝试注册一个自定义维度时，如果该名称已被注册，则会抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionAlreadyRegisteredError extends Error {
    private constructor();
}