/**
 * 用于过滤实体的选项。
 */
export interface EntityFilter {
    /**
     * @remarks
     * 排除匹配一个或多个指定族的实体。
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * 排除具有与指定游戏模式匹配的特定游戏模式的实体。
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * 排除名称与指定值之一匹配的实体。
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * 排除带有与指定值之一匹配的标签的实体。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 排除属于指定类型之一的实体。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 若指定，则包含与所有指定族匹配的实体。
     *
     */
    families?: string[];
    /**
     * @remarks
     * 若指定，则包含游戏模式与指定游戏模式匹配的实体。
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * 若指定，则仅包含水平旋转角度不超过此值的实体。
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * 若已定义，则仅返回等级不超过此值的玩家。
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * 若指定，则仅返回垂直旋转角度不超过此值的实体。
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * 若指定，则仅包含水平旋转角度至少为此值的实体。
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * 若已定义，则仅返回等级不低于此值的玩家。
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * 若指定，则仅返回垂直旋转角度至少为此值的实体。
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * 包含具有指定名称的实体。
     *
     */
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * 获取/设置一个 EntityQueryScoreOptions 对象集合，用于过滤特定的计分板目标。
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * 包含匹配所有指定标签的实体。
     *
     */
    tags?: string[];
    /**
     * @remarks
     * 若已定义，则包含与此类型匹配的实体。
     *
     */
    type?: string;
}