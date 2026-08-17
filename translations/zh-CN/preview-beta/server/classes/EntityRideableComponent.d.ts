/**
 * 当添加此组件后，该实体将具备被其他实体骑乘的能力。
 * @example minibiomes.ts
 * ```typescript
 * import { EntityComponentTypes } from '@minecraft/server';
 * import { Test, register } from '@minecraft/server-gametest';
 * import { MinecraftBlockTypes, MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function minibiomes(test: Test) {
 *   const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
 *   const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });
 *
 *   test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });
 *
 *   const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);
 *
 *   minecartRideableComp?.addRider(pig);
 *
 *   test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
 * }
 * register('ChallengeTests', 'minibiomes', minibiomes).structureName('gametests:minibiomes').maxTicks(160);
 * ```
 */
// @ts-ignore 允许原生定义类的继承
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 用于控制此实体的座位索引（从零开始）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * 确定当实体蹲下时是否不支持交互。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * 当玩家查看骑乘此实体时（通常用于触摸屏控制）应显示的文字集合。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly interactText: string;
    /**
     * @remarks
     * 生物作为乘客的最大宽度。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * 如果为 true，此实体将把属于正确 family_types 的实体拉入任何可用座位。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * 如果为 true，骑手查看此实体时将能够拾取它。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * 为此实体定义的骑手座位数量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * 将一个实体添加为此实体的骑手。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param rider
     * 将成为此实体骑手的实体。
     * @returns
     * 如果骑手实体成功添加，则返回 true。
     * @throws 此函数可能抛出错误。
     * @example minibiomes.ts
     * ```typescript
     * import { EntityComponentTypes } from '@minecraft/server';
     * import { Test, register } from '@minecraft/server-gametest';
     * import { MinecraftBlockTypes, MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function minibiomes(test: Test) {
     *   const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
     *   const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });
     *
     *   test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });
     *
     *   const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);
     *
     *   minecartRideableComp?.addRider(pig);
     *
     *   test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
     * }
     * register('ChallengeTests', 'minibiomes', minibiomes).structureName('gametests:minibiomes').maxTicks(160);
     * ```
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * 将指定骑手从此实体上弹出。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param rider
     * 应从该实体弹出的实体。
     * @throws 此函数可能抛出错误。
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * 弹出此实体的所有骑手。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRiders(): void;
    /**
     * @remarks
     * 获取此实体支持作为骑手的实体类型字符串列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * 获取当前骑乘此实体的所有实体列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * 获取骑乘此实体的每个位置及其骑手数量的列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getSeats(): Seat[];
}