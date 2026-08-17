```typescript
/**
 * 在使用 /reload 命令后尝试注册之前未注册的物品自定义组件时抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}
```