/**
 * 这是任何以数字为中心且具有定义的最小值、最大值和默认值的实体组件的基抽象类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此属性在此实例中的当前值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly currentValue: number;
    /**
     * @remarks
     * 返回此属性的默认定义值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * 返回此属性在考虑任何其他环境组件或因素后的有效最大值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * 返回此属性在考虑任何其他环境组件或因素后的有效最小值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的默认值。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的最大值。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的最小值。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * 设置此属性的当前值。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws
     * 如果值超出范围，将抛出 ArgumentOutOfBounds 错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setCurrentValue(value: number): boolean;
}