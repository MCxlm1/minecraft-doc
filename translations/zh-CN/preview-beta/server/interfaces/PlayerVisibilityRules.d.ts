```typescript
/**
 * 控制何时基于玩家特定状态显示路标点。
 * 扩展 {@link EntityVisibilityRules}，添加仅适用于玩家的额外规则，
 * 例如隐藏模式和旁观模式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被跟踪的玩家隐藏时是否显示路标点。
     * 如果未定义，默认为 true。
     *
     */
    showHidden?: boolean;
    /**
     * @remarks
     * 控制当被跟踪的玩家处于旁观模式时是否显示路标点。
     * 如果未定义，默认为 true。
     *
     */
    showSpectator?: boolean;
    /**
     * @remarks
     * 控制当旁观者正在观看另一名旁观者玩家时是否显示路标点。
     * 如果未定义，默认为 true。
     *
     */
    showSpectatorToSpectator?: boolean;
}
```