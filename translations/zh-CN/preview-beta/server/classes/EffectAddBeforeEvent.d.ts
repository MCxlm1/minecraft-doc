/**
 * 包含与效果变化（如中毒）被添加到
 * 实体相关的信息。
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 true 时将取消事件。
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
     * 正在添加的效果类型。
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * 正在添加效果的实体。
     *
     */
    readonly entity: Entity;
}