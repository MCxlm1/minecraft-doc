/**
 * 下游组件实现的基础类。
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * 返回组件是否有效。如果其所有者有效，并且通过了组件所需的任何额外验证，则认为组件有效。
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