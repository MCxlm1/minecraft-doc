/**
 * 包含有关数据驱动实体版本升级触发时的信息。
 */
export class EntityUpgradeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 触发升级所作用的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 被触发的数据驱动升级的名称。
     *
     */
    readonly upgradeId: string;
    /**
     * @remarks
     * 可更新的组件状态修改列表，这些修改是此次触发升级的效果。
     *
     * @returns 返回一个可更新的组件状态修改列表。
     */
    getModifiers(): DefinitionModifier[];
}