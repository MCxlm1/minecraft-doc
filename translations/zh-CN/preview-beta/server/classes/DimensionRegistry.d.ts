/**
 * 提供注册自定义维度的功能。
 * 自定义维度只能在系统启动事件期间注册。
 */
export class DimensionRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个新的自定义维度类型。必须在系统启动事件期间调用。
     * 维度将使用虚空生成器创建。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param typeId
     * 自定义维度的命名空间标识符（例如：'mypack:my_dimension'）。
     * 必须包含命名空间，且仅使用有效的标识符字符。
     * @throws
     * 当 typeId 对应的维度已注册时，抛出 {@link CustomDimensionAlreadyRegisteredError}。
     * 当注册表无效时，抛出 {@link CustomDimensionInvalidRegistryError}。
     * 当 typeId 不符合命名要求时，抛出 {@link CustomDimensionNameError}。
     * 当在重载过程中尝试注册新维度时，抛出 {@link CustomDimensionReloadNewDimensionError}。
     * 发生引擎错误时，抛出 {@link minecraftcommon.EngineError}。
     * 当命名空间名称无效时，抛出 {@link NamespaceNameError}。
     */
    registerCustomDimension(typeId: string): void;
}