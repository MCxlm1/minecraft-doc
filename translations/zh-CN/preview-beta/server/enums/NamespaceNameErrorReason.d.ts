/**
 * 描述命名空间名称错误被抛出原因的枚举
 */
export enum NamespaceNameErrorReason {
    /**
     * @remarks
     * 使用了受限制的命名空间
     *
     */
    DisallowedNamespace = 'DisallowedNamespace',
    /**
     * @remarks
     * 当需要命名空间时，名称缺少命名空间
     *
     */
    NoNamespace = 'NoNamespace',
}