# Class: ConstructorFragment

[JsonFragment](../modules/JsonFragment.md).ConstructorFragment

## Hierarchy

- [`Fragment`](JsonFragment.Fragment.md)

  ↳ **`ConstructorFragment`**

  ↳↳ [`FunctionFragment`](JsonFragment.FunctionFragment.md)

## Table of contents

### Constructors

- [constructor](JsonFragment.ConstructorFragment.md#constructor)

### Properties

- [\_isFragment](JsonFragment.ConstructorFragment.md#_isfragment)
- [gas](JsonFragment.ConstructorFragment.md#gas)
- [inputs](JsonFragment.ConstructorFragment.md#inputs)
- [name](JsonFragment.ConstructorFragment.md#name)
- [payable](JsonFragment.ConstructorFragment.md#payable)
- [stateMutability](JsonFragment.ConstructorFragment.md#statemutability)
- [type](JsonFragment.ConstructorFragment.md#type)

### Methods

- [format](JsonFragment.ConstructorFragment.md#format)
- [from](JsonFragment.ConstructorFragment.md#from)
- [fromObject](JsonFragment.ConstructorFragment.md#fromobject)
- [fromString](JsonFragment.ConstructorFragment.md#fromstring)
- [isConstructorFragment](JsonFragment.ConstructorFragment.md#isconstructorfragment)
- [isFragment](JsonFragment.ConstructorFragment.md#isfragment)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ConstructorFragment**(`constructorGuard`, `params`)

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

### <a id="gas" name="gas"></a> gas

• `Optional` **gas**: `BigNumber`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:62

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

### <a id="payable" name="payable"></a> payable

• **payable**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:61

___

### <a id="statemutability" name="statemutability"></a> stateMutability

• **stateMutability**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:60

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

node_modules/@ethersproject/abi/lib/fragments.d.ts:63

___

### <a id="from" name="from"></a> from

▸ `Static` **from**(`value`): [`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`ConstructorFragment`](JsonFragment.ConstructorFragment.md) |

#### Returns

[`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[from](JsonFragment.Fragment.md#from)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:64

___

### <a id="fromobject" name="fromobject"></a> fromObject

▸ `Static` **fromObject**(`value`): [`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`ConstructorFragment`](JsonFragment.ConstructorFragment.md) |

#### Returns

[`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[fromObject](JsonFragment.Fragment.md#fromobject)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:65

___

### <a id="fromstring" name="fromstring"></a> fromString

▸ `Static` **fromString**(`value`): [`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[fromString](JsonFragment.Fragment.md#fromstring)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:66

___

### <a id="isconstructorfragment" name="isconstructorfragment"></a> isConstructorFragment

▸ `Static` **isConstructorFragment**(`value`): value is ConstructorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ConstructorFragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:67

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
