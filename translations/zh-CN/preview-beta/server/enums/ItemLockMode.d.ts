/**
 * 描述物品如何在容器内移动。
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
     * 该物品不能从其槽位移动、丢弃或用于合成。
     *
     */
    slot = 'slot',
}