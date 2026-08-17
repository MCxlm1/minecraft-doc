When added, this component signifies that this entity is an illager captain.
当添加该组件时，表示该实体是灾厄队长。
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}