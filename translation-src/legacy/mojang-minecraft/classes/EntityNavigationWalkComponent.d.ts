/**
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 */
export class EntityNavigationWalkComponent extends IEntityComponent {
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly "avoidDamageBlocks": boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly "avoidPortals": boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly "avoidSun": boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly "avoidWater": boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly "canBreach": boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly "canBreakDoors": boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly "canFloat": boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly "canJump": boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly "canOpenDoors": boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly "canOpenIronDoors": boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly "canPassDoors": boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly "canPathFromAir": boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly "canPathOverLava": boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly "canPathOverWater": boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly "canSink": boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly "canSwim": boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly "canWalk": boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly "canWalkInLava": boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly "isAmphibious": boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.swim.
     */
    static readonly "id" = "minecraft:navigation.walk";
    protected constructor();
}
