/**
 * @symbol Entity
 * @description 表示世界中实体（生物、玩家或其他移动对象如矿车）的状态。
 */
export class Entity {
    /**
     * 实体当前所在的维度。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "dimension": Dimension;
    /**
     * 实体头部中心的位置。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "headLocation": Location;
    /**
     * 实体的唯一标识符。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "id": string;
    /**
     * 实体是否处于潜行状态——即移动更慢且更安静。
     */
    "isSneaking": boolean;
    /**
     * 实体当前所在位置。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "location": Location;
    /**
     * 实体的自定义名称。
     */
    "nameTag": string;
    /**
     * 实体的主要旋转角度。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "rotation": XYRotation;
    /**
     * 返回表示此实体的计分板身份。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "scoreboard": ScoreboardIdentity;
    /**
     * 获取或设置用作 AI 相关行为目标（如攻击）的实体。
     */
    "target": Entity;
    /**
     * 实体的速度向量。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "velocity": Vector;
    /**
     * 实体当前视线的向量。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "viewVector": Vector;

    /**
     * @remarks
     * 为实体添加效果，如中毒。
     * @param effectType 要添加到实体的效果类型。
     * @param duration 效果持续的时间（刻）。
     * @param amplifier 效果放大的倍率（可选）。
     * @param showParticles 是否显示粒子效果（可选）。
     * @throws 此函数可能抛出错误。
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;

    /**
     * @remarks
     * 为实体添加指定标签。
     * @param tag 要添加的标签内容。
     * @throws 此函数可能抛出错误。
     */
    addTag(tag: string): boolean;

    /**
     * @remarks
     * 获取与此实体视线向量相交的第一个方块。
     * @param options 处理此射线查询的附加选项。
     * @throws 此函数可能抛出错误。
     */
    getBlockFromViewVector(options?: BlockRaycastOptions): Block;

    /**
     * @remarks
     * 获取实体的组件（表示附加能力）。
     * @param componentId 要获取的组件标识符。
     * @returns 如果实体上存在该组件则返回组件对象，否则返回 undefined。
     */
    getComponent(componentId: string): IEntityComponent;

    /**
     * @remarks
     * 返回此实体上存在且 API 支持的所有组件。
     */
    getComponents(): IEntityComponent[];

    /**
     * @remarks
     * 获取动态属性值。
     * @param identifier 属性标识符。
     * @returns 属性值，如果属性未设置则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getDynamicProperty(identifier: string): boolean | number | string;

    /**
     * @remarks
     * 获取实体上指定 EffectType 的效果，如果效果不存在则返回 undefined。
     * @param effectType 效果类型。
     * @returns 指定效果的对象，如果效果不存在则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getEffect(effectType: EffectType): Effect;

    /**
     * @remarks
     * 获取与实体视线向量相交的第一个实体。
     * @param options 处理此射线查询的附加选项。
     * @throws 此函数可能抛出错误。
     */
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];

    /**
     * @remarks
     * 返回与实体关联的所有标签。
     * @throws 此函数可能抛出错误。
     */
    getTags(): string[];

    /**
     * @remarks
     * 检查指定组件是否存在于实体上。
     * @param componentId 要检查的组件标识符。
     */
    hasComponent(componentId: string): boolean;

    /**
     * @remarks
     * 测试实体是否包含特定标签。
     * @param tag 要测试的标签标识符。
     * @throws 此函数可能抛出错误。
     */
    hasTag(tag: string): boolean;

    /**
     * @remarks
     * 杀死此实体。实体将正常掉落战利品。
     * @throws 此函数可能抛出错误。
     */
    kill(): void;

    /**
     * @remarks
     * 移除指定动态属性。
     * @param identifier 属性标识符。
     * @throws 此函数可能抛出错误。
     */
    removeDynamicProperty(identifier: string): boolean;

    /**
     * @remarks
     * 从实体移除指定标签。
     * @param tag 要移除的标签内容。
     * @throws 此函数可能抛出错误。
     */
    removeTag(tag: string): boolean;

    /**
     * @remarks
     * 从此实体的上下文运行指定命令。
     * @param commandString 要运行的命令，注意不要以斜杠开头。
     * @returns 对于返回数据的命令，返回包含命令响应值的 JSON 结构。
     * @throws 此函数可能抛出错误。
     */
    runCommand(commandString: string): any;

    /**
     * @remarks
     * 异步从此实体上下文运行指定命令。建议尽可能使用异步方式。
     * @param commandString 要运行的命令，注意不要以斜杠开头。
     * @returns 对于返回数据的命令，返回包含命令响应值的 JSON 结构。
     * @throws 此函数可能抛出错误。
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;

    /**
     * @remarks
     * 设置指定动态属性的值。
     * @param identifier 属性标识符。
     * @param value 要设置的属性值。
     * @throws 此函数可能抛出错误。
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;

    /**
     * @remarks
     * 设置实体的主要旋转角度。
     * @param degreesX X 轴旋转角度。
     * @param degreesY Y 轴旋转角度。
     * @throws 此函数可能抛出错误。
     */
    setRotation(degreesX: number, degreesY: number): void;

    /**
     * @remarks
     * 设置实体的移动速度向量。
     * @param velocity 速度的 X/Y/Z 分量。
     * @throws 此函数可能抛出错误。
     */
    setVelocity(velocity: Vector3): void;

    /**
     * @remarks
     * 将选定实体传送至新位置。
     * @param location 实体的新位置。
     * @param dimension 将选定实体移动到的维度。
     * @param xRotation 传送后实体的 X 轴旋转。
     * @param yRotation 传送后实体的 Y 轴旋转。
     * @param keepVelocity 是否保持速度。
     * @throws 此函数可能抛出错误。
     */
    teleport(
        location: Vector3,
        dimension: Dimension,
        xRotation: number,
        yRotation: number,
        keepVelocity?: boolean,
    ): void;

    /**
     * @remarks
     * 将选定实体传送至新位置，并让实体面向指定位置。
     * @param location 实体的新位置。
     * @param dimension 将选定实体移动到的维度。
     * @param facingLocation 实体将要面向的位置。
     * @param keepVelocity 是否保持速度。
     * @throws 此函数可能抛出错误。
     */
    teleportFacing(location: Vector3, dimension: Dimension, facingLocation: Vector3, keepVelocity?: boolean): void;

    /**
     * @remarks
     * 触发实体类型事件。每个实体在定义中都定义了一些事件用于关键实体行为。
     * @param eventName 要触发的实体类型事件名称。
     * @throws 此函数可能抛出错误。
     */
    triggerEvent(eventName: string): void;

    protected constructor();
}
