```typescript
/**
 * 用于将相机附加到非玩家实体。
 */
export interface CameraAttachOptions {
    /**
     * @remarks
     * 设置相机要瞄准的非玩家实体。
     *
     */
    entity: Entity;
    /**
     * @remarks
     * 要瞄准的实体位置（例如头部、脚部、眼睛）。
     *
     */
    locator: EntityAttachPoint;
}
```