/**
 * 这是一个基础抽象类，用于任何以数字为中心的实体组件，
 * 该数字可以具有最小值、最大值和默认定义值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实例的此属性的当前值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly currentValue: number;
    /**
     * @remarks
     * 返回此属性定义的默认值。
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
     * 将当前属性值重置为定义的默认值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * 将当前属性值重置为定义的最大值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * 将当前属性值重置为定义的最小值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * 设置此属性的当前值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param value - 要设置的属性值。
     * @returns 如果值设置成功，返回 true；否则返回 false。
     * @throws 如果值超出边界，将抛出 ArgumentOutOfBounds 错误。
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     * {@link InvalidEntityError}
     */
    setCurrentValue(value: number): boolean;
}