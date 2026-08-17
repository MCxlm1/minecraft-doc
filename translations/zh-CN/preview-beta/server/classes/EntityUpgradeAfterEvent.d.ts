/**
 * 包含与数据驱动的实体版本升级触发相关的信息。
 */
export class EntityUpgradeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 触发升级的实体。
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
     * 一个可更新的组件状态修改列表，这些修改是所触发升级的效果。
     *
     */
    getModifiers(): DefinitionModifier[];
}