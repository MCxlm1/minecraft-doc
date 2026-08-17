/**
 * 控制基于其跟踪实体的状态，航点何时可见。这些规则允许根据实体的条件（如潜行、隐身和死亡状态）过滤航点可见性。
 */
export interface EntityVisibilityRules {
    /**
     * @remarks
     * 控制当跟踪实体死亡时是否显示航点。如果未定义，默认为 true。
     *
     */
    showDead?: boolean;
    /**
     * @remarks
     * 控制当跟踪实体隐身时是否显示航点。如果未定义，默认为 true。
     *
     */
    showInvisible?: boolean;
    /**
     * @remarks
     * 控制当跟踪实体潜行时是否显示航点。如果未定义，默认为 true。
     *
     */
    showSneaking?: boolean;
}