/**
 * 实体移动事件系列的基础类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该生物移动模式的最大转向速率。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly maxTurn: number;
}