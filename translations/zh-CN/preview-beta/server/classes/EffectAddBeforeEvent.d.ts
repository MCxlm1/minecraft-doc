/**
 * 包含有关向实体添加效果（如中毒）时的变更信息。
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 true 时，将取消该事件。
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
     * 正在添加的效果的类型。
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * 效果正在添加到的实体。
     *
     */
    readonly entity: Entity;
}