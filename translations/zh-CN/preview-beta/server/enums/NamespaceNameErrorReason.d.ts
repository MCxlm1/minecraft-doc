/**
 * 一个枚举，描述抛出命名空间名称错误的原因。
 */
export enum NamespaceNameErrorReason {
    /**
     * @remarks
     * 使用了受限命名空间作为命名空间。
     *
     */
    DisallowedNamespace = 'DisallowedNamespace',
    /**
     * @remarks
     * 在需要命名空间时，名称缺少命名空间。
     *
     */
    NoNamespace = 'NoNamespace',
}