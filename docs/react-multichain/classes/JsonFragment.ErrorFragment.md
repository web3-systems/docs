# Class: ErrorFragment

[JsonFragment](../modules/JsonFragment.md).ErrorFragment

## Hierarchy

- [`Fragment`](JsonFragment.Fragment.md)

  ↳ **`ErrorFragment`**

## Table of contents

### Constructors

- [constructor](JsonFragment.ErrorFragment.md#constructor)

### Properties

- [\_isFragment](JsonFragment.ErrorFragment.md#_isfragment)
- [inputs](JsonFragment.ErrorFragment.md#inputs)
- [name](JsonFragment.ErrorFragment.md#name)
- [type](JsonFragment.ErrorFragment.md#type)

### Methods

- [format](JsonFragment.ErrorFragment.md#format)
- [from](JsonFragment.ErrorFragment.md#from)
- [fromObject](JsonFragment.ErrorFragment.md#fromobject)
- [fromString](JsonFragment.ErrorFragment.md#fromstring)
- [isErrorFragment](JsonFragment.ErrorFragment.md#iserrorfragment)
- [isFragment](JsonFragment.ErrorFragment.md#isfragment)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ErrorFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[constructor](JsonFragment.Fragment.md#constructor)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### <a id="_isfragment" name="_isfragment"></a> \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[_isFragment](JsonFragment.Fragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### <a id="inputs" name="inputs"></a> inputs

• `Readonly` **inputs**: [`ParamType`](JsonFragment.ParamType.md)[]

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[inputs](JsonFragment.Fragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[name](JsonFragment.Fragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### <a id="type" name="type"></a> type

• `Readonly` **type**: `string`

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[type](JsonFragment.Fragment.md#type)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### <a id="format" name="format"></a> format

▸ **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Overrides

[Fragment](JsonFragment.Fragment.md).[format](JsonFragment.Fragment.md#format)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:79

___

### <a id="from" name="from"></a> from

▸ `Static` **from**(`value`): [`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`ErrorFragment`](JsonFragment.ErrorFragment.md) |

#### Returns

[`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[from](JsonFragment.Fragment.md#from)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:80

___

### <a id="fromobject" name="fromobject"></a> fromObject

▸ `Static` **fromObject**(`value`): [`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`ErrorFragment`](JsonFragment.ErrorFragment.md) |

#### Returns

[`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[fromObject](JsonFragment.Fragment.md#fromobject)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:81

___

### <a id="fromstring" name="fromstring"></a> fromString

▸ `Static` **fromString**(`value`): [`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[fromString](JsonFragment.Fragment.md#fromstring)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:82

___

### <a id="iserrorfragment" name="iserrorfragment"></a> isErrorFragment

▸ `Static` **isErrorFragment**(`value`): value is ErrorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ErrorFragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:83

___

### <a id="isfragment" name="isfragment"></a> isFragment

▸ `Static` **isFragment**(`value`): value is Fragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Fragment

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[isFragment](JsonFragment.Fragment.md#isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49
