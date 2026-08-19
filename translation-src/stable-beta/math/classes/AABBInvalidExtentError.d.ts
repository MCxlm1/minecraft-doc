/**
 * An error that is thrown when using an invalid AABB with AABBUtils operations.
 *
 * @public
 */
export declare class AABBInvalidExtentError extends Error {
    constructor(extent: Vector3);
}
