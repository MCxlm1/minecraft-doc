/**
 * Additional configuration options for the
 * {@link mojang-minecraft.Dimension.createExplosion} method.
 */
export class ExplosionOptions {
    /**
     * Whether parts of the explosion also impact underwater.
     */
    "allowUnderwater": boolean;
    /**
     * Whether the explosion will break blocks within the blast
     * radius.
     */
    "breaksBlocks": boolean;
    /**
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     */
    "causesFire": boolean;
    /**
     * Optional source of the explosion.
     */
    "source": Entity;
}
