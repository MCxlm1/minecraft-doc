/**
 * 实体的附着位置点。包含头部、身体、腿部等点，用于将相机附着到实体上。
 */
export enum EntityAttachPoint {
    Body = 'Body',
    BreathingPoint = 'BreathingPoint',
    DropAttachPoint = 'DropAttachPoint',
    ExplosionPoint = 'ExplosionPoint',
    Eyes = 'Eyes',
    Feet = 'Feet',
    Head = 'Head',
    Mouth = 'Mouth',
    WeaponAttachPoint = 'WeaponAttachPoint',
}