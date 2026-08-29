export class EntityTypeIterator implements Iterable<EntityType> {
    [Symbol.iterator](): Iterator<EntityType>;
    next(): IteratorResult<EntityType>;
    protected constructor();
}
