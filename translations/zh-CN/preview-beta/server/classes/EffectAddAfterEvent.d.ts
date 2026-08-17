/**
 * 包含有关向实体添加效果（如中毒）的变化信息。
 */
export class EffectAddAfterEvent {
    private constructor();
    /**
     * @remarks
     * 效果的附加属性和详细信息。
     *
     */
    readonly effect: Effect;
    /**
     * @remarks
     * 正在添加效果的目标实体。
     *
     */
    readonly entity: Entity;
}