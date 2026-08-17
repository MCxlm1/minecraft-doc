/**
 * 包含有关触发数据驱动实体版本升级的信息。
 */
export class EntityUpgradeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 升级所触发的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 正在触发的数据驱动升级的名称。
     *
     */
    readonly upgradeId: string;
    /**
     * @remarks
     * 一个可更新的组件状态修改列表，是此次触发升级的效果。
     *
     * @returns
     * 可更新的组件状态修改列表，是此次触发升级的效果。
     */
    getModifiers(): DefinitionModifier[];
}