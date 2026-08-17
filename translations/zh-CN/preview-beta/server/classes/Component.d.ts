/**
 * 用于下游 Component 实现的基础类。
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * 返回组件是否有效。如果组件的所有者是有效的，并且组件通过任何额外验证，则认为该组件有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 组件的标识符。
     *
     */
    readonly typeId: string;
}