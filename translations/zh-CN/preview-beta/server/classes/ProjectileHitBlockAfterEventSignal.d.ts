```typescript
/**
 * 管理与投射物击中方块时相关回调的类。
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当投射物击中方块时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 回调函数，参数为投射物击中方块后的事件对象。
     * @returns 返回用于取消订阅的回调函数本身。
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当投射物击中方块时会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}
```