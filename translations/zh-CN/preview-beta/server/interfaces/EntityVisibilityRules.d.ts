/**
 * 控制路径点何时根据其所追踪实体的状态可见。这些规则允许根据实体状态（如潜行、隐身和死亡）过滤路径点可见性。
 */
export interface EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪实体死亡时是否显示路径点。如果未定义，默认为true。
     *
     */
    showDead?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体隐身时是否显示路径点。如果未定义，默认为true。
     *
     */
    showInvisible?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体潜行时是否显示路径点。如果未定义，默认为true。
     *
     */
    showSneaking?: boolean;
}