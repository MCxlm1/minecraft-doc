/**
 * 当存在于物品上时，此物品即为药水物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 与药水物品关联的PotionDeliveryType。
     *
     * @throws 该属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionDeliveryType: PotionDeliveryType;
    /**
     * @remarks
     * 与药水物品关联的PotionEffectType。
     *
     * @throws 该属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionEffectType: PotionEffectType;
    static readonly componentId = 'minecraft:potion';
}