/**
 * 定义实体的颜色。仅对具有预定义颜色值的特定实体（如绵羊、羊驼、潜影贝）有效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}