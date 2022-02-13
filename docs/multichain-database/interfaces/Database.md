# Interface: Database

## Hierarchy

- `Loki`

  ↳ **`Database`**

## Table of contents

### Properties

- [ENV](Database.md#env)
- [addListener](Database.md#addlistener)
- [asyncListeners](Database.md#asynclisteners)
- [autosave](Database.md#autosave)
- [autosaveHandle](Database.md#autosavehandle)
- [autosaveInterval](Database.md#autosaveinterval)
- [collections](Database.md#collections)
- [databaseVersion](Database.md#databaseversion)
- [engineVersion](Database.md#engineversion)
- [events](Database.md#events)
- [filename](Database.md#filename)
- [name](Database.md#name)
- [options](Database.md#options)
- [persistenceAdapter](Database.md#persistenceadapter)
- [persistenceMethod](Database.md#persistencemethod)
- [save](Database.md#save)
- [throttledCallbacks](Database.md#throttledcallbacks)
- [throttledSavePending](Database.md#throttledsavepending)
- [throttledSaves](Database.md#throttledsaves)
- [toJson](Database.md#tojson)
- [verbose](Database.md#verbose)

### Methods

- [addCollection](Database.md#addcollection)
- [autosaveClearFlags](Database.md#autosaveclearflags)
- [autosaveDirty](Database.md#autosavedirty)
- [autosaveDisable](Database.md#autosavedisable)
- [autosaveEnable](Database.md#autosaveenable)
- [clearChanges](Database.md#clearchanges)
- [close](Database.md#close)
- [configureOptions](Database.md#configureoptions)
- [copy](Database.md#copy)
- [deleteDatabase](Database.md#deletedatabase)
- [deserializeCollection](Database.md#deserializecollection)
- [deserializeDestructured](Database.md#deserializedestructured)
- [emit](Database.md#emit)
- [generateChangesNotification](Database.md#generatechangesnotification)
- [getCollection](Database.md#getcollection)
- [getIndexedAdapter](Database.md#getindexedadapter)
- [getName](Database.md#getname)
- [listCollections](Database.md#listcollections)
- [loadCollection](Database.md#loadcollection)
- [loadDatabase](Database.md#loaddatabase)
- [loadDatabaseInternal](Database.md#loaddatabaseinternal)
- [loadJSON](Database.md#loadjson)
- [loadJSONObject](Database.md#loadjsonobject)
- [on](Database.md#on)
- [removeCollection](Database.md#removecollection)
- [removeListener](Database.md#removelistener)
- [renameCollection](Database.md#renamecollection)
- [saveDatabase](Database.md#savedatabase)
- [saveDatabaseInternal](Database.md#savedatabaseinternal)
- [serialize](Database.md#serialize)
- [serializeChanges](Database.md#serializechanges)
- [serializeCollection](Database.md#serializecollection)
- [serializeDestructured](Database.md#serializedestructured)
- [serializeReplacer](Database.md#serializereplacer)
- [throttledSaveDrain](Database.md#throttledsavedrain)

## Properties

### <a id="env" name="env"></a> ENV

• **ENV**: ``"NATIVESCRIPT"`` \| ``"NODEJS"`` \| ``"CORDOVA"`` \| ``"BROWSER"`` \| ``"NA"``

#### Inherited from

Loki.ENV

#### Defined in

node_modules/@types/lokijs/index.d.ts:216

___

### <a id="addlistener" name="addlistener"></a> addListener

• **addListener**: <F\>(`eventName`: `string` \| `string`[], `listener`: `F`) => `F`

#### Type declaration

▸ <`F`\>(`eventName`, `listener`): `F`

on(eventName, listener) - adds a listener to the queue of callbacks associated to an event

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`args`: `any`[]) => `any` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `string`[] | the name(s) of the event(s) to listen to |
| `listener` | `F` | callback function of listener to attach |

##### Returns

`F`

the index of the callback in the array of listeners for a particular event

#### Inherited from

Loki.addListener

#### Defined in

node_modules/@types/lokijs/index.d.ts:139

___

### <a id="asynclisteners" name="asynclisteners"></a> asyncListeners

• **asyncListeners**: `boolean`

**`prop`** asyncListeners - boolean determines whether or not the callbacks associated with each event
should happen in an async fashion or not
Default is false, which means events are synchronous

#### Inherited from

Loki.asyncListeners

#### Defined in

node_modules/@types/lokijs/index.d.ts:113

___

### <a id="autosave" name="autosave"></a> autosave

• **autosave**: `boolean`

#### Inherited from

Loki.autosave

#### Defined in

node_modules/@types/lokijs/index.d.ts:207

___

### <a id="autosavehandle" name="autosavehandle"></a> autosaveHandle

• **autosaveHandle**: ``null`` \| `number`

#### Inherited from

Loki.autosaveHandle

#### Defined in

node_modules/@types/lokijs/index.d.ts:209

___

### <a id="autosaveinterval" name="autosaveinterval"></a> autosaveInterval

• **autosaveInterval**: `number`

#### Inherited from

Loki.autosaveInterval

#### Defined in

node_modules/@types/lokijs/index.d.ts:208

___

### <a id="collections" name="collections"></a> collections

• **collections**: `Collection`<`any`\>[]

#### Inherited from

Loki.collections

#### Defined in

node_modules/@types/lokijs/index.d.ts:201

___

### <a id="databaseversion" name="databaseversion"></a> databaseVersion

• **databaseVersion**: `number`

#### Inherited from

Loki.databaseVersion

#### Defined in

node_modules/@types/lokijs/index.d.ts:205

___

### <a id="engineversion" name="engineversion"></a> engineVersion

• **engineVersion**: `number`

#### Inherited from

Loki.engineVersion

#### Defined in

node_modules/@types/lokijs/index.d.ts:206

___

### <a id="events" name="events"></a> events

• **events**: `Object`

**`prop`** events - a hashmap, with each property being an array of callbacks

#### Index signature

▪ [eventName: `string`]: (...`args`: `any`[]) => `any`[]

#### Inherited from

Loki.events

#### Defined in

node_modules/@types/lokijs/index.d.ts:106

___

### <a id="filename" name="filename"></a> filename

• **filename**: `string`

#### Inherited from

Loki.filename

#### Defined in

node_modules/@types/lokijs/index.d.ts:203

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

#### Inherited from

Loki.name

#### Defined in

node_modules/@types/lokijs/index.d.ts:204

___

### <a id="options" name="options"></a> options

• **options**: `Partial`<`LokiConstructorOptions`\> & `LokiConfigOptions` & `Partial`<`ThrottledSaveDrainOptions`\>

#### Inherited from

Loki.options

#### Defined in

node_modules/@types/lokijs/index.d.ts:202

___

### <a id="persistenceadapter" name="persistenceadapter"></a> persistenceAdapter

• **persistenceAdapter**: `undefined` \| ``null`` \| `LokiPersistenceAdapter`

#### Inherited from

Loki.persistenceAdapter

#### Defined in

node_modules/@types/lokijs/index.d.ts:210

___

### <a id="persistencemethod" name="persistencemethod"></a> persistenceMethod

• **persistenceMethod**: `undefined` \| ``null`` \| ``"fs"`` \| ``"localStorage"`` \| ``"memory"`` \| ``"adapter"``

#### Inherited from

Loki.persistenceMethod

#### Defined in

node_modules/@types/lokijs/index.d.ts:211

___

### <a id="save" name="save"></a> save

• **save**: (`callback?`: (`err?`: `any`) => `void`) => `void`

#### Type declaration

▸ (`callback?`): `void`

Handles manually saving to file system, local storage, or adapter (such as indexeddb)
   This method utilizes loki configuration options (if provided) to determine which
   persistence method to use, or environment detection (if configuration was not provided).

If you are configured with autosave, you do not need to call this method yourself.

**`example`**
db.saveDatabase(function(err) {
  if (err) {
    console.log("error : " + err);
  }
  else {
    console.log("database saved.");
  }
});

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`err?`: `any`) => `void` |

##### Returns

`void`

#### Inherited from

Loki.save

#### Defined in

node_modules/@types/lokijs/index.d.ts:512

___

### <a id="throttledcallbacks" name="throttledcallbacks"></a> throttledCallbacks

• **throttledCallbacks**: (`err?`: `any`) => `void`[]

#### Inherited from

Loki.throttledCallbacks

#### Defined in

node_modules/@types/lokijs/index.d.ts:212

___

### <a id="throttledsavepending" name="throttledsavepending"></a> throttledSavePending

• **throttledSavePending**: `boolean`

#### Inherited from

Loki.throttledSavePending

#### Defined in

node_modules/@types/lokijs/index.d.ts:213

___

### <a id="throttledsaves" name="throttledsaves"></a> throttledSaves

• **throttledSaves**: `boolean`

#### Inherited from

Loki.throttledSaves

#### Defined in

node_modules/@types/lokijs/index.d.ts:214

___

### <a id="tojson" name="tojson"></a> toJson

• **toJson**: () => `string`(`options`: { `serializationMethod?`: ``"normal"`` \| ``"pretty"``  }) => `string`(`options`: { `serializationMethod`: ``"destructured"``  }) => `string`[](`options?`: { `serializationMethod?`: ``null`` \| `string`  }) => `string` \| `string`[](`options?`: { `serializationMethod?`: ``null`` \| `string`  }) => `string` \| `string`[]

#### Type declaration

▸ (): `string`

Serialize database to a string which can be loaded via {@link Loki#loadJSON}

##### Returns

`string`

Stringified representation of the loki database.

▸ (`options`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.serializationMethod?` | ``"normal"`` \| ``"pretty"`` |

##### Returns

`string`

▸ (`options`): `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.serializationMethod` | ``"destructured"`` |

##### Returns

`string`[]

▸ (`options?`): `string` \| `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.serializationMethod?` | ``null`` \| `string` |

##### Returns

`string` \| `string`[]

▸ (`options?`): `string` \| `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.serializationMethod?` | ``null`` \| `string` |

##### Returns

`string` \| `string`[]

#### Inherited from

Loki.toJson

#### Defined in

node_modules/@types/lokijs/index.d.ts:325

___

### <a id="verbose" name="verbose"></a> verbose

• **verbose**: `boolean`

#### Inherited from

Loki.verbose

#### Defined in

node_modules/@types/lokijs/index.d.ts:215

## Methods

### <a id="addcollection" name="addcollection"></a> addCollection

▸ **addCollection**<`F`\>(`name`, `options?`): `Collection`<`F`\>

Adds a collection to the database.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `object` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of collection to add |
| `options?` | `Partial`<`CollectionOptions`<`F`\>\> | (optional) options to configure collection with. |

#### Returns

`Collection`<`F`\>

a reference to the collection which was just added

#### Inherited from

Loki.addCollection

#### Defined in

node_modules/@types/lokijs/index.d.ts:279

___

### <a id="autosaveclearflags" name="autosaveclearflags"></a> autosaveClearFlags

▸ **autosaveClearFlags**(): `void`

autosaveClearFlags - resets dirty flags on all collections.
   Called from saveDatabase() after db is saved.

#### Returns

`void`

#### Inherited from

Loki.autosaveClearFlags

#### Defined in

node_modules/@types/lokijs/index.d.ts:538

___

### <a id="autosavedirty" name="autosavedirty"></a> autosaveDirty

▸ **autosaveDirty**(): `boolean`

autosaveDirty - check whether any collections are 'dirty' meaning we need to save (entire) database

#### Returns

`boolean`

true if database has changed since last autosave, false if not.

#### Inherited from

Loki.autosaveDirty

#### Defined in

node_modules/@types/lokijs/index.d.ts:531

___

### <a id="autosavedisable" name="autosavedisable"></a> autosaveDisable

▸ **autosaveDisable**(): `void`

autosaveDisable - stop the autosave interval timer.

#### Returns

`void`

#### Inherited from

Loki.autosaveDisable

#### Defined in

node_modules/@types/lokijs/index.d.ts:551

___

### <a id="autosaveenable" name="autosaveenable"></a> autosaveEnable

▸ **autosaveEnable**(`options?`, `callback?`): `void`

autosaveEnable - begin a javascript interval to periodically save the database.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |
| `callback?` | (`err?`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

Loki.autosaveEnable

#### Defined in

node_modules/@types/lokijs/index.d.ts:546

___

### <a id="clearchanges" name="clearchanges"></a> clearChanges

▸ **clearChanges**(): `void`

(Changes API) : clears all the changes in all collections.

#### Returns

`void`

#### Inherited from

Loki.clearChanges

#### Defined in

node_modules/@types/lokijs/index.d.ts:440

___

### <a id="close" name="close"></a> close

▸ **close**(`callback?`): `void`

Emits the close event. In autosave scenarios, if the database is dirty, this will save and disable timer.
Does not actually destroy the db.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`err?`: `any`) => `void` | (Optional) if supplied will be registered with close event before emitting. |

#### Returns

`void`

#### Inherited from

Loki.close

#### Defined in

node_modules/@types/lokijs/index.d.ts:409

___

### <a id="configureoptions" name="configureoptions"></a> configureOptions

▸ **configureOptions**(`options?`, `initialConfig?`): `void`

Allows reconfiguring database options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`<`LokiConfigOptions`\> & `Partial`<`ThrottledSaveDrainOptions`\> | configuration options to apply to loki db object |
| `initialConfig?` | `boolean` | (internal) true is passed when loki ctor is invoking |

#### Returns

`void`

#### Inherited from

Loki.configureOptions

#### Defined in

node_modules/@types/lokijs/index.d.ts:254

___

### <a id="copy" name="copy"></a> copy

▸ **copy**(`options?`): `Loki`

Copies 'this' database into a new Loki instance. Object references are shared to make lightweight.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | apply or override collection level settings |
| `options.removeNonSerializable?` | `boolean` | nulls properties not safe for serialization. |

#### Returns

`Loki`

#### Inherited from

Loki.copy

#### Defined in

node_modules/@types/lokijs/index.d.ts:262

___

### <a id="deletedatabase" name="deletedatabase"></a> deleteDatabase

▸ **deleteDatabase**(`callback`): `void`

Handles deleting a database from file system, local
   storage, or adapter (indexeddb)
   This method utilizes loki configuration options (if provided) to determine which
   persistence method to use, or environment detection (if configuration was not provided).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`err?`: `any`, `data?`: `any`) => `void` | (Optional) user supplied async callback / error handler |

#### Returns

`void`

#### Inherited from

Loki.deleteDatabase

#### Defined in

node_modules/@types/lokijs/index.d.ts:522

▸ **deleteDatabase**(`options?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | ``null`` |
| `callback?` | (`err?`: `any`, `data?`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

Loki.deleteDatabase

#### Defined in

node_modules/@types/lokijs/index.d.ts:523

▸ **deleteDatabase**(`options?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | ``null`` \| (`err?`: `any`, `data?`: `any`) => `void` |
| `callback?` | (`err?`: `any`, `data?`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

Loki.deleteDatabase

#### Defined in

node_modules/@types/lokijs/index.d.ts:524

___

### <a id="deserializecollection" name="deserializecollection"></a> deserializeCollection

▸ **deserializeCollection**(`destructuredSource`, `options?`): `any`[]

Collection level utility function to deserializes a destructured collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destructuredSource` | `string` \| `string`[] | destructured representation of collection to inflate |
| `options?` | `Object` | - |
| `options.delimited?` | `boolean` | - |
| `options.delimiter?` | `string` | - |
| `options.partitioned?` | `boolean` | - |

#### Returns

`any`[]

an array of documents to attach to collection.data.

#### Inherited from

Loki.deserializeCollection

#### Defined in

node_modules/@types/lokijs/index.d.ts:382

___

### <a id="deserializedestructured" name="deserializedestructured"></a> deserializeDestructured

▸ **deserializeDestructured**(`destructuredSource`, `options?`): `any`

Database level destructured JSON deserialization routine to minimize memory overhead.
Internally, Loki supports destructuring via loki "serializationMethod' option and
the optional LokiPartitioningAdapter class. It is also available if you wish to do
your own structured persistence or data exchange.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destructuredSource` | ``null`` \| `string` \| `string`[] | destructured json or array to deserialize from |
| `options?` | `DeserializeOptions` | - |

#### Returns

`any`

An object representation of the deserialized database, not yet applied to 'this' db or document array

#### Inherited from

Loki.deserializeDestructured

#### Defined in

node_modules/@types/lokijs/index.d.ts:370

___

### <a id="emit" name="emit"></a> emit

▸ **emit**(`eventName`, `data?`, `arg?`): `void`

emit(eventName, data) - emits a particular event
with the option of passing optional parameters which are going to be processed by the callback
provided signatures match (i.e. if passing emit(event, arg0, arg1) the listener should take two parameters)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | the name of the event |
| `data?` | `any` | optional object passed with the event |
| `arg?` | `any` | - |

#### Returns

`void`

#### Inherited from

Loki.emit

#### Defined in

node_modules/@types/lokijs/index.d.ts:130

___

### <a id="generatechangesnotification" name="generatechangesnotification"></a> generateChangesNotification

▸ **generateChangesNotification**(`arrayOfCollectionNames?`): `CollectionChange`[]

(Changes API) : takes all the changes stored in each
collection and creates a single array for the entire database. If an array of names
of collections is passed then only the included collections will be tracked.

**`see`** private method createChange() in Collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayOfCollectionNames?` | ``null`` \| `string`[] |

#### Returns

`CollectionChange`[]

array of changes

#### Inherited from

Loki.generateChangesNotification

#### Defined in

node_modules/@types/lokijs/index.d.ts:429

___

### <a id="getcollection" name="getcollection"></a> getCollection

▸ **getCollection**<`F`\>(`collectionName`): `Collection`<`F`\>

Retrieves reference to a collection by name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `object` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionName` | `string` | name of collection to look up |

#### Returns

`Collection`<`F`\>

Reference to collection in database by that name, or null if not found

#### Inherited from

Loki.getCollection

#### Defined in

node_modules/@types/lokijs/index.d.ts:288

___

### <a id="getindexedadapter" name="getindexedadapter"></a> getIndexedAdapter

▸ **getIndexedAdapter**(): `any`

#### Returns

`any`

#### Inherited from

Loki.getIndexedAdapter

#### Defined in

node_modules/@types/lokijs/index.d.ts:237

___

### <a id="getname" name="getname"></a> getName

▸ **getName**(): `string`

#### Returns

`string`

#### Inherited from

Loki.getName

#### Defined in

node_modules/@types/lokijs/index.d.ts:306

___

### <a id="listcollections" name="listcollections"></a> listCollections

▸ **listCollections**(): `Collection`<`any`\>[]

#### Returns

`Collection`<`any`\>[]

#### Inherited from

Loki.listCollections

#### Defined in

node_modules/@types/lokijs/index.d.ts:298

___

### <a id="loadcollection" name="loadcollection"></a> loadCollection

▸ **loadCollection**(`collection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Collection`<`any`\> |

#### Returns

`void`

#### Inherited from

Loki.loadCollection

#### Defined in

node_modules/@types/lokijs/index.d.ts:281

___

### <a id="loaddatabase" name="loaddatabase"></a> loadDatabase

▸ **loadDatabase**(`options?`, `callback?`): `void`

Handles manually loading from file system, local storage, or adapter (such as indexeddb)
   This method utilizes loki configuration options (if provided) to determine which
   persistence method to use, or environment detection (if configuration was not provided).
   To avoid contention with any throttledSaves, we will drain the save queue first.

If you are configured with autosave, you do not need to call this method yourself.

**`example`**
db.loadDatabase({}, function(err) {
  if (err) {
    console.log("error : " + err);
  }
  else {
    console.log("database loaded.");
  }
});

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`ThrottledSaveDrainOptions`\> |
| `callback?` | (`err`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

Loki.loadDatabase

#### Defined in

node_modules/@types/lokijs/index.d.ts:484

___

### <a id="loaddatabaseinternal" name="loaddatabaseinternal"></a> loadDatabaseInternal

▸ **loadDatabaseInternal**(`options?`, `callback?`): `void`

Internal load logic, decoupled from throttling/contention logic

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |
| `callback?` | (`err?`: `any`, `data?`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

Loki.loadDatabaseInternal

#### Defined in

node_modules/@types/lokijs/index.d.ts:459

___

### <a id="loadjson" name="loadjson"></a> loadJSON

▸ **loadJSON**(`serializedDb`, `options?`): `void`

Inflates a loki database from a serialized JSON string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedDb` | `string` | a serialized loki database string |
| `options?` | { `serializationMethod?`: ``null`` \| ``"normal"`` \| ``"pretty"`` \| ``"destructured"``  } & { [collName: string]: `any` \| { `inflate?`: (`src`: `object`, `dest?`: `object`) => `void` ; `proto?`: `any`  }; `retainDirtyFlags?`: `boolean` ; `throttledSaves?`: `boolean`  } | - |

#### Returns

`void`

#### Inherited from

Loki.loadJSON

#### Defined in

node_modules/@types/lokijs/index.d.ts:391

___

### <a id="loadjsonobject" name="loadjsonobject"></a> loadJSONObject

▸ **loadJSONObject**(`dbObject`, `options?`): `void`

Inflates a loki database from a JS object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dbObject` | `Object` | a serialized loki database string |
| `dbObject.collections` | `Collection`<`any`\>[] | - |
| `dbObject.databaseVersion` | `number` | - |
| `dbObject.name?` | `string` | - |
| `dbObject.throttledSaves` | `boolean` | - |
| `options?` | `Object` | apply or override collection level settings |
| `options.retainDirtyFlags?` | `boolean` | whether collection dirty flags will be preserved |
| `options.throttledSaves?` | `boolean` | - |

#### Returns

`void`

#### Inherited from

Loki.loadJSONObject

#### Defined in

node_modules/@types/lokijs/index.d.ts:400

___

### <a id="on" name="on"></a> on

▸ **on**<`F`\>(`eventName`, `listener`): `F`

on(eventName, listener) - adds a listener to the queue of callbacks associated to an event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `string`[] | the name(s) of the event(s) to listen to |
| `listener` | `F` | callback function of listener to attach |

#### Returns

`F`

the index of the callback in the array of listeners for a particular event

#### Inherited from

Loki.on

#### Defined in

node_modules/@types/lokijs/index.d.ts:121

___

### <a id="removecollection" name="removecollection"></a> removeCollection

▸ **removeCollection**(`collectionName`): `void`

Removes a collection from the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionName` | `string` | name of collection to remove |

#### Returns

`void`

#### Inherited from

Loki.removeCollection

#### Defined in

node_modules/@types/lokijs/index.d.ts:304

___

### <a id="removelistener" name="removelistener"></a> removeListener

▸ **removeListener**(`eventName`, `listener`): `void`

removeListener() - removes the listener at position 'index' from the event 'eventName'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `string`[] | the name(s) of the event(s) which the listener is attached to |
| `listener` | (...`args`: `any`[]) => `any` | the listener callback function to remove from emitter |

#### Returns

`void`

#### Inherited from

Loki.removeListener

#### Defined in

node_modules/@types/lokijs/index.d.ts:146

___

### <a id="renamecollection" name="renamecollection"></a> renameCollection

▸ **renameCollection**(`oldName`, `newName`): `Collection`<`any`\>

Renames an existing loki collection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldName` | `string` | name of collection to rename |
| `newName` | `string` | new name of collection |

#### Returns

`Collection`<`any`\>

reference to the newly renamed collection

#### Inherited from

Loki.renameCollection

#### Defined in

node_modules/@types/lokijs/index.d.ts:296

___

### <a id="savedatabase" name="savedatabase"></a> saveDatabase

▸ **saveDatabase**(`callback?`): `void`

Handles manually saving to file system, local storage, or adapter (such as indexeddb)
   This method utilizes loki configuration options (if provided) to determine which
   persistence method to use, or environment detection (if configuration was not provided).

If you are configured with autosave, you do not need to call this method yourself.

**`example`**
db.saveDatabase(function(err) {
  if (err) {
    console.log("error : " + err);
  }
  else {
    console.log("database saved.");
  }
});

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`err?`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

Loki.saveDatabase

#### Defined in

node_modules/@types/lokijs/index.d.ts:509

___

### <a id="savedatabaseinternal" name="savedatabaseinternal"></a> saveDatabaseInternal

▸ **saveDatabaseInternal**(`callback?`): `void`

Internal save logic, decoupled from save throttling logic

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`err`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

Loki.saveDatabaseInternal

#### Defined in

node_modules/@types/lokijs/index.d.ts:489

___

### <a id="serialize" name="serialize"></a> serialize

▸ **serialize**(): `string`

Serialize database to a string which can be loaded via {@link Loki#loadJSON}

#### Returns

`string`

Stringified representation of the loki database.

#### Inherited from

Loki.serialize

#### Defined in

node_modules/@types/lokijs/index.d.ts:318

▸ **serialize**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.serializationMethod?` | ``"normal"`` \| ``"pretty"`` |

#### Returns

`string`

#### Inherited from

Loki.serialize

#### Defined in

node_modules/@types/lokijs/index.d.ts:319

▸ **serialize**(`options`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.serializationMethod` | ``"destructured"`` |

#### Returns

`string`[]

#### Inherited from

Loki.serialize

#### Defined in

node_modules/@types/lokijs/index.d.ts:320

▸ **serialize**(`options?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.serializationMethod?` | ``null`` \| `string` |

#### Returns

`string` \| `string`[]

#### Inherited from

Loki.serialize

#### Defined in

node_modules/@types/lokijs/index.d.ts:321

▸ **serialize**(`options?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.serializationMethod?` | ``null`` \| `string` |

#### Returns

`string` \| `string`[]

#### Inherited from

Loki.serialize

#### Defined in

node_modules/@types/lokijs/index.d.ts:322

___

### <a id="serializechanges" name="serializechanges"></a> serializeChanges

▸ **serializeChanges**(`collectionNamesArray?`): `string`

(Changes API) - stringify changes for network transmission

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionNamesArray?` | `string`[] |

#### Returns

`string`

string representation of the changes

#### Inherited from

Loki.serializeChanges

#### Defined in

node_modules/@types/lokijs/index.d.ts:435

___

### <a id="serializecollection" name="serializecollection"></a> serializeCollection

▸ **serializeCollection**(`options?`): `string` \| `string`[]

Collection level utility method to serialize a collection in a 'destructured' format

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.collectionIndex?` | `number` |
| `options.delimited?` | `boolean` |
| `options.delimiter?` | `string` |

#### Returns

`string` \| `string`[]

A custom, restructured aggregation of independent serializations for a single collection.

#### Inherited from

Loki.serializeCollection

#### Defined in

node_modules/@types/lokijs/index.d.ts:353

___

### <a id="serializedestructured" name="serializedestructured"></a> serializeDestructured

▸ **serializeDestructured**(`options?`): `string` \| `string`[]

Database level destructured JSON serialization routine to allow alternate serialization methods.
Internally, Loki supports destructuring via loki "serializationMethod' option and
the optional LokiPartitioningAdapter class. It is also available if you wish to do
your own structured persistence or data exchange.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | output format options for use externally to loki |
| `options.delimited?` | `boolean` | (default: true) whether subitems are delimited or subarrays |
| `options.delimiter?` | `string` | override default delimiter |
| `options.partition?` | `number` | can be used to only output an individual collection or db (-1) |
| `options.partitioned?` | `boolean` | (default: false) whether db and each collection are separate |

#### Returns

`string` \| `string`[]

A custom, restructured aggregation of independent serializations.

#### Inherited from

Loki.serializeDestructured

#### Defined in

node_modules/@types/lokijs/index.d.ts:341

___

### <a id="serializereplacer" name="serializereplacer"></a> serializeReplacer

▸ **serializeReplacer**(`key`, `value`): `any`

serializeReplacer - used to prevent certain properties from being serialized

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

Loki.serializeReplacer

#### Defined in

node_modules/@types/lokijs/index.d.ts:311

___

### <a id="throttledsavedrain" name="throttledsavedrain"></a> throttledSaveDrain

▸ **throttledSaveDrain**(`callback`, `options?`): `void`

Wait for throttledSaves to complete and invoke your callback when drained or duration is met.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`result?`: `boolean`) => `void` | callback to fire when save queue is drained, it is passed a sucess parameter value |
| `options?` | `Partial`<`ThrottledSaveDrainOptions`\> | - |

#### Returns

`void`

#### Inherited from

Loki.throttledSaveDrain

#### Defined in

node_modules/@types/lokijs/index.d.ts:451
