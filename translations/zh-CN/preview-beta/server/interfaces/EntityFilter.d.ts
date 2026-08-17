/**
 * 包含用于筛选实体的选项。
 */
export interface EntityFilter {
    /**
     * @remarks
     * 排除匹配一个或多个指定族群的实体。
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * 排除游戏模式与指定游戏模式匹配的实体。
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
     * 如果指定，则包含匹配所有指定族群的实体。
     *
     */
    families?: string[];
    /**
     * @remarks
     * 如果指定，则包含游戏模式与指定游戏模式匹配的实体。
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * 如果指定，则仅包含水平旋转角度最多为此值的实体。
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，仅返回最高为此等级的玩家。
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * 如果指定，仅返回垂直旋转角度最多为此值的实体。
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * 如果指定，则仅包含水平旋转角度至少为此值的实体。
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，仅返回最低为此等级的玩家。
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * 如果指定，则仅包含垂直旋转角度至少为此值的实体。
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
     * 获取/设置一组 EntityQueryScoreOptions 对象，用于筛选特定的计分板目标。
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
     * 如果定义，则包含匹配此类型的实体。
     *
     */
    type?: string;
}