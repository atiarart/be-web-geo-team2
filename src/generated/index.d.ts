
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Jadwal
 * 
 */
export type Jadwal = $Result.DefaultSelection<Prisma.$JadwalPayload>
/**
 * Model DataPendaftar
 * 
 */
export type DataPendaftar = $Result.DefaultSelection<Prisma.$DataPendaftarPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jadwals
 * const jadwals = await prisma.jadwal.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jadwals
   * const jadwals = await prisma.jadwal.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.jadwal`: Exposes CRUD operations for the **Jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.JadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataPendaftar`: Exposes CRUD operations for the **DataPendaftar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPendaftars
    * const dataPendaftars = await prisma.dataPendaftar.findMany()
    * ```
    */
  get dataPendaftar(): Prisma.DataPendaftarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Jadwal: 'Jadwal',
    DataPendaftar: 'DataPendaftar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "jadwal" | "dataPendaftar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Jadwal: {
        payload: Prisma.$JadwalPayload<ExtArgs>
        fields: Prisma.JadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findFirst: {
            args: Prisma.JadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findMany: {
            args: Prisma.JadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          create: {
            args: Prisma.JadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          createMany: {
            args: Prisma.JadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          update: {
            args: Prisma.JadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          deleteMany: {
            args: Prisma.JadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.JadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
          }
        }
      }
      DataPendaftar: {
        payload: Prisma.$DataPendaftarPayload<ExtArgs>
        fields: Prisma.DataPendaftarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataPendaftarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataPendaftarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          findFirst: {
            args: Prisma.DataPendaftarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataPendaftarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          findMany: {
            args: Prisma.DataPendaftarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>[]
          }
          create: {
            args: Prisma.DataPendaftarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          createMany: {
            args: Prisma.DataPendaftarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataPendaftarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          update: {
            args: Prisma.DataPendaftarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          deleteMany: {
            args: Prisma.DataPendaftarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataPendaftarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataPendaftarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          aggregate: {
            args: Prisma.DataPendaftarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPendaftar>
          }
          groupBy: {
            args: Prisma.DataPendaftarGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPendaftarGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataPendaftarCountArgs<ExtArgs>
            result: $Utils.Optional<DataPendaftarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    jadwal?: JadwalOmit
    dataPendaftar?: DataPendaftarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _avg: JadwalAvgAggregateOutputType | null
    _sum: JadwalSumAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    jmlHari: number | null
  }

  export type JadwalSumAggregateOutputType = {
    id: number | null
    harga: number | null
    jmlHari: number | null
  }

  export type JadwalMinAggregateOutputType = {
    id: number | null
    bidang: string | null
    nama: string | null
    harga: number | null
    jmlHari: number | null
    bulan: string | null
    tanggal: string | null
  }

  export type JadwalMaxAggregateOutputType = {
    id: number | null
    bidang: string | null
    nama: string | null
    harga: number | null
    jmlHari: number | null
    bulan: string | null
    tanggal: string | null
  }

  export type JadwalCountAggregateOutputType = {
    id: number
    bidang: number
    nama: number
    harga: number
    jmlHari: number
    bulan: number
    tanggal: number
    _all: number
  }


  export type JadwalAvgAggregateInputType = {
    id?: true
    harga?: true
    jmlHari?: true
  }

  export type JadwalSumAggregateInputType = {
    id?: true
    harga?: true
    jmlHari?: true
  }

  export type JadwalMinAggregateInputType = {
    id?: true
    bidang?: true
    nama?: true
    harga?: true
    jmlHari?: true
    bulan?: true
    tanggal?: true
  }

  export type JadwalMaxAggregateInputType = {
    id?: true
    bidang?: true
    nama?: true
    harga?: true
    jmlHari?: true
    bulan?: true
    tanggal?: true
  }

  export type JadwalCountAggregateInputType = {
    id?: true
    bidang?: true
    nama?: true
    harga?: true
    jmlHari?: true
    bulan?: true
    tanggal?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal to aggregate.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type JadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithAggregationInput | JadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: JadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _avg?: JadwalAvgAggregateInputType
    _sum?: JadwalSumAggregateInputType
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    id: number
    bidang: string
    nama: string
    harga: number
    jmlHari: number
    bulan: string | null
    tanggal: string | null
    _count: JadwalCountAggregateOutputType | null
    _avg: JadwalAvgAggregateOutputType | null
    _sum: JadwalSumAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends JadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type JadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bidang?: boolean
    nama?: boolean
    harga?: boolean
    jmlHari?: boolean
    bulan?: boolean
    tanggal?: boolean
  }, ExtArgs["result"]["jadwal"]>



  export type JadwalSelectScalar = {
    id?: boolean
    bidang?: boolean
    nama?: boolean
    harga?: boolean
    jmlHari?: boolean
    bulan?: boolean
    tanggal?: boolean
  }

  export type JadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bidang" | "nama" | "harga" | "jmlHari" | "bulan" | "tanggal", ExtArgs["result"]["jadwal"]>

  export type $JadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jadwal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bidang: string
      nama: string
      harga: number
      jmlHari: number
      bulan: string | null
      tanggal: string | null
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type JadwalGetPayload<S extends boolean | null | undefined | JadwalDefaultArgs> = $Result.GetResult<Prisma.$JadwalPayload, S>

  type JadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface JadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jadwal'], meta: { name: 'Jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {JadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalFindUniqueArgs>(args: SelectSubset<T, JadwalFindUniqueArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalFindFirstArgs>(args?: SelectSubset<T, JadwalFindFirstArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalFindManyArgs>(args?: SelectSubset<T, JadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal.
     * @param {JadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends JadwalCreateArgs>(args: SelectSubset<T, JadwalCreateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwals.
     * @param {JadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalCreateManyArgs>(args?: SelectSubset<T, JadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jadwal.
     * @param {JadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends JadwalDeleteArgs>(args: SelectSubset<T, JadwalDeleteArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal.
     * @param {JadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalUpdateArgs>(args: SelectSubset<T, JadwalUpdateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwals.
     * @param {JadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalDeleteManyArgs>(args?: SelectSubset<T, JadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalUpdateManyArgs>(args: SelectSubset<T, JadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jadwal.
     * @param {JadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends JadwalUpsertArgs>(args: SelectSubset<T, JadwalUpsertArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends JadwalCountArgs>(
      args?: Subset<T, JadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalGroupByArgs['orderBy'] }
        : { orderBy?: JadwalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jadwal model
   */
  readonly fields: JadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jadwal model
   */
  interface JadwalFieldRefs {
    readonly id: FieldRef<"Jadwal", 'Int'>
    readonly bidang: FieldRef<"Jadwal", 'String'>
    readonly nama: FieldRef<"Jadwal", 'String'>
    readonly harga: FieldRef<"Jadwal", 'Int'>
    readonly jmlHari: FieldRef<"Jadwal", 'Int'>
    readonly bulan: FieldRef<"Jadwal", 'String'>
    readonly tanggal: FieldRef<"Jadwal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jadwal findUnique
   */
  export type JadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findUniqueOrThrow
   */
  export type JadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findFirst
   */
  export type JadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findFirstOrThrow
   */
  export type JadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findMany
   */
  export type JadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwals to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal create
   */
  export type JadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data needed to create a Jadwal.
     */
    data: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
  }

  /**
   * Jadwal createMany
   */
  export type JadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal update
   */
  export type JadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data needed to update a Jadwal.
     */
    data: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
    /**
     * Choose, which Jadwal to update.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal updateMany
   */
  export type JadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
  }

  /**
   * Jadwal upsert
   */
  export type JadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The filter to search for the Jadwal to update in case it exists.
     */
    where: JadwalWhereUniqueInput
    /**
     * In case the Jadwal found by the `where` argument doesn't exist, create a new Jadwal with this data.
     */
    create: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
    /**
     * In case the Jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
  }

  /**
   * Jadwal delete
   */
  export type JadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter which Jadwal to delete.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal deleteMany
   */
  export type JadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwals to delete
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to delete.
     */
    limit?: number
  }

  /**
   * Jadwal without action
   */
  export type JadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
  }


  /**
   * Model DataPendaftar
   */

  export type AggregateDataPendaftar = {
    _count: DataPendaftarCountAggregateOutputType | null
    _avg: DataPendaftarAvgAggregateOutputType | null
    _sum: DataPendaftarSumAggregateOutputType | null
    _min: DataPendaftarMinAggregateOutputType | null
    _max: DataPendaftarMaxAggregateOutputType | null
  }

  export type DataPendaftarAvgAggregateOutputType = {
    id: number | null
  }

  export type DataPendaftarSumAggregateOutputType = {
    id: number | null
  }

  export type DataPendaftarMinAggregateOutputType = {
    id: number | null
    institusi: string | null
    alamat: string | null
    telepon: string | null
    fax: string | null
    email: string | null
    namaPeserta: string | null
    telPeserta: string | null
    emailPeserta: string | null
    pelatihan: string | null
  }

  export type DataPendaftarMaxAggregateOutputType = {
    id: number | null
    institusi: string | null
    alamat: string | null
    telepon: string | null
    fax: string | null
    email: string | null
    namaPeserta: string | null
    telPeserta: string | null
    emailPeserta: string | null
    pelatihan: string | null
  }

  export type DataPendaftarCountAggregateOutputType = {
    id: number
    institusi: number
    alamat: number
    telepon: number
    fax: number
    email: number
    namaPeserta: number
    telPeserta: number
    emailPeserta: number
    pelatihan: number
    _all: number
  }


  export type DataPendaftarAvgAggregateInputType = {
    id?: true
  }

  export type DataPendaftarSumAggregateInputType = {
    id?: true
  }

  export type DataPendaftarMinAggregateInputType = {
    id?: true
    institusi?: true
    alamat?: true
    telepon?: true
    fax?: true
    email?: true
    namaPeserta?: true
    telPeserta?: true
    emailPeserta?: true
    pelatihan?: true
  }

  export type DataPendaftarMaxAggregateInputType = {
    id?: true
    institusi?: true
    alamat?: true
    telepon?: true
    fax?: true
    email?: true
    namaPeserta?: true
    telPeserta?: true
    emailPeserta?: true
    pelatihan?: true
  }

  export type DataPendaftarCountAggregateInputType = {
    id?: true
    institusi?: true
    alamat?: true
    telepon?: true
    fax?: true
    email?: true
    namaPeserta?: true
    telPeserta?: true
    emailPeserta?: true
    pelatihan?: true
    _all?: true
  }

  export type DataPendaftarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPendaftar to aggregate.
     */
    where?: DataPendaftarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendaftars to fetch.
     */
    orderBy?: DataPendaftarOrderByWithRelationInput | DataPendaftarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataPendaftarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendaftars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendaftars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataPendaftars
    **/
    _count?: true | DataPendaftarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataPendaftarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataPendaftarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPendaftarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPendaftarMaxAggregateInputType
  }

  export type GetDataPendaftarAggregateType<T extends DataPendaftarAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPendaftar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPendaftar[P]>
      : GetScalarType<T[P], AggregateDataPendaftar[P]>
  }




  export type DataPendaftarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPendaftarWhereInput
    orderBy?: DataPendaftarOrderByWithAggregationInput | DataPendaftarOrderByWithAggregationInput[]
    by: DataPendaftarScalarFieldEnum[] | DataPendaftarScalarFieldEnum
    having?: DataPendaftarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPendaftarCountAggregateInputType | true
    _avg?: DataPendaftarAvgAggregateInputType
    _sum?: DataPendaftarSumAggregateInputType
    _min?: DataPendaftarMinAggregateInputType
    _max?: DataPendaftarMaxAggregateInputType
  }

  export type DataPendaftarGroupByOutputType = {
    id: number
    institusi: string
    alamat: string
    telepon: string
    fax: string
    email: string
    namaPeserta: string
    telPeserta: string
    emailPeserta: string
    pelatihan: string
    _count: DataPendaftarCountAggregateOutputType | null
    _avg: DataPendaftarAvgAggregateOutputType | null
    _sum: DataPendaftarSumAggregateOutputType | null
    _min: DataPendaftarMinAggregateOutputType | null
    _max: DataPendaftarMaxAggregateOutputType | null
  }

  type GetDataPendaftarGroupByPayload<T extends DataPendaftarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPendaftarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPendaftarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPendaftarGroupByOutputType[P]>
            : GetScalarType<T[P], DataPendaftarGroupByOutputType[P]>
        }
      >
    >


  export type DataPendaftarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institusi?: boolean
    alamat?: boolean
    telepon?: boolean
    fax?: boolean
    email?: boolean
    namaPeserta?: boolean
    telPeserta?: boolean
    emailPeserta?: boolean
    pelatihan?: boolean
  }, ExtArgs["result"]["dataPendaftar"]>



  export type DataPendaftarSelectScalar = {
    id?: boolean
    institusi?: boolean
    alamat?: boolean
    telepon?: boolean
    fax?: boolean
    email?: boolean
    namaPeserta?: boolean
    telPeserta?: boolean
    emailPeserta?: boolean
    pelatihan?: boolean
  }

  export type DataPendaftarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institusi" | "alamat" | "telepon" | "fax" | "email" | "namaPeserta" | "telPeserta" | "emailPeserta" | "pelatihan", ExtArgs["result"]["dataPendaftar"]>

  export type $DataPendaftarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataPendaftar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      institusi: string
      alamat: string
      telepon: string
      fax: string
      email: string
      namaPeserta: string
      telPeserta: string
      emailPeserta: string
      pelatihan: string
    }, ExtArgs["result"]["dataPendaftar"]>
    composites: {}
  }

  type DataPendaftarGetPayload<S extends boolean | null | undefined | DataPendaftarDefaultArgs> = $Result.GetResult<Prisma.$DataPendaftarPayload, S>

  type DataPendaftarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataPendaftarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataPendaftarCountAggregateInputType | true
    }

  export interface DataPendaftarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataPendaftar'], meta: { name: 'DataPendaftar' } }
    /**
     * Find zero or one DataPendaftar that matches the filter.
     * @param {DataPendaftarFindUniqueArgs} args - Arguments to find a DataPendaftar
     * @example
     * // Get one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataPendaftarFindUniqueArgs>(args: SelectSubset<T, DataPendaftarFindUniqueArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataPendaftar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataPendaftarFindUniqueOrThrowArgs} args - Arguments to find a DataPendaftar
     * @example
     * // Get one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataPendaftarFindUniqueOrThrowArgs>(args: SelectSubset<T, DataPendaftarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPendaftar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarFindFirstArgs} args - Arguments to find a DataPendaftar
     * @example
     * // Get one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataPendaftarFindFirstArgs>(args?: SelectSubset<T, DataPendaftarFindFirstArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPendaftar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarFindFirstOrThrowArgs} args - Arguments to find a DataPendaftar
     * @example
     * // Get one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataPendaftarFindFirstOrThrowArgs>(args?: SelectSubset<T, DataPendaftarFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataPendaftars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPendaftars
     * const dataPendaftars = await prisma.dataPendaftar.findMany()
     * 
     * // Get first 10 DataPendaftars
     * const dataPendaftars = await prisma.dataPendaftar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataPendaftarWithIdOnly = await prisma.dataPendaftar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataPendaftarFindManyArgs>(args?: SelectSubset<T, DataPendaftarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataPendaftar.
     * @param {DataPendaftarCreateArgs} args - Arguments to create a DataPendaftar.
     * @example
     * // Create one DataPendaftar
     * const DataPendaftar = await prisma.dataPendaftar.create({
     *   data: {
     *     // ... data to create a DataPendaftar
     *   }
     * })
     * 
     */
    create<T extends DataPendaftarCreateArgs>(args: SelectSubset<T, DataPendaftarCreateArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataPendaftars.
     * @param {DataPendaftarCreateManyArgs} args - Arguments to create many DataPendaftars.
     * @example
     * // Create many DataPendaftars
     * const dataPendaftar = await prisma.dataPendaftar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataPendaftarCreateManyArgs>(args?: SelectSubset<T, DataPendaftarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataPendaftar.
     * @param {DataPendaftarDeleteArgs} args - Arguments to delete one DataPendaftar.
     * @example
     * // Delete one DataPendaftar
     * const DataPendaftar = await prisma.dataPendaftar.delete({
     *   where: {
     *     // ... filter to delete one DataPendaftar
     *   }
     * })
     * 
     */
    delete<T extends DataPendaftarDeleteArgs>(args: SelectSubset<T, DataPendaftarDeleteArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataPendaftar.
     * @param {DataPendaftarUpdateArgs} args - Arguments to update one DataPendaftar.
     * @example
     * // Update one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataPendaftarUpdateArgs>(args: SelectSubset<T, DataPendaftarUpdateArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataPendaftars.
     * @param {DataPendaftarDeleteManyArgs} args - Arguments to filter DataPendaftars to delete.
     * @example
     * // Delete a few DataPendaftars
     * const { count } = await prisma.dataPendaftar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataPendaftarDeleteManyArgs>(args?: SelectSubset<T, DataPendaftarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPendaftars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPendaftars
     * const dataPendaftar = await prisma.dataPendaftar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataPendaftarUpdateManyArgs>(args: SelectSubset<T, DataPendaftarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataPendaftar.
     * @param {DataPendaftarUpsertArgs} args - Arguments to update or create a DataPendaftar.
     * @example
     * // Update or create a DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.upsert({
     *   create: {
     *     // ... data to create a DataPendaftar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPendaftar we want to update
     *   }
     * })
     */
    upsert<T extends DataPendaftarUpsertArgs>(args: SelectSubset<T, DataPendaftarUpsertArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataPendaftars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarCountArgs} args - Arguments to filter DataPendaftars to count.
     * @example
     * // Count the number of DataPendaftars
     * const count = await prisma.dataPendaftar.count({
     *   where: {
     *     // ... the filter for the DataPendaftars we want to count
     *   }
     * })
    **/
    count<T extends DataPendaftarCountArgs>(
      args?: Subset<T, DataPendaftarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPendaftarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPendaftar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataPendaftarAggregateArgs>(args: Subset<T, DataPendaftarAggregateArgs>): Prisma.PrismaPromise<GetDataPendaftarAggregateType<T>>

    /**
     * Group by DataPendaftar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataPendaftarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataPendaftarGroupByArgs['orderBy'] }
        : { orderBy?: DataPendaftarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataPendaftarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPendaftarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataPendaftar model
   */
  readonly fields: DataPendaftarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataPendaftar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataPendaftarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataPendaftar model
   */
  interface DataPendaftarFieldRefs {
    readonly id: FieldRef<"DataPendaftar", 'Int'>
    readonly institusi: FieldRef<"DataPendaftar", 'String'>
    readonly alamat: FieldRef<"DataPendaftar", 'String'>
    readonly telepon: FieldRef<"DataPendaftar", 'String'>
    readonly fax: FieldRef<"DataPendaftar", 'String'>
    readonly email: FieldRef<"DataPendaftar", 'String'>
    readonly namaPeserta: FieldRef<"DataPendaftar", 'String'>
    readonly telPeserta: FieldRef<"DataPendaftar", 'String'>
    readonly emailPeserta: FieldRef<"DataPendaftar", 'String'>
    readonly pelatihan: FieldRef<"DataPendaftar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataPendaftar findUnique
   */
  export type DataPendaftarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftar to fetch.
     */
    where: DataPendaftarWhereUniqueInput
  }

  /**
   * DataPendaftar findUniqueOrThrow
   */
  export type DataPendaftarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftar to fetch.
     */
    where: DataPendaftarWhereUniqueInput
  }

  /**
   * DataPendaftar findFirst
   */
  export type DataPendaftarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftar to fetch.
     */
    where?: DataPendaftarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendaftars to fetch.
     */
    orderBy?: DataPendaftarOrderByWithRelationInput | DataPendaftarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPendaftars.
     */
    cursor?: DataPendaftarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendaftars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendaftars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPendaftars.
     */
    distinct?: DataPendaftarScalarFieldEnum | DataPendaftarScalarFieldEnum[]
  }

  /**
   * DataPendaftar findFirstOrThrow
   */
  export type DataPendaftarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftar to fetch.
     */
    where?: DataPendaftarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendaftars to fetch.
     */
    orderBy?: DataPendaftarOrderByWithRelationInput | DataPendaftarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPendaftars.
     */
    cursor?: DataPendaftarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendaftars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendaftars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPendaftars.
     */
    distinct?: DataPendaftarScalarFieldEnum | DataPendaftarScalarFieldEnum[]
  }

  /**
   * DataPendaftar findMany
   */
  export type DataPendaftarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftars to fetch.
     */
    where?: DataPendaftarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendaftars to fetch.
     */
    orderBy?: DataPendaftarOrderByWithRelationInput | DataPendaftarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataPendaftars.
     */
    cursor?: DataPendaftarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendaftars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendaftars.
     */
    skip?: number
    distinct?: DataPendaftarScalarFieldEnum | DataPendaftarScalarFieldEnum[]
  }

  /**
   * DataPendaftar create
   */
  export type DataPendaftarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * The data needed to create a DataPendaftar.
     */
    data: XOR<DataPendaftarCreateInput, DataPendaftarUncheckedCreateInput>
  }

  /**
   * DataPendaftar createMany
   */
  export type DataPendaftarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataPendaftars.
     */
    data: DataPendaftarCreateManyInput | DataPendaftarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataPendaftar update
   */
  export type DataPendaftarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * The data needed to update a DataPendaftar.
     */
    data: XOR<DataPendaftarUpdateInput, DataPendaftarUncheckedUpdateInput>
    /**
     * Choose, which DataPendaftar to update.
     */
    where: DataPendaftarWhereUniqueInput
  }

  /**
   * DataPendaftar updateMany
   */
  export type DataPendaftarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataPendaftars.
     */
    data: XOR<DataPendaftarUpdateManyMutationInput, DataPendaftarUncheckedUpdateManyInput>
    /**
     * Filter which DataPendaftars to update
     */
    where?: DataPendaftarWhereInput
    /**
     * Limit how many DataPendaftars to update.
     */
    limit?: number
  }

  /**
   * DataPendaftar upsert
   */
  export type DataPendaftarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * The filter to search for the DataPendaftar to update in case it exists.
     */
    where: DataPendaftarWhereUniqueInput
    /**
     * In case the DataPendaftar found by the `where` argument doesn't exist, create a new DataPendaftar with this data.
     */
    create: XOR<DataPendaftarCreateInput, DataPendaftarUncheckedCreateInput>
    /**
     * In case the DataPendaftar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataPendaftarUpdateInput, DataPendaftarUncheckedUpdateInput>
  }

  /**
   * DataPendaftar delete
   */
  export type DataPendaftarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter which DataPendaftar to delete.
     */
    where: DataPendaftarWhereUniqueInput
  }

  /**
   * DataPendaftar deleteMany
   */
  export type DataPendaftarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPendaftars to delete
     */
    where?: DataPendaftarWhereInput
    /**
     * Limit how many DataPendaftars to delete.
     */
    limit?: number
  }

  /**
   * DataPendaftar without action
   */
  export type DataPendaftarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JadwalScalarFieldEnum: {
    id: 'id',
    bidang: 'bidang',
    nama: 'nama',
    harga: 'harga',
    jmlHari: 'jmlHari',
    bulan: 'bulan',
    tanggal: 'tanggal'
  };

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


  export const DataPendaftarScalarFieldEnum: {
    id: 'id',
    institusi: 'institusi',
    alamat: 'alamat',
    telepon: 'telepon',
    fax: 'fax',
    email: 'email',
    namaPeserta: 'namaPeserta',
    telPeserta: 'telPeserta',
    emailPeserta: 'emailPeserta',
    pelatihan: 'pelatihan'
  };

  export type DataPendaftarScalarFieldEnum = (typeof DataPendaftarScalarFieldEnum)[keyof typeof DataPendaftarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JadwalOrderByRelevanceFieldEnum: {
    bidang: 'bidang',
    nama: 'nama',
    bulan: 'bulan',
    tanggal: 'tanggal'
  };

  export type JadwalOrderByRelevanceFieldEnum = (typeof JadwalOrderByRelevanceFieldEnum)[keyof typeof JadwalOrderByRelevanceFieldEnum]


  export const DataPendaftarOrderByRelevanceFieldEnum: {
    institusi: 'institusi',
    alamat: 'alamat',
    telepon: 'telepon',
    fax: 'fax',
    email: 'email',
    namaPeserta: 'namaPeserta',
    telPeserta: 'telPeserta',
    emailPeserta: 'emailPeserta',
    pelatihan: 'pelatihan'
  };

  export type DataPendaftarOrderByRelevanceFieldEnum = (typeof DataPendaftarOrderByRelevanceFieldEnum)[keyof typeof DataPendaftarOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type JadwalWhereInput = {
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    id?: IntFilter<"Jadwal"> | number
    bidang?: StringFilter<"Jadwal"> | string
    nama?: StringFilter<"Jadwal"> | string
    harga?: IntFilter<"Jadwal"> | number
    jmlHari?: IntFilter<"Jadwal"> | number
    bulan?: StringNullableFilter<"Jadwal"> | string | null
    tanggal?: StringNullableFilter<"Jadwal"> | string | null
  }

  export type JadwalOrderByWithRelationInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrderInput | SortOrder
    tanggal?: SortOrderInput | SortOrder
    _relevance?: JadwalOrderByRelevanceInput
  }

  export type JadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    bidang?: StringFilter<"Jadwal"> | string
    nama?: StringFilter<"Jadwal"> | string
    harga?: IntFilter<"Jadwal"> | number
    jmlHari?: IntFilter<"Jadwal"> | number
    bulan?: StringNullableFilter<"Jadwal"> | string | null
    tanggal?: StringNullableFilter<"Jadwal"> | string | null
  }, "id">

  export type JadwalOrderByWithAggregationInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrderInput | SortOrder
    tanggal?: SortOrderInput | SortOrder
    _count?: JadwalCountOrderByAggregateInput
    _avg?: JadwalAvgOrderByAggregateInput
    _max?: JadwalMaxOrderByAggregateInput
    _min?: JadwalMinOrderByAggregateInput
    _sum?: JadwalSumOrderByAggregateInput
  }

  export type JadwalScalarWhereWithAggregatesInput = {
    AND?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    OR?: JadwalScalarWhereWithAggregatesInput[]
    NOT?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jadwal"> | number
    bidang?: StringWithAggregatesFilter<"Jadwal"> | string
    nama?: StringWithAggregatesFilter<"Jadwal"> | string
    harga?: IntWithAggregatesFilter<"Jadwal"> | number
    jmlHari?: IntWithAggregatesFilter<"Jadwal"> | number
    bulan?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
    tanggal?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
  }

  export type DataPendaftarWhereInput = {
    AND?: DataPendaftarWhereInput | DataPendaftarWhereInput[]
    OR?: DataPendaftarWhereInput[]
    NOT?: DataPendaftarWhereInput | DataPendaftarWhereInput[]
    id?: IntFilter<"DataPendaftar"> | number
    institusi?: StringFilter<"DataPendaftar"> | string
    alamat?: StringFilter<"DataPendaftar"> | string
    telepon?: StringFilter<"DataPendaftar"> | string
    fax?: StringFilter<"DataPendaftar"> | string
    email?: StringFilter<"DataPendaftar"> | string
    namaPeserta?: StringFilter<"DataPendaftar"> | string
    telPeserta?: StringFilter<"DataPendaftar"> | string
    emailPeserta?: StringFilter<"DataPendaftar"> | string
    pelatihan?: StringFilter<"DataPendaftar"> | string
  }

  export type DataPendaftarOrderByWithRelationInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
    _relevance?: DataPendaftarOrderByRelevanceInput
  }

  export type DataPendaftarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataPendaftarWhereInput | DataPendaftarWhereInput[]
    OR?: DataPendaftarWhereInput[]
    NOT?: DataPendaftarWhereInput | DataPendaftarWhereInput[]
    institusi?: StringFilter<"DataPendaftar"> | string
    alamat?: StringFilter<"DataPendaftar"> | string
    telepon?: StringFilter<"DataPendaftar"> | string
    fax?: StringFilter<"DataPendaftar"> | string
    email?: StringFilter<"DataPendaftar"> | string
    namaPeserta?: StringFilter<"DataPendaftar"> | string
    telPeserta?: StringFilter<"DataPendaftar"> | string
    emailPeserta?: StringFilter<"DataPendaftar"> | string
    pelatihan?: StringFilter<"DataPendaftar"> | string
  }, "id">

  export type DataPendaftarOrderByWithAggregationInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
    _count?: DataPendaftarCountOrderByAggregateInput
    _avg?: DataPendaftarAvgOrderByAggregateInput
    _max?: DataPendaftarMaxOrderByAggregateInput
    _min?: DataPendaftarMinOrderByAggregateInput
    _sum?: DataPendaftarSumOrderByAggregateInput
  }

  export type DataPendaftarScalarWhereWithAggregatesInput = {
    AND?: DataPendaftarScalarWhereWithAggregatesInput | DataPendaftarScalarWhereWithAggregatesInput[]
    OR?: DataPendaftarScalarWhereWithAggregatesInput[]
    NOT?: DataPendaftarScalarWhereWithAggregatesInput | DataPendaftarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataPendaftar"> | number
    institusi?: StringWithAggregatesFilter<"DataPendaftar"> | string
    alamat?: StringWithAggregatesFilter<"DataPendaftar"> | string
    telepon?: StringWithAggregatesFilter<"DataPendaftar"> | string
    fax?: StringWithAggregatesFilter<"DataPendaftar"> | string
    email?: StringWithAggregatesFilter<"DataPendaftar"> | string
    namaPeserta?: StringWithAggregatesFilter<"DataPendaftar"> | string
    telPeserta?: StringWithAggregatesFilter<"DataPendaftar"> | string
    emailPeserta?: StringWithAggregatesFilter<"DataPendaftar"> | string
    pelatihan?: StringWithAggregatesFilter<"DataPendaftar"> | string
  }

  export type JadwalCreateInput = {
    bidang: string
    nama: string
    harga: number
    jmlHari: number
    bulan?: string | null
    tanggal?: string | null
  }

  export type JadwalUncheckedCreateInput = {
    id?: number
    bidang: string
    nama: string
    harga: number
    jmlHari: number
    bulan?: string | null
    tanggal?: string | null
  }

  export type JadwalUpdateInput = {
    bidang?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jmlHari?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bidang?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jmlHari?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalCreateManyInput = {
    id?: number
    bidang: string
    nama: string
    harga: number
    jmlHari: number
    bulan?: string | null
    tanggal?: string | null
  }

  export type JadwalUpdateManyMutationInput = {
    bidang?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jmlHari?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bidang?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jmlHari?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPendaftarCreateInput = {
    institusi: string
    alamat: string
    telepon: string
    fax: string
    email: string
    namaPeserta: string
    telPeserta: string
    emailPeserta: string
    pelatihan: string
  }

  export type DataPendaftarUncheckedCreateInput = {
    id?: number
    institusi: string
    alamat: string
    telepon: string
    fax: string
    email: string
    namaPeserta: string
    telPeserta: string
    emailPeserta: string
    pelatihan: string
  }

  export type DataPendaftarUpdateInput = {
    institusi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    namaPeserta?: StringFieldUpdateOperationsInput | string
    telPeserta?: StringFieldUpdateOperationsInput | string
    emailPeserta?: StringFieldUpdateOperationsInput | string
    pelatihan?: StringFieldUpdateOperationsInput | string
  }

  export type DataPendaftarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    institusi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    namaPeserta?: StringFieldUpdateOperationsInput | string
    telPeserta?: StringFieldUpdateOperationsInput | string
    emailPeserta?: StringFieldUpdateOperationsInput | string
    pelatihan?: StringFieldUpdateOperationsInput | string
  }

  export type DataPendaftarCreateManyInput = {
    id?: number
    institusi: string
    alamat: string
    telepon: string
    fax: string
    email: string
    namaPeserta: string
    telPeserta: string
    emailPeserta: string
    pelatihan: string
  }

  export type DataPendaftarUpdateManyMutationInput = {
    institusi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    namaPeserta?: StringFieldUpdateOperationsInput | string
    telPeserta?: StringFieldUpdateOperationsInput | string
    emailPeserta?: StringFieldUpdateOperationsInput | string
    pelatihan?: StringFieldUpdateOperationsInput | string
  }

  export type DataPendaftarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    institusi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    namaPeserta?: StringFieldUpdateOperationsInput | string
    telPeserta?: StringFieldUpdateOperationsInput | string
    emailPeserta?: StringFieldUpdateOperationsInput | string
    pelatihan?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JadwalOrderByRelevanceInput = {
    fields: JadwalOrderByRelevanceFieldEnum | JadwalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JadwalCountOrderByAggregateInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrder
    tanggal?: SortOrder
  }

  export type JadwalAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
  }

  export type JadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrder
    tanggal?: SortOrder
  }

  export type JadwalMinOrderByAggregateInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrder
    tanggal?: SortOrder
  }

  export type JadwalSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DataPendaftarOrderByRelevanceInput = {
    fields: DataPendaftarOrderByRelevanceFieldEnum | DataPendaftarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataPendaftarCountOrderByAggregateInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
  }

  export type DataPendaftarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DataPendaftarMaxOrderByAggregateInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
  }

  export type DataPendaftarMinOrderByAggregateInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
  }

  export type DataPendaftarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}