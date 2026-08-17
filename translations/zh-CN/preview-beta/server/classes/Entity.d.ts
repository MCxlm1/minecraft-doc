/**
 * 表示世界中实体（一个生物、玩家或其他移动物体如矿车）的状态。
 */
export class Entity {
    private constructor();
    /**
     * @remarks
     * 实体当前所在的维度。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 实体的唯一标识符。此标识符在跨世界实例加载时保持一致。不应从此唯一标识符的值和结构中推断任何含义——不要解析或解释它。即使 {@link Entity.isValid} 为 false，此属性也可访问。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 实体是否接触到可攀爬方块。例如，在梯子旁的玩家或靠近石墙的蜘蛛。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly isClimbing: boolean;
    /**
     * @remarks
     * 实体是否具有大于 0 的坠落距离，或者在滑翔时大于 1 的坠落距离。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly isFalling: boolean;
    /**
     * @remarks
     * 实体的任何部分是否在水中方块内。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly isInWater: boolean;
    /**
     * @remarks
     * 实体是否在实心方块顶部。此属性的行为可能出乎意料。实体首次生成时此属性始终为 true，如果实体没有重力，此属性可能不正确。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly isOnGround: boolean;
    /**
     * @remarks
     * 如果为 true，则实体当前正在睡觉。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly isSleeping: boolean;
    /**
     * @remarks
     * 实体是否在潜行——即移动更慢且更安静。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    isSneaking: boolean;
    /**
     * @remarks
     * 实体是否在冲刺。例如，使用冲刺动作的玩家、逃跑的豹猫或用胡萝卜钓竿加速的猪。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly isSprinting: boolean;
    /**
     * @remarks
     * 实体是否处于游泳状态。例如，使用游泳动作的玩家或水中的鱼。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly isSwimming: boolean;
    /**
     * @remarks
     * 返回实体是否可被脚本操作。当玩家的 EntityLifetimeState 设置为 Loaded 时，玩家被视为有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 用于 .lang 文件中此实体名称本地化的键。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 实体的当前位置。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 决定玩家名称标签是否应进行深度测试以确定可见性的布尔值。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    nameplateDepthTested: boolean;
    /**
     * @remarks
     * 决定此实体名称标签的渲染距离的浮点数。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    nameplateRenderDistance: number;
    /**
     * @remarks
     * 实体的自定义名称。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    nameTag: string;
    /**
     * @remarks
     * 返回表示此实体的计分板身份。实体被杀死时仍保持有效。
     *
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @beta
     * @remarks
     * 获取或设置用作 AI 相关行为（如攻击）目标的实体。如果实体当前没有目标，则返回 undefined。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly target?: Entity;
    /**
     * @remarks
     * 实体类型的标识符——例如，'minecraft:skeleton'。即使 {@link Entity.isValid} 为 false，此属性也可访问。
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * 向实体添加或更新效果，如中毒。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param effectType
     * 要添加到实体的效果类型。
     * @param duration
     * 效果应用的时间，以刻为单位。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻和秒之间转换。值必须在 [0, 20000000] 范围内。
     * 范围：[1, 20000000]
     * @param options
     * 效果的附加选项。
     * @returns
     * 如果效果成功添加或更新，则返回 undefined。如果持续时间或放大器超出有效范围，或效果不存在，则可能抛出错误。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     * @example spawnPoisonedVillager.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEffectTypes } from '@minecraft/vanilla-data';
     *
     * function spawnPoisonedVillager(targetLocation: DimensionLocation) {
     *   const villagerType = 'minecraft:villager_v2<minecraft:ageable_grow_up>';
     *   const villager = targetLocation.dimension.spawnEntity(villagerType, targetLocation);
     *   const duration = 20;
     *
     *   villager.addEffect(MinecraftEffectTypes.Poison, duration, { amplifier: 1 });
     * }
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes, MinecraftEffectTypes } from '@minecraft/vanilla-data';
     *
     * function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const fox = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *
     *   fox.addEffect(MinecraftEffectTypes.Speed, 10, {
     *     amplifier: 2,
     *   });
     *   log('Created a fox.');
     *
     *   const wolf = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Wolf, {
     *     x: targetLocation.x + 4,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *   wolf.addEffect(MinecraftEffectTypes.Slowness, 10, {
     *     amplifier: 2,
     *   });
     *   wolf.isSneaking = true;
     *   log('Created a sneaking wolf.', 1);
     * }
     * ```
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    /**
     * @remarks
     * 向实体的库存中添加物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 如果物品完全添加，则返回 undefined；否则返回包含剩余数量的 ItemStack。
     * @throws 此函数可能抛出错误。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityComponentError}
     *
     * {@link InvalidEntityError}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * 向实体添加指定的标签。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 要添加的标签内容。标签必须少于 256 个字符。
     * @returns
     * 如果标签成功添加，则返回 true。如果标签已存在于实体上，则可能失败。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
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
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * 对实体应用一组伤害。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param amount
     * 要应用的伤害量。
     * @param options
     * 关于伤害来源的附加选项，可能为此实体添加额外效果或引发额外行为。
     * @returns
     * 实体是否受到任何伤害。如果实体是无敌的或应用伤害小于等于 0，则可能返回 false。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     * @example applyDamageThenHeal.ts
     * ```typescript
     * import { system, EntityHealthComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function applyDamageThenHeal(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
     *
     *   skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton
     *
     *   system.runTimeout(() => {
     *     const health = skelly.getComponent(EntityComponentTypes.Health) as EntityHealthComponent;
     *     log('Skeleton health before heal: ' + health?.currentValue);
     *     health?.resetToMaxValue();
     *     log('Skeleton health after heal: ' + health?.currentValue);
     *   }, 20);
     * }
     * ```
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks
     * 将冲量向量应用到实体的当前速度上。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param vector
     * 冲量向量。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     * @example applyImpulse.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function applyImpulse(targetLocation: DimensionLocation) {
     *   const zombie = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Zombie, targetLocation);
     *
     *   zombie.clearVelocity();
     *
     *   // throw the zombie up in the air
     *   zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * }
     * ```
     */
    applyImpulse(vector: Vector3): void;
}

applyImpulse(vector: Vector3): void;
    /**
     * @remarks
     * 将击退力向量应用于实体的当前速度。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param horizontalForce
     * 水平方向的击退力度。
     * @param verticalStrength
     * 垂直方向的击退力度。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
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
     */
    applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
    /**
     * @remarks
     * 清除已在此实体上设置的所有动态属性。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 将实体的当前速度设为零。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     * @example applyImpulse.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function applyImpulse(targetLocation: DimensionLocation) {
     *   const zombie = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Zombie, targetLocation);
     *
     *   zombie.clearVelocity();
     *
     *   // throw the zombie up in the air
     *   zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * }
     * ```
     */
    clearVelocity(): void;
    /**
     * @remarks
     * 如果实体着火，则扑灭火焰。注意，你可以调用 getComponent('minecraft:onfire')，如果存在该组件，则表示实体着火了。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param useEffects
     * 是否显示与灭火相关的视觉效果。
     * 默认值：true
     * @returns
     * 返回实体是否着火。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     * @example setOnFire.ts
     * ```typescript
     * import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
     *
     *   skelly.setOnFire(20, true);
     *
     *   system.runTimeout(() => {
     *     const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
     *     log(onfire?.onFireTicksRemaining + ' fire ticks remaining.');
     *
     *     skelly.extinguishFire(true);
     *     log('Never mind. Fire extinguished.');
     *   }, 20);
     * }
     * ```
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @remarks
     * 获取实体的碰撞边界。
     *
     * @returns
     * 一个轴对齐的边界框（AABB）。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getAABB(): AABB;
    /**
     * @remarks
     * 获取该实体直接踩着的实心方块。忽略压力板。
     *
     * @param options
     * 用于控制返回哪些方块的附加配置选项。
     * @returns
     * 该实体直接踩着的实心方块。如果实体正在跳跃或飞行，则返回空列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getAllBlocksStandingOn(options?: GetBlocksStandingOnOptions): Block[];
    /**
     * @remarks
     * 从该实体所注视的方向返回第一个相交的方块。
     *
     * @param options
     * 射线投射的额外配置选项。
     * @returns
     * 从该实体所注视的方向返回第一个相交的方块。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * 获取该实体直接踩着的、最接近实体中心的单个实心方块。忽略压力板。
     *
     * @param options
     * 用于控制返回哪个方块的附加配置选项。
     * @returns
     * 该实体直接踩着的、最接近实体中心的单个实心方块。如果实体正在飞行或跳跃，则为 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getBlockStandingOn(options?: GetBlocksStandingOnOptions): Block | undefined;
    /**
     * @remarks
     * 获取实体的一个组件（该组件表示附加能力）。
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:health'）。
     * 如果未指定命名空间前缀，则默认为 'minecraft:'。
     * 可用的组件 ID 可以在 {@link EntityComponentTypes} 枚举中找到。
     * @returns
     * 如果组件存在于实体上则返回该组件，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getComponent<T extends string>(componentId: T): EntityComponentReturnType<T> | undefined;
    /**
     * @remarks
     * 返回此实体上存在的所有脚本组件。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getComponents(): EntityComponent[];
    /**
     * @remarks
     * 返回一个属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回该属性的值，如果属性尚未设置，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回此实体上已使用的可用动态属性标识符集合。
     *
     * @returns
     * 在此实体上设置的动态属性的字符串数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回当前为此实体存储的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这可能有助于诊断性能警告信号——例如，如果实体关联了数兆字节的动态属性，在某些设备上加载可能会很慢。
     *
     * @returns
     * 所有动态属性占用的总字节数。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 返回实体上指定 EffectType 的效果；如果效果不存在则返回 undefined，如果效果类型无效则抛出错误。
     *
     * @param effectType
     * 效果标识符。
     * @returns
     * 指定效果的 Effect 对象；如果效果不存在则返回 undefined，如果效果不存在于游戏中则抛出错误。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @remarks
     * 返回应用于此实体的效果集合。
     *
     * @returns
     * 效果列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getEffects(): Effect[];
    /**
     * @remarks
     * 从实体的视角进行射线投射，获取该实体正在注视的实体。
     *
     * @param options
     * 射线投射的额外配置选项。
     * @returns
     * 从该实体所注视的方向返回一组实体。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks
     * 返回此实体头部组件的当前位置。
     *
     * @returns
     * 返回此实体头部组件的当前位置。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks
     * 获取实体属性值。如果该属性是在同一 tick 内通过 setProperty 函数设置的，则更新后的值将直到下一个 tick 才会反映出来。
     *
     * @param identifier
     * 实体属性标识符。
     * @returns
     * 返回当前属性值。对于枚举属性，返回字符串。对于浮点数和整数属性，返回数值。对于未定义的属性，返回 undefined。
     * @throws
     * 如果实体无效，则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @remarks
     * 返回此实体的当前旋转分量。
     *
     * @returns
     * 返回包含此实体旋转（以度为单位）的 Vector2。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getRotation(): Vector2;
    /**
     * @remarks
     * 返回与实体关联的所有标签。
     *
     * @returns
     * 包含所有标签的字符串数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 返回实体的当前速度向量。
     *
     * @returns
     * 返回实体的当前速度向量。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     * @example getFireworkVelocity.ts
     * ```typescript
     * import { system, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function getFireworkVelocity(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const fireworkRocket = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.FireworksRocket, targetLocation);
     *
     *   system.runTimeout(() => {
     *     const velocity = fireworkRocket.getVelocity();
     *
     *     log('Velocity of firework is: (x: ' + velocity.x + ', y:' + velocity.y + ', z:' + velocity.z + ')');
     *   }, 5);
     * }
     * ```
     */

getVelocity(): Vector3;
    /**
     * @remarks
     * 返回实体当前的视角方向。
     *
     * @returns
     * 返回实体当前的视角方向。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getViewDirection(): Vector3;
    /**
     * @remarks
     * 如果指定的组件存在于该实体上，则返回 true。
     *
     * @param componentId
     * 要检索的组件标识符（例如 'minecraft:rideable'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
     * @returns
     * 如果指定的组件存在于该实体上，则返回 true。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * 返回实体是否具有特定标签。
     *
     * @param tag
     * 要测试的标签标识符。
     * @returns
     * 返回实体是否具有特定标签。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 杀死此实体。实体将正常掉落战利品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 如果实体可以被杀死（即使它已经死亡），则返回 true，否则返回 false。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
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
     */
    kill(): boolean;
    /**
     * @remarks
     * 设置实体的旋转方向以面向目标位置。如果适用，俯仰角和偏航角都会被设置，例如对于生物，俯仰角控制头部倾斜，偏航角控制身体旋转。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targetLocation
     * 此实体应面向/看向的目标位置。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    lookAt(targetLocation: Vector3): void;
    /**
     * @remarks
     * 将实体与传入的选项进行匹配。如果传入的 EntityQueryOptions 中未指定位置，则使用实体的位置进行匹配。
     *
     * @param options
     * 执行匹配的查询条件。
     * @returns
     * 如果实体符合传入的 EntityQueryOptions 中的条件，则返回 true，否则返回 false。
     * @throws
     * 如果查询选项配置错误，则抛出。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @remarks
     * 使实体播放给定的动画。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param animationName
     * 动画标识符，例如 animation.creeper.swelling。
     * @param options
     * 控制动画播放和过渡的附加选项。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @remarks
     * 立即从世界中移除实体。被移除的实体不会执行死亡动画或掉落战利品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    remove(): void;
    /**
     * @remarks
     * 移除实体上指定的 EffectType，如果效果不存在则返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param effectType
     * 效果标识符。
     * @returns
     * 如果效果已被移除，则返回 true。如果未找到效果或效果不存在，则返回 false。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @remarks
     * 从实体中移除指定的标签。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 要移除的标签内容。
     * @returns
     * 返回该标签是否存在于实体上。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * 将实体属性重置为其默认值，如实体定义中所述。此属性更改直到下一个 tick 才会应用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 实体属性标识符。
     * @returns
     * 返回默认属性值。对于枚举属性，返回字符串。对于浮点数和整数属性，返回数字。对于未定义的属性，返回 undefined。
     * @throws
     * 如果实体无效，则抛出。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityError}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @remarks
     * 在实体上运行同步命令。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param commandString
     * 命令字符串。注意：不应包含前导斜杠。
     * @returns
     * 包含命令是否成功的命令结果。
     * @throws 此函数可能会抛出错误。
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * 使用特定值设置多个动态属性。
     *
     * @param values
     * 要设置的动态属性的键值对记录。如果数据值为 null，则将移除该属性。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * 将指定属性设置为某个值。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性的数据值。如果值为 null，则将移除该属性。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 将实体设置为着火状态（如果不在水中或雨中）。注意，你可以调用 getComponent('minecraft:onfire')，如果存在，则实体着火。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param seconds
     * 设置实体着火的时间长度。
     * @param useEffects
     * 是否应用副作用（例如解冻）以及是否考虑其他条件（如降雨或防火）。
     * 默认值：true
     * @returns
     * 实体是否被设置为着火。如果 seconds 小于或等于零，实体是湿的或实体对火免疫，则可能失败。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     * @example setOnFire.ts
     * ```typescript
     * import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
     *
     *   skelly.setOnFire(20, true);
     *
     *   system.runTimeout(() => {
     *     const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
     *     log(onfire?.onFireTicksRemaining + ' fire ticks remaining.');
     *
     *     skelly.extinguishFire(true);
     *     log('Never mind. Fire extinguished.');
     *   }, 20);
     * }
     * ```
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @remarks
     * 将实体属性设置为提供的值。此属性更改直到下一个 tick 才会应用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 实体属性标识符。
     * @param value
     * 属性值。提供的类型必须与实体定义中指定的类型兼容。
     * @throws
     * 如果实体无效，则抛出。
     * 如果提供了无效的标识符，则抛出。
     * 如果提供的值类型与属性类型不匹配，则抛出。
     * 如果提供的值超出预期范围（int、float 属性），则抛出。
     * 如果提供的字符串值与接受的枚举值集合不匹配（枚举属性），则抛出。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * 设置实体的主旋转。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param rotation
     * 实体的 x 和 y 旋转角度（以度为单位）。对于大多数生物，x 旋转控制头部倾斜，y 旋转控制身体旋转。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    setRotation(rotation: Vector2): void;
    /**
     * @remarks
     * 将选定的实体传送到新位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 实体的新位置。
     * @param teleportOptions
     * 关于传送操作的选项。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     * @example teleport.ts
     * ```typescript
     * import { system, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function teleport(targetLocation: DimensionLocation) {
     *   const cow = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Cow, targetLocation);
     *
     *   system.runTimeout(() => {
     *     cow.teleport(
     *       { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
     *       {
     *         facingLocation: targetLocation,
     *       }
     *     );
     *   }, 20);
     * }
     * ```
     * @example teleportMovement.ts
     * ```typescript
     * import { system, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function teleportMovement(targetLocation: DimensionLocation) {
     *   const pig = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Pig, targetLocation);
     *
     *   let inc = 1;
     *   const runId = system.runInterval(() => {
     *     pig.teleport(
     *       { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
     *       {
     *         facingLocation: targetLocation,
     *       }
     *     );
     *
     *     if (inc > 100) {
     *       system.clearRun(runId);
     *     }
     *     inc++;
     *   }, 4);
     * }
     * ```
     */

teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @remarks
     * 触发一个实体类型事件。对于每个实体，在实体定义中定义了许多关键实体行为的事件；例如，爬行者有一个 minecraft:start_exploding 类型事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param eventName
     * 要触发的实体类型事件的名称。如果未指定命名空间，则默认为 minecraft:。
     * @throws
     * 如果事件未在实体定义中定义，则会抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     * @example triggerEvent.ts
     * ```typescript
     * // A function that spawns a creeper and triggers it to explode immediately
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function spawnExplodingCreeper(location: DimensionLocation) {
     *   const creeper = location.dimension.spawnEntity(MinecraftEntityTypes.Creeper, location);
     *
     *   creeper.triggerEvent('minecraft:start_exploding_forced');
     * }
     * ```
     * @example triggerEvent.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function triggerEvent(targetLocation: DimensionLocation) {
     *   const creeper = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Creeper, targetLocation);
     *
     *   creeper.triggerEvent('minecraft:start_exploding_forced');
     * }
     * ```
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks
     * 尝试进行传送，但可能无法完成传送操作（例如，如果目标位置有方块）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 要传送实体到的目标位置。
     * @param teleportOptions
     * 关于传送操作的选项。
     * @returns
     * 返回传送是否成功。如果目标区块未加载或传送会导致与方块相交，则可能失败。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}