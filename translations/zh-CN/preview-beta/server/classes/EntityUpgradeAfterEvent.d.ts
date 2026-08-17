/**
 * 包含与触发数据驱动实体版本升级相关的信息。
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
     * 被触发的数据驱动升级的名称。
     *
     */
    readonly upgradeId: string;
    /**
     * @remarks
     * 此触发升级对组件状态产生的可更新修改列表。
     * @returns 此触发升级对组件状态产生的可更新修改列表。
     *
     */
    getModifiers(): DefinitionModifier[];
}