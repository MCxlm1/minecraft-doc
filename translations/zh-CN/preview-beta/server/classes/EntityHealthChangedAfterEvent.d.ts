/**
 * 包含实体生命值变化时的相关信息。注意：在此事件中不要更改实体的生命值，否则会导致无限循环！
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 生命值发生变化的实体。
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体的新生命值。
     */
    readonly newValue: number;
    /**
     * @remarks
     * 实体的旧生命值。
     */
    readonly oldValue: number;
}