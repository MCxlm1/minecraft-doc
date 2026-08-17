/**
 * 当添加此组件时，使实体能够被其他实体骑乘。
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
     * 用于控制此实体的座位的从零开始的索引。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * 确定当实体潜行时是否不支持交互。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * 当玩家希望骑乘此实体时（通常使用触摸屏控制）应显示的文本集合。
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
     * 如果为 true，此实体将把具有正确 family_types 的实体拉入任何可用座位。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * 如果为 true，当骑乘者注视此实体时，此实体将被拾取。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * 为此实体定义的骑乘者座位数量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * 将一个实体作为骑乘者添加到此实体上。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param rider
     * 将成为此实体骑乘者的实体。
     * @returns
     * 如果骑乘者实体成功添加，则返回 true。
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
     * 驱逐此实体的指定骑乘者。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param rider
     * 应从此实体驱逐的实体。
     * @throws 此函数可能抛出错误。
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * 驱逐此实体的所有骑乘者。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRiders(): void;
    /**
     * @remarks
     * 此实体可作为骑乘者支持的实体类型字符串列表。
     *
     * @returns 支持的实体类型字符串列表。
     * @throws 此函数可能抛出错误。
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * 获取当前骑乘此实体的所有实体列表。
     *
     * @returns 当前骑乘此实体的实体列表。
     * @throws 此函数可能抛出错误。
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * 获取骑乘此实体的每个座位的位置和骑乘者数量列表。
     *
     * @returns 每个座位的位置和骑乘者数量列表。
     * @throws 此函数可能抛出错误。
     */
    getSeats(): Seat[];
}