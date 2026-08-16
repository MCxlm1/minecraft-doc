[@minecraft/math](../globals.md) / AABBUtils

# Class: AABBUtils

Utilities operating on AABB objects. All methods are static and do not modify the input objects.

## Properties

### EPSILON

> `static` **EPSILON**: `number`

EPSILON

The internal epsilon value that determines validity and used for block volume tolerance.


## Methods

### createFromCornerPoints()

<span class="mod-badge">static</span>

> **createFromCornerPoints**(`pointA`, `pointB`): `AABB`

createFromCornerPoints

Gets an AABB from points defining it's corners, the order doesn't matter.

#### Parameters

• **pointA**: `Vector3`

The first corner point.

• **pointB**: `Vector3`

The second corner point.

#### Returns

`AABB`

- The resulting AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the resulting AABB is invalid.
    *
    *


***

### dilate()

<span class="mod-badge">static</span>

> **dilate**(`aabb`, `size`): `AABB`

dilate

Creates a dilated AABB given a source AABB and dilation vector.

#### Parameters

• **aabb**: `AABB`

The source AABB.

• **size**: `Vector3`

The dilation vector to add to the AABBs extent.

#### Returns

`AABB`

- The resulting dilated AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *


***

### equals()

<span class="mod-badge">static</span>

> **equals**(`aabb`, `other`): `boolean`

equals

Compares the equality of two AABBs.

#### Parameters

• **aabb**: `AABB`

The first AABB in the comparison.

• **other**: `AABB`

The second AABB in the comparison.

#### Returns

`boolean`

- True if the center and extent of both AABBs are equal.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if either of the input AABBs are invalid.
    *
    *


***

### expand()

<span class="mod-badge">static</span>

> **expand**(`aabb`, `other`): `AABB`

expand

Creates an expanded AABB given two source AABBs.

#### Parameters

• **aabb**: `AABB`

The first source AABB.

• **other**: `AABB`

The second source AABB.

#### Returns

`AABB`

- The resulting expanded AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if either of the input AABBs are invalid.
    *
    *


***

### getBlockVolume()

<span class="mod-badge">static</span>

> **getBlockVolume**(`aabb`): `BlockVolume`

getBlockVolume

Creates the smallest BlockVolume that includes all of a source AABB.

#### Parameters

• **aabb**: `AABB`

The source AABB.

#### Returns

`BlockVolume`

- The BlockVolume containing the source AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *


***

### getIntersection()

<span class="mod-badge">static</span>

> **getIntersection**(`aabb`, `other`): `AABB`

getIntersection

Creates an AABB of the intersecting area of two source AABBs.

#### Parameters

• **aabb**: `AABB`

The first source AABB.

• **other**: `AABB`

The second source AABB.

#### Returns

`AABB`

- The resulting intersecting AABB if they intersect, otherwise returns undefined.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if either of the input AABBs are invalid.
    *
    *


***

### getMax()

<span class="mod-badge">static</span>

> **getMax**(`aabb`): `Vector3`

getMax

Gets the maximum corner of an AABB.

#### Parameters

• **aabb**: `AABB`

The AABB to retrieve the maximum corner of.

#### Returns

`Vector3`

- The maximum corner of the AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *


***

### getMin()

<span class="mod-badge">static</span>

> **getMin**(`aabb`): `Vector3`

getMin

Gets the minimum corner of an AABB.

#### Parameters

• **aabb**: `AABB`

The AABB to retrieve the minimum corner of.

#### Returns

`Vector3`

- The minimum corner of the AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *


***

### getSpan()

<span class="mod-badge">static</span>

> **getSpan**(`aabb`): `Vector3`

getSpan

Gets the span of an AABB.

#### Parameters

• **aabb**: `AABB`

The AABB to retrieve the span of.

#### Returns

`Vector3`

- The span of the AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *


***

### intersects()

<span class="mod-badge">static</span>

> **intersects**(`aabb`, `other`): `boolean`

intersects

Calculates if two AABBs are intersecting.

#### Parameters

• **aabb**: `AABB`

The first AABB.

• **other**: `AABB`

The second AABB.

#### Returns

`boolean`

- True if the AABBs are intersecting, otherwise false.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if either of the input AABBs are invalid.
    *
    *


***

### isInside()

<span class="mod-badge">static</span>

> **isInside**(`aabb`, `pos`): `boolean`

isInside

Calculates if a position is inside of an AABB.

#### Parameters

• **aabb**: `AABB`

The AABB to test against.

• **pos**: `Vector3`

The position to test.

#### Returns

`boolean`

True if the position is inside of the AABB, otherwise returns false.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *


***

### isValid()

<span class="mod-badge">static</span>

> **isValid**(`aabb`): `boolean`

isValid

Determines if the AABB has non-zero extent on all axes.

#### Parameters

• **aabb**: `AABB`

The AABB to test for validity.

#### Returns

`boolean`

- True if all extent axes are non-zero, otherwise false.


***

### throwErrorIfInvalid()

<span class="mod-badge">static</span>

> **throwErrorIfInvalid**(`aabb`): `void`

throwErrorIfInvalid

Throws an error if the AABB is invalid.

#### Parameters

• **aabb**: `AABB`

The AABB to test for validity.

#### Returns

`void`

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.


***

### translate()

<span class="mod-badge">static</span>

> **translate**(`aabb`, `delta`): `AABB`

translate

Creates a translated AABB given a source AABB and translation vector.

#### Parameters

• **aabb**: `AABB`

The source AABB.

• **delta**: `Vector3`

The translation vector to add to the AABBs center.

#### Returns

`AABB`

- The resulting translated AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *

