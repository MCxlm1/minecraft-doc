/**
 * 控制航点何时显示，基于其追踪实体的状态。
 * 这些规则允许根据实体条件（如潜行、隐形和死亡状态）过滤航点的可见性。
 */
export interface EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪实体死亡时是否显示航点。
     * 如果未定义，默认为 true。
     *
     */
    showDead?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体隐形时是否显示航点。
     * 如果未定义，默认为 true。
     *
     */
    showInvisible?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体潜行时是否显示航点。
     * 如果未定义，默认为 true。
     *
     */
    showSneaking?: boolean;
}