/**
 * 下游组件实现的基础类。
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * 返回该组件是否有效。如果其所有者有效，并且满足组件所需的所有附加验证条件，则该组件被视为有效。
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