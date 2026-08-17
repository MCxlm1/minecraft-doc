/**
 * 描述命名空间名称错误原因的一个枚举。
 */
export enum NamespaceNameErrorReason {
    /**
     * @remarks
     * 使用了受限的命名空间作为名称。
     *
     */
    DisallowedNamespace = 'DisallowedNamespace',
    /**
     * @remarks
     * 在需要命名空间时，名称缺少了命名空间。
     *
     */
    NoNamespace = 'NoNamespace',
}