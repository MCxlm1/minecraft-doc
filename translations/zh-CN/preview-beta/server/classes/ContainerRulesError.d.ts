/**
 * 当容器操作违反 {@link ContainerRules} 时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ContainerRulesError extends Error {
    private constructor();
    /**
     * @remarks
     * 抛出错误的具体原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: ContainerRulesErrorReason;
}