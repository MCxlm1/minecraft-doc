/**
 * 这是一个基础抽象类，用于任何围绕数字的实体组件，并且可以具有最小值、最大值和默认值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当前值是该实例的此属性的当前值。
     *
     * @throws
     * 在使用此属性时可能抛出错误。
     */
    readonly currentValue: number;
    /**
     * @remarks
     * 返回此属性的默认定义值。
     *
     * @throws
     * 在使用此属性时可能抛出错误。
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * 返回此属性在任何其他环境组件或因素影响下的有效最大值。
     *
     * @throws
     * 在使用此属性时可能抛出错误。
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * 返回此属性在任何其他环境组件或因素影响下的有效最小值。
     *
     * @throws
     * 在使用此属性时可能抛出错误。
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * 将当前值重置为定义的默认值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws
     * 此函数可能抛出错误。
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * 将当前值重置为定义的最大值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws
     * 此函数可能抛出错误。
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * 将当前值重置为定义的最小值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws
     * 此函数可能抛出错误。
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * 设置此属性的当前值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param value - 要设置的值。
     * @returns 返回布尔值，表示值是否已成功设置。
     * @throws
     * 如果值超出范围，将抛出 ArgumentOutOfBoundsError。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setCurrentValue(value: number): boolean;
}