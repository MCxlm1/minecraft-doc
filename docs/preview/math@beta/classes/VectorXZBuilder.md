[@minecraft/math](../globals.md) / VectorXZBuilder

# Class: VectorXZBuilder

VectorXZ wrapper class which can be used as a VectorXZ for APIs on @minecraft/server which require a VectorXZ.

## Implements

- `VectorXZ`

## Constructors

### new VectorXZBuilder()

> **new VectorXZBuilder**(`vecStr`, `delim`?): [`VectorXZBuilder`](VectorXZBuilder.md)

#### Parameters

• **vecStr**: `string`

• **delim?**: `string`

#### Returns

[`VectorXZBuilder`](VectorXZBuilder.md)


### new VectorXZBuilder()

> **new VectorXZBuilder**(`vec`, `arg`?): [`VectorXZBuilder`](VectorXZBuilder.md)

#### Parameters

• **vec**: `VectorXZ`

• **arg?**: `never`

#### Returns

[`VectorXZBuilder`](VectorXZBuilder.md)


### new VectorXZBuilder()

> **new VectorXZBuilder**(`x`, `y`): [`VectorXZBuilder`](VectorXZBuilder.md)

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

[`VectorXZBuilder`](VectorXZBuilder.md)


## Properties

### x

> **x**: `number`

#### Implementation of

`VectorXZ.x`


***

### z

> **z**: `number`

#### Implementation of

`VectorXZ.z`


## Methods

### add()

> **add**(`v`): `this`

add

Adds the vector v to this, returning itself.

#### Parameters

• **v**: `Partial`\<`VectorXZ`\>

#### Returns

`this`


***

### assign()

> **assign**(`vec`): `this`

Assigns the values of the passed in vector to this vector. Returns itself.

#### Parameters

• **vec**: `VectorXZ`

#### Returns

`this`


***

### clamp()

> **clamp**(`limits`): `this`

clamp

Clamps the components of a vector to limits to produce a new vector

#### Parameters

• **limits**

• **limits.max?**: `Partial`\<`VectorXZ`\>

• **limits.min?**: `Partial`\<`VectorXZ`\>

#### Returns

`this`


***

### distance()

> **distance**(`vec`): `number`

distance

Calculate the distance between two vectors

#### Parameters

• **vec**: `VectorXZ`

#### Returns

`number`


***

### dot()

> **dot**(`vec`): `number`

dot

Computes the dot product of this and the passed in vector.

#### Parameters

• **vec**: `VectorXZ`

#### Returns

`number`


***

### equals()

> **equals**(`v`): `boolean`

equals

Check the equality of two vectors

#### Parameters

• **v**: `VectorXZ`

#### Returns

`boolean`


***

### floor()

> **floor**(): `this`

floor

Floor the components of a vector to produce a new vector

#### Returns

`this`


***

### lerp()

> **lerp**(`vec`, `t`): `this`

lerp

Constructs a new vector using linear interpolation on each component from two vectors.

#### Parameters

• **vec**: `VectorXZ`

• **t**: `number`

#### Returns

`this`


***

### magnitude()

> **magnitude**(): `number`

magnitude

The magnitude of the vector

#### Returns

`number`


***

### multiply()

> **multiply**(`vec`): `this`

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [VectorXZBuilder.dot](VectorXZBuilder.md#dot) product

#### Parameters

• **vec**: `VectorXZ`

#### Returns

`this`


***

### normalize()

> **normalize**(): `this`

normalize

Normalizes this vector, returning itself.

#### Returns

`this`


***

### scale()

> **scale**(`val`): `this`

scale

Scales this by the passed in value, returning itself.

#### Parameters

• **val**: `number`

#### Returns

`this`


***

### slerp()

> **slerp**(`vec`, `t`): `this`

slerp

Constructs a new vector using spherical linear interpolation on each component from two vectors.

#### Parameters

• **vec**: `VectorXZ`

• **t**: `number`

#### Returns

`this`


***

### subtract()

> **subtract**(`v`): `this`

subtract

Subtracts the vector v from this, returning itself.

#### Parameters

• **v**: `Partial`\<`VectorXZ`\>

#### Returns

`this`


***

### toString()

> **toString**(`options`?): `string`

Returns a string representation of an object.

#### Parameters

• **options?**

• **options.decimals?**: `number`

• **options.delimiter?**: `string`

#### Returns

`string`

