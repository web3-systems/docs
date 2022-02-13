# Class: FunctionFragment

[JsonFragment](../modules/JsonFragment.md).FunctionFragment

## Hierarchy

- [`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

  ↳ **`FunctionFragment`**

## Table of contents

### Constructors

- [constructor](JsonFragment.FunctionFragment.md#constructor)

### Properties

- [\_isFragment](JsonFragment.FunctionFragment.md#_isfragment)
- [constant](JsonFragment.FunctionFragment.md#constant)
- [gas](JsonFragment.FunctionFragment.md#gas)
- [inputs](JsonFragment.FunctionFragment.md#inputs)
- [name](JsonFragment.FunctionFragment.md#name)
- [outputs](JsonFragment.FunctionFragment.md#outputs)
- [payable](JsonFragment.FunctionFragment.md#payable)
- [stateMutability](JsonFragment.FunctionFragment.md#statemutability)
- [type](JsonFragment.FunctionFragment.md#type)

### Methods

- [format](JsonFragment.FunctionFragment.md#format)
- [from](JsonFragment.FunctionFragment.md#from)
- [fromObject](JsonFragment.FunctionFragment.md#fromobject)
- [fromString](JsonFragment.FunctionFragment.md#fromstring)
- [isConstructorFragment](JsonFragment.FunctionFragment.md#isconstructorfragment)
- [isFragment](JsonFragment.FunctionFragment.md#isfragment)
- [isFunctionFragment](JsonFragment.FunctionFragment.md#isfunctionfragment)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new FunctionFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[constructor](JsonFragment.ConstructorFragment.md#constructor)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### <a id="_isfragment" name="_isfragment"></a> \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[_isFragment](JsonFragment.ConstructorFragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### <a id="constant" name="constant"></a> constant

• **constant**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:70

___

### <a id="gas" name="gas"></a> gas

• `Optional` **gas**: `BigNumber`

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[gas](JsonFragment.ConstructorFragment.md#gas)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:62

___

### <a id="inputs" name="inputs"></a> inputs

• `Readonly` **inputs**: [`ParamType`](JsonFragment.ParamType.md)[]

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[inputs](JsonFragment.ConstructorFragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[name](JsonFragment.ConstructorFragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### <a id="outputs" name="outputs"></a> outputs

• `Optional` **outputs**: [`ParamType`](JsonFragment.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:71

___

### <a id="payable" name="payable"></a> payable

• **payable**: `boolean`

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[payable](JsonFragment.ConstructorFragment.md#payable)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:61

___

### <a id="statemutability" name="statemutability"></a> stateMutability

• **stateMutability**: `string`

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[stateMutability](JsonFragment.ConstructorFragment.md#statemutability)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:60

___

### <a id="type" name="type"></a> type

• `Readonly` **type**: `string`

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[type](JsonFragment.ConstructorFragment.md#type)

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

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[format](JsonFragment.ConstructorFragment.md#format)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:72

___

### <a id="from" name="from"></a> from

▸ `Static` **from**(`value`): [`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`FunctionFragment`](JsonFragment.FunctionFragment.md) |

#### Returns

[`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Overrides

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[from](JsonFragment.ConstructorFragment.md#from)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:73

___

### <a id="fromobject" name="fromobject"></a> fromObject

▸ `Static` **fromObject**(`value`): [`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`FunctionFragment`](JsonFragment.FunctionFragment.md) |

#### Returns

[`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Overrides

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[fromObject](JsonFragment.ConstructorFragment.md#fromobject)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:74

___

### <a id="fromstring" name="fromstring"></a> fromString

▸ `Static` **fromString**(`value`): [`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Overrides

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[fromString](JsonFragment.ConstructorFragment.md#fromstring)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:75

___

### <a id="isconstructorfragment" name="isconstructorfragment"></a> isConstructorFragment

▸ `Static` **isConstructorFragment**(`value`): value is ConstructorFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ConstructorFragment

#### Inherited from

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[isConstructorFragment](JsonFragment.ConstructorFragment.md#isconstructorfragment)

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

[ConstructorFragment](JsonFragment.ConstructorFragment.md).[isFragment](JsonFragment.ConstructorFragment.md#isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49

___

### <a id="isfunctionfragment" name="isfunctionfragment"></a> isFunctionFragment

▸ `Static` **isFunctionFragment**(`value`): value is FunctionFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is FunctionFragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:76
