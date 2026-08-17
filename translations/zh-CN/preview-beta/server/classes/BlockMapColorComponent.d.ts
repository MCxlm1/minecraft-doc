```typescript
/**
 * 表示方块在地图上显示时的颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 该方块定义的基础地图颜色。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly color: RGBA;
    /**
     * @remarks
     * 返回基础颜色乘以指定位置评估的着色（tint）后的结果。
     *
     */
    readonly tintedColor: RGBA;
    /**
     * @remarks
     * 应用于颜色的着色类型。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly tintMethod: TintMethod;
    static readonly componentId = 'minecraft:map_color';
}
```