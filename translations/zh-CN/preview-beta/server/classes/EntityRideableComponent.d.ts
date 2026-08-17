/**
 * 当添加此组件时，该组件赋予实体被其他实体骑乘的能力。
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
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 用于控制此实体的坐席的从零开始的索引。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * 确定如果实体处于蹲伏状态时是否不支持交互。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * 当玩家查看并准备骑乘此实体时（通常使用触摸屏控制）应显示的文本。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly interactText: string;
    /**
     * @remarks
     * 生物成为乘客的最大宽度。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * 如果为 true，此实体将把具有正确 family_types 的实体拉入任何可用的坐席。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * 如果为 true，当骑手查看此实体时，此实体将被选中。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * 为此实体定义的骑手坐席数量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * 将一个实体作为骑手添加到此实体上。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * @param rider
     * 将成为此实体骑手的实体。
     * @returns
     * 如果成功添加骑手实体，则返回 true。
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
     * 弹射出此实体的指定骑手。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * @param rider
     * 应从此实体弹射出的实体。
     * @throws 此函数可能抛出错误。
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * 弹射出此实体的所有骑手。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRiders(): void;
    /**
     * @remarks
     * 此实体可作为骑手支持的实体类型字符串列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * 获取当前正骑乘此实体的所有实体的列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * 获取骑乘此实体的实体在每个位置的位置和骑手数量的列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getSeats(): Seat[];
}