/**
 * 当添加此移动控制时，生物可以飞行、游泳、
 * 攀爬等。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.generic';
}