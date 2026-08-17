/**
 * 提供注册自定义维度的功能。
 * 自定义维度只能在系统启动事件期间注册。
 */
export class DimensionRegistry {
    private constructor();
    /**
     * @remarks
     * 注册新的自定义维度类型。必须在系统启动事件期间调用。
     * 该维度将使用虚空生成器创建。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param typeId
     * 自定义维度的命名空间标识符（例如，'mypack:my_dimension'）。
     * 必须包含命名空间，并且只能使用有效的标识符字符。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomDimensionAlreadyRegisteredError}
     *
     * {@link CustomDimensionInvalidRegistryError}
     *
     * {@link CustomDimensionNameError}
     *
     * {@link CustomDimensionReloadNewDimensionError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomDimension(typeId: string): void;
}