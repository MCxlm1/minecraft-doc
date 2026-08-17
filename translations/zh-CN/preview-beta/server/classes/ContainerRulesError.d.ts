/**
 * 如果容器操作违反 {@link ContainerRules}，则抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ContainerRulesError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误抛出的具体原因。
     *
     * 此属性可以在早期执行模式下读取。
     *
     */
    readonly reason: ContainerRulesErrorReason;
}