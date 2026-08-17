/**
 * 包含与效果（如中毒）被添加到实体时相关的信息。
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 设置为 true 时将取消该事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 效果持续时间。
     *
     */
    duration: number;
    /**
     * @remarks
     * 被添加的效果类型。
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * 效果被添加到的实体。
     *
     */
    readonly entity: Entity;
}