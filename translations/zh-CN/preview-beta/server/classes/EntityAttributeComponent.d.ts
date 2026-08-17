/**
 * 这是一个基础抽象类，适用于任何以数值为核心的实体组件，
 * 该组件可以具有定义的最小值、最大值和默认值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此属性在当前实例上的当前值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly currentValue: number;
    /**
     * @remarks
     * 返回此属性的默认定义值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * 返回此属性在给定任何其他环境组件或因素时的有效最大值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * 返回此属性在给定任何其他环境组件或因素时的有效最小值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * 将此属性的当前值重置为已定义的默认值。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为已定义的最大值。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为已定义的最小值。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * 设置该属性的当前值。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param value 要设置的新值。
     * @returns 如果当前值设置成功，则返回 true；否则返回 false。
     * @throws
     * 如果值超出范围，将抛出 ArgumentOutOfBoundsError。
     * 如果实体无效，将抛出 InvalidEntityError。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setCurrentValue(value: number): boolean;
}