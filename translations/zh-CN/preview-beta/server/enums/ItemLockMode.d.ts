```ts
/**
 * 描述物品在容器中的移动方式。
 */
export enum ItemLockMode {
    /**
     * @remarks
     * 该物品不能被丢弃或用于合成。
     *
     */
    inventory = 'inventory',
    /**
     * @remarks
     * 该物品没有容器限制。
     *
     */
    none = 'none',
    /**
     * @remarks
     * 该物品不能从所在槽位移出、丢弃或用于合成。
     *
     */
    slot = 'slot',
}
```