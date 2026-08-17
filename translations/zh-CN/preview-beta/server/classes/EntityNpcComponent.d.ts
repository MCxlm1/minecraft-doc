/**
 * @beta
 * 向实体添加NPC功能，如自定义皮肤、
 * 名称和对话交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当玩家首次与NPC交互时打开的对话场景。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultScene: string;
    /**
     * @remarks
     * NPC向玩家显示的名称。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    name: string;
    /**
     * @remarks
     * NPC将使用的皮肤索引。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    skinIndex: number;
    static readonly componentId = 'minecraft:npc';
}