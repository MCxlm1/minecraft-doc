/**
 * 包含用于过滤实体的选项。
 */
export interface EntityFilter {
    /**
     * @remarks
     * 排除匹配一个或多个指定家族（families）的实体。
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
     * 如果实体属于指定的类型之一，则排除它们。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 如果指定，则包括匹配所有指定家族的实体。
     *
     */
    families?: string[];
    /**
     * @remarks
     * 如果指定，则包括具有与指定游戏模式匹配的游戏模式的实体。
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * 如果指定，则仅包括水平旋转最多为此值的实体。
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，则仅返回等级最多为此值的玩家。
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * 如果指定，则仅返回垂直旋转最多为此值的实体。
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * 如果指定，则仅包括水平旋转至少为此值的实体。
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * 如果定义，则仅返回等级至少为此值的玩家。
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * 如果指定，则仅包括垂直旋转至少为此值的实体。
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * 包括具有指定名称的实体。
     *
     */
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * 获取/设置一个 EntityQueryScoreOptions 对象的集合，其中包含针对特定计分板目标的过滤器。
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * 包括匹配所有指定标签的实体。
     *
     */
    tags?: string[];
    /**
     * @remarks
     * 如果定义，则包括匹配此类型的实体。
     *
     */
    type?: string;
}