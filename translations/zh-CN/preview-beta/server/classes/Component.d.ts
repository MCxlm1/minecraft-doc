/**
 * 下游 Component 实现的基类。
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * 返回该组件是否有效。如果其所有者有效，并且满足该组件所需的任何额外验证，
     * 则该组件被视为有效。
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