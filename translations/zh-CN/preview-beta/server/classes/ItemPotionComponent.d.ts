/**
 * 当存在于物品上时，该物品为药水物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 与药水物品关联的药水投掷类型。
     *
     * @returns 药水投掷类型。
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionDeliveryType: PotionDeliveryType;
    /**
     * @remarks
     * 与药水物品关联的药水效果类型。
     *
     * @returns 药水效果类型。
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionEffectType: PotionEffectType;
    static readonly componentId = 'minecraft:potion';
}