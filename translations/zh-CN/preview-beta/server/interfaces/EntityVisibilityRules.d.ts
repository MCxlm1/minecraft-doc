/**
 * 控制追踪实体的状态如何影响航点可见性。这些规则允许根据实体条件（如潜行、隐身和死亡状态）过滤航点可见性。
 */
export interface EntityVisibilityRules {
    /**
     * @remarks
     * 控制追踪实体死亡时是否显示航点。如果未定义，默认为 true。
     *
     */
    showDead?: boolean;
    /**
     * @remarks
     * 控制追踪实体隐身时是否显示航点。如果未定义，默认为 true。
     *
     */
    showInvisible?: boolean;
    /**
     * @remarks
     * 控制追踪实体潜行时是否显示航点。如果未定义，默认为 true。
     *
     */
    showSneaking?: boolean;
}