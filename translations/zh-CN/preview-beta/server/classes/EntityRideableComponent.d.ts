/**
 * 添加此组件后，该组件将提供让一个实体被另一个实体骑乘的能力。
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
     * 可用于控制此实体的座位的从零开始的索引。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * 决定当实体处于潜行状态时是否不支持交互。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * 当玩家看向此实体并希望骑乘时（通常在使用触摸屏控制时）应显示的文本集。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly interactText: string;
    /**
     * @remarks
     * 生物作为乘客时允许的最大宽度。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * 如果为 true，此实体将把具有正确 family_types 的实体拉入任何可用的座位。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * 如果为 true，当骑乘者看向此实体时，该实体将被选中。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * 为此实体定义的骑乘者座位数量。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * 将一个实体作为骑乘者添加到此实体。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param rider
     * 将成为此实体骑乘者的实体。
     * @returns
     * 如果骑乘者实体被成功添加，则返回 true。
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
     * 将指定骑乘者从此实体上逐出。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param rider
     * 应从此实体上逐出的实体。
     * @throws 此函数可能抛出错误。
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * 逐出此实体的所有骑乘者。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRiders(): void;
    /**
     * @remarks
     * 此实体可作为骑乘者支持的实体类型字符串列表。
     *
     * @returns 此实体支持作为骑乘者的实体类型字符串列表。
     * @throws 此函数可能抛出错误。
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * 获取当前正在骑乘此实体的所有实体的列表。
     *
     * @returns 当前正在骑乘此实体的所有实体的列表。
     * @throws 此函数可能抛出错误。
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * 获取座位位置及每个位置的骑乘者数量的列表。
     *
     * @returns 此实体上座位位置及每个位置的骑乘者数量的列表。
     * @throws 此函数可能抛出错误。
     */
    getSeats(): Seat[];
}