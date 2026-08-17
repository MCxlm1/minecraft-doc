/**
 * 当添加此组件时，表示实体能够像 Minecraft 中的马一样进行蓄力跳跃。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}