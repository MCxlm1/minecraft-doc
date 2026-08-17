/**
 * 包含与效果（如中毒）被添加到实体时相关的信息。
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
     * 效果被添加到的实体。
     *
     */
    readonly entity: Entity;
}