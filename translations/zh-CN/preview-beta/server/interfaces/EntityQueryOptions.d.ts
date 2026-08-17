/**
 * 包含用于在区域内选择实体的选项。
 * @example blockConditional.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 *
 * function blockConditional(targetLocation: DimensionLocation) {
 *   targetLocation.dimension
 *     .getEntities({
 *       type: 'fox',
 *     })
 *     .filter(entity => {
 *       const block = targetLocation.dimension.getBlock({
 *         x: entity.location.x,
 *         y: entity.location.y - 1,
 *         z: entity.location.z,
 *       });
 *
 *       return block !== undefined && block.matches('minecraft:stone');
 *     })
 *     .forEach(entity => {
 *       targetLocation.dimension.spawnEntity('salmon', entity.location);
 *     });
 * }
 * ```
 * @example findEntitiesHavingPropertyEqualsTo.ts
 * ```typescript
 * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
 *
 * function findEntitiesHavingPropertyEqualsTo(targetLocation: DimensionLocation) {
 *   // Minecraft bees have a has_nectar boolean property
 *   const queryOption: EntityQueryOptions = {
 *     propertyOptions: [{ propertyId: 'minecraft:has_nectar', value: { equals: true } }],
 *   };
 *
 *   const entities = targetLocation.dimension.getEntities(queryOption);
 * }
 * ```
 * @example playSoundChained.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 *
 * function playSoundChained(targetLocation: DimensionLocation) {
 *   const targetPlayers = targetLocation.dimension.getPlayers();
 *   const originEntities = targetLocation.dimension.getEntities({
 *     type: 'armor_stand',
 *     name: 'myArmorStand',
 *     tags: ['dummyTag1'],
 *     excludeTags: ['dummyTag2'],
 *   });
 *
 *   originEntities.forEach(entity => {
 *     targetPlayers.forEach(player => {
 *       player.playSound('raid.horn');
 *     });
 *   });
 * }
 * ```
 * @example setScoreboardChained.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function setScoreboardChained(targetLocation: DimensionLocation) {
 *   const objective = world.scoreboard.addObjective('scoreObjective1', 'dummy');
 *   targetLocation.dimension
 *     .getEntities({
 *       type: 'armor_stand',
 *       name: 'myArmorStand',
 *     })
 *     .forEach(entity => {
 *       if (entity.scoreboardIdentity !== undefined) {
 *         objective.setScore(entity.scoreboardIdentity, -1);
 *       }
 *     });
 * }
 * ```
 * @example summonMobChained.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 *
 * function summonMobChained(targetLocation: DimensionLocation) {
 *   const armorStandArray = targetLocation.dimension.getEntities({
 *     type: 'armor_stand',
 *   });
 *   const playerArray = targetLocation.dimension.getPlayers({
 *     location: { x: 0, y: -60, z: 0 },
 *     closest: 4,
 *     maxDistance: 15,
 *   });
 *   armorStandArray.forEach(entity => {
 *     playerArray.forEach(player => {
 *       targetLocation.dimension.spawnEntity('pig', {
 *         x: player.location.x + 1,
 *         y: player.location.y,
 *         z: player.location.z,
 *       });
 *     });
 *   });
 * }
 * ```
 * @example bounceSkeletons.ts
 * ```typescript
 * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
 *
 * function bounceSkeletons(targetLocation: DimensionLocation) {
 *   const mobs = ['creeper', 'skeleton', 'sheep'];
 *
 *   // create some sample mob data
 *   for (let i = 0; i < 10; i++) {
 *     targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
 *   }
 *
 *   const eqo: EntityQueryOptions = {
 *     type: 'skeleton',
 *   };
 *
 *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
 *     entity.applyKnockback(0, 0, 0, 1);
 *   }
 * }
 * ```
 * @example tagsQuery.ts
 * ```typescript
 * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
 *
 * function tagsQuery(targetLocation: DimensionLocation) {
 *   const mobs = ['creeper', 'skeleton', 'sheep'];
 *
 *   // create some sample mob data
 *   for (let i = 0; i < 10; i++) {
 *     const mobTypeId = mobs[i % mobs.length];
 *     const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
 *     entity.addTag('mobparty.' + mobTypeId);
 *   }
 *
 *   const eqo: EntityQueryOptions = {
 *     tags: ['mobparty.skeleton'],
 *   };
 *
 *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
 *     entity.kill();
 *   }
 * }
 * ```
 * @example testThatEntityIsFeatherItem.ts
 * ```typescript
 * import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
 *
 * function testThatEntityIsFeatherItem(
 *   log: (message: string, status?: number) => void,
 *   targetLocation: DimensionLocation
 * ) {
 *   const items = targetLocation.dimension.getEntities({
 *     location: targetLocation,
 *     maxDistance: 20,
 *   });
 *
 *   for (const item of items) {
 *     const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;
 *
 *     if (itemComp) {
 *       if (itemComp.itemStack.typeId.endsWith('feather')) {
 *         log('Success! Found a feather', 1);
 *       }
 *     }
 *   }
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
    /**
     * @remarks
     * 限制返回实体的数量，选择此属性指定的最接近的 N 个实体。
     * 查询选项对象上还必须指定位置值。
     *
     */
    closest?: number;
    /**
     * @remarks
     * 限制返回实体的数量，选择此属性指定的最远的 N 个实体。
     * 查询选项对象上还必须指定位置值。
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 向查询添加一个种子位置，与 closest、farthest、limit、volume 和 distance 属性结合使用。
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，则包含距离位置属性中指定的位置小于此距离的实体。
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，则包含距离位置属性中指定的位置至少为此距离的实体。
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * 与 location 结合使用，指定包含实体的长方体体积。
     *
     */
    volume?: Vector3;
}