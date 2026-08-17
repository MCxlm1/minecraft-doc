/**
 * 定义实体的颜色。仅适用于某些具有预定义颜色值的实体（例如羊、羊驼、潜影贝）。
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