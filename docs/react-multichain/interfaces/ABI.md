# Interface: ABI

> The JSON format for a contract’s interface is given by an array of function,
> event and error descriptions.

**`see`** https://docs.soliditylang.org/en/develop/abi-spec.html#json

**`internal`**

## Hierarchy

- `Array`<[`JsonFragment`](JsonFragment.JsonFragment-1.md)\>

  ↳ **`ABI`**

## Table of contents

### Properties

- [length](ABI.md#length)

### Methods

- [[iterator]](ABI.md#[iterator])
- [[unscopables]](ABI.md#[unscopables])
- [at](ABI.md#at)
- [concat](ABI.md#concat)
- [copyWithin](ABI.md#copywithin)
- [entries](ABI.md#entries)
- [every](ABI.md#every)
- [fill](ABI.md#fill)
- [filter](ABI.md#filter)
- [find](ABI.md#find)
- [findIndex](ABI.md#findindex)
- [flat](ABI.md#flat)
- [flatMap](ABI.md#flatmap)
- [forEach](ABI.md#foreach)
- [includes](ABI.md#includes)
- [indexOf](ABI.md#indexof)
- [join](ABI.md#join)
- [keys](ABI.md#keys)
- [lastIndexOf](ABI.md#lastindexof)
- [map](ABI.md#map)
- [pop](ABI.md#pop)
- [push](ABI.md#push)
- [reduce](ABI.md#reduce)
- [reduceRight](ABI.md#reduceright)
- [reverse](ABI.md#reverse)
- [shift](ABI.md#shift)
- [slice](ABI.md#slice)
- [some](ABI.md#some)
- [sort](ABI.md#sort)
- [splice](ABI.md#splice)
- [toLocaleString](ABI.md#tolocalestring)
- [toString](ABI.md#tostring)
- [unshift](ABI.md#unshift)
- [values](ABI.md#values)

## Properties

### <a id="length" name="length"></a> length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1273

## Methods

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): `IterableIterator`<[`JsonFragment`](JsonFragment.JsonFragment-1.md)\>

Iterator

#### Returns

`IterableIterator`<[`JsonFragment`](JsonFragment.JsonFragment-1.md)\>

#### Inherited from

Array.\_\_@iterator@88

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### <a id="[unscopables]" name="[unscopables]"></a> [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.\_\_@unscopables@90

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### <a id="at" name="at"></a> at

▸ **at**(`index`): `undefined` \| [`JsonFragment`](JsonFragment.JsonFragment-1.md)

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Inherited from

Array.at

#### Defined in

node_modules/@types/node/globals.d.ts:86

___

### <a id="concat" name="concat"></a> concat

▸ **concat**(...`items`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<[`JsonFragment`](JsonFragment.JsonFragment-1.md)\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1297

▸ **concat**(...`items`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | ([`JsonFragment`](JsonFragment.JsonFragment-1.md) \| `ConcatArray`<[`JsonFragment`](JsonFragment.JsonFragment-1.md)\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1303

___

### <a id="copywithin" name="copywithin"></a> copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`ABI`](ABI.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`ABI`](ABI.md)

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### <a id="entries" name="entries"></a> entries

▸ **entries**(): `IterableIterator`<[`number`, [`JsonFragment`](JsonFragment.JsonFragment-1.md)]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, [`JsonFragment`](JsonFragment.JsonFragment-1.md)]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### <a id="every" name="every"></a> every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JsonFragment`](JsonFragment.JsonFragment-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1380

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1389

___

### <a id="fill" name="fill"></a> fill

▸ **fill**(`value`, `start?`, `end?`): [`ABI`](ABI.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`JsonFragment`](JsonFragment.JsonFragment-1.md) | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`ABI`](ABI.md)

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### <a id="filter" name="filter"></a> filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JsonFragment`](JsonFragment.JsonFragment-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1416

▸ **filter**(`predicate`, `thisArg?`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1422

___

### <a id="find" name="find"></a> find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JsonFragment`](JsonFragment.JsonFragment-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `obj`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| [`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `obj`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| [`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### <a id="findindex" name="findindex"></a> findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `obj`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### <a id="flat" name="flat"></a> flat

▸ **flat**<`A`, `D`\>(`depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### <a id="flatmap" name="flatmap"></a> flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### <a id="foreach" name="foreach"></a> forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1404

___

### <a id="includes" name="includes"></a> includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`JsonFragment`](JsonFragment.JsonFragment-1.md) | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### <a id="indexof" name="indexof"></a> indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`JsonFragment`](JsonFragment.JsonFragment-1.md) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1365

___

### <a id="join" name="join"></a> join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1308

___

### <a id="keys" name="keys"></a> keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### <a id="lastindexof" name="lastindexof"></a> lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`JsonFragment`](JsonFragment.JsonFragment-1.md) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1371

___

### <a id="map" name="map"></a> map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1410

___

### <a id="pop" name="pop"></a> pop

▸ **pop**(): `undefined` \| [`JsonFragment`](JsonFragment.JsonFragment-1.md)

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1286

___

### <a id="push" name="push"></a> push

▸ **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`JsonFragment`](JsonFragment.JsonFragment-1.md)[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1291

___

### <a id="reduce" name="reduce"></a> reduce

▸ **reduce**(`callbackfn`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentIndex`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => [`JsonFragment`](JsonFragment.JsonFragment-1.md) | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1428

▸ **reduce**(`callbackfn`, `initialValue`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentIndex`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => [`JsonFragment`](JsonFragment.JsonFragment-1.md) |
| `initialValue` | [`JsonFragment`](JsonFragment.JsonFragment-1.md) |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1429

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentIndex`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

___

### <a id="reduceright" name="reduceright"></a> reduceRight

▸ **reduceRight**(`callbackfn`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentIndex`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => [`JsonFragment`](JsonFragment.JsonFragment-1.md) | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

▸ **reduceRight**(`callbackfn`, `initialValue`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentIndex`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => [`JsonFragment`](JsonFragment.JsonFragment-1.md) |
| `initialValue` | [`JsonFragment`](JsonFragment.JsonFragment-1.md) |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1442

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `currentIndex`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1448

___

### <a id="reverse" name="reverse"></a> reverse

▸ **reverse**(): [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1313

___

### <a id="shift" name="shift"></a> shift

▸ **shift**(): `undefined` \| [`JsonFragment`](JsonFragment.JsonFragment-1.md)

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`JsonFragment`](JsonFragment.JsonFragment-1.md)

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1318

___

### <a id="slice" name="slice"></a> slice

▸ **slice**(`start?`, `end?`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1328

___

### <a id="some" name="some"></a> some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `index`: `number`, `array`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1398

___

### <a id="sort" name="sort"></a> sort

▸ **sort**(`compareFn?`): [`ABI`](ABI.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`JsonFragment`](JsonFragment.JsonFragment-1.md), `b`: [`JsonFragment`](JsonFragment.JsonFragment-1.md)) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`ABI`](ABI.md)

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1339

___

### <a id="splice" name="splice"></a> splice

▸ **splice**(`start`, `deleteCount?`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1346

▸ **splice**(`start`, `deleteCount`, ...`items`): [`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | [`JsonFragment`](JsonFragment.JsonFragment-1.md)[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

[`JsonFragment`](JsonFragment.JsonFragment-1.md)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1354

___

### <a id="tolocalestring" name="tolocalestring"></a> toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1281

___

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1277

___

### <a id="unshift" name="unshift"></a> unshift

▸ **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`JsonFragment`](JsonFragment.JsonFragment-1.md)[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1359

___

### <a id="values" name="values"></a> values

▸ **values**(): `IterableIterator`<[`JsonFragment`](JsonFragment.JsonFragment-1.md)\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<[`JsonFragment`](JsonFragment.JsonFragment-1.md)\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75
