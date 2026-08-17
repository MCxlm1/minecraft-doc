/**
 * 与方块相关联的组件的基类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 此组件所属的方块实例。
     *
     */
    readonly block: Block;
}