
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Prefecture
 * 
 */
export type Prefecture = $Result.DefaultSelection<Prisma.$PrefecturePayload>
/**
 * Model LearningGoal
 * 
 */
export type LearningGoal = $Result.DefaultSelection<Prisma.$LearningGoalPayload>
/**
 * Model LearningDailyRecord
 * 
 */
export type LearningDailyRecord = $Result.DefaultSelection<Prisma.$LearningDailyRecordPayload>
/**
 * Model LearningWeekRecord
 * 
 */
export type LearningWeekRecord = $Result.DefaultSelection<Prisma.$LearningWeekRecordPayload>
/**
 * Model LearningMonthRecord
 * 
 */
export type LearningMonthRecord = $Result.DefaultSelection<Prisma.$LearningMonthRecordPayload>
/**
 * Model LearningRecord
 * 
 */
export type LearningRecord = $Result.DefaultSelection<Prisma.$LearningRecordPayload>
/**
 * Model LearningRecordCategory
 * 
 */
export type LearningRecordCategory = $Result.DefaultSelection<Prisma.$LearningRecordCategoryPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SnsPostRecord
 * 
 */
export type SnsPostRecord = $Result.DefaultSelection<Prisma.$SnsPostRecordPayload>
/**
 * Model SnsPostsTone
 * 
 */
export type SnsPostsTone = $Result.DefaultSelection<Prisma.$SnsPostsTonePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prefecture`: Exposes CRUD operations for the **Prefecture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prefectures
    * const prefectures = await prisma.prefecture.findMany()
    * ```
    */
  get prefecture(): Prisma.PrefectureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningGoal`: Exposes CRUD operations for the **LearningGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningGoals
    * const learningGoals = await prisma.learningGoal.findMany()
    * ```
    */
  get learningGoal(): Prisma.LearningGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningDailyRecord`: Exposes CRUD operations for the **LearningDailyRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningDailyRecords
    * const learningDailyRecords = await prisma.learningDailyRecord.findMany()
    * ```
    */
  get learningDailyRecord(): Prisma.LearningDailyRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningWeekRecord`: Exposes CRUD operations for the **LearningWeekRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningWeekRecords
    * const learningWeekRecords = await prisma.learningWeekRecord.findMany()
    * ```
    */
  get learningWeekRecord(): Prisma.LearningWeekRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningMonthRecord`: Exposes CRUD operations for the **LearningMonthRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningMonthRecords
    * const learningMonthRecords = await prisma.learningMonthRecord.findMany()
    * ```
    */
  get learningMonthRecord(): Prisma.LearningMonthRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningRecord`: Exposes CRUD operations for the **LearningRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningRecords
    * const learningRecords = await prisma.learningRecord.findMany()
    * ```
    */
  get learningRecord(): Prisma.LearningRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningRecordCategory`: Exposes CRUD operations for the **LearningRecordCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningRecordCategories
    * const learningRecordCategories = await prisma.learningRecordCategory.findMany()
    * ```
    */
  get learningRecordCategory(): Prisma.LearningRecordCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snsPostRecord`: Exposes CRUD operations for the **SnsPostRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SnsPostRecords
    * const snsPostRecords = await prisma.snsPostRecord.findMany()
    * ```
    */
  get snsPostRecord(): Prisma.SnsPostRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snsPostsTone`: Exposes CRUD operations for the **SnsPostsTone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SnsPostsTones
    * const snsPostsTones = await prisma.snsPostsTone.findMany()
    * ```
    */
  get snsPostsTone(): Prisma.SnsPostsToneDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Profile: 'Profile',
    Prefecture: 'Prefecture',
    LearningGoal: 'LearningGoal',
    LearningDailyRecord: 'LearningDailyRecord',
    LearningWeekRecord: 'LearningWeekRecord',
    LearningMonthRecord: 'LearningMonthRecord',
    LearningRecord: 'LearningRecord',
    LearningRecordCategory: 'LearningRecordCategory',
    Category: 'Category',
    SnsPostRecord: 'SnsPostRecord',
    SnsPostsTone: 'SnsPostsTone'
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
      modelProps: "user" | "profile" | "prefecture" | "learningGoal" | "learningDailyRecord" | "learningWeekRecord" | "learningMonthRecord" | "learningRecord" | "learningRecordCategory" | "category" | "snsPostRecord" | "snsPostsTone"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Prefecture: {
        payload: Prisma.$PrefecturePayload<ExtArgs>
        fields: Prisma.PrefectureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrefectureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrefectureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>
          }
          findFirst: {
            args: Prisma.PrefectureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrefectureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>
          }
          findMany: {
            args: Prisma.PrefectureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>[]
          }
          create: {
            args: Prisma.PrefectureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>
          }
          createMany: {
            args: Prisma.PrefectureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrefectureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>[]
          }
          delete: {
            args: Prisma.PrefectureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>
          }
          update: {
            args: Prisma.PrefectureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>
          }
          deleteMany: {
            args: Prisma.PrefectureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrefectureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrefectureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>[]
          }
          upsert: {
            args: Prisma.PrefectureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrefecturePayload>
          }
          aggregate: {
            args: Prisma.PrefectureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrefecture>
          }
          groupBy: {
            args: Prisma.PrefectureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrefectureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrefectureCountArgs<ExtArgs>
            result: $Utils.Optional<PrefectureCountAggregateOutputType> | number
          }
        }
      }
      LearningGoal: {
        payload: Prisma.$LearningGoalPayload<ExtArgs>
        fields: Prisma.LearningGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>
          }
          findFirst: {
            args: Prisma.LearningGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>
          }
          findMany: {
            args: Prisma.LearningGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>[]
          }
          create: {
            args: Prisma.LearningGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>
          }
          createMany: {
            args: Prisma.LearningGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>[]
          }
          delete: {
            args: Prisma.LearningGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>
          }
          update: {
            args: Prisma.LearningGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>
          }
          deleteMany: {
            args: Prisma.LearningGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningGoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>[]
          }
          upsert: {
            args: Prisma.LearningGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningGoalPayload>
          }
          aggregate: {
            args: Prisma.LearningGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningGoal>
          }
          groupBy: {
            args: Prisma.LearningGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningGoalCountArgs<ExtArgs>
            result: $Utils.Optional<LearningGoalCountAggregateOutputType> | number
          }
        }
      }
      LearningDailyRecord: {
        payload: Prisma.$LearningDailyRecordPayload<ExtArgs>
        fields: Prisma.LearningDailyRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningDailyRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningDailyRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>
          }
          findFirst: {
            args: Prisma.LearningDailyRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningDailyRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>
          }
          findMany: {
            args: Prisma.LearningDailyRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>[]
          }
          create: {
            args: Prisma.LearningDailyRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>
          }
          createMany: {
            args: Prisma.LearningDailyRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningDailyRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>[]
          }
          delete: {
            args: Prisma.LearningDailyRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>
          }
          update: {
            args: Prisma.LearningDailyRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>
          }
          deleteMany: {
            args: Prisma.LearningDailyRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningDailyRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningDailyRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>[]
          }
          upsert: {
            args: Prisma.LearningDailyRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningDailyRecordPayload>
          }
          aggregate: {
            args: Prisma.LearningDailyRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningDailyRecord>
          }
          groupBy: {
            args: Prisma.LearningDailyRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningDailyRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningDailyRecordCountArgs<ExtArgs>
            result: $Utils.Optional<LearningDailyRecordCountAggregateOutputType> | number
          }
        }
      }
      LearningWeekRecord: {
        payload: Prisma.$LearningWeekRecordPayload<ExtArgs>
        fields: Prisma.LearningWeekRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningWeekRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningWeekRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>
          }
          findFirst: {
            args: Prisma.LearningWeekRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningWeekRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>
          }
          findMany: {
            args: Prisma.LearningWeekRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>[]
          }
          create: {
            args: Prisma.LearningWeekRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>
          }
          createMany: {
            args: Prisma.LearningWeekRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningWeekRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>[]
          }
          delete: {
            args: Prisma.LearningWeekRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>
          }
          update: {
            args: Prisma.LearningWeekRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>
          }
          deleteMany: {
            args: Prisma.LearningWeekRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningWeekRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningWeekRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>[]
          }
          upsert: {
            args: Prisma.LearningWeekRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningWeekRecordPayload>
          }
          aggregate: {
            args: Prisma.LearningWeekRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningWeekRecord>
          }
          groupBy: {
            args: Prisma.LearningWeekRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningWeekRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningWeekRecordCountArgs<ExtArgs>
            result: $Utils.Optional<LearningWeekRecordCountAggregateOutputType> | number
          }
        }
      }
      LearningMonthRecord: {
        payload: Prisma.$LearningMonthRecordPayload<ExtArgs>
        fields: Prisma.LearningMonthRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningMonthRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningMonthRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>
          }
          findFirst: {
            args: Prisma.LearningMonthRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningMonthRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>
          }
          findMany: {
            args: Prisma.LearningMonthRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>[]
          }
          create: {
            args: Prisma.LearningMonthRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>
          }
          createMany: {
            args: Prisma.LearningMonthRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningMonthRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>[]
          }
          delete: {
            args: Prisma.LearningMonthRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>
          }
          update: {
            args: Prisma.LearningMonthRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>
          }
          deleteMany: {
            args: Prisma.LearningMonthRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningMonthRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningMonthRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>[]
          }
          upsert: {
            args: Prisma.LearningMonthRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningMonthRecordPayload>
          }
          aggregate: {
            args: Prisma.LearningMonthRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningMonthRecord>
          }
          groupBy: {
            args: Prisma.LearningMonthRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningMonthRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningMonthRecordCountArgs<ExtArgs>
            result: $Utils.Optional<LearningMonthRecordCountAggregateOutputType> | number
          }
        }
      }
      LearningRecord: {
        payload: Prisma.$LearningRecordPayload<ExtArgs>
        fields: Prisma.LearningRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>
          }
          findFirst: {
            args: Prisma.LearningRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>
          }
          findMany: {
            args: Prisma.LearningRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>[]
          }
          create: {
            args: Prisma.LearningRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>
          }
          createMany: {
            args: Prisma.LearningRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>[]
          }
          delete: {
            args: Prisma.LearningRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>
          }
          update: {
            args: Prisma.LearningRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>
          }
          deleteMany: {
            args: Prisma.LearningRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>[]
          }
          upsert: {
            args: Prisma.LearningRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordPayload>
          }
          aggregate: {
            args: Prisma.LearningRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningRecord>
          }
          groupBy: {
            args: Prisma.LearningRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningRecordCountArgs<ExtArgs>
            result: $Utils.Optional<LearningRecordCountAggregateOutputType> | number
          }
        }
      }
      LearningRecordCategory: {
        payload: Prisma.$LearningRecordCategoryPayload<ExtArgs>
        fields: Prisma.LearningRecordCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningRecordCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningRecordCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>
          }
          findFirst: {
            args: Prisma.LearningRecordCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningRecordCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>
          }
          findMany: {
            args: Prisma.LearningRecordCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>[]
          }
          create: {
            args: Prisma.LearningRecordCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>
          }
          createMany: {
            args: Prisma.LearningRecordCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningRecordCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>[]
          }
          delete: {
            args: Prisma.LearningRecordCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>
          }
          update: {
            args: Prisma.LearningRecordCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>
          }
          deleteMany: {
            args: Prisma.LearningRecordCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningRecordCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningRecordCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>[]
          }
          upsert: {
            args: Prisma.LearningRecordCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningRecordCategoryPayload>
          }
          aggregate: {
            args: Prisma.LearningRecordCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningRecordCategory>
          }
          groupBy: {
            args: Prisma.LearningRecordCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningRecordCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningRecordCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<LearningRecordCategoryCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SnsPostRecord: {
        payload: Prisma.$SnsPostRecordPayload<ExtArgs>
        fields: Prisma.SnsPostRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnsPostRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnsPostRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>
          }
          findFirst: {
            args: Prisma.SnsPostRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnsPostRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>
          }
          findMany: {
            args: Prisma.SnsPostRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>[]
          }
          create: {
            args: Prisma.SnsPostRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>
          }
          createMany: {
            args: Prisma.SnsPostRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnsPostRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>[]
          }
          delete: {
            args: Prisma.SnsPostRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>
          }
          update: {
            args: Prisma.SnsPostRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>
          }
          deleteMany: {
            args: Prisma.SnsPostRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnsPostRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnsPostRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>[]
          }
          upsert: {
            args: Prisma.SnsPostRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostRecordPayload>
          }
          aggregate: {
            args: Prisma.SnsPostRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnsPostRecord>
          }
          groupBy: {
            args: Prisma.SnsPostRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnsPostRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnsPostRecordCountArgs<ExtArgs>
            result: $Utils.Optional<SnsPostRecordCountAggregateOutputType> | number
          }
        }
      }
      SnsPostsTone: {
        payload: Prisma.$SnsPostsTonePayload<ExtArgs>
        fields: Prisma.SnsPostsToneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnsPostsToneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnsPostsToneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>
          }
          findFirst: {
            args: Prisma.SnsPostsToneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnsPostsToneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>
          }
          findMany: {
            args: Prisma.SnsPostsToneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>[]
          }
          create: {
            args: Prisma.SnsPostsToneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>
          }
          createMany: {
            args: Prisma.SnsPostsToneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnsPostsToneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>[]
          }
          delete: {
            args: Prisma.SnsPostsToneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>
          }
          update: {
            args: Prisma.SnsPostsToneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>
          }
          deleteMany: {
            args: Prisma.SnsPostsToneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnsPostsToneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnsPostsToneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>[]
          }
          upsert: {
            args: Prisma.SnsPostsToneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnsPostsTonePayload>
          }
          aggregate: {
            args: Prisma.SnsPostsToneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnsPostsTone>
          }
          groupBy: {
            args: Prisma.SnsPostsToneGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnsPostsToneGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnsPostsToneCountArgs<ExtArgs>
            result: $Utils.Optional<SnsPostsToneCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    profile?: ProfileOmit
    prefecture?: PrefectureOmit
    learningGoal?: LearningGoalOmit
    learningDailyRecord?: LearningDailyRecordOmit
    learningWeekRecord?: LearningWeekRecordOmit
    learningMonthRecord?: LearningMonthRecordOmit
    learningRecord?: LearningRecordOmit
    learningRecordCategory?: LearningRecordCategoryOmit
    category?: CategoryOmit
    snsPostRecord?: SnsPostRecordOmit
    snsPostsTone?: SnsPostsToneOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    learningDailyRecords: number
    learningWeekRecords: number
    learningMonthRecords: number
    learningRecords: number
    snsPostRecords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningDailyRecords?: boolean | UserCountOutputTypeCountLearningDailyRecordsArgs
    learningWeekRecords?: boolean | UserCountOutputTypeCountLearningWeekRecordsArgs
    learningMonthRecords?: boolean | UserCountOutputTypeCountLearningMonthRecordsArgs
    learningRecords?: boolean | UserCountOutputTypeCountLearningRecordsArgs
    snsPostRecords?: boolean | UserCountOutputTypeCountSnsPostRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearningDailyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningDailyRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearningWeekRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningWeekRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearningMonthRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningMonthRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearningRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSnsPostRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnsPostRecordWhereInput
  }


  /**
   * Count Type PrefectureCountOutputType
   */

  export type PrefectureCountOutputType = {
    children: number
  }

  export type PrefectureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | PrefectureCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * PrefectureCountOutputType without action
   */
  export type PrefectureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrefectureCountOutputType
     */
    select?: PrefectureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrefectureCountOutputType without action
   */
  export type PrefectureCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrefectureWhereInput
  }


  /**
   * Count Type LearningRecordCountOutputType
   */

  export type LearningRecordCountOutputType = {
    learningRecordCategories: number
  }

  export type LearningRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningRecordCategories?: boolean | LearningRecordCountOutputTypeCountLearningRecordCategoriesArgs
  }

  // Custom InputTypes
  /**
   * LearningRecordCountOutputType without action
   */
  export type LearningRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCountOutputType
     */
    select?: LearningRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LearningRecordCountOutputType without action
   */
  export type LearningRecordCountOutputTypeCountLearningRecordCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningRecordCategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    learningRecordCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningRecordCategories?: boolean | CategoryCountOutputTypeCountLearningRecordCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountLearningRecordCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningRecordCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    supabaseUserId: string | null
    roleId: number | null
    nickName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    supabaseUserId: string | null
    roleId: number | null
    nickName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    supabaseUserId: number
    roleId: number
    nickName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    supabaseUserId?: true
    roleId?: true
    nickName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    supabaseUserId?: true
    roleId?: true
    nickName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    supabaseUserId?: true
    roleId?: true
    nickName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    roleId?: boolean
    nickName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    learningGoals?: boolean | User$learningGoalsArgs<ExtArgs>
    learningDailyRecords?: boolean | User$learningDailyRecordsArgs<ExtArgs>
    learningWeekRecords?: boolean | User$learningWeekRecordsArgs<ExtArgs>
    learningMonthRecords?: boolean | User$learningMonthRecordsArgs<ExtArgs>
    learningRecords?: boolean | User$learningRecordsArgs<ExtArgs>
    snsPostRecords?: boolean | User$snsPostRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    roleId?: boolean
    nickName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    roleId?: boolean
    nickName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    supabaseUserId?: boolean
    roleId?: boolean
    nickName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseUserId" | "roleId" | "nickName" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    learningGoals?: boolean | User$learningGoalsArgs<ExtArgs>
    learningDailyRecords?: boolean | User$learningDailyRecordsArgs<ExtArgs>
    learningWeekRecords?: boolean | User$learningWeekRecordsArgs<ExtArgs>
    learningMonthRecords?: boolean | User$learningMonthRecordsArgs<ExtArgs>
    learningRecords?: boolean | User$learningRecordsArgs<ExtArgs>
    snsPostRecords?: boolean | User$snsPostRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      learningGoals: Prisma.$LearningGoalPayload<ExtArgs> | null
      learningDailyRecords: Prisma.$LearningDailyRecordPayload<ExtArgs>[]
      learningWeekRecords: Prisma.$LearningWeekRecordPayload<ExtArgs>[]
      learningMonthRecords: Prisma.$LearningMonthRecordPayload<ExtArgs>[]
      learningRecords: Prisma.$LearningRecordPayload<ExtArgs>[]
      snsPostRecords: Prisma.$SnsPostRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supabaseUserId: string
      roleId: number
      nickName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    learningGoals<T extends User$learningGoalsArgs<ExtArgs> = {}>(args?: Subset<T, User$learningGoalsArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    learningDailyRecords<T extends User$learningDailyRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$learningDailyRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learningWeekRecords<T extends User$learningWeekRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$learningWeekRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learningMonthRecords<T extends User$learningMonthRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$learningMonthRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learningRecords<T extends User$learningRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$learningRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snsPostRecords<T extends User$snsPostRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$snsPostRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly supabaseUserId: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly nickName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.learningGoals
   */
  export type User$learningGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    where?: LearningGoalWhereInput
  }

  /**
   * User.learningDailyRecords
   */
  export type User$learningDailyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    where?: LearningDailyRecordWhereInput
    orderBy?: LearningDailyRecordOrderByWithRelationInput | LearningDailyRecordOrderByWithRelationInput[]
    cursor?: LearningDailyRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningDailyRecordScalarFieldEnum | LearningDailyRecordScalarFieldEnum[]
  }

  /**
   * User.learningWeekRecords
   */
  export type User$learningWeekRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    where?: LearningWeekRecordWhereInput
    orderBy?: LearningWeekRecordOrderByWithRelationInput | LearningWeekRecordOrderByWithRelationInput[]
    cursor?: LearningWeekRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningWeekRecordScalarFieldEnum | LearningWeekRecordScalarFieldEnum[]
  }

  /**
   * User.learningMonthRecords
   */
  export type User$learningMonthRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    where?: LearningMonthRecordWhereInput
    orderBy?: LearningMonthRecordOrderByWithRelationInput | LearningMonthRecordOrderByWithRelationInput[]
    cursor?: LearningMonthRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningMonthRecordScalarFieldEnum | LearningMonthRecordScalarFieldEnum[]
  }

  /**
   * User.learningRecords
   */
  export type User$learningRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    where?: LearningRecordWhereInput
    orderBy?: LearningRecordOrderByWithRelationInput | LearningRecordOrderByWithRelationInput[]
    cursor?: LearningRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningRecordScalarFieldEnum | LearningRecordScalarFieldEnum[]
  }

  /**
   * User.snsPostRecords
   */
  export type User$snsPostRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    where?: SnsPostRecordWhereInput
    orderBy?: SnsPostRecordOrderByWithRelationInput | SnsPostRecordOrderByWithRelationInput[]
    cursor?: SnsPostRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnsPostRecordScalarFieldEnum | SnsPostRecordScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    prefecture: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    prefecture: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    profilePicture: string | null
    bio: string | null
    phoneNumber: string | null
    socialLinks: string | null
    prefecture: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    profilePicture: string | null
    bio: string | null
    phoneNumber: string | null
    socialLinks: string | null
    prefecture: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    dateOfBirth: number
    gender: number
    profilePicture: number
    bio: number
    phoneNumber: number
    socialLinks: number
    prefecture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    prefecture?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
    prefecture?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    profilePicture?: true
    bio?: true
    phoneNumber?: true
    socialLinks?: true
    prefecture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    profilePicture?: true
    bio?: true
    phoneNumber?: true
    socialLinks?: true
    prefecture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    profilePicture?: true
    bio?: true
    phoneNumber?: true
    socialLinks?: true
    prefecture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    userId: number
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    profilePicture: string | null
    bio: string | null
    phoneNumber: string | null
    socialLinks: string | null
    prefecture: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    profilePicture?: boolean
    bio?: boolean
    phoneNumber?: boolean
    socialLinks?: boolean
    prefecture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    profilePicture?: boolean
    bio?: boolean
    phoneNumber?: boolean
    socialLinks?: boolean
    prefecture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    profilePicture?: boolean
    bio?: boolean
    phoneNumber?: boolean
    socialLinks?: boolean
    prefecture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    profilePicture?: boolean
    bio?: boolean
    phoneNumber?: boolean
    socialLinks?: boolean
    prefecture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "dateOfBirth" | "gender" | "profilePicture" | "bio" | "phoneNumber" | "socialLinks" | "prefecture" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      firstName: string | null
      lastName: string | null
      dateOfBirth: Date | null
      gender: string | null
      profilePicture: string | null
      bio: string | null
      phoneNumber: string | null
      socialLinks: string | null
      prefecture: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly dateOfBirth: FieldRef<"Profile", 'DateTime'>
    readonly gender: FieldRef<"Profile", 'String'>
    readonly profilePicture: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly phoneNumber: FieldRef<"Profile", 'String'>
    readonly socialLinks: FieldRef<"Profile", 'String'>
    readonly prefecture: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Prefecture
   */

  export type AggregatePrefecture = {
    _count: PrefectureCountAggregateOutputType | null
    _avg: PrefectureAvgAggregateOutputType | null
    _sum: PrefectureSumAggregateOutputType | null
    _min: PrefectureMinAggregateOutputType | null
    _max: PrefectureMaxAggregateOutputType | null
  }

  export type PrefectureAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type PrefectureSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type PrefectureMinAggregateOutputType = {
    id: number | null
    name: string | null
    parentId: number | null
  }

  export type PrefectureMaxAggregateOutputType = {
    id: number | null
    name: string | null
    parentId: number | null
  }

  export type PrefectureCountAggregateOutputType = {
    id: number
    name: number
    parentId: number
    _all: number
  }


  export type PrefectureAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type PrefectureSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type PrefectureMinAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
  }

  export type PrefectureMaxAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
  }

  export type PrefectureCountAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    _all?: true
  }

  export type PrefectureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prefecture to aggregate.
     */
    where?: PrefectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prefectures to fetch.
     */
    orderBy?: PrefectureOrderByWithRelationInput | PrefectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrefectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prefectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prefectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prefectures
    **/
    _count?: true | PrefectureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrefectureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrefectureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrefectureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrefectureMaxAggregateInputType
  }

  export type GetPrefectureAggregateType<T extends PrefectureAggregateArgs> = {
        [P in keyof T & keyof AggregatePrefecture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrefecture[P]>
      : GetScalarType<T[P], AggregatePrefecture[P]>
  }




  export type PrefectureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrefectureWhereInput
    orderBy?: PrefectureOrderByWithAggregationInput | PrefectureOrderByWithAggregationInput[]
    by: PrefectureScalarFieldEnum[] | PrefectureScalarFieldEnum
    having?: PrefectureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrefectureCountAggregateInputType | true
    _avg?: PrefectureAvgAggregateInputType
    _sum?: PrefectureSumAggregateInputType
    _min?: PrefectureMinAggregateInputType
    _max?: PrefectureMaxAggregateInputType
  }

  export type PrefectureGroupByOutputType = {
    id: number
    name: string
    parentId: number | null
    _count: PrefectureCountAggregateOutputType | null
    _avg: PrefectureAvgAggregateOutputType | null
    _sum: PrefectureSumAggregateOutputType | null
    _min: PrefectureMinAggregateOutputType | null
    _max: PrefectureMaxAggregateOutputType | null
  }

  type GetPrefectureGroupByPayload<T extends PrefectureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrefectureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrefectureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrefectureGroupByOutputType[P]>
            : GetScalarType<T[P], PrefectureGroupByOutputType[P]>
        }
      >
    >


  export type PrefectureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    parent?: boolean | Prefecture$parentArgs<ExtArgs>
    children?: boolean | Prefecture$childrenArgs<ExtArgs>
    _count?: boolean | PrefectureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prefecture"]>

  export type PrefectureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    parent?: boolean | Prefecture$parentArgs<ExtArgs>
  }, ExtArgs["result"]["prefecture"]>

  export type PrefectureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    parent?: boolean | Prefecture$parentArgs<ExtArgs>
  }, ExtArgs["result"]["prefecture"]>

  export type PrefectureSelectScalar = {
    id?: boolean
    name?: boolean
    parentId?: boolean
  }

  export type PrefectureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parentId", ExtArgs["result"]["prefecture"]>
  export type PrefectureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Prefecture$parentArgs<ExtArgs>
    children?: boolean | Prefecture$childrenArgs<ExtArgs>
    _count?: boolean | PrefectureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrefectureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Prefecture$parentArgs<ExtArgs>
  }
  export type PrefectureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Prefecture$parentArgs<ExtArgs>
  }

  export type $PrefecturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prefecture"
    objects: {
      parent: Prisma.$PrefecturePayload<ExtArgs> | null
      children: Prisma.$PrefecturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      parentId: number | null
    }, ExtArgs["result"]["prefecture"]>
    composites: {}
  }

  type PrefectureGetPayload<S extends boolean | null | undefined | PrefectureDefaultArgs> = $Result.GetResult<Prisma.$PrefecturePayload, S>

  type PrefectureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrefectureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrefectureCountAggregateInputType | true
    }

  export interface PrefectureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prefecture'], meta: { name: 'Prefecture' } }
    /**
     * Find zero or one Prefecture that matches the filter.
     * @param {PrefectureFindUniqueArgs} args - Arguments to find a Prefecture
     * @example
     * // Get one Prefecture
     * const prefecture = await prisma.prefecture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrefectureFindUniqueArgs>(args: SelectSubset<T, PrefectureFindUniqueArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prefecture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrefectureFindUniqueOrThrowArgs} args - Arguments to find a Prefecture
     * @example
     * // Get one Prefecture
     * const prefecture = await prisma.prefecture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrefectureFindUniqueOrThrowArgs>(args: SelectSubset<T, PrefectureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prefecture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrefectureFindFirstArgs} args - Arguments to find a Prefecture
     * @example
     * // Get one Prefecture
     * const prefecture = await prisma.prefecture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrefectureFindFirstArgs>(args?: SelectSubset<T, PrefectureFindFirstArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prefecture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrefectureFindFirstOrThrowArgs} args - Arguments to find a Prefecture
     * @example
     * // Get one Prefecture
     * const prefecture = await prisma.prefecture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrefectureFindFirstOrThrowArgs>(args?: SelectSubset<T, PrefectureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prefectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrefectureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prefectures
     * const prefectures = await prisma.prefecture.findMany()
     * 
     * // Get first 10 Prefectures
     * const prefectures = await prisma.prefecture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prefectureWithIdOnly = await prisma.prefecture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrefectureFindManyArgs>(args?: SelectSubset<T, PrefectureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prefecture.
     * @param {PrefectureCreateArgs} args - Arguments to create a Prefecture.
     * @example
     * // Create one Prefecture
     * const Prefecture = await prisma.prefecture.create({
     *   data: {
     *     // ... data to create a Prefecture
     *   }
     * })
     * 
     */
    create<T extends PrefectureCreateArgs>(args: SelectSubset<T, PrefectureCreateArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prefectures.
     * @param {PrefectureCreateManyArgs} args - Arguments to create many Prefectures.
     * @example
     * // Create many Prefectures
     * const prefecture = await prisma.prefecture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrefectureCreateManyArgs>(args?: SelectSubset<T, PrefectureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prefectures and returns the data saved in the database.
     * @param {PrefectureCreateManyAndReturnArgs} args - Arguments to create many Prefectures.
     * @example
     * // Create many Prefectures
     * const prefecture = await prisma.prefecture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prefectures and only return the `id`
     * const prefectureWithIdOnly = await prisma.prefecture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrefectureCreateManyAndReturnArgs>(args?: SelectSubset<T, PrefectureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prefecture.
     * @param {PrefectureDeleteArgs} args - Arguments to delete one Prefecture.
     * @example
     * // Delete one Prefecture
     * const Prefecture = await prisma.prefecture.delete({
     *   where: {
     *     // ... filter to delete one Prefecture
     *   }
     * })
     * 
     */
    delete<T extends PrefectureDeleteArgs>(args: SelectSubset<T, PrefectureDeleteArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prefecture.
     * @param {PrefectureUpdateArgs} args - Arguments to update one Prefecture.
     * @example
     * // Update one Prefecture
     * const prefecture = await prisma.prefecture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrefectureUpdateArgs>(args: SelectSubset<T, PrefectureUpdateArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prefectures.
     * @param {PrefectureDeleteManyArgs} args - Arguments to filter Prefectures to delete.
     * @example
     * // Delete a few Prefectures
     * const { count } = await prisma.prefecture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrefectureDeleteManyArgs>(args?: SelectSubset<T, PrefectureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prefectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrefectureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prefectures
     * const prefecture = await prisma.prefecture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrefectureUpdateManyArgs>(args: SelectSubset<T, PrefectureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prefectures and returns the data updated in the database.
     * @param {PrefectureUpdateManyAndReturnArgs} args - Arguments to update many Prefectures.
     * @example
     * // Update many Prefectures
     * const prefecture = await prisma.prefecture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prefectures and only return the `id`
     * const prefectureWithIdOnly = await prisma.prefecture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrefectureUpdateManyAndReturnArgs>(args: SelectSubset<T, PrefectureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prefecture.
     * @param {PrefectureUpsertArgs} args - Arguments to update or create a Prefecture.
     * @example
     * // Update or create a Prefecture
     * const prefecture = await prisma.prefecture.upsert({
     *   create: {
     *     // ... data to create a Prefecture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prefecture we want to update
     *   }
     * })
     */
    upsert<T extends PrefectureUpsertArgs>(args: SelectSubset<T, PrefectureUpsertArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prefectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrefectureCountArgs} args - Arguments to filter Prefectures to count.
     * @example
     * // Count the number of Prefectures
     * const count = await prisma.prefecture.count({
     *   where: {
     *     // ... the filter for the Prefectures we want to count
     *   }
     * })
    **/
    count<T extends PrefectureCountArgs>(
      args?: Subset<T, PrefectureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrefectureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prefecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrefectureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrefectureAggregateArgs>(args: Subset<T, PrefectureAggregateArgs>): Prisma.PrismaPromise<GetPrefectureAggregateType<T>>

    /**
     * Group by Prefecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrefectureGroupByArgs} args - Group by arguments.
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
      T extends PrefectureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrefectureGroupByArgs['orderBy'] }
        : { orderBy?: PrefectureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrefectureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrefectureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prefecture model
   */
  readonly fields: PrefectureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prefecture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrefectureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Prefecture$parentArgs<ExtArgs> = {}>(args?: Subset<T, Prefecture$parentArgs<ExtArgs>>): Prisma__PrefectureClient<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Prefecture$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Prefecture$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrefecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prefecture model
   */
  interface PrefectureFieldRefs {
    readonly id: FieldRef<"Prefecture", 'Int'>
    readonly name: FieldRef<"Prefecture", 'String'>
    readonly parentId: FieldRef<"Prefecture", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prefecture findUnique
   */
  export type PrefectureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * Filter, which Prefecture to fetch.
     */
    where: PrefectureWhereUniqueInput
  }

  /**
   * Prefecture findUniqueOrThrow
   */
  export type PrefectureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * Filter, which Prefecture to fetch.
     */
    where: PrefectureWhereUniqueInput
  }

  /**
   * Prefecture findFirst
   */
  export type PrefectureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * Filter, which Prefecture to fetch.
     */
    where?: PrefectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prefectures to fetch.
     */
    orderBy?: PrefectureOrderByWithRelationInput | PrefectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prefectures.
     */
    cursor?: PrefectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prefectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prefectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prefectures.
     */
    distinct?: PrefectureScalarFieldEnum | PrefectureScalarFieldEnum[]
  }

  /**
   * Prefecture findFirstOrThrow
   */
  export type PrefectureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * Filter, which Prefecture to fetch.
     */
    where?: PrefectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prefectures to fetch.
     */
    orderBy?: PrefectureOrderByWithRelationInput | PrefectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prefectures.
     */
    cursor?: PrefectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prefectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prefectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prefectures.
     */
    distinct?: PrefectureScalarFieldEnum | PrefectureScalarFieldEnum[]
  }

  /**
   * Prefecture findMany
   */
  export type PrefectureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * Filter, which Prefectures to fetch.
     */
    where?: PrefectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prefectures to fetch.
     */
    orderBy?: PrefectureOrderByWithRelationInput | PrefectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prefectures.
     */
    cursor?: PrefectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prefectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prefectures.
     */
    skip?: number
    distinct?: PrefectureScalarFieldEnum | PrefectureScalarFieldEnum[]
  }

  /**
   * Prefecture create
   */
  export type PrefectureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * The data needed to create a Prefecture.
     */
    data: XOR<PrefectureCreateInput, PrefectureUncheckedCreateInput>
  }

  /**
   * Prefecture createMany
   */
  export type PrefectureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prefectures.
     */
    data: PrefectureCreateManyInput | PrefectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prefecture createManyAndReturn
   */
  export type PrefectureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * The data used to create many Prefectures.
     */
    data: PrefectureCreateManyInput | PrefectureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prefecture update
   */
  export type PrefectureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * The data needed to update a Prefecture.
     */
    data: XOR<PrefectureUpdateInput, PrefectureUncheckedUpdateInput>
    /**
     * Choose, which Prefecture to update.
     */
    where: PrefectureWhereUniqueInput
  }

  /**
   * Prefecture updateMany
   */
  export type PrefectureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prefectures.
     */
    data: XOR<PrefectureUpdateManyMutationInput, PrefectureUncheckedUpdateManyInput>
    /**
     * Filter which Prefectures to update
     */
    where?: PrefectureWhereInput
    /**
     * Limit how many Prefectures to update.
     */
    limit?: number
  }

  /**
   * Prefecture updateManyAndReturn
   */
  export type PrefectureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * The data used to update Prefectures.
     */
    data: XOR<PrefectureUpdateManyMutationInput, PrefectureUncheckedUpdateManyInput>
    /**
     * Filter which Prefectures to update
     */
    where?: PrefectureWhereInput
    /**
     * Limit how many Prefectures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prefecture upsert
   */
  export type PrefectureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * The filter to search for the Prefecture to update in case it exists.
     */
    where: PrefectureWhereUniqueInput
    /**
     * In case the Prefecture found by the `where` argument doesn't exist, create a new Prefecture with this data.
     */
    create: XOR<PrefectureCreateInput, PrefectureUncheckedCreateInput>
    /**
     * In case the Prefecture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrefectureUpdateInput, PrefectureUncheckedUpdateInput>
  }

  /**
   * Prefecture delete
   */
  export type PrefectureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    /**
     * Filter which Prefecture to delete.
     */
    where: PrefectureWhereUniqueInput
  }

  /**
   * Prefecture deleteMany
   */
  export type PrefectureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prefectures to delete
     */
    where?: PrefectureWhereInput
    /**
     * Limit how many Prefectures to delete.
     */
    limit?: number
  }

  /**
   * Prefecture.parent
   */
  export type Prefecture$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    where?: PrefectureWhereInput
  }

  /**
   * Prefecture.children
   */
  export type Prefecture$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
    where?: PrefectureWhereInput
    orderBy?: PrefectureOrderByWithRelationInput | PrefectureOrderByWithRelationInput[]
    cursor?: PrefectureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrefectureScalarFieldEnum | PrefectureScalarFieldEnum[]
  }

  /**
   * Prefecture without action
   */
  export type PrefectureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prefecture
     */
    select?: PrefectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prefecture
     */
    omit?: PrefectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrefectureInclude<ExtArgs> | null
  }


  /**
   * Model LearningGoal
   */

  export type AggregateLearningGoal = {
    _count: LearningGoalCountAggregateOutputType | null
    _avg: LearningGoalAvgAggregateOutputType | null
    _sum: LearningGoalSumAggregateOutputType | null
    _min: LearningGoalMinAggregateOutputType | null
    _max: LearningGoalMaxAggregateOutputType | null
  }

  export type LearningGoalAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    targetTime: number | null
  }

  export type LearningGoalSumAggregateOutputType = {
    id: number | null
    userId: number | null
    targetTime: number | null
  }

  export type LearningGoalMinAggregateOutputType = {
    id: number | null
    userId: number | null
    targetTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningGoalMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    targetTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningGoalCountAggregateOutputType = {
    id: number
    userId: number
    targetTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningGoalAvgAggregateInputType = {
    id?: true
    userId?: true
    targetTime?: true
  }

  export type LearningGoalSumAggregateInputType = {
    id?: true
    userId?: true
    targetTime?: true
  }

  export type LearningGoalMinAggregateInputType = {
    id?: true
    userId?: true
    targetTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningGoalMaxAggregateInputType = {
    id?: true
    userId?: true
    targetTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningGoalCountAggregateInputType = {
    id?: true
    userId?: true
    targetTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningGoal to aggregate.
     */
    where?: LearningGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningGoals to fetch.
     */
    orderBy?: LearningGoalOrderByWithRelationInput | LearningGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningGoals
    **/
    _count?: true | LearningGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningGoalMaxAggregateInputType
  }

  export type GetLearningGoalAggregateType<T extends LearningGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningGoal[P]>
      : GetScalarType<T[P], AggregateLearningGoal[P]>
  }




  export type LearningGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningGoalWhereInput
    orderBy?: LearningGoalOrderByWithAggregationInput | LearningGoalOrderByWithAggregationInput[]
    by: LearningGoalScalarFieldEnum[] | LearningGoalScalarFieldEnum
    having?: LearningGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningGoalCountAggregateInputType | true
    _avg?: LearningGoalAvgAggregateInputType
    _sum?: LearningGoalSumAggregateInputType
    _min?: LearningGoalMinAggregateInputType
    _max?: LearningGoalMaxAggregateInputType
  }

  export type LearningGoalGroupByOutputType = {
    id: number
    userId: number
    targetTime: number
    createdAt: Date
    updatedAt: Date
    _count: LearningGoalCountAggregateOutputType | null
    _avg: LearningGoalAvgAggregateOutputType | null
    _sum: LearningGoalSumAggregateOutputType | null
    _min: LearningGoalMinAggregateOutputType | null
    _max: LearningGoalMaxAggregateOutputType | null
  }

  type GetLearningGoalGroupByPayload<T extends LearningGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningGoalGroupByOutputType[P]>
            : GetScalarType<T[P], LearningGoalGroupByOutputType[P]>
        }
      >
    >


  export type LearningGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningGoal"]>

  export type LearningGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningGoal"]>

  export type LearningGoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningGoal"]>

  export type LearningGoalSelectScalar = {
    id?: boolean
    userId?: boolean
    targetTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "targetTime" | "createdAt" | "updatedAt", ExtArgs["result"]["learningGoal"]>
  export type LearningGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningGoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningGoal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      targetTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningGoal"]>
    composites: {}
  }

  type LearningGoalGetPayload<S extends boolean | null | undefined | LearningGoalDefaultArgs> = $Result.GetResult<Prisma.$LearningGoalPayload, S>

  type LearningGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningGoalCountAggregateInputType | true
    }

  export interface LearningGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningGoal'], meta: { name: 'LearningGoal' } }
    /**
     * Find zero or one LearningGoal that matches the filter.
     * @param {LearningGoalFindUniqueArgs} args - Arguments to find a LearningGoal
     * @example
     * // Get one LearningGoal
     * const learningGoal = await prisma.learningGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningGoalFindUniqueArgs>(args: SelectSubset<T, LearningGoalFindUniqueArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningGoalFindUniqueOrThrowArgs} args - Arguments to find a LearningGoal
     * @example
     * // Get one LearningGoal
     * const learningGoal = await prisma.learningGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningGoalFindFirstArgs} args - Arguments to find a LearningGoal
     * @example
     * // Get one LearningGoal
     * const learningGoal = await prisma.learningGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningGoalFindFirstArgs>(args?: SelectSubset<T, LearningGoalFindFirstArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningGoalFindFirstOrThrowArgs} args - Arguments to find a LearningGoal
     * @example
     * // Get one LearningGoal
     * const learningGoal = await prisma.learningGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningGoals
     * const learningGoals = await prisma.learningGoal.findMany()
     * 
     * // Get first 10 LearningGoals
     * const learningGoals = await prisma.learningGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningGoalWithIdOnly = await prisma.learningGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningGoalFindManyArgs>(args?: SelectSubset<T, LearningGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningGoal.
     * @param {LearningGoalCreateArgs} args - Arguments to create a LearningGoal.
     * @example
     * // Create one LearningGoal
     * const LearningGoal = await prisma.learningGoal.create({
     *   data: {
     *     // ... data to create a LearningGoal
     *   }
     * })
     * 
     */
    create<T extends LearningGoalCreateArgs>(args: SelectSubset<T, LearningGoalCreateArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningGoals.
     * @param {LearningGoalCreateManyArgs} args - Arguments to create many LearningGoals.
     * @example
     * // Create many LearningGoals
     * const learningGoal = await prisma.learningGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningGoalCreateManyArgs>(args?: SelectSubset<T, LearningGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningGoals and returns the data saved in the database.
     * @param {LearningGoalCreateManyAndReturnArgs} args - Arguments to create many LearningGoals.
     * @example
     * // Create many LearningGoals
     * const learningGoal = await prisma.learningGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningGoals and only return the `id`
     * const learningGoalWithIdOnly = await prisma.learningGoal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningGoal.
     * @param {LearningGoalDeleteArgs} args - Arguments to delete one LearningGoal.
     * @example
     * // Delete one LearningGoal
     * const LearningGoal = await prisma.learningGoal.delete({
     *   where: {
     *     // ... filter to delete one LearningGoal
     *   }
     * })
     * 
     */
    delete<T extends LearningGoalDeleteArgs>(args: SelectSubset<T, LearningGoalDeleteArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningGoal.
     * @param {LearningGoalUpdateArgs} args - Arguments to update one LearningGoal.
     * @example
     * // Update one LearningGoal
     * const learningGoal = await prisma.learningGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningGoalUpdateArgs>(args: SelectSubset<T, LearningGoalUpdateArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningGoals.
     * @param {LearningGoalDeleteManyArgs} args - Arguments to filter LearningGoals to delete.
     * @example
     * // Delete a few LearningGoals
     * const { count } = await prisma.learningGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningGoalDeleteManyArgs>(args?: SelectSubset<T, LearningGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningGoals
     * const learningGoal = await prisma.learningGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningGoalUpdateManyArgs>(args: SelectSubset<T, LearningGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningGoals and returns the data updated in the database.
     * @param {LearningGoalUpdateManyAndReturnArgs} args - Arguments to update many LearningGoals.
     * @example
     * // Update many LearningGoals
     * const learningGoal = await prisma.learningGoal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningGoals and only return the `id`
     * const learningGoalWithIdOnly = await prisma.learningGoal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningGoalUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningGoal.
     * @param {LearningGoalUpsertArgs} args - Arguments to update or create a LearningGoal.
     * @example
     * // Update or create a LearningGoal
     * const learningGoal = await prisma.learningGoal.upsert({
     *   create: {
     *     // ... data to create a LearningGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningGoal we want to update
     *   }
     * })
     */
    upsert<T extends LearningGoalUpsertArgs>(args: SelectSubset<T, LearningGoalUpsertArgs<ExtArgs>>): Prisma__LearningGoalClient<$Result.GetResult<Prisma.$LearningGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningGoalCountArgs} args - Arguments to filter LearningGoals to count.
     * @example
     * // Count the number of LearningGoals
     * const count = await prisma.learningGoal.count({
     *   where: {
     *     // ... the filter for the LearningGoals we want to count
     *   }
     * })
    **/
    count<T extends LearningGoalCountArgs>(
      args?: Subset<T, LearningGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningGoalAggregateArgs>(args: Subset<T, LearningGoalAggregateArgs>): Prisma.PrismaPromise<GetLearningGoalAggregateType<T>>

    /**
     * Group by LearningGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningGoalGroupByArgs} args - Group by arguments.
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
      T extends LearningGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningGoalGroupByArgs['orderBy'] }
        : { orderBy?: LearningGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningGoal model
   */
  readonly fields: LearningGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LearningGoal model
   */
  interface LearningGoalFieldRefs {
    readonly id: FieldRef<"LearningGoal", 'Int'>
    readonly userId: FieldRef<"LearningGoal", 'Int'>
    readonly targetTime: FieldRef<"LearningGoal", 'Float'>
    readonly createdAt: FieldRef<"LearningGoal", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningGoal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningGoal findUnique
   */
  export type LearningGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * Filter, which LearningGoal to fetch.
     */
    where: LearningGoalWhereUniqueInput
  }

  /**
   * LearningGoal findUniqueOrThrow
   */
  export type LearningGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * Filter, which LearningGoal to fetch.
     */
    where: LearningGoalWhereUniqueInput
  }

  /**
   * LearningGoal findFirst
   */
  export type LearningGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * Filter, which LearningGoal to fetch.
     */
    where?: LearningGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningGoals to fetch.
     */
    orderBy?: LearningGoalOrderByWithRelationInput | LearningGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningGoals.
     */
    cursor?: LearningGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningGoals.
     */
    distinct?: LearningGoalScalarFieldEnum | LearningGoalScalarFieldEnum[]
  }

  /**
   * LearningGoal findFirstOrThrow
   */
  export type LearningGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * Filter, which LearningGoal to fetch.
     */
    where?: LearningGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningGoals to fetch.
     */
    orderBy?: LearningGoalOrderByWithRelationInput | LearningGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningGoals.
     */
    cursor?: LearningGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningGoals.
     */
    distinct?: LearningGoalScalarFieldEnum | LearningGoalScalarFieldEnum[]
  }

  /**
   * LearningGoal findMany
   */
  export type LearningGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * Filter, which LearningGoals to fetch.
     */
    where?: LearningGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningGoals to fetch.
     */
    orderBy?: LearningGoalOrderByWithRelationInput | LearningGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningGoals.
     */
    cursor?: LearningGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningGoals.
     */
    skip?: number
    distinct?: LearningGoalScalarFieldEnum | LearningGoalScalarFieldEnum[]
  }

  /**
   * LearningGoal create
   */
  export type LearningGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningGoal.
     */
    data: XOR<LearningGoalCreateInput, LearningGoalUncheckedCreateInput>
  }

  /**
   * LearningGoal createMany
   */
  export type LearningGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningGoals.
     */
    data: LearningGoalCreateManyInput | LearningGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningGoal createManyAndReturn
   */
  export type LearningGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * The data used to create many LearningGoals.
     */
    data: LearningGoalCreateManyInput | LearningGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningGoal update
   */
  export type LearningGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningGoal.
     */
    data: XOR<LearningGoalUpdateInput, LearningGoalUncheckedUpdateInput>
    /**
     * Choose, which LearningGoal to update.
     */
    where: LearningGoalWhereUniqueInput
  }

  /**
   * LearningGoal updateMany
   */
  export type LearningGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningGoals.
     */
    data: XOR<LearningGoalUpdateManyMutationInput, LearningGoalUncheckedUpdateManyInput>
    /**
     * Filter which LearningGoals to update
     */
    where?: LearningGoalWhereInput
    /**
     * Limit how many LearningGoals to update.
     */
    limit?: number
  }

  /**
   * LearningGoal updateManyAndReturn
   */
  export type LearningGoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * The data used to update LearningGoals.
     */
    data: XOR<LearningGoalUpdateManyMutationInput, LearningGoalUncheckedUpdateManyInput>
    /**
     * Filter which LearningGoals to update
     */
    where?: LearningGoalWhereInput
    /**
     * Limit how many LearningGoals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningGoal upsert
   */
  export type LearningGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningGoal to update in case it exists.
     */
    where: LearningGoalWhereUniqueInput
    /**
     * In case the LearningGoal found by the `where` argument doesn't exist, create a new LearningGoal with this data.
     */
    create: XOR<LearningGoalCreateInput, LearningGoalUncheckedCreateInput>
    /**
     * In case the LearningGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningGoalUpdateInput, LearningGoalUncheckedUpdateInput>
  }

  /**
   * LearningGoal delete
   */
  export type LearningGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
    /**
     * Filter which LearningGoal to delete.
     */
    where: LearningGoalWhereUniqueInput
  }

  /**
   * LearningGoal deleteMany
   */
  export type LearningGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningGoals to delete
     */
    where?: LearningGoalWhereInput
    /**
     * Limit how many LearningGoals to delete.
     */
    limit?: number
  }

  /**
   * LearningGoal without action
   */
  export type LearningGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningGoal
     */
    select?: LearningGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningGoal
     */
    omit?: LearningGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningGoalInclude<ExtArgs> | null
  }


  /**
   * Model LearningDailyRecord
   */

  export type AggregateLearningDailyRecord = {
    _count: LearningDailyRecordCountAggregateOutputType | null
    _avg: LearningDailyRecordAvgAggregateOutputType | null
    _sum: LearningDailyRecordSumAggregateOutputType | null
    _min: LearningDailyRecordMinAggregateOutputType | null
    _max: LearningDailyRecordMaxAggregateOutputType | null
  }

  export type LearningDailyRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    totalTime: number | null
  }

  export type LearningDailyRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    totalTime: number | null
  }

  export type LearningDailyRecordMinAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    day: Date | null
    totalTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningDailyRecordMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    day: Date | null
    totalTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningDailyRecordCountAggregateOutputType = {
    id: number
    userId: number
    year: number
    day: number
    totalTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningDailyRecordAvgAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    totalTime?: true
  }

  export type LearningDailyRecordSumAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    totalTime?: true
  }

  export type LearningDailyRecordMinAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    day?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningDailyRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    day?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningDailyRecordCountAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    day?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningDailyRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningDailyRecord to aggregate.
     */
    where?: LearningDailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningDailyRecords to fetch.
     */
    orderBy?: LearningDailyRecordOrderByWithRelationInput | LearningDailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningDailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningDailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningDailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningDailyRecords
    **/
    _count?: true | LearningDailyRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningDailyRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningDailyRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningDailyRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningDailyRecordMaxAggregateInputType
  }

  export type GetLearningDailyRecordAggregateType<T extends LearningDailyRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningDailyRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningDailyRecord[P]>
      : GetScalarType<T[P], AggregateLearningDailyRecord[P]>
  }




  export type LearningDailyRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningDailyRecordWhereInput
    orderBy?: LearningDailyRecordOrderByWithAggregationInput | LearningDailyRecordOrderByWithAggregationInput[]
    by: LearningDailyRecordScalarFieldEnum[] | LearningDailyRecordScalarFieldEnum
    having?: LearningDailyRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningDailyRecordCountAggregateInputType | true
    _avg?: LearningDailyRecordAvgAggregateInputType
    _sum?: LearningDailyRecordSumAggregateInputType
    _min?: LearningDailyRecordMinAggregateInputType
    _max?: LearningDailyRecordMaxAggregateInputType
  }

  export type LearningDailyRecordGroupByOutputType = {
    id: number
    userId: number
    year: number
    day: Date | null
    totalTime: number
    createdAt: Date
    updatedAt: Date
    _count: LearningDailyRecordCountAggregateOutputType | null
    _avg: LearningDailyRecordAvgAggregateOutputType | null
    _sum: LearningDailyRecordSumAggregateOutputType | null
    _min: LearningDailyRecordMinAggregateOutputType | null
    _max: LearningDailyRecordMaxAggregateOutputType | null
  }

  type GetLearningDailyRecordGroupByPayload<T extends LearningDailyRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningDailyRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningDailyRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningDailyRecordGroupByOutputType[P]>
            : GetScalarType<T[P], LearningDailyRecordGroupByOutputType[P]>
        }
      >
    >


  export type LearningDailyRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    day?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningDailyRecord"]>

  export type LearningDailyRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    day?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningDailyRecord"]>

  export type LearningDailyRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    day?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningDailyRecord"]>

  export type LearningDailyRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    year?: boolean
    day?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningDailyRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "year" | "day" | "totalTime" | "createdAt" | "updatedAt", ExtArgs["result"]["learningDailyRecord"]>
  export type LearningDailyRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningDailyRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningDailyRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningDailyRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningDailyRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      year: number
      day: Date | null
      totalTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningDailyRecord"]>
    composites: {}
  }

  type LearningDailyRecordGetPayload<S extends boolean | null | undefined | LearningDailyRecordDefaultArgs> = $Result.GetResult<Prisma.$LearningDailyRecordPayload, S>

  type LearningDailyRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningDailyRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningDailyRecordCountAggregateInputType | true
    }

  export interface LearningDailyRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningDailyRecord'], meta: { name: 'LearningDailyRecord' } }
    /**
     * Find zero or one LearningDailyRecord that matches the filter.
     * @param {LearningDailyRecordFindUniqueArgs} args - Arguments to find a LearningDailyRecord
     * @example
     * // Get one LearningDailyRecord
     * const learningDailyRecord = await prisma.learningDailyRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningDailyRecordFindUniqueArgs>(args: SelectSubset<T, LearningDailyRecordFindUniqueArgs<ExtArgs>>): Prisma__LearningDailyRecordClient<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningDailyRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningDailyRecordFindUniqueOrThrowArgs} args - Arguments to find a LearningDailyRecord
     * @example
     * // Get one LearningDailyRecord
     * const learningDailyRecord = await prisma.learningDailyRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningDailyRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningDailyRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningDailyRecordClient<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningDailyRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningDailyRecordFindFirstArgs} args - Arguments to find a LearningDailyRecord
     * @example
     * // Get one LearningDailyRecord
     * const learningDailyRecord = await prisma.learningDailyRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningDailyRecordFindFirstArgs>(args?: SelectSubset<T, LearningDailyRecordFindFirstArgs<ExtArgs>>): Prisma__LearningDailyRecordClient<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningDailyRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningDailyRecordFindFirstOrThrowArgs} args - Arguments to find a LearningDailyRecord
     * @example
     * // Get one LearningDailyRecord
     * const learningDailyRecord = await prisma.learningDailyRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningDailyRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningDailyRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningDailyRecordClient<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningDailyRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningDailyRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningDailyRecords
     * const learningDailyRecords = await prisma.learningDailyRecord.findMany()
     * 
     * // Get first 10 LearningDailyRecords
     * const learningDailyRecords = await prisma.learningDailyRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningDailyRecordWithIdOnly = await prisma.learningDailyRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningDailyRecordFindManyArgs>(args?: SelectSubset<T, LearningDailyRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningDailyRecord.
     * @param {LearningDailyRecordCreateArgs} args - Arguments to create a LearningDailyRecord.
     * @example
     * // Create one LearningDailyRecord
     * const LearningDailyRecord = await prisma.learningDailyRecord.create({
     *   data: {
     *     // ... data to create a LearningDailyRecord
     *   }
     * })
     * 
     */
    create<T extends LearningDailyRecordCreateArgs>(args: SelectSubset<T, LearningDailyRecordCreateArgs<ExtArgs>>): Prisma__LearningDailyRecordClient<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningDailyRecords.
     * @param {LearningDailyRecordCreateManyArgs} args - Arguments to create many LearningDailyRecords.
     * @example
     * // Create many LearningDailyRecords
     * const learningDailyRecord = await prisma.learningDailyRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningDailyRecordCreateManyArgs>(args?: SelectSubset<T, LearningDailyRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningDailyRecords and returns the data saved in the database.
     * @param {LearningDailyRecordCreateManyAndReturnArgs} args - Arguments to create many LearningDailyRecords.
     * @example
     * // Create many LearningDailyRecords
     * const learningDailyRecord = await prisma.learningDailyRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningDailyRecords and only return the `id`
     * const learningDailyRecordWithIdOnly = await prisma.learningDailyRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningDailyRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningDailyRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningDailyRecord.
     * @param {LearningDailyRecordDeleteArgs} args - Arguments to delete one LearningDailyRecord.
     * @example
     * // Delete one LearningDailyRecord
     * const LearningDailyRecord = await prisma.learningDailyRecord.delete({
     *   where: {
     *     // ... filter to delete one LearningDailyRecord
     *   }
     * })
     * 
     */
    delete<T extends LearningDailyRecordDeleteArgs>(args: SelectSubset<T, LearningDailyRecordDeleteArgs<ExtArgs>>): Prisma__LearningDailyRecordClient<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningDailyRecord.
     * @param {LearningDailyRecordUpdateArgs} args - Arguments to update one LearningDailyRecord.
     * @example
     * // Update one LearningDailyRecord
     * const learningDailyRecord = await prisma.learningDailyRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningDailyRecordUpdateArgs>(args: SelectSubset<T, LearningDailyRecordUpdateArgs<ExtArgs>>): Prisma__LearningDailyRecordClient<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningDailyRecords.
     * @param {LearningDailyRecordDeleteManyArgs} args - Arguments to filter LearningDailyRecords to delete.
     * @example
     * // Delete a few LearningDailyRecords
     * const { count } = await prisma.learningDailyRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningDailyRecordDeleteManyArgs>(args?: SelectSubset<T, LearningDailyRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningDailyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningDailyRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningDailyRecords
     * const learningDailyRecord = await prisma.learningDailyRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningDailyRecordUpdateManyArgs>(args: SelectSubset<T, LearningDailyRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningDailyRecords and returns the data updated in the database.
     * @param {LearningDailyRecordUpdateManyAndReturnArgs} args - Arguments to update many LearningDailyRecords.
     * @example
     * // Update many LearningDailyRecords
     * const learningDailyRecord = await prisma.learningDailyRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningDailyRecords and only return the `id`
     * const learningDailyRecordWithIdOnly = await prisma.learningDailyRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningDailyRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningDailyRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningDailyRecord.
     * @param {LearningDailyRecordUpsertArgs} args - Arguments to update or create a LearningDailyRecord.
     * @example
     * // Update or create a LearningDailyRecord
     * const learningDailyRecord = await prisma.learningDailyRecord.upsert({
     *   create: {
     *     // ... data to create a LearningDailyRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningDailyRecord we want to update
     *   }
     * })
     */
    upsert<T extends LearningDailyRecordUpsertArgs>(args: SelectSubset<T, LearningDailyRecordUpsertArgs<ExtArgs>>): Prisma__LearningDailyRecordClient<$Result.GetResult<Prisma.$LearningDailyRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningDailyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningDailyRecordCountArgs} args - Arguments to filter LearningDailyRecords to count.
     * @example
     * // Count the number of LearningDailyRecords
     * const count = await prisma.learningDailyRecord.count({
     *   where: {
     *     // ... the filter for the LearningDailyRecords we want to count
     *   }
     * })
    **/
    count<T extends LearningDailyRecordCountArgs>(
      args?: Subset<T, LearningDailyRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningDailyRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningDailyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningDailyRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningDailyRecordAggregateArgs>(args: Subset<T, LearningDailyRecordAggregateArgs>): Prisma.PrismaPromise<GetLearningDailyRecordAggregateType<T>>

    /**
     * Group by LearningDailyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningDailyRecordGroupByArgs} args - Group by arguments.
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
      T extends LearningDailyRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningDailyRecordGroupByArgs['orderBy'] }
        : { orderBy?: LearningDailyRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningDailyRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningDailyRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningDailyRecord model
   */
  readonly fields: LearningDailyRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningDailyRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningDailyRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LearningDailyRecord model
   */
  interface LearningDailyRecordFieldRefs {
    readonly id: FieldRef<"LearningDailyRecord", 'Int'>
    readonly userId: FieldRef<"LearningDailyRecord", 'Int'>
    readonly year: FieldRef<"LearningDailyRecord", 'Int'>
    readonly day: FieldRef<"LearningDailyRecord", 'DateTime'>
    readonly totalTime: FieldRef<"LearningDailyRecord", 'Float'>
    readonly createdAt: FieldRef<"LearningDailyRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningDailyRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningDailyRecord findUnique
   */
  export type LearningDailyRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningDailyRecord to fetch.
     */
    where: LearningDailyRecordWhereUniqueInput
  }

  /**
   * LearningDailyRecord findUniqueOrThrow
   */
  export type LearningDailyRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningDailyRecord to fetch.
     */
    where: LearningDailyRecordWhereUniqueInput
  }

  /**
   * LearningDailyRecord findFirst
   */
  export type LearningDailyRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningDailyRecord to fetch.
     */
    where?: LearningDailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningDailyRecords to fetch.
     */
    orderBy?: LearningDailyRecordOrderByWithRelationInput | LearningDailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningDailyRecords.
     */
    cursor?: LearningDailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningDailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningDailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningDailyRecords.
     */
    distinct?: LearningDailyRecordScalarFieldEnum | LearningDailyRecordScalarFieldEnum[]
  }

  /**
   * LearningDailyRecord findFirstOrThrow
   */
  export type LearningDailyRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningDailyRecord to fetch.
     */
    where?: LearningDailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningDailyRecords to fetch.
     */
    orderBy?: LearningDailyRecordOrderByWithRelationInput | LearningDailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningDailyRecords.
     */
    cursor?: LearningDailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningDailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningDailyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningDailyRecords.
     */
    distinct?: LearningDailyRecordScalarFieldEnum | LearningDailyRecordScalarFieldEnum[]
  }

  /**
   * LearningDailyRecord findMany
   */
  export type LearningDailyRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningDailyRecords to fetch.
     */
    where?: LearningDailyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningDailyRecords to fetch.
     */
    orderBy?: LearningDailyRecordOrderByWithRelationInput | LearningDailyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningDailyRecords.
     */
    cursor?: LearningDailyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningDailyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningDailyRecords.
     */
    skip?: number
    distinct?: LearningDailyRecordScalarFieldEnum | LearningDailyRecordScalarFieldEnum[]
  }

  /**
   * LearningDailyRecord create
   */
  export type LearningDailyRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningDailyRecord.
     */
    data: XOR<LearningDailyRecordCreateInput, LearningDailyRecordUncheckedCreateInput>
  }

  /**
   * LearningDailyRecord createMany
   */
  export type LearningDailyRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningDailyRecords.
     */
    data: LearningDailyRecordCreateManyInput | LearningDailyRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningDailyRecord createManyAndReturn
   */
  export type LearningDailyRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * The data used to create many LearningDailyRecords.
     */
    data: LearningDailyRecordCreateManyInput | LearningDailyRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningDailyRecord update
   */
  export type LearningDailyRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningDailyRecord.
     */
    data: XOR<LearningDailyRecordUpdateInput, LearningDailyRecordUncheckedUpdateInput>
    /**
     * Choose, which LearningDailyRecord to update.
     */
    where: LearningDailyRecordWhereUniqueInput
  }

  /**
   * LearningDailyRecord updateMany
   */
  export type LearningDailyRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningDailyRecords.
     */
    data: XOR<LearningDailyRecordUpdateManyMutationInput, LearningDailyRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningDailyRecords to update
     */
    where?: LearningDailyRecordWhereInput
    /**
     * Limit how many LearningDailyRecords to update.
     */
    limit?: number
  }

  /**
   * LearningDailyRecord updateManyAndReturn
   */
  export type LearningDailyRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * The data used to update LearningDailyRecords.
     */
    data: XOR<LearningDailyRecordUpdateManyMutationInput, LearningDailyRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningDailyRecords to update
     */
    where?: LearningDailyRecordWhereInput
    /**
     * Limit how many LearningDailyRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningDailyRecord upsert
   */
  export type LearningDailyRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningDailyRecord to update in case it exists.
     */
    where: LearningDailyRecordWhereUniqueInput
    /**
     * In case the LearningDailyRecord found by the `where` argument doesn't exist, create a new LearningDailyRecord with this data.
     */
    create: XOR<LearningDailyRecordCreateInput, LearningDailyRecordUncheckedCreateInput>
    /**
     * In case the LearningDailyRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningDailyRecordUpdateInput, LearningDailyRecordUncheckedUpdateInput>
  }

  /**
   * LearningDailyRecord delete
   */
  export type LearningDailyRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
    /**
     * Filter which LearningDailyRecord to delete.
     */
    where: LearningDailyRecordWhereUniqueInput
  }

  /**
   * LearningDailyRecord deleteMany
   */
  export type LearningDailyRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningDailyRecords to delete
     */
    where?: LearningDailyRecordWhereInput
    /**
     * Limit how many LearningDailyRecords to delete.
     */
    limit?: number
  }

  /**
   * LearningDailyRecord without action
   */
  export type LearningDailyRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningDailyRecord
     */
    select?: LearningDailyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningDailyRecord
     */
    omit?: LearningDailyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningDailyRecordInclude<ExtArgs> | null
  }


  /**
   * Model LearningWeekRecord
   */

  export type AggregateLearningWeekRecord = {
    _count: LearningWeekRecordCountAggregateOutputType | null
    _avg: LearningWeekRecordAvgAggregateOutputType | null
    _sum: LearningWeekRecordSumAggregateOutputType | null
    _min: LearningWeekRecordMinAggregateOutputType | null
    _max: LearningWeekRecordMaxAggregateOutputType | null
  }

  export type LearningWeekRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    totalTime: number | null
  }

  export type LearningWeekRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    totalTime: number | null
  }

  export type LearningWeekRecordMinAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    week: Date | null
    totalTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningWeekRecordMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    week: Date | null
    totalTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningWeekRecordCountAggregateOutputType = {
    id: number
    userId: number
    year: number
    week: number
    totalTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningWeekRecordAvgAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    totalTime?: true
  }

  export type LearningWeekRecordSumAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    totalTime?: true
  }

  export type LearningWeekRecordMinAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    week?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningWeekRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    week?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningWeekRecordCountAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    week?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningWeekRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningWeekRecord to aggregate.
     */
    where?: LearningWeekRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningWeekRecords to fetch.
     */
    orderBy?: LearningWeekRecordOrderByWithRelationInput | LearningWeekRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningWeekRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningWeekRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningWeekRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningWeekRecords
    **/
    _count?: true | LearningWeekRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningWeekRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningWeekRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningWeekRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningWeekRecordMaxAggregateInputType
  }

  export type GetLearningWeekRecordAggregateType<T extends LearningWeekRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningWeekRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningWeekRecord[P]>
      : GetScalarType<T[P], AggregateLearningWeekRecord[P]>
  }




  export type LearningWeekRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningWeekRecordWhereInput
    orderBy?: LearningWeekRecordOrderByWithAggregationInput | LearningWeekRecordOrderByWithAggregationInput[]
    by: LearningWeekRecordScalarFieldEnum[] | LearningWeekRecordScalarFieldEnum
    having?: LearningWeekRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningWeekRecordCountAggregateInputType | true
    _avg?: LearningWeekRecordAvgAggregateInputType
    _sum?: LearningWeekRecordSumAggregateInputType
    _min?: LearningWeekRecordMinAggregateInputType
    _max?: LearningWeekRecordMaxAggregateInputType
  }

  export type LearningWeekRecordGroupByOutputType = {
    id: number
    userId: number
    year: number
    week: Date | null
    totalTime: number
    createdAt: Date
    updatedAt: Date
    _count: LearningWeekRecordCountAggregateOutputType | null
    _avg: LearningWeekRecordAvgAggregateOutputType | null
    _sum: LearningWeekRecordSumAggregateOutputType | null
    _min: LearningWeekRecordMinAggregateOutputType | null
    _max: LearningWeekRecordMaxAggregateOutputType | null
  }

  type GetLearningWeekRecordGroupByPayload<T extends LearningWeekRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningWeekRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningWeekRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningWeekRecordGroupByOutputType[P]>
            : GetScalarType<T[P], LearningWeekRecordGroupByOutputType[P]>
        }
      >
    >


  export type LearningWeekRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    week?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningWeekRecord"]>

  export type LearningWeekRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    week?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningWeekRecord"]>

  export type LearningWeekRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    week?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningWeekRecord"]>

  export type LearningWeekRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    year?: boolean
    week?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningWeekRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "year" | "week" | "totalTime" | "createdAt" | "updatedAt", ExtArgs["result"]["learningWeekRecord"]>
  export type LearningWeekRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningWeekRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningWeekRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningWeekRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningWeekRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      year: number
      week: Date | null
      totalTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningWeekRecord"]>
    composites: {}
  }

  type LearningWeekRecordGetPayload<S extends boolean | null | undefined | LearningWeekRecordDefaultArgs> = $Result.GetResult<Prisma.$LearningWeekRecordPayload, S>

  type LearningWeekRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningWeekRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningWeekRecordCountAggregateInputType | true
    }

  export interface LearningWeekRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningWeekRecord'], meta: { name: 'LearningWeekRecord' } }
    /**
     * Find zero or one LearningWeekRecord that matches the filter.
     * @param {LearningWeekRecordFindUniqueArgs} args - Arguments to find a LearningWeekRecord
     * @example
     * // Get one LearningWeekRecord
     * const learningWeekRecord = await prisma.learningWeekRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningWeekRecordFindUniqueArgs>(args: SelectSubset<T, LearningWeekRecordFindUniqueArgs<ExtArgs>>): Prisma__LearningWeekRecordClient<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningWeekRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningWeekRecordFindUniqueOrThrowArgs} args - Arguments to find a LearningWeekRecord
     * @example
     * // Get one LearningWeekRecord
     * const learningWeekRecord = await prisma.learningWeekRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningWeekRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningWeekRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningWeekRecordClient<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningWeekRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningWeekRecordFindFirstArgs} args - Arguments to find a LearningWeekRecord
     * @example
     * // Get one LearningWeekRecord
     * const learningWeekRecord = await prisma.learningWeekRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningWeekRecordFindFirstArgs>(args?: SelectSubset<T, LearningWeekRecordFindFirstArgs<ExtArgs>>): Prisma__LearningWeekRecordClient<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningWeekRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningWeekRecordFindFirstOrThrowArgs} args - Arguments to find a LearningWeekRecord
     * @example
     * // Get one LearningWeekRecord
     * const learningWeekRecord = await prisma.learningWeekRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningWeekRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningWeekRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningWeekRecordClient<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningWeekRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningWeekRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningWeekRecords
     * const learningWeekRecords = await prisma.learningWeekRecord.findMany()
     * 
     * // Get first 10 LearningWeekRecords
     * const learningWeekRecords = await prisma.learningWeekRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningWeekRecordWithIdOnly = await prisma.learningWeekRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningWeekRecordFindManyArgs>(args?: SelectSubset<T, LearningWeekRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningWeekRecord.
     * @param {LearningWeekRecordCreateArgs} args - Arguments to create a LearningWeekRecord.
     * @example
     * // Create one LearningWeekRecord
     * const LearningWeekRecord = await prisma.learningWeekRecord.create({
     *   data: {
     *     // ... data to create a LearningWeekRecord
     *   }
     * })
     * 
     */
    create<T extends LearningWeekRecordCreateArgs>(args: SelectSubset<T, LearningWeekRecordCreateArgs<ExtArgs>>): Prisma__LearningWeekRecordClient<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningWeekRecords.
     * @param {LearningWeekRecordCreateManyArgs} args - Arguments to create many LearningWeekRecords.
     * @example
     * // Create many LearningWeekRecords
     * const learningWeekRecord = await prisma.learningWeekRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningWeekRecordCreateManyArgs>(args?: SelectSubset<T, LearningWeekRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningWeekRecords and returns the data saved in the database.
     * @param {LearningWeekRecordCreateManyAndReturnArgs} args - Arguments to create many LearningWeekRecords.
     * @example
     * // Create many LearningWeekRecords
     * const learningWeekRecord = await prisma.learningWeekRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningWeekRecords and only return the `id`
     * const learningWeekRecordWithIdOnly = await prisma.learningWeekRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningWeekRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningWeekRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningWeekRecord.
     * @param {LearningWeekRecordDeleteArgs} args - Arguments to delete one LearningWeekRecord.
     * @example
     * // Delete one LearningWeekRecord
     * const LearningWeekRecord = await prisma.learningWeekRecord.delete({
     *   where: {
     *     // ... filter to delete one LearningWeekRecord
     *   }
     * })
     * 
     */
    delete<T extends LearningWeekRecordDeleteArgs>(args: SelectSubset<T, LearningWeekRecordDeleteArgs<ExtArgs>>): Prisma__LearningWeekRecordClient<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningWeekRecord.
     * @param {LearningWeekRecordUpdateArgs} args - Arguments to update one LearningWeekRecord.
     * @example
     * // Update one LearningWeekRecord
     * const learningWeekRecord = await prisma.learningWeekRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningWeekRecordUpdateArgs>(args: SelectSubset<T, LearningWeekRecordUpdateArgs<ExtArgs>>): Prisma__LearningWeekRecordClient<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningWeekRecords.
     * @param {LearningWeekRecordDeleteManyArgs} args - Arguments to filter LearningWeekRecords to delete.
     * @example
     * // Delete a few LearningWeekRecords
     * const { count } = await prisma.learningWeekRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningWeekRecordDeleteManyArgs>(args?: SelectSubset<T, LearningWeekRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningWeekRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningWeekRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningWeekRecords
     * const learningWeekRecord = await prisma.learningWeekRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningWeekRecordUpdateManyArgs>(args: SelectSubset<T, LearningWeekRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningWeekRecords and returns the data updated in the database.
     * @param {LearningWeekRecordUpdateManyAndReturnArgs} args - Arguments to update many LearningWeekRecords.
     * @example
     * // Update many LearningWeekRecords
     * const learningWeekRecord = await prisma.learningWeekRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningWeekRecords and only return the `id`
     * const learningWeekRecordWithIdOnly = await prisma.learningWeekRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningWeekRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningWeekRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningWeekRecord.
     * @param {LearningWeekRecordUpsertArgs} args - Arguments to update or create a LearningWeekRecord.
     * @example
     * // Update or create a LearningWeekRecord
     * const learningWeekRecord = await prisma.learningWeekRecord.upsert({
     *   create: {
     *     // ... data to create a LearningWeekRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningWeekRecord we want to update
     *   }
     * })
     */
    upsert<T extends LearningWeekRecordUpsertArgs>(args: SelectSubset<T, LearningWeekRecordUpsertArgs<ExtArgs>>): Prisma__LearningWeekRecordClient<$Result.GetResult<Prisma.$LearningWeekRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningWeekRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningWeekRecordCountArgs} args - Arguments to filter LearningWeekRecords to count.
     * @example
     * // Count the number of LearningWeekRecords
     * const count = await prisma.learningWeekRecord.count({
     *   where: {
     *     // ... the filter for the LearningWeekRecords we want to count
     *   }
     * })
    **/
    count<T extends LearningWeekRecordCountArgs>(
      args?: Subset<T, LearningWeekRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningWeekRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningWeekRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningWeekRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningWeekRecordAggregateArgs>(args: Subset<T, LearningWeekRecordAggregateArgs>): Prisma.PrismaPromise<GetLearningWeekRecordAggregateType<T>>

    /**
     * Group by LearningWeekRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningWeekRecordGroupByArgs} args - Group by arguments.
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
      T extends LearningWeekRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningWeekRecordGroupByArgs['orderBy'] }
        : { orderBy?: LearningWeekRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningWeekRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningWeekRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningWeekRecord model
   */
  readonly fields: LearningWeekRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningWeekRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningWeekRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LearningWeekRecord model
   */
  interface LearningWeekRecordFieldRefs {
    readonly id: FieldRef<"LearningWeekRecord", 'Int'>
    readonly userId: FieldRef<"LearningWeekRecord", 'Int'>
    readonly year: FieldRef<"LearningWeekRecord", 'Int'>
    readonly week: FieldRef<"LearningWeekRecord", 'DateTime'>
    readonly totalTime: FieldRef<"LearningWeekRecord", 'Float'>
    readonly createdAt: FieldRef<"LearningWeekRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningWeekRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningWeekRecord findUnique
   */
  export type LearningWeekRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningWeekRecord to fetch.
     */
    where: LearningWeekRecordWhereUniqueInput
  }

  /**
   * LearningWeekRecord findUniqueOrThrow
   */
  export type LearningWeekRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningWeekRecord to fetch.
     */
    where: LearningWeekRecordWhereUniqueInput
  }

  /**
   * LearningWeekRecord findFirst
   */
  export type LearningWeekRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningWeekRecord to fetch.
     */
    where?: LearningWeekRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningWeekRecords to fetch.
     */
    orderBy?: LearningWeekRecordOrderByWithRelationInput | LearningWeekRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningWeekRecords.
     */
    cursor?: LearningWeekRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningWeekRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningWeekRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningWeekRecords.
     */
    distinct?: LearningWeekRecordScalarFieldEnum | LearningWeekRecordScalarFieldEnum[]
  }

  /**
   * LearningWeekRecord findFirstOrThrow
   */
  export type LearningWeekRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningWeekRecord to fetch.
     */
    where?: LearningWeekRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningWeekRecords to fetch.
     */
    orderBy?: LearningWeekRecordOrderByWithRelationInput | LearningWeekRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningWeekRecords.
     */
    cursor?: LearningWeekRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningWeekRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningWeekRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningWeekRecords.
     */
    distinct?: LearningWeekRecordScalarFieldEnum | LearningWeekRecordScalarFieldEnum[]
  }

  /**
   * LearningWeekRecord findMany
   */
  export type LearningWeekRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningWeekRecords to fetch.
     */
    where?: LearningWeekRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningWeekRecords to fetch.
     */
    orderBy?: LearningWeekRecordOrderByWithRelationInput | LearningWeekRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningWeekRecords.
     */
    cursor?: LearningWeekRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningWeekRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningWeekRecords.
     */
    skip?: number
    distinct?: LearningWeekRecordScalarFieldEnum | LearningWeekRecordScalarFieldEnum[]
  }

  /**
   * LearningWeekRecord create
   */
  export type LearningWeekRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningWeekRecord.
     */
    data: XOR<LearningWeekRecordCreateInput, LearningWeekRecordUncheckedCreateInput>
  }

  /**
   * LearningWeekRecord createMany
   */
  export type LearningWeekRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningWeekRecords.
     */
    data: LearningWeekRecordCreateManyInput | LearningWeekRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningWeekRecord createManyAndReturn
   */
  export type LearningWeekRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * The data used to create many LearningWeekRecords.
     */
    data: LearningWeekRecordCreateManyInput | LearningWeekRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningWeekRecord update
   */
  export type LearningWeekRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningWeekRecord.
     */
    data: XOR<LearningWeekRecordUpdateInput, LearningWeekRecordUncheckedUpdateInput>
    /**
     * Choose, which LearningWeekRecord to update.
     */
    where: LearningWeekRecordWhereUniqueInput
  }

  /**
   * LearningWeekRecord updateMany
   */
  export type LearningWeekRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningWeekRecords.
     */
    data: XOR<LearningWeekRecordUpdateManyMutationInput, LearningWeekRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningWeekRecords to update
     */
    where?: LearningWeekRecordWhereInput
    /**
     * Limit how many LearningWeekRecords to update.
     */
    limit?: number
  }

  /**
   * LearningWeekRecord updateManyAndReturn
   */
  export type LearningWeekRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * The data used to update LearningWeekRecords.
     */
    data: XOR<LearningWeekRecordUpdateManyMutationInput, LearningWeekRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningWeekRecords to update
     */
    where?: LearningWeekRecordWhereInput
    /**
     * Limit how many LearningWeekRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningWeekRecord upsert
   */
  export type LearningWeekRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningWeekRecord to update in case it exists.
     */
    where: LearningWeekRecordWhereUniqueInput
    /**
     * In case the LearningWeekRecord found by the `where` argument doesn't exist, create a new LearningWeekRecord with this data.
     */
    create: XOR<LearningWeekRecordCreateInput, LearningWeekRecordUncheckedCreateInput>
    /**
     * In case the LearningWeekRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningWeekRecordUpdateInput, LearningWeekRecordUncheckedUpdateInput>
  }

  /**
   * LearningWeekRecord delete
   */
  export type LearningWeekRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
    /**
     * Filter which LearningWeekRecord to delete.
     */
    where: LearningWeekRecordWhereUniqueInput
  }

  /**
   * LearningWeekRecord deleteMany
   */
  export type LearningWeekRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningWeekRecords to delete
     */
    where?: LearningWeekRecordWhereInput
    /**
     * Limit how many LearningWeekRecords to delete.
     */
    limit?: number
  }

  /**
   * LearningWeekRecord without action
   */
  export type LearningWeekRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningWeekRecord
     */
    select?: LearningWeekRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningWeekRecord
     */
    omit?: LearningWeekRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningWeekRecordInclude<ExtArgs> | null
  }


  /**
   * Model LearningMonthRecord
   */

  export type AggregateLearningMonthRecord = {
    _count: LearningMonthRecordCountAggregateOutputType | null
    _avg: LearningMonthRecordAvgAggregateOutputType | null
    _sum: LearningMonthRecordSumAggregateOutputType | null
    _min: LearningMonthRecordMinAggregateOutputType | null
    _max: LearningMonthRecordMaxAggregateOutputType | null
  }

  export type LearningMonthRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    month: number | null
    totalTime: number | null
  }

  export type LearningMonthRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    month: number | null
    totalTime: number | null
  }

  export type LearningMonthRecordMinAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    month: number | null
    totalTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningMonthRecordMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    month: number | null
    totalTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningMonthRecordCountAggregateOutputType = {
    id: number
    userId: number
    year: number
    month: number
    totalTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningMonthRecordAvgAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    month?: true
    totalTime?: true
  }

  export type LearningMonthRecordSumAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    month?: true
    totalTime?: true
  }

  export type LearningMonthRecordMinAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    month?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningMonthRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    month?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningMonthRecordCountAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    month?: true
    totalTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningMonthRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningMonthRecord to aggregate.
     */
    where?: LearningMonthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningMonthRecords to fetch.
     */
    orderBy?: LearningMonthRecordOrderByWithRelationInput | LearningMonthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningMonthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningMonthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningMonthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningMonthRecords
    **/
    _count?: true | LearningMonthRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningMonthRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningMonthRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningMonthRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningMonthRecordMaxAggregateInputType
  }

  export type GetLearningMonthRecordAggregateType<T extends LearningMonthRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningMonthRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningMonthRecord[P]>
      : GetScalarType<T[P], AggregateLearningMonthRecord[P]>
  }




  export type LearningMonthRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningMonthRecordWhereInput
    orderBy?: LearningMonthRecordOrderByWithAggregationInput | LearningMonthRecordOrderByWithAggregationInput[]
    by: LearningMonthRecordScalarFieldEnum[] | LearningMonthRecordScalarFieldEnum
    having?: LearningMonthRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningMonthRecordCountAggregateInputType | true
    _avg?: LearningMonthRecordAvgAggregateInputType
    _sum?: LearningMonthRecordSumAggregateInputType
    _min?: LearningMonthRecordMinAggregateInputType
    _max?: LearningMonthRecordMaxAggregateInputType
  }

  export type LearningMonthRecordGroupByOutputType = {
    id: number
    userId: number
    year: number
    month: number | null
    totalTime: number
    createdAt: Date
    updatedAt: Date
    _count: LearningMonthRecordCountAggregateOutputType | null
    _avg: LearningMonthRecordAvgAggregateOutputType | null
    _sum: LearningMonthRecordSumAggregateOutputType | null
    _min: LearningMonthRecordMinAggregateOutputType | null
    _max: LearningMonthRecordMaxAggregateOutputType | null
  }

  type GetLearningMonthRecordGroupByPayload<T extends LearningMonthRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningMonthRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningMonthRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningMonthRecordGroupByOutputType[P]>
            : GetScalarType<T[P], LearningMonthRecordGroupByOutputType[P]>
        }
      >
    >


  export type LearningMonthRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    month?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningMonthRecord"]>

  export type LearningMonthRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    month?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningMonthRecord"]>

  export type LearningMonthRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    month?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningMonthRecord"]>

  export type LearningMonthRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    year?: boolean
    month?: boolean
    totalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningMonthRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "year" | "month" | "totalTime" | "createdAt" | "updatedAt", ExtArgs["result"]["learningMonthRecord"]>
  export type LearningMonthRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningMonthRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningMonthRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningMonthRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningMonthRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      year: number
      month: number | null
      totalTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningMonthRecord"]>
    composites: {}
  }

  type LearningMonthRecordGetPayload<S extends boolean | null | undefined | LearningMonthRecordDefaultArgs> = $Result.GetResult<Prisma.$LearningMonthRecordPayload, S>

  type LearningMonthRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningMonthRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningMonthRecordCountAggregateInputType | true
    }

  export interface LearningMonthRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningMonthRecord'], meta: { name: 'LearningMonthRecord' } }
    /**
     * Find zero or one LearningMonthRecord that matches the filter.
     * @param {LearningMonthRecordFindUniqueArgs} args - Arguments to find a LearningMonthRecord
     * @example
     * // Get one LearningMonthRecord
     * const learningMonthRecord = await prisma.learningMonthRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningMonthRecordFindUniqueArgs>(args: SelectSubset<T, LearningMonthRecordFindUniqueArgs<ExtArgs>>): Prisma__LearningMonthRecordClient<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningMonthRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningMonthRecordFindUniqueOrThrowArgs} args - Arguments to find a LearningMonthRecord
     * @example
     * // Get one LearningMonthRecord
     * const learningMonthRecord = await prisma.learningMonthRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningMonthRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningMonthRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningMonthRecordClient<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningMonthRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningMonthRecordFindFirstArgs} args - Arguments to find a LearningMonthRecord
     * @example
     * // Get one LearningMonthRecord
     * const learningMonthRecord = await prisma.learningMonthRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningMonthRecordFindFirstArgs>(args?: SelectSubset<T, LearningMonthRecordFindFirstArgs<ExtArgs>>): Prisma__LearningMonthRecordClient<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningMonthRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningMonthRecordFindFirstOrThrowArgs} args - Arguments to find a LearningMonthRecord
     * @example
     * // Get one LearningMonthRecord
     * const learningMonthRecord = await prisma.learningMonthRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningMonthRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningMonthRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningMonthRecordClient<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningMonthRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningMonthRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningMonthRecords
     * const learningMonthRecords = await prisma.learningMonthRecord.findMany()
     * 
     * // Get first 10 LearningMonthRecords
     * const learningMonthRecords = await prisma.learningMonthRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningMonthRecordWithIdOnly = await prisma.learningMonthRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningMonthRecordFindManyArgs>(args?: SelectSubset<T, LearningMonthRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningMonthRecord.
     * @param {LearningMonthRecordCreateArgs} args - Arguments to create a LearningMonthRecord.
     * @example
     * // Create one LearningMonthRecord
     * const LearningMonthRecord = await prisma.learningMonthRecord.create({
     *   data: {
     *     // ... data to create a LearningMonthRecord
     *   }
     * })
     * 
     */
    create<T extends LearningMonthRecordCreateArgs>(args: SelectSubset<T, LearningMonthRecordCreateArgs<ExtArgs>>): Prisma__LearningMonthRecordClient<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningMonthRecords.
     * @param {LearningMonthRecordCreateManyArgs} args - Arguments to create many LearningMonthRecords.
     * @example
     * // Create many LearningMonthRecords
     * const learningMonthRecord = await prisma.learningMonthRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningMonthRecordCreateManyArgs>(args?: SelectSubset<T, LearningMonthRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningMonthRecords and returns the data saved in the database.
     * @param {LearningMonthRecordCreateManyAndReturnArgs} args - Arguments to create many LearningMonthRecords.
     * @example
     * // Create many LearningMonthRecords
     * const learningMonthRecord = await prisma.learningMonthRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningMonthRecords and only return the `id`
     * const learningMonthRecordWithIdOnly = await prisma.learningMonthRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningMonthRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningMonthRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningMonthRecord.
     * @param {LearningMonthRecordDeleteArgs} args - Arguments to delete one LearningMonthRecord.
     * @example
     * // Delete one LearningMonthRecord
     * const LearningMonthRecord = await prisma.learningMonthRecord.delete({
     *   where: {
     *     // ... filter to delete one LearningMonthRecord
     *   }
     * })
     * 
     */
    delete<T extends LearningMonthRecordDeleteArgs>(args: SelectSubset<T, LearningMonthRecordDeleteArgs<ExtArgs>>): Prisma__LearningMonthRecordClient<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningMonthRecord.
     * @param {LearningMonthRecordUpdateArgs} args - Arguments to update one LearningMonthRecord.
     * @example
     * // Update one LearningMonthRecord
     * const learningMonthRecord = await prisma.learningMonthRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningMonthRecordUpdateArgs>(args: SelectSubset<T, LearningMonthRecordUpdateArgs<ExtArgs>>): Prisma__LearningMonthRecordClient<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningMonthRecords.
     * @param {LearningMonthRecordDeleteManyArgs} args - Arguments to filter LearningMonthRecords to delete.
     * @example
     * // Delete a few LearningMonthRecords
     * const { count } = await prisma.learningMonthRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningMonthRecordDeleteManyArgs>(args?: SelectSubset<T, LearningMonthRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningMonthRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningMonthRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningMonthRecords
     * const learningMonthRecord = await prisma.learningMonthRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningMonthRecordUpdateManyArgs>(args: SelectSubset<T, LearningMonthRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningMonthRecords and returns the data updated in the database.
     * @param {LearningMonthRecordUpdateManyAndReturnArgs} args - Arguments to update many LearningMonthRecords.
     * @example
     * // Update many LearningMonthRecords
     * const learningMonthRecord = await prisma.learningMonthRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningMonthRecords and only return the `id`
     * const learningMonthRecordWithIdOnly = await prisma.learningMonthRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningMonthRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningMonthRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningMonthRecord.
     * @param {LearningMonthRecordUpsertArgs} args - Arguments to update or create a LearningMonthRecord.
     * @example
     * // Update or create a LearningMonthRecord
     * const learningMonthRecord = await prisma.learningMonthRecord.upsert({
     *   create: {
     *     // ... data to create a LearningMonthRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningMonthRecord we want to update
     *   }
     * })
     */
    upsert<T extends LearningMonthRecordUpsertArgs>(args: SelectSubset<T, LearningMonthRecordUpsertArgs<ExtArgs>>): Prisma__LearningMonthRecordClient<$Result.GetResult<Prisma.$LearningMonthRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningMonthRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningMonthRecordCountArgs} args - Arguments to filter LearningMonthRecords to count.
     * @example
     * // Count the number of LearningMonthRecords
     * const count = await prisma.learningMonthRecord.count({
     *   where: {
     *     // ... the filter for the LearningMonthRecords we want to count
     *   }
     * })
    **/
    count<T extends LearningMonthRecordCountArgs>(
      args?: Subset<T, LearningMonthRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningMonthRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningMonthRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningMonthRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningMonthRecordAggregateArgs>(args: Subset<T, LearningMonthRecordAggregateArgs>): Prisma.PrismaPromise<GetLearningMonthRecordAggregateType<T>>

    /**
     * Group by LearningMonthRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningMonthRecordGroupByArgs} args - Group by arguments.
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
      T extends LearningMonthRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningMonthRecordGroupByArgs['orderBy'] }
        : { orderBy?: LearningMonthRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningMonthRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningMonthRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningMonthRecord model
   */
  readonly fields: LearningMonthRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningMonthRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningMonthRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LearningMonthRecord model
   */
  interface LearningMonthRecordFieldRefs {
    readonly id: FieldRef<"LearningMonthRecord", 'Int'>
    readonly userId: FieldRef<"LearningMonthRecord", 'Int'>
    readonly year: FieldRef<"LearningMonthRecord", 'Int'>
    readonly month: FieldRef<"LearningMonthRecord", 'Int'>
    readonly totalTime: FieldRef<"LearningMonthRecord", 'Float'>
    readonly createdAt: FieldRef<"LearningMonthRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningMonthRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningMonthRecord findUnique
   */
  export type LearningMonthRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningMonthRecord to fetch.
     */
    where: LearningMonthRecordWhereUniqueInput
  }

  /**
   * LearningMonthRecord findUniqueOrThrow
   */
  export type LearningMonthRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningMonthRecord to fetch.
     */
    where: LearningMonthRecordWhereUniqueInput
  }

  /**
   * LearningMonthRecord findFirst
   */
  export type LearningMonthRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningMonthRecord to fetch.
     */
    where?: LearningMonthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningMonthRecords to fetch.
     */
    orderBy?: LearningMonthRecordOrderByWithRelationInput | LearningMonthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningMonthRecords.
     */
    cursor?: LearningMonthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningMonthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningMonthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningMonthRecords.
     */
    distinct?: LearningMonthRecordScalarFieldEnum | LearningMonthRecordScalarFieldEnum[]
  }

  /**
   * LearningMonthRecord findFirstOrThrow
   */
  export type LearningMonthRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningMonthRecord to fetch.
     */
    where?: LearningMonthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningMonthRecords to fetch.
     */
    orderBy?: LearningMonthRecordOrderByWithRelationInput | LearningMonthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningMonthRecords.
     */
    cursor?: LearningMonthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningMonthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningMonthRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningMonthRecords.
     */
    distinct?: LearningMonthRecordScalarFieldEnum | LearningMonthRecordScalarFieldEnum[]
  }

  /**
   * LearningMonthRecord findMany
   */
  export type LearningMonthRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningMonthRecords to fetch.
     */
    where?: LearningMonthRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningMonthRecords to fetch.
     */
    orderBy?: LearningMonthRecordOrderByWithRelationInput | LearningMonthRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningMonthRecords.
     */
    cursor?: LearningMonthRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningMonthRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningMonthRecords.
     */
    skip?: number
    distinct?: LearningMonthRecordScalarFieldEnum | LearningMonthRecordScalarFieldEnum[]
  }

  /**
   * LearningMonthRecord create
   */
  export type LearningMonthRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningMonthRecord.
     */
    data: XOR<LearningMonthRecordCreateInput, LearningMonthRecordUncheckedCreateInput>
  }

  /**
   * LearningMonthRecord createMany
   */
  export type LearningMonthRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningMonthRecords.
     */
    data: LearningMonthRecordCreateManyInput | LearningMonthRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningMonthRecord createManyAndReturn
   */
  export type LearningMonthRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * The data used to create many LearningMonthRecords.
     */
    data: LearningMonthRecordCreateManyInput | LearningMonthRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningMonthRecord update
   */
  export type LearningMonthRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningMonthRecord.
     */
    data: XOR<LearningMonthRecordUpdateInput, LearningMonthRecordUncheckedUpdateInput>
    /**
     * Choose, which LearningMonthRecord to update.
     */
    where: LearningMonthRecordWhereUniqueInput
  }

  /**
   * LearningMonthRecord updateMany
   */
  export type LearningMonthRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningMonthRecords.
     */
    data: XOR<LearningMonthRecordUpdateManyMutationInput, LearningMonthRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningMonthRecords to update
     */
    where?: LearningMonthRecordWhereInput
    /**
     * Limit how many LearningMonthRecords to update.
     */
    limit?: number
  }

  /**
   * LearningMonthRecord updateManyAndReturn
   */
  export type LearningMonthRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * The data used to update LearningMonthRecords.
     */
    data: XOR<LearningMonthRecordUpdateManyMutationInput, LearningMonthRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningMonthRecords to update
     */
    where?: LearningMonthRecordWhereInput
    /**
     * Limit how many LearningMonthRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningMonthRecord upsert
   */
  export type LearningMonthRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningMonthRecord to update in case it exists.
     */
    where: LearningMonthRecordWhereUniqueInput
    /**
     * In case the LearningMonthRecord found by the `where` argument doesn't exist, create a new LearningMonthRecord with this data.
     */
    create: XOR<LearningMonthRecordCreateInput, LearningMonthRecordUncheckedCreateInput>
    /**
     * In case the LearningMonthRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningMonthRecordUpdateInput, LearningMonthRecordUncheckedUpdateInput>
  }

  /**
   * LearningMonthRecord delete
   */
  export type LearningMonthRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
    /**
     * Filter which LearningMonthRecord to delete.
     */
    where: LearningMonthRecordWhereUniqueInput
  }

  /**
   * LearningMonthRecord deleteMany
   */
  export type LearningMonthRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningMonthRecords to delete
     */
    where?: LearningMonthRecordWhereInput
    /**
     * Limit how many LearningMonthRecords to delete.
     */
    limit?: number
  }

  /**
   * LearningMonthRecord without action
   */
  export type LearningMonthRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningMonthRecord
     */
    select?: LearningMonthRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningMonthRecord
     */
    omit?: LearningMonthRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningMonthRecordInclude<ExtArgs> | null
  }


  /**
   * Model LearningRecord
   */

  export type AggregateLearningRecord = {
    _count: LearningRecordCountAggregateOutputType | null
    _avg: LearningRecordAvgAggregateOutputType | null
    _sum: LearningRecordSumAggregateOutputType | null
    _min: LearningRecordMinAggregateOutputType | null
    _max: LearningRecordMaxAggregateOutputType | null
  }

  export type LearningRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    duration: number | null
  }

  export type LearningRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    duration: number | null
  }

  export type LearningRecordMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    content: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    learningDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningRecordMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    content: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    learningDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningRecordCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    title: number
    content: number
    startTime: number
    endTime: number
    duration: number
    learningDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningRecordAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    duration?: true
  }

  export type LearningRecordSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    duration?: true
  }

  export type LearningRecordMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    startTime?: true
    endTime?: true
    duration?: true
    learningDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    startTime?: true
    endTime?: true
    duration?: true
    learningDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningRecordCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    startTime?: true
    endTime?: true
    duration?: true
    learningDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningRecord to aggregate.
     */
    where?: LearningRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningRecords to fetch.
     */
    orderBy?: LearningRecordOrderByWithRelationInput | LearningRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningRecords
    **/
    _count?: true | LearningRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningRecordMaxAggregateInputType
  }

  export type GetLearningRecordAggregateType<T extends LearningRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningRecord[P]>
      : GetScalarType<T[P], AggregateLearningRecord[P]>
  }




  export type LearningRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningRecordWhereInput
    orderBy?: LearningRecordOrderByWithAggregationInput | LearningRecordOrderByWithAggregationInput[]
    by: LearningRecordScalarFieldEnum[] | LearningRecordScalarFieldEnum
    having?: LearningRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningRecordCountAggregateInputType | true
    _avg?: LearningRecordAvgAggregateInputType
    _sum?: LearningRecordSumAggregateInputType
    _min?: LearningRecordMinAggregateInputType
    _max?: LearningRecordMaxAggregateInputType
  }

  export type LearningRecordGroupByOutputType = {
    id: number
    userId: number
    categoryId: number
    title: string
    content: string
    startTime: Date
    endTime: Date
    duration: number
    learningDate: Date
    createdAt: Date
    updatedAt: Date
    _count: LearningRecordCountAggregateOutputType | null
    _avg: LearningRecordAvgAggregateOutputType | null
    _sum: LearningRecordSumAggregateOutputType | null
    _min: LearningRecordMinAggregateOutputType | null
    _max: LearningRecordMaxAggregateOutputType | null
  }

  type GetLearningRecordGroupByPayload<T extends LearningRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningRecordGroupByOutputType[P]>
            : GetScalarType<T[P], LearningRecordGroupByOutputType[P]>
        }
      >
    >


  export type LearningRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    learningDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    learningRecordCategories?: boolean | LearningRecord$learningRecordCategoriesArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | LearningRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningRecord"]>

  export type LearningRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    learningDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningRecord"]>

  export type LearningRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    learningDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningRecord"]>

  export type LearningRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    learningDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "title" | "content" | "startTime" | "endTime" | "duration" | "learningDate" | "createdAt" | "updatedAt", ExtArgs["result"]["learningRecord"]>
  export type LearningRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningRecordCategories?: boolean | LearningRecord$learningRecordCategoriesArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | LearningRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LearningRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LearningRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningRecord"
    objects: {
      learningRecordCategories: Prisma.$LearningRecordCategoryPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      categoryId: number
      title: string
      content: string
      startTime: Date
      endTime: Date
      duration: number
      learningDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningRecord"]>
    composites: {}
  }

  type LearningRecordGetPayload<S extends boolean | null | undefined | LearningRecordDefaultArgs> = $Result.GetResult<Prisma.$LearningRecordPayload, S>

  type LearningRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningRecordCountAggregateInputType | true
    }

  export interface LearningRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningRecord'], meta: { name: 'LearningRecord' } }
    /**
     * Find zero or one LearningRecord that matches the filter.
     * @param {LearningRecordFindUniqueArgs} args - Arguments to find a LearningRecord
     * @example
     * // Get one LearningRecord
     * const learningRecord = await prisma.learningRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningRecordFindUniqueArgs>(args: SelectSubset<T, LearningRecordFindUniqueArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningRecordFindUniqueOrThrowArgs} args - Arguments to find a LearningRecord
     * @example
     * // Get one LearningRecord
     * const learningRecord = await prisma.learningRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordFindFirstArgs} args - Arguments to find a LearningRecord
     * @example
     * // Get one LearningRecord
     * const learningRecord = await prisma.learningRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningRecordFindFirstArgs>(args?: SelectSubset<T, LearningRecordFindFirstArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordFindFirstOrThrowArgs} args - Arguments to find a LearningRecord
     * @example
     * // Get one LearningRecord
     * const learningRecord = await prisma.learningRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningRecords
     * const learningRecords = await prisma.learningRecord.findMany()
     * 
     * // Get first 10 LearningRecords
     * const learningRecords = await prisma.learningRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningRecordWithIdOnly = await prisma.learningRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningRecordFindManyArgs>(args?: SelectSubset<T, LearningRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningRecord.
     * @param {LearningRecordCreateArgs} args - Arguments to create a LearningRecord.
     * @example
     * // Create one LearningRecord
     * const LearningRecord = await prisma.learningRecord.create({
     *   data: {
     *     // ... data to create a LearningRecord
     *   }
     * })
     * 
     */
    create<T extends LearningRecordCreateArgs>(args: SelectSubset<T, LearningRecordCreateArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningRecords.
     * @param {LearningRecordCreateManyArgs} args - Arguments to create many LearningRecords.
     * @example
     * // Create many LearningRecords
     * const learningRecord = await prisma.learningRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningRecordCreateManyArgs>(args?: SelectSubset<T, LearningRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningRecords and returns the data saved in the database.
     * @param {LearningRecordCreateManyAndReturnArgs} args - Arguments to create many LearningRecords.
     * @example
     * // Create many LearningRecords
     * const learningRecord = await prisma.learningRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningRecords and only return the `id`
     * const learningRecordWithIdOnly = await prisma.learningRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningRecord.
     * @param {LearningRecordDeleteArgs} args - Arguments to delete one LearningRecord.
     * @example
     * // Delete one LearningRecord
     * const LearningRecord = await prisma.learningRecord.delete({
     *   where: {
     *     // ... filter to delete one LearningRecord
     *   }
     * })
     * 
     */
    delete<T extends LearningRecordDeleteArgs>(args: SelectSubset<T, LearningRecordDeleteArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningRecord.
     * @param {LearningRecordUpdateArgs} args - Arguments to update one LearningRecord.
     * @example
     * // Update one LearningRecord
     * const learningRecord = await prisma.learningRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningRecordUpdateArgs>(args: SelectSubset<T, LearningRecordUpdateArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningRecords.
     * @param {LearningRecordDeleteManyArgs} args - Arguments to filter LearningRecords to delete.
     * @example
     * // Delete a few LearningRecords
     * const { count } = await prisma.learningRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningRecordDeleteManyArgs>(args?: SelectSubset<T, LearningRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningRecords
     * const learningRecord = await prisma.learningRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningRecordUpdateManyArgs>(args: SelectSubset<T, LearningRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningRecords and returns the data updated in the database.
     * @param {LearningRecordUpdateManyAndReturnArgs} args - Arguments to update many LearningRecords.
     * @example
     * // Update many LearningRecords
     * const learningRecord = await prisma.learningRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningRecords and only return the `id`
     * const learningRecordWithIdOnly = await prisma.learningRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningRecord.
     * @param {LearningRecordUpsertArgs} args - Arguments to update or create a LearningRecord.
     * @example
     * // Update or create a LearningRecord
     * const learningRecord = await prisma.learningRecord.upsert({
     *   create: {
     *     // ... data to create a LearningRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningRecord we want to update
     *   }
     * })
     */
    upsert<T extends LearningRecordUpsertArgs>(args: SelectSubset<T, LearningRecordUpsertArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordCountArgs} args - Arguments to filter LearningRecords to count.
     * @example
     * // Count the number of LearningRecords
     * const count = await prisma.learningRecord.count({
     *   where: {
     *     // ... the filter for the LearningRecords we want to count
     *   }
     * })
    **/
    count<T extends LearningRecordCountArgs>(
      args?: Subset<T, LearningRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningRecordAggregateArgs>(args: Subset<T, LearningRecordAggregateArgs>): Prisma.PrismaPromise<GetLearningRecordAggregateType<T>>

    /**
     * Group by LearningRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordGroupByArgs} args - Group by arguments.
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
      T extends LearningRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningRecordGroupByArgs['orderBy'] }
        : { orderBy?: LearningRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningRecord model
   */
  readonly fields: LearningRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    learningRecordCategories<T extends LearningRecord$learningRecordCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, LearningRecord$learningRecordCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LearningRecord model
   */
  interface LearningRecordFieldRefs {
    readonly id: FieldRef<"LearningRecord", 'Int'>
    readonly userId: FieldRef<"LearningRecord", 'Int'>
    readonly categoryId: FieldRef<"LearningRecord", 'Int'>
    readonly title: FieldRef<"LearningRecord", 'String'>
    readonly content: FieldRef<"LearningRecord", 'String'>
    readonly startTime: FieldRef<"LearningRecord", 'DateTime'>
    readonly endTime: FieldRef<"LearningRecord", 'DateTime'>
    readonly duration: FieldRef<"LearningRecord", 'Float'>
    readonly learningDate: FieldRef<"LearningRecord", 'DateTime'>
    readonly createdAt: FieldRef<"LearningRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningRecord findUnique
   */
  export type LearningRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecord to fetch.
     */
    where: LearningRecordWhereUniqueInput
  }

  /**
   * LearningRecord findUniqueOrThrow
   */
  export type LearningRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecord to fetch.
     */
    where: LearningRecordWhereUniqueInput
  }

  /**
   * LearningRecord findFirst
   */
  export type LearningRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecord to fetch.
     */
    where?: LearningRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningRecords to fetch.
     */
    orderBy?: LearningRecordOrderByWithRelationInput | LearningRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningRecords.
     */
    cursor?: LearningRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningRecords.
     */
    distinct?: LearningRecordScalarFieldEnum | LearningRecordScalarFieldEnum[]
  }

  /**
   * LearningRecord findFirstOrThrow
   */
  export type LearningRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecord to fetch.
     */
    where?: LearningRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningRecords to fetch.
     */
    orderBy?: LearningRecordOrderByWithRelationInput | LearningRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningRecords.
     */
    cursor?: LearningRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningRecords.
     */
    distinct?: LearningRecordScalarFieldEnum | LearningRecordScalarFieldEnum[]
  }

  /**
   * LearningRecord findMany
   */
  export type LearningRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecords to fetch.
     */
    where?: LearningRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningRecords to fetch.
     */
    orderBy?: LearningRecordOrderByWithRelationInput | LearningRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningRecords.
     */
    cursor?: LearningRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningRecords.
     */
    skip?: number
    distinct?: LearningRecordScalarFieldEnum | LearningRecordScalarFieldEnum[]
  }

  /**
   * LearningRecord create
   */
  export type LearningRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningRecord.
     */
    data: XOR<LearningRecordCreateInput, LearningRecordUncheckedCreateInput>
  }

  /**
   * LearningRecord createMany
   */
  export type LearningRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningRecords.
     */
    data: LearningRecordCreateManyInput | LearningRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningRecord createManyAndReturn
   */
  export type LearningRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * The data used to create many LearningRecords.
     */
    data: LearningRecordCreateManyInput | LearningRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningRecord update
   */
  export type LearningRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningRecord.
     */
    data: XOR<LearningRecordUpdateInput, LearningRecordUncheckedUpdateInput>
    /**
     * Choose, which LearningRecord to update.
     */
    where: LearningRecordWhereUniqueInput
  }

  /**
   * LearningRecord updateMany
   */
  export type LearningRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningRecords.
     */
    data: XOR<LearningRecordUpdateManyMutationInput, LearningRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningRecords to update
     */
    where?: LearningRecordWhereInput
    /**
     * Limit how many LearningRecords to update.
     */
    limit?: number
  }

  /**
   * LearningRecord updateManyAndReturn
   */
  export type LearningRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * The data used to update LearningRecords.
     */
    data: XOR<LearningRecordUpdateManyMutationInput, LearningRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningRecords to update
     */
    where?: LearningRecordWhereInput
    /**
     * Limit how many LearningRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningRecord upsert
   */
  export type LearningRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningRecord to update in case it exists.
     */
    where: LearningRecordWhereUniqueInput
    /**
     * In case the LearningRecord found by the `where` argument doesn't exist, create a new LearningRecord with this data.
     */
    create: XOR<LearningRecordCreateInput, LearningRecordUncheckedCreateInput>
    /**
     * In case the LearningRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningRecordUpdateInput, LearningRecordUncheckedUpdateInput>
  }

  /**
   * LearningRecord delete
   */
  export type LearningRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
    /**
     * Filter which LearningRecord to delete.
     */
    where: LearningRecordWhereUniqueInput
  }

  /**
   * LearningRecord deleteMany
   */
  export type LearningRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningRecords to delete
     */
    where?: LearningRecordWhereInput
    /**
     * Limit how many LearningRecords to delete.
     */
    limit?: number
  }

  /**
   * LearningRecord.learningRecordCategories
   */
  export type LearningRecord$learningRecordCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    where?: LearningRecordCategoryWhereInput
    orderBy?: LearningRecordCategoryOrderByWithRelationInput | LearningRecordCategoryOrderByWithRelationInput[]
    cursor?: LearningRecordCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningRecordCategoryScalarFieldEnum | LearningRecordCategoryScalarFieldEnum[]
  }

  /**
   * LearningRecord without action
   */
  export type LearningRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecord
     */
    select?: LearningRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecord
     */
    omit?: LearningRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordInclude<ExtArgs> | null
  }


  /**
   * Model LearningRecordCategory
   */

  export type AggregateLearningRecordCategory = {
    _count: LearningRecordCategoryCountAggregateOutputType | null
    _avg: LearningRecordCategoryAvgAggregateOutputType | null
    _sum: LearningRecordCategorySumAggregateOutputType | null
    _min: LearningRecordCategoryMinAggregateOutputType | null
    _max: LearningRecordCategoryMaxAggregateOutputType | null
  }

  export type LearningRecordCategoryAvgAggregateOutputType = {
    id: number | null
    learningRecordId: number | null
    categoryId: number | null
  }

  export type LearningRecordCategorySumAggregateOutputType = {
    id: number | null
    learningRecordId: number | null
    categoryId: number | null
  }

  export type LearningRecordCategoryMinAggregateOutputType = {
    id: number | null
    learningRecordId: number | null
    categoryId: number | null
  }

  export type LearningRecordCategoryMaxAggregateOutputType = {
    id: number | null
    learningRecordId: number | null
    categoryId: number | null
  }

  export type LearningRecordCategoryCountAggregateOutputType = {
    id: number
    learningRecordId: number
    categoryId: number
    _all: number
  }


  export type LearningRecordCategoryAvgAggregateInputType = {
    id?: true
    learningRecordId?: true
    categoryId?: true
  }

  export type LearningRecordCategorySumAggregateInputType = {
    id?: true
    learningRecordId?: true
    categoryId?: true
  }

  export type LearningRecordCategoryMinAggregateInputType = {
    id?: true
    learningRecordId?: true
    categoryId?: true
  }

  export type LearningRecordCategoryMaxAggregateInputType = {
    id?: true
    learningRecordId?: true
    categoryId?: true
  }

  export type LearningRecordCategoryCountAggregateInputType = {
    id?: true
    learningRecordId?: true
    categoryId?: true
    _all?: true
  }

  export type LearningRecordCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningRecordCategory to aggregate.
     */
    where?: LearningRecordCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningRecordCategories to fetch.
     */
    orderBy?: LearningRecordCategoryOrderByWithRelationInput | LearningRecordCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningRecordCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningRecordCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningRecordCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningRecordCategories
    **/
    _count?: true | LearningRecordCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningRecordCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningRecordCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningRecordCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningRecordCategoryMaxAggregateInputType
  }

  export type GetLearningRecordCategoryAggregateType<T extends LearningRecordCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningRecordCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningRecordCategory[P]>
      : GetScalarType<T[P], AggregateLearningRecordCategory[P]>
  }




  export type LearningRecordCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningRecordCategoryWhereInput
    orderBy?: LearningRecordCategoryOrderByWithAggregationInput | LearningRecordCategoryOrderByWithAggregationInput[]
    by: LearningRecordCategoryScalarFieldEnum[] | LearningRecordCategoryScalarFieldEnum
    having?: LearningRecordCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningRecordCategoryCountAggregateInputType | true
    _avg?: LearningRecordCategoryAvgAggregateInputType
    _sum?: LearningRecordCategorySumAggregateInputType
    _min?: LearningRecordCategoryMinAggregateInputType
    _max?: LearningRecordCategoryMaxAggregateInputType
  }

  export type LearningRecordCategoryGroupByOutputType = {
    id: number
    learningRecordId: number
    categoryId: number
    _count: LearningRecordCategoryCountAggregateOutputType | null
    _avg: LearningRecordCategoryAvgAggregateOutputType | null
    _sum: LearningRecordCategorySumAggregateOutputType | null
    _min: LearningRecordCategoryMinAggregateOutputType | null
    _max: LearningRecordCategoryMaxAggregateOutputType | null
  }

  type GetLearningRecordCategoryGroupByPayload<T extends LearningRecordCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningRecordCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningRecordCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningRecordCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], LearningRecordCategoryGroupByOutputType[P]>
        }
      >
    >


  export type LearningRecordCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    learningRecordId?: boolean
    categoryId?: boolean
    learningRecords?: boolean | LearningRecordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningRecordCategory"]>

  export type LearningRecordCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    learningRecordId?: boolean
    categoryId?: boolean
    learningRecords?: boolean | LearningRecordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningRecordCategory"]>

  export type LearningRecordCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    learningRecordId?: boolean
    categoryId?: boolean
    learningRecords?: boolean | LearningRecordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningRecordCategory"]>

  export type LearningRecordCategorySelectScalar = {
    id?: boolean
    learningRecordId?: boolean
    categoryId?: boolean
  }

  export type LearningRecordCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "learningRecordId" | "categoryId", ExtArgs["result"]["learningRecordCategory"]>
  export type LearningRecordCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningRecords?: boolean | LearningRecordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type LearningRecordCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningRecords?: boolean | LearningRecordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type LearningRecordCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningRecords?: boolean | LearningRecordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $LearningRecordCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningRecordCategory"
    objects: {
      learningRecords: Prisma.$LearningRecordPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      learningRecordId: number
      categoryId: number
    }, ExtArgs["result"]["learningRecordCategory"]>
    composites: {}
  }

  type LearningRecordCategoryGetPayload<S extends boolean | null | undefined | LearningRecordCategoryDefaultArgs> = $Result.GetResult<Prisma.$LearningRecordCategoryPayload, S>

  type LearningRecordCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningRecordCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningRecordCategoryCountAggregateInputType | true
    }

  export interface LearningRecordCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningRecordCategory'], meta: { name: 'LearningRecordCategory' } }
    /**
     * Find zero or one LearningRecordCategory that matches the filter.
     * @param {LearningRecordCategoryFindUniqueArgs} args - Arguments to find a LearningRecordCategory
     * @example
     * // Get one LearningRecordCategory
     * const learningRecordCategory = await prisma.learningRecordCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningRecordCategoryFindUniqueArgs>(args: SelectSubset<T, LearningRecordCategoryFindUniqueArgs<ExtArgs>>): Prisma__LearningRecordCategoryClient<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningRecordCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningRecordCategoryFindUniqueOrThrowArgs} args - Arguments to find a LearningRecordCategory
     * @example
     * // Get one LearningRecordCategory
     * const learningRecordCategory = await prisma.learningRecordCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningRecordCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningRecordCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningRecordCategoryClient<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningRecordCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordCategoryFindFirstArgs} args - Arguments to find a LearningRecordCategory
     * @example
     * // Get one LearningRecordCategory
     * const learningRecordCategory = await prisma.learningRecordCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningRecordCategoryFindFirstArgs>(args?: SelectSubset<T, LearningRecordCategoryFindFirstArgs<ExtArgs>>): Prisma__LearningRecordCategoryClient<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningRecordCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordCategoryFindFirstOrThrowArgs} args - Arguments to find a LearningRecordCategory
     * @example
     * // Get one LearningRecordCategory
     * const learningRecordCategory = await prisma.learningRecordCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningRecordCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningRecordCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningRecordCategoryClient<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningRecordCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningRecordCategories
     * const learningRecordCategories = await prisma.learningRecordCategory.findMany()
     * 
     * // Get first 10 LearningRecordCategories
     * const learningRecordCategories = await prisma.learningRecordCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningRecordCategoryWithIdOnly = await prisma.learningRecordCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningRecordCategoryFindManyArgs>(args?: SelectSubset<T, LearningRecordCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningRecordCategory.
     * @param {LearningRecordCategoryCreateArgs} args - Arguments to create a LearningRecordCategory.
     * @example
     * // Create one LearningRecordCategory
     * const LearningRecordCategory = await prisma.learningRecordCategory.create({
     *   data: {
     *     // ... data to create a LearningRecordCategory
     *   }
     * })
     * 
     */
    create<T extends LearningRecordCategoryCreateArgs>(args: SelectSubset<T, LearningRecordCategoryCreateArgs<ExtArgs>>): Prisma__LearningRecordCategoryClient<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningRecordCategories.
     * @param {LearningRecordCategoryCreateManyArgs} args - Arguments to create many LearningRecordCategories.
     * @example
     * // Create many LearningRecordCategories
     * const learningRecordCategory = await prisma.learningRecordCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningRecordCategoryCreateManyArgs>(args?: SelectSubset<T, LearningRecordCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningRecordCategories and returns the data saved in the database.
     * @param {LearningRecordCategoryCreateManyAndReturnArgs} args - Arguments to create many LearningRecordCategories.
     * @example
     * // Create many LearningRecordCategories
     * const learningRecordCategory = await prisma.learningRecordCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningRecordCategories and only return the `id`
     * const learningRecordCategoryWithIdOnly = await prisma.learningRecordCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningRecordCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningRecordCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningRecordCategory.
     * @param {LearningRecordCategoryDeleteArgs} args - Arguments to delete one LearningRecordCategory.
     * @example
     * // Delete one LearningRecordCategory
     * const LearningRecordCategory = await prisma.learningRecordCategory.delete({
     *   where: {
     *     // ... filter to delete one LearningRecordCategory
     *   }
     * })
     * 
     */
    delete<T extends LearningRecordCategoryDeleteArgs>(args: SelectSubset<T, LearningRecordCategoryDeleteArgs<ExtArgs>>): Prisma__LearningRecordCategoryClient<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningRecordCategory.
     * @param {LearningRecordCategoryUpdateArgs} args - Arguments to update one LearningRecordCategory.
     * @example
     * // Update one LearningRecordCategory
     * const learningRecordCategory = await prisma.learningRecordCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningRecordCategoryUpdateArgs>(args: SelectSubset<T, LearningRecordCategoryUpdateArgs<ExtArgs>>): Prisma__LearningRecordCategoryClient<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningRecordCategories.
     * @param {LearningRecordCategoryDeleteManyArgs} args - Arguments to filter LearningRecordCategories to delete.
     * @example
     * // Delete a few LearningRecordCategories
     * const { count } = await prisma.learningRecordCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningRecordCategoryDeleteManyArgs>(args?: SelectSubset<T, LearningRecordCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningRecordCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningRecordCategories
     * const learningRecordCategory = await prisma.learningRecordCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningRecordCategoryUpdateManyArgs>(args: SelectSubset<T, LearningRecordCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningRecordCategories and returns the data updated in the database.
     * @param {LearningRecordCategoryUpdateManyAndReturnArgs} args - Arguments to update many LearningRecordCategories.
     * @example
     * // Update many LearningRecordCategories
     * const learningRecordCategory = await prisma.learningRecordCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningRecordCategories and only return the `id`
     * const learningRecordCategoryWithIdOnly = await prisma.learningRecordCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningRecordCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningRecordCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningRecordCategory.
     * @param {LearningRecordCategoryUpsertArgs} args - Arguments to update or create a LearningRecordCategory.
     * @example
     * // Update or create a LearningRecordCategory
     * const learningRecordCategory = await prisma.learningRecordCategory.upsert({
     *   create: {
     *     // ... data to create a LearningRecordCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningRecordCategory we want to update
     *   }
     * })
     */
    upsert<T extends LearningRecordCategoryUpsertArgs>(args: SelectSubset<T, LearningRecordCategoryUpsertArgs<ExtArgs>>): Prisma__LearningRecordCategoryClient<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningRecordCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordCategoryCountArgs} args - Arguments to filter LearningRecordCategories to count.
     * @example
     * // Count the number of LearningRecordCategories
     * const count = await prisma.learningRecordCategory.count({
     *   where: {
     *     // ... the filter for the LearningRecordCategories we want to count
     *   }
     * })
    **/
    count<T extends LearningRecordCategoryCountArgs>(
      args?: Subset<T, LearningRecordCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningRecordCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningRecordCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningRecordCategoryAggregateArgs>(args: Subset<T, LearningRecordCategoryAggregateArgs>): Prisma.PrismaPromise<GetLearningRecordCategoryAggregateType<T>>

    /**
     * Group by LearningRecordCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningRecordCategoryGroupByArgs} args - Group by arguments.
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
      T extends LearningRecordCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningRecordCategoryGroupByArgs['orderBy'] }
        : { orderBy?: LearningRecordCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningRecordCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningRecordCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningRecordCategory model
   */
  readonly fields: LearningRecordCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningRecordCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningRecordCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    learningRecords<T extends LearningRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LearningRecordDefaultArgs<ExtArgs>>): Prisma__LearningRecordClient<$Result.GetResult<Prisma.$LearningRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LearningRecordCategory model
   */
  interface LearningRecordCategoryFieldRefs {
    readonly id: FieldRef<"LearningRecordCategory", 'Int'>
    readonly learningRecordId: FieldRef<"LearningRecordCategory", 'Int'>
    readonly categoryId: FieldRef<"LearningRecordCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LearningRecordCategory findUnique
   */
  export type LearningRecordCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecordCategory to fetch.
     */
    where: LearningRecordCategoryWhereUniqueInput
  }

  /**
   * LearningRecordCategory findUniqueOrThrow
   */
  export type LearningRecordCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecordCategory to fetch.
     */
    where: LearningRecordCategoryWhereUniqueInput
  }

  /**
   * LearningRecordCategory findFirst
   */
  export type LearningRecordCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecordCategory to fetch.
     */
    where?: LearningRecordCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningRecordCategories to fetch.
     */
    orderBy?: LearningRecordCategoryOrderByWithRelationInput | LearningRecordCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningRecordCategories.
     */
    cursor?: LearningRecordCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningRecordCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningRecordCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningRecordCategories.
     */
    distinct?: LearningRecordCategoryScalarFieldEnum | LearningRecordCategoryScalarFieldEnum[]
  }

  /**
   * LearningRecordCategory findFirstOrThrow
   */
  export type LearningRecordCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecordCategory to fetch.
     */
    where?: LearningRecordCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningRecordCategories to fetch.
     */
    orderBy?: LearningRecordCategoryOrderByWithRelationInput | LearningRecordCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningRecordCategories.
     */
    cursor?: LearningRecordCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningRecordCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningRecordCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningRecordCategories.
     */
    distinct?: LearningRecordCategoryScalarFieldEnum | LearningRecordCategoryScalarFieldEnum[]
  }

  /**
   * LearningRecordCategory findMany
   */
  export type LearningRecordCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LearningRecordCategories to fetch.
     */
    where?: LearningRecordCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningRecordCategories to fetch.
     */
    orderBy?: LearningRecordCategoryOrderByWithRelationInput | LearningRecordCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningRecordCategories.
     */
    cursor?: LearningRecordCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningRecordCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningRecordCategories.
     */
    skip?: number
    distinct?: LearningRecordCategoryScalarFieldEnum | LearningRecordCategoryScalarFieldEnum[]
  }

  /**
   * LearningRecordCategory create
   */
  export type LearningRecordCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningRecordCategory.
     */
    data: XOR<LearningRecordCategoryCreateInput, LearningRecordCategoryUncheckedCreateInput>
  }

  /**
   * LearningRecordCategory createMany
   */
  export type LearningRecordCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningRecordCategories.
     */
    data: LearningRecordCategoryCreateManyInput | LearningRecordCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningRecordCategory createManyAndReturn
   */
  export type LearningRecordCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many LearningRecordCategories.
     */
    data: LearningRecordCategoryCreateManyInput | LearningRecordCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningRecordCategory update
   */
  export type LearningRecordCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningRecordCategory.
     */
    data: XOR<LearningRecordCategoryUpdateInput, LearningRecordCategoryUncheckedUpdateInput>
    /**
     * Choose, which LearningRecordCategory to update.
     */
    where: LearningRecordCategoryWhereUniqueInput
  }

  /**
   * LearningRecordCategory updateMany
   */
  export type LearningRecordCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningRecordCategories.
     */
    data: XOR<LearningRecordCategoryUpdateManyMutationInput, LearningRecordCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LearningRecordCategories to update
     */
    where?: LearningRecordCategoryWhereInput
    /**
     * Limit how many LearningRecordCategories to update.
     */
    limit?: number
  }

  /**
   * LearningRecordCategory updateManyAndReturn
   */
  export type LearningRecordCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * The data used to update LearningRecordCategories.
     */
    data: XOR<LearningRecordCategoryUpdateManyMutationInput, LearningRecordCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LearningRecordCategories to update
     */
    where?: LearningRecordCategoryWhereInput
    /**
     * Limit how many LearningRecordCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningRecordCategory upsert
   */
  export type LearningRecordCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningRecordCategory to update in case it exists.
     */
    where: LearningRecordCategoryWhereUniqueInput
    /**
     * In case the LearningRecordCategory found by the `where` argument doesn't exist, create a new LearningRecordCategory with this data.
     */
    create: XOR<LearningRecordCategoryCreateInput, LearningRecordCategoryUncheckedCreateInput>
    /**
     * In case the LearningRecordCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningRecordCategoryUpdateInput, LearningRecordCategoryUncheckedUpdateInput>
  }

  /**
   * LearningRecordCategory delete
   */
  export type LearningRecordCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    /**
     * Filter which LearningRecordCategory to delete.
     */
    where: LearningRecordCategoryWhereUniqueInput
  }

  /**
   * LearningRecordCategory deleteMany
   */
  export type LearningRecordCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningRecordCategories to delete
     */
    where?: LearningRecordCategoryWhereInput
    /**
     * Limit how many LearningRecordCategories to delete.
     */
    limit?: number
  }

  /**
   * LearningRecordCategory without action
   */
  export type LearningRecordCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    categoryName: string | null
    parentId: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    categoryName: string | null
    parentId: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    categoryName: number
    parentId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    categoryName?: true
    parentId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    categoryName?: true
    parentId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    categoryName?: true
    parentId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    categoryName: string
    parentId: number | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    parentId?: boolean
    learningRecordCategories?: boolean | Category$learningRecordCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    parentId?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    parentId?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    categoryName?: boolean
    parentId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryName" | "parentId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningRecordCategories?: boolean | Category$learningRecordCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      learningRecordCategories: Prisma.$LearningRecordCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryName: string
      parentId: number | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    learningRecordCategories<T extends Category$learningRecordCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$learningRecordCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningRecordCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly categoryName: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.learningRecordCategories
   */
  export type Category$learningRecordCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningRecordCategory
     */
    select?: LearningRecordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningRecordCategory
     */
    omit?: LearningRecordCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningRecordCategoryInclude<ExtArgs> | null
    where?: LearningRecordCategoryWhereInput
    orderBy?: LearningRecordCategoryOrderByWithRelationInput | LearningRecordCategoryOrderByWithRelationInput[]
    cursor?: LearningRecordCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningRecordCategoryScalarFieldEnum | LearningRecordCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SnsPostRecord
   */

  export type AggregateSnsPostRecord = {
    _count: SnsPostRecordCountAggregateOutputType | null
    _avg: SnsPostRecordAvgAggregateOutputType | null
    _sum: SnsPostRecordSumAggregateOutputType | null
    _min: SnsPostRecordMinAggregateOutputType | null
    _max: SnsPostRecordMaxAggregateOutputType | null
  }

  export type SnsPostRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SnsPostRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SnsPostRecordMinAggregateOutputType = {
    id: number | null
    userId: number | null
    snsTitle: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnsPostRecordMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    snsTitle: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnsPostRecordCountAggregateOutputType = {
    id: number
    userId: number
    snsTitle: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SnsPostRecordAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SnsPostRecordSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SnsPostRecordMinAggregateInputType = {
    id?: true
    userId?: true
    snsTitle?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnsPostRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    snsTitle?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnsPostRecordCountAggregateInputType = {
    id?: true
    userId?: true
    snsTitle?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SnsPostRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnsPostRecord to aggregate.
     */
    where?: SnsPostRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsPostRecords to fetch.
     */
    orderBy?: SnsPostRecordOrderByWithRelationInput | SnsPostRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnsPostRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsPostRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsPostRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SnsPostRecords
    **/
    _count?: true | SnsPostRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnsPostRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnsPostRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnsPostRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnsPostRecordMaxAggregateInputType
  }

  export type GetSnsPostRecordAggregateType<T extends SnsPostRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateSnsPostRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnsPostRecord[P]>
      : GetScalarType<T[P], AggregateSnsPostRecord[P]>
  }




  export type SnsPostRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnsPostRecordWhereInput
    orderBy?: SnsPostRecordOrderByWithAggregationInput | SnsPostRecordOrderByWithAggregationInput[]
    by: SnsPostRecordScalarFieldEnum[] | SnsPostRecordScalarFieldEnum
    having?: SnsPostRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnsPostRecordCountAggregateInputType | true
    _avg?: SnsPostRecordAvgAggregateInputType
    _sum?: SnsPostRecordSumAggregateInputType
    _min?: SnsPostRecordMinAggregateInputType
    _max?: SnsPostRecordMaxAggregateInputType
  }

  export type SnsPostRecordGroupByOutputType = {
    id: number
    userId: number
    snsTitle: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: SnsPostRecordCountAggregateOutputType | null
    _avg: SnsPostRecordAvgAggregateOutputType | null
    _sum: SnsPostRecordSumAggregateOutputType | null
    _min: SnsPostRecordMinAggregateOutputType | null
    _max: SnsPostRecordMaxAggregateOutputType | null
  }

  type GetSnsPostRecordGroupByPayload<T extends SnsPostRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnsPostRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnsPostRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnsPostRecordGroupByOutputType[P]>
            : GetScalarType<T[P], SnsPostRecordGroupByOutputType[P]>
        }
      >
    >


  export type SnsPostRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snsTitle?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snsPostRecord"]>

  export type SnsPostRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snsTitle?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snsPostRecord"]>

  export type SnsPostRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    snsTitle?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snsPostRecord"]>

  export type SnsPostRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    snsTitle?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SnsPostRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "snsTitle" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["snsPostRecord"]>
  export type SnsPostRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SnsPostRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SnsPostRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SnsPostRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SnsPostRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      snsTitle: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["snsPostRecord"]>
    composites: {}
  }

  type SnsPostRecordGetPayload<S extends boolean | null | undefined | SnsPostRecordDefaultArgs> = $Result.GetResult<Prisma.$SnsPostRecordPayload, S>

  type SnsPostRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnsPostRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnsPostRecordCountAggregateInputType | true
    }

  export interface SnsPostRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SnsPostRecord'], meta: { name: 'SnsPostRecord' } }
    /**
     * Find zero or one SnsPostRecord that matches the filter.
     * @param {SnsPostRecordFindUniqueArgs} args - Arguments to find a SnsPostRecord
     * @example
     * // Get one SnsPostRecord
     * const snsPostRecord = await prisma.snsPostRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnsPostRecordFindUniqueArgs>(args: SelectSubset<T, SnsPostRecordFindUniqueArgs<ExtArgs>>): Prisma__SnsPostRecordClient<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SnsPostRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnsPostRecordFindUniqueOrThrowArgs} args - Arguments to find a SnsPostRecord
     * @example
     * // Get one SnsPostRecord
     * const snsPostRecord = await prisma.snsPostRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnsPostRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, SnsPostRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnsPostRecordClient<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SnsPostRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostRecordFindFirstArgs} args - Arguments to find a SnsPostRecord
     * @example
     * // Get one SnsPostRecord
     * const snsPostRecord = await prisma.snsPostRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnsPostRecordFindFirstArgs>(args?: SelectSubset<T, SnsPostRecordFindFirstArgs<ExtArgs>>): Prisma__SnsPostRecordClient<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SnsPostRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostRecordFindFirstOrThrowArgs} args - Arguments to find a SnsPostRecord
     * @example
     * // Get one SnsPostRecord
     * const snsPostRecord = await prisma.snsPostRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnsPostRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, SnsPostRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnsPostRecordClient<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SnsPostRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SnsPostRecords
     * const snsPostRecords = await prisma.snsPostRecord.findMany()
     * 
     * // Get first 10 SnsPostRecords
     * const snsPostRecords = await prisma.snsPostRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snsPostRecordWithIdOnly = await prisma.snsPostRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnsPostRecordFindManyArgs>(args?: SelectSubset<T, SnsPostRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SnsPostRecord.
     * @param {SnsPostRecordCreateArgs} args - Arguments to create a SnsPostRecord.
     * @example
     * // Create one SnsPostRecord
     * const SnsPostRecord = await prisma.snsPostRecord.create({
     *   data: {
     *     // ... data to create a SnsPostRecord
     *   }
     * })
     * 
     */
    create<T extends SnsPostRecordCreateArgs>(args: SelectSubset<T, SnsPostRecordCreateArgs<ExtArgs>>): Prisma__SnsPostRecordClient<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SnsPostRecords.
     * @param {SnsPostRecordCreateManyArgs} args - Arguments to create many SnsPostRecords.
     * @example
     * // Create many SnsPostRecords
     * const snsPostRecord = await prisma.snsPostRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnsPostRecordCreateManyArgs>(args?: SelectSubset<T, SnsPostRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SnsPostRecords and returns the data saved in the database.
     * @param {SnsPostRecordCreateManyAndReturnArgs} args - Arguments to create many SnsPostRecords.
     * @example
     * // Create many SnsPostRecords
     * const snsPostRecord = await prisma.snsPostRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SnsPostRecords and only return the `id`
     * const snsPostRecordWithIdOnly = await prisma.snsPostRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnsPostRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, SnsPostRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SnsPostRecord.
     * @param {SnsPostRecordDeleteArgs} args - Arguments to delete one SnsPostRecord.
     * @example
     * // Delete one SnsPostRecord
     * const SnsPostRecord = await prisma.snsPostRecord.delete({
     *   where: {
     *     // ... filter to delete one SnsPostRecord
     *   }
     * })
     * 
     */
    delete<T extends SnsPostRecordDeleteArgs>(args: SelectSubset<T, SnsPostRecordDeleteArgs<ExtArgs>>): Prisma__SnsPostRecordClient<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SnsPostRecord.
     * @param {SnsPostRecordUpdateArgs} args - Arguments to update one SnsPostRecord.
     * @example
     * // Update one SnsPostRecord
     * const snsPostRecord = await prisma.snsPostRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnsPostRecordUpdateArgs>(args: SelectSubset<T, SnsPostRecordUpdateArgs<ExtArgs>>): Prisma__SnsPostRecordClient<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SnsPostRecords.
     * @param {SnsPostRecordDeleteManyArgs} args - Arguments to filter SnsPostRecords to delete.
     * @example
     * // Delete a few SnsPostRecords
     * const { count } = await prisma.snsPostRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnsPostRecordDeleteManyArgs>(args?: SelectSubset<T, SnsPostRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnsPostRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SnsPostRecords
     * const snsPostRecord = await prisma.snsPostRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnsPostRecordUpdateManyArgs>(args: SelectSubset<T, SnsPostRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnsPostRecords and returns the data updated in the database.
     * @param {SnsPostRecordUpdateManyAndReturnArgs} args - Arguments to update many SnsPostRecords.
     * @example
     * // Update many SnsPostRecords
     * const snsPostRecord = await prisma.snsPostRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SnsPostRecords and only return the `id`
     * const snsPostRecordWithIdOnly = await prisma.snsPostRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SnsPostRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, SnsPostRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SnsPostRecord.
     * @param {SnsPostRecordUpsertArgs} args - Arguments to update or create a SnsPostRecord.
     * @example
     * // Update or create a SnsPostRecord
     * const snsPostRecord = await prisma.snsPostRecord.upsert({
     *   create: {
     *     // ... data to create a SnsPostRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SnsPostRecord we want to update
     *   }
     * })
     */
    upsert<T extends SnsPostRecordUpsertArgs>(args: SelectSubset<T, SnsPostRecordUpsertArgs<ExtArgs>>): Prisma__SnsPostRecordClient<$Result.GetResult<Prisma.$SnsPostRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SnsPostRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostRecordCountArgs} args - Arguments to filter SnsPostRecords to count.
     * @example
     * // Count the number of SnsPostRecords
     * const count = await prisma.snsPostRecord.count({
     *   where: {
     *     // ... the filter for the SnsPostRecords we want to count
     *   }
     * })
    **/
    count<T extends SnsPostRecordCountArgs>(
      args?: Subset<T, SnsPostRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnsPostRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SnsPostRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SnsPostRecordAggregateArgs>(args: Subset<T, SnsPostRecordAggregateArgs>): Prisma.PrismaPromise<GetSnsPostRecordAggregateType<T>>

    /**
     * Group by SnsPostRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostRecordGroupByArgs} args - Group by arguments.
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
      T extends SnsPostRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnsPostRecordGroupByArgs['orderBy'] }
        : { orderBy?: SnsPostRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SnsPostRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnsPostRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SnsPostRecord model
   */
  readonly fields: SnsPostRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SnsPostRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnsPostRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SnsPostRecord model
   */
  interface SnsPostRecordFieldRefs {
    readonly id: FieldRef<"SnsPostRecord", 'Int'>
    readonly userId: FieldRef<"SnsPostRecord", 'Int'>
    readonly snsTitle: FieldRef<"SnsPostRecord", 'String'>
    readonly content: FieldRef<"SnsPostRecord", 'String'>
    readonly createdAt: FieldRef<"SnsPostRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"SnsPostRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SnsPostRecord findUnique
   */
  export type SnsPostRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * Filter, which SnsPostRecord to fetch.
     */
    where: SnsPostRecordWhereUniqueInput
  }

  /**
   * SnsPostRecord findUniqueOrThrow
   */
  export type SnsPostRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * Filter, which SnsPostRecord to fetch.
     */
    where: SnsPostRecordWhereUniqueInput
  }

  /**
   * SnsPostRecord findFirst
   */
  export type SnsPostRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * Filter, which SnsPostRecord to fetch.
     */
    where?: SnsPostRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsPostRecords to fetch.
     */
    orderBy?: SnsPostRecordOrderByWithRelationInput | SnsPostRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnsPostRecords.
     */
    cursor?: SnsPostRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsPostRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsPostRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnsPostRecords.
     */
    distinct?: SnsPostRecordScalarFieldEnum | SnsPostRecordScalarFieldEnum[]
  }

  /**
   * SnsPostRecord findFirstOrThrow
   */
  export type SnsPostRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * Filter, which SnsPostRecord to fetch.
     */
    where?: SnsPostRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsPostRecords to fetch.
     */
    orderBy?: SnsPostRecordOrderByWithRelationInput | SnsPostRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnsPostRecords.
     */
    cursor?: SnsPostRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsPostRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsPostRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnsPostRecords.
     */
    distinct?: SnsPostRecordScalarFieldEnum | SnsPostRecordScalarFieldEnum[]
  }

  /**
   * SnsPostRecord findMany
   */
  export type SnsPostRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * Filter, which SnsPostRecords to fetch.
     */
    where?: SnsPostRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsPostRecords to fetch.
     */
    orderBy?: SnsPostRecordOrderByWithRelationInput | SnsPostRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SnsPostRecords.
     */
    cursor?: SnsPostRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsPostRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsPostRecords.
     */
    skip?: number
    distinct?: SnsPostRecordScalarFieldEnum | SnsPostRecordScalarFieldEnum[]
  }

  /**
   * SnsPostRecord create
   */
  export type SnsPostRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a SnsPostRecord.
     */
    data: XOR<SnsPostRecordCreateInput, SnsPostRecordUncheckedCreateInput>
  }

  /**
   * SnsPostRecord createMany
   */
  export type SnsPostRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SnsPostRecords.
     */
    data: SnsPostRecordCreateManyInput | SnsPostRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SnsPostRecord createManyAndReturn
   */
  export type SnsPostRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * The data used to create many SnsPostRecords.
     */
    data: SnsPostRecordCreateManyInput | SnsPostRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SnsPostRecord update
   */
  export type SnsPostRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a SnsPostRecord.
     */
    data: XOR<SnsPostRecordUpdateInput, SnsPostRecordUncheckedUpdateInput>
    /**
     * Choose, which SnsPostRecord to update.
     */
    where: SnsPostRecordWhereUniqueInput
  }

  /**
   * SnsPostRecord updateMany
   */
  export type SnsPostRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SnsPostRecords.
     */
    data: XOR<SnsPostRecordUpdateManyMutationInput, SnsPostRecordUncheckedUpdateManyInput>
    /**
     * Filter which SnsPostRecords to update
     */
    where?: SnsPostRecordWhereInput
    /**
     * Limit how many SnsPostRecords to update.
     */
    limit?: number
  }

  /**
   * SnsPostRecord updateManyAndReturn
   */
  export type SnsPostRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * The data used to update SnsPostRecords.
     */
    data: XOR<SnsPostRecordUpdateManyMutationInput, SnsPostRecordUncheckedUpdateManyInput>
    /**
     * Filter which SnsPostRecords to update
     */
    where?: SnsPostRecordWhereInput
    /**
     * Limit how many SnsPostRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SnsPostRecord upsert
   */
  export type SnsPostRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the SnsPostRecord to update in case it exists.
     */
    where: SnsPostRecordWhereUniqueInput
    /**
     * In case the SnsPostRecord found by the `where` argument doesn't exist, create a new SnsPostRecord with this data.
     */
    create: XOR<SnsPostRecordCreateInput, SnsPostRecordUncheckedCreateInput>
    /**
     * In case the SnsPostRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnsPostRecordUpdateInput, SnsPostRecordUncheckedUpdateInput>
  }

  /**
   * SnsPostRecord delete
   */
  export type SnsPostRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
    /**
     * Filter which SnsPostRecord to delete.
     */
    where: SnsPostRecordWhereUniqueInput
  }

  /**
   * SnsPostRecord deleteMany
   */
  export type SnsPostRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnsPostRecords to delete
     */
    where?: SnsPostRecordWhereInput
    /**
     * Limit how many SnsPostRecords to delete.
     */
    limit?: number
  }

  /**
   * SnsPostRecord without action
   */
  export type SnsPostRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostRecord
     */
    select?: SnsPostRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostRecord
     */
    omit?: SnsPostRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnsPostRecordInclude<ExtArgs> | null
  }


  /**
   * Model SnsPostsTone
   */

  export type AggregateSnsPostsTone = {
    _count: SnsPostsToneCountAggregateOutputType | null
    _avg: SnsPostsToneAvgAggregateOutputType | null
    _sum: SnsPostsToneSumAggregateOutputType | null
    _min: SnsPostsToneMinAggregateOutputType | null
    _max: SnsPostsToneMaxAggregateOutputType | null
  }

  export type SnsPostsToneAvgAggregateOutputType = {
    id: number | null
  }

  export type SnsPostsToneSumAggregateOutputType = {
    id: number | null
  }

  export type SnsPostsToneMinAggregateOutputType = {
    id: number | null
    tonePattern: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnsPostsToneMaxAggregateOutputType = {
    id: number | null
    tonePattern: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnsPostsToneCountAggregateOutputType = {
    id: number
    tonePattern: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SnsPostsToneAvgAggregateInputType = {
    id?: true
  }

  export type SnsPostsToneSumAggregateInputType = {
    id?: true
  }

  export type SnsPostsToneMinAggregateInputType = {
    id?: true
    tonePattern?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnsPostsToneMaxAggregateInputType = {
    id?: true
    tonePattern?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnsPostsToneCountAggregateInputType = {
    id?: true
    tonePattern?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SnsPostsToneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnsPostsTone to aggregate.
     */
    where?: SnsPostsToneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsPostsTones to fetch.
     */
    orderBy?: SnsPostsToneOrderByWithRelationInput | SnsPostsToneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnsPostsToneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsPostsTones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsPostsTones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SnsPostsTones
    **/
    _count?: true | SnsPostsToneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnsPostsToneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnsPostsToneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnsPostsToneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnsPostsToneMaxAggregateInputType
  }

  export type GetSnsPostsToneAggregateType<T extends SnsPostsToneAggregateArgs> = {
        [P in keyof T & keyof AggregateSnsPostsTone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnsPostsTone[P]>
      : GetScalarType<T[P], AggregateSnsPostsTone[P]>
  }




  export type SnsPostsToneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnsPostsToneWhereInput
    orderBy?: SnsPostsToneOrderByWithAggregationInput | SnsPostsToneOrderByWithAggregationInput[]
    by: SnsPostsToneScalarFieldEnum[] | SnsPostsToneScalarFieldEnum
    having?: SnsPostsToneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnsPostsToneCountAggregateInputType | true
    _avg?: SnsPostsToneAvgAggregateInputType
    _sum?: SnsPostsToneSumAggregateInputType
    _min?: SnsPostsToneMinAggregateInputType
    _max?: SnsPostsToneMaxAggregateInputType
  }

  export type SnsPostsToneGroupByOutputType = {
    id: number
    tonePattern: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: SnsPostsToneCountAggregateOutputType | null
    _avg: SnsPostsToneAvgAggregateOutputType | null
    _sum: SnsPostsToneSumAggregateOutputType | null
    _min: SnsPostsToneMinAggregateOutputType | null
    _max: SnsPostsToneMaxAggregateOutputType | null
  }

  type GetSnsPostsToneGroupByPayload<T extends SnsPostsToneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnsPostsToneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnsPostsToneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnsPostsToneGroupByOutputType[P]>
            : GetScalarType<T[P], SnsPostsToneGroupByOutputType[P]>
        }
      >
    >


  export type SnsPostsToneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tonePattern?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["snsPostsTone"]>

  export type SnsPostsToneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tonePattern?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["snsPostsTone"]>

  export type SnsPostsToneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tonePattern?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["snsPostsTone"]>

  export type SnsPostsToneSelectScalar = {
    id?: boolean
    tonePattern?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SnsPostsToneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tonePattern" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["snsPostsTone"]>

  export type $SnsPostsTonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SnsPostsTone"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tonePattern: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["snsPostsTone"]>
    composites: {}
  }

  type SnsPostsToneGetPayload<S extends boolean | null | undefined | SnsPostsToneDefaultArgs> = $Result.GetResult<Prisma.$SnsPostsTonePayload, S>

  type SnsPostsToneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnsPostsToneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnsPostsToneCountAggregateInputType | true
    }

  export interface SnsPostsToneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SnsPostsTone'], meta: { name: 'SnsPostsTone' } }
    /**
     * Find zero or one SnsPostsTone that matches the filter.
     * @param {SnsPostsToneFindUniqueArgs} args - Arguments to find a SnsPostsTone
     * @example
     * // Get one SnsPostsTone
     * const snsPostsTone = await prisma.snsPostsTone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnsPostsToneFindUniqueArgs>(args: SelectSubset<T, SnsPostsToneFindUniqueArgs<ExtArgs>>): Prisma__SnsPostsToneClient<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SnsPostsTone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnsPostsToneFindUniqueOrThrowArgs} args - Arguments to find a SnsPostsTone
     * @example
     * // Get one SnsPostsTone
     * const snsPostsTone = await prisma.snsPostsTone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnsPostsToneFindUniqueOrThrowArgs>(args: SelectSubset<T, SnsPostsToneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnsPostsToneClient<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SnsPostsTone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostsToneFindFirstArgs} args - Arguments to find a SnsPostsTone
     * @example
     * // Get one SnsPostsTone
     * const snsPostsTone = await prisma.snsPostsTone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnsPostsToneFindFirstArgs>(args?: SelectSubset<T, SnsPostsToneFindFirstArgs<ExtArgs>>): Prisma__SnsPostsToneClient<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SnsPostsTone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostsToneFindFirstOrThrowArgs} args - Arguments to find a SnsPostsTone
     * @example
     * // Get one SnsPostsTone
     * const snsPostsTone = await prisma.snsPostsTone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnsPostsToneFindFirstOrThrowArgs>(args?: SelectSubset<T, SnsPostsToneFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnsPostsToneClient<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SnsPostsTones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostsToneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SnsPostsTones
     * const snsPostsTones = await prisma.snsPostsTone.findMany()
     * 
     * // Get first 10 SnsPostsTones
     * const snsPostsTones = await prisma.snsPostsTone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snsPostsToneWithIdOnly = await prisma.snsPostsTone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnsPostsToneFindManyArgs>(args?: SelectSubset<T, SnsPostsToneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SnsPostsTone.
     * @param {SnsPostsToneCreateArgs} args - Arguments to create a SnsPostsTone.
     * @example
     * // Create one SnsPostsTone
     * const SnsPostsTone = await prisma.snsPostsTone.create({
     *   data: {
     *     // ... data to create a SnsPostsTone
     *   }
     * })
     * 
     */
    create<T extends SnsPostsToneCreateArgs>(args: SelectSubset<T, SnsPostsToneCreateArgs<ExtArgs>>): Prisma__SnsPostsToneClient<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SnsPostsTones.
     * @param {SnsPostsToneCreateManyArgs} args - Arguments to create many SnsPostsTones.
     * @example
     * // Create many SnsPostsTones
     * const snsPostsTone = await prisma.snsPostsTone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnsPostsToneCreateManyArgs>(args?: SelectSubset<T, SnsPostsToneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SnsPostsTones and returns the data saved in the database.
     * @param {SnsPostsToneCreateManyAndReturnArgs} args - Arguments to create many SnsPostsTones.
     * @example
     * // Create many SnsPostsTones
     * const snsPostsTone = await prisma.snsPostsTone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SnsPostsTones and only return the `id`
     * const snsPostsToneWithIdOnly = await prisma.snsPostsTone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnsPostsToneCreateManyAndReturnArgs>(args?: SelectSubset<T, SnsPostsToneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SnsPostsTone.
     * @param {SnsPostsToneDeleteArgs} args - Arguments to delete one SnsPostsTone.
     * @example
     * // Delete one SnsPostsTone
     * const SnsPostsTone = await prisma.snsPostsTone.delete({
     *   where: {
     *     // ... filter to delete one SnsPostsTone
     *   }
     * })
     * 
     */
    delete<T extends SnsPostsToneDeleteArgs>(args: SelectSubset<T, SnsPostsToneDeleteArgs<ExtArgs>>): Prisma__SnsPostsToneClient<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SnsPostsTone.
     * @param {SnsPostsToneUpdateArgs} args - Arguments to update one SnsPostsTone.
     * @example
     * // Update one SnsPostsTone
     * const snsPostsTone = await prisma.snsPostsTone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnsPostsToneUpdateArgs>(args: SelectSubset<T, SnsPostsToneUpdateArgs<ExtArgs>>): Prisma__SnsPostsToneClient<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SnsPostsTones.
     * @param {SnsPostsToneDeleteManyArgs} args - Arguments to filter SnsPostsTones to delete.
     * @example
     * // Delete a few SnsPostsTones
     * const { count } = await prisma.snsPostsTone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnsPostsToneDeleteManyArgs>(args?: SelectSubset<T, SnsPostsToneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnsPostsTones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostsToneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SnsPostsTones
     * const snsPostsTone = await prisma.snsPostsTone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnsPostsToneUpdateManyArgs>(args: SelectSubset<T, SnsPostsToneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SnsPostsTones and returns the data updated in the database.
     * @param {SnsPostsToneUpdateManyAndReturnArgs} args - Arguments to update many SnsPostsTones.
     * @example
     * // Update many SnsPostsTones
     * const snsPostsTone = await prisma.snsPostsTone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SnsPostsTones and only return the `id`
     * const snsPostsToneWithIdOnly = await prisma.snsPostsTone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SnsPostsToneUpdateManyAndReturnArgs>(args: SelectSubset<T, SnsPostsToneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SnsPostsTone.
     * @param {SnsPostsToneUpsertArgs} args - Arguments to update or create a SnsPostsTone.
     * @example
     * // Update or create a SnsPostsTone
     * const snsPostsTone = await prisma.snsPostsTone.upsert({
     *   create: {
     *     // ... data to create a SnsPostsTone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SnsPostsTone we want to update
     *   }
     * })
     */
    upsert<T extends SnsPostsToneUpsertArgs>(args: SelectSubset<T, SnsPostsToneUpsertArgs<ExtArgs>>): Prisma__SnsPostsToneClient<$Result.GetResult<Prisma.$SnsPostsTonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SnsPostsTones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostsToneCountArgs} args - Arguments to filter SnsPostsTones to count.
     * @example
     * // Count the number of SnsPostsTones
     * const count = await prisma.snsPostsTone.count({
     *   where: {
     *     // ... the filter for the SnsPostsTones we want to count
     *   }
     * })
    **/
    count<T extends SnsPostsToneCountArgs>(
      args?: Subset<T, SnsPostsToneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnsPostsToneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SnsPostsTone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostsToneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SnsPostsToneAggregateArgs>(args: Subset<T, SnsPostsToneAggregateArgs>): Prisma.PrismaPromise<GetSnsPostsToneAggregateType<T>>

    /**
     * Group by SnsPostsTone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsPostsToneGroupByArgs} args - Group by arguments.
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
      T extends SnsPostsToneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnsPostsToneGroupByArgs['orderBy'] }
        : { orderBy?: SnsPostsToneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SnsPostsToneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnsPostsToneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SnsPostsTone model
   */
  readonly fields: SnsPostsToneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SnsPostsTone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnsPostsToneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SnsPostsTone model
   */
  interface SnsPostsToneFieldRefs {
    readonly id: FieldRef<"SnsPostsTone", 'Int'>
    readonly tonePattern: FieldRef<"SnsPostsTone", 'String'>
    readonly description: FieldRef<"SnsPostsTone", 'String'>
    readonly createdAt: FieldRef<"SnsPostsTone", 'DateTime'>
    readonly updatedAt: FieldRef<"SnsPostsTone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SnsPostsTone findUnique
   */
  export type SnsPostsToneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * Filter, which SnsPostsTone to fetch.
     */
    where: SnsPostsToneWhereUniqueInput
  }

  /**
   * SnsPostsTone findUniqueOrThrow
   */
  export type SnsPostsToneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * Filter, which SnsPostsTone to fetch.
     */
    where: SnsPostsToneWhereUniqueInput
  }

  /**
   * SnsPostsTone findFirst
   */
  export type SnsPostsToneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * Filter, which SnsPostsTone to fetch.
     */
    where?: SnsPostsToneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsPostsTones to fetch.
     */
    orderBy?: SnsPostsToneOrderByWithRelationInput | SnsPostsToneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnsPostsTones.
     */
    cursor?: SnsPostsToneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsPostsTones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsPostsTones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnsPostsTones.
     */
    distinct?: SnsPostsToneScalarFieldEnum | SnsPostsToneScalarFieldEnum[]
  }

  /**
   * SnsPostsTone findFirstOrThrow
   */
  export type SnsPostsToneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * Filter, which SnsPostsTone to fetch.
     */
    where?: SnsPostsToneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsPostsTones to fetch.
     */
    orderBy?: SnsPostsToneOrderByWithRelationInput | SnsPostsToneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SnsPostsTones.
     */
    cursor?: SnsPostsToneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsPostsTones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsPostsTones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SnsPostsTones.
     */
    distinct?: SnsPostsToneScalarFieldEnum | SnsPostsToneScalarFieldEnum[]
  }

  /**
   * SnsPostsTone findMany
   */
  export type SnsPostsToneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * Filter, which SnsPostsTones to fetch.
     */
    where?: SnsPostsToneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SnsPostsTones to fetch.
     */
    orderBy?: SnsPostsToneOrderByWithRelationInput | SnsPostsToneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SnsPostsTones.
     */
    cursor?: SnsPostsToneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SnsPostsTones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SnsPostsTones.
     */
    skip?: number
    distinct?: SnsPostsToneScalarFieldEnum | SnsPostsToneScalarFieldEnum[]
  }

  /**
   * SnsPostsTone create
   */
  export type SnsPostsToneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * The data needed to create a SnsPostsTone.
     */
    data: XOR<SnsPostsToneCreateInput, SnsPostsToneUncheckedCreateInput>
  }

  /**
   * SnsPostsTone createMany
   */
  export type SnsPostsToneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SnsPostsTones.
     */
    data: SnsPostsToneCreateManyInput | SnsPostsToneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SnsPostsTone createManyAndReturn
   */
  export type SnsPostsToneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * The data used to create many SnsPostsTones.
     */
    data: SnsPostsToneCreateManyInput | SnsPostsToneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SnsPostsTone update
   */
  export type SnsPostsToneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * The data needed to update a SnsPostsTone.
     */
    data: XOR<SnsPostsToneUpdateInput, SnsPostsToneUncheckedUpdateInput>
    /**
     * Choose, which SnsPostsTone to update.
     */
    where: SnsPostsToneWhereUniqueInput
  }

  /**
   * SnsPostsTone updateMany
   */
  export type SnsPostsToneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SnsPostsTones.
     */
    data: XOR<SnsPostsToneUpdateManyMutationInput, SnsPostsToneUncheckedUpdateManyInput>
    /**
     * Filter which SnsPostsTones to update
     */
    where?: SnsPostsToneWhereInput
    /**
     * Limit how many SnsPostsTones to update.
     */
    limit?: number
  }

  /**
   * SnsPostsTone updateManyAndReturn
   */
  export type SnsPostsToneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * The data used to update SnsPostsTones.
     */
    data: XOR<SnsPostsToneUpdateManyMutationInput, SnsPostsToneUncheckedUpdateManyInput>
    /**
     * Filter which SnsPostsTones to update
     */
    where?: SnsPostsToneWhereInput
    /**
     * Limit how many SnsPostsTones to update.
     */
    limit?: number
  }

  /**
   * SnsPostsTone upsert
   */
  export type SnsPostsToneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * The filter to search for the SnsPostsTone to update in case it exists.
     */
    where: SnsPostsToneWhereUniqueInput
    /**
     * In case the SnsPostsTone found by the `where` argument doesn't exist, create a new SnsPostsTone with this data.
     */
    create: XOR<SnsPostsToneCreateInput, SnsPostsToneUncheckedCreateInput>
    /**
     * In case the SnsPostsTone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnsPostsToneUpdateInput, SnsPostsToneUncheckedUpdateInput>
  }

  /**
   * SnsPostsTone delete
   */
  export type SnsPostsToneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
    /**
     * Filter which SnsPostsTone to delete.
     */
    where: SnsPostsToneWhereUniqueInput
  }

  /**
   * SnsPostsTone deleteMany
   */
  export type SnsPostsToneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SnsPostsTones to delete
     */
    where?: SnsPostsToneWhereInput
    /**
     * Limit how many SnsPostsTones to delete.
     */
    limit?: number
  }

  /**
   * SnsPostsTone without action
   */
  export type SnsPostsToneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SnsPostsTone
     */
    select?: SnsPostsToneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SnsPostsTone
     */
    omit?: SnsPostsToneOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    supabaseUserId: 'supabaseUserId',
    roleId: 'roleId',
    nickName: 'nickName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    profilePicture: 'profilePicture',
    bio: 'bio',
    phoneNumber: 'phoneNumber',
    socialLinks: 'socialLinks',
    prefecture: 'prefecture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PrefectureScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parentId: 'parentId'
  };

  export type PrefectureScalarFieldEnum = (typeof PrefectureScalarFieldEnum)[keyof typeof PrefectureScalarFieldEnum]


  export const LearningGoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    targetTime: 'targetTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningGoalScalarFieldEnum = (typeof LearningGoalScalarFieldEnum)[keyof typeof LearningGoalScalarFieldEnum]


  export const LearningDailyRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    year: 'year',
    day: 'day',
    totalTime: 'totalTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningDailyRecordScalarFieldEnum = (typeof LearningDailyRecordScalarFieldEnum)[keyof typeof LearningDailyRecordScalarFieldEnum]


  export const LearningWeekRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    year: 'year',
    week: 'week',
    totalTime: 'totalTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningWeekRecordScalarFieldEnum = (typeof LearningWeekRecordScalarFieldEnum)[keyof typeof LearningWeekRecordScalarFieldEnum]


  export const LearningMonthRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    year: 'year',
    month: 'month',
    totalTime: 'totalTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningMonthRecordScalarFieldEnum = (typeof LearningMonthRecordScalarFieldEnum)[keyof typeof LearningMonthRecordScalarFieldEnum]


  export const LearningRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    title: 'title',
    content: 'content',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    learningDate: 'learningDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningRecordScalarFieldEnum = (typeof LearningRecordScalarFieldEnum)[keyof typeof LearningRecordScalarFieldEnum]


  export const LearningRecordCategoryScalarFieldEnum: {
    id: 'id',
    learningRecordId: 'learningRecordId',
    categoryId: 'categoryId'
  };

  export type LearningRecordCategoryScalarFieldEnum = (typeof LearningRecordCategoryScalarFieldEnum)[keyof typeof LearningRecordCategoryScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    categoryName: 'categoryName',
    parentId: 'parentId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SnsPostRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    snsTitle: 'snsTitle',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SnsPostRecordScalarFieldEnum = (typeof SnsPostRecordScalarFieldEnum)[keyof typeof SnsPostRecordScalarFieldEnum]


  export const SnsPostsToneScalarFieldEnum: {
    id: 'id',
    tonePattern: 'tonePattern',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SnsPostsToneScalarFieldEnum = (typeof SnsPostsToneScalarFieldEnum)[keyof typeof SnsPostsToneScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    supabaseUserId?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    nickName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    learningGoals?: XOR<LearningGoalNullableScalarRelationFilter, LearningGoalWhereInput> | null
    learningDailyRecords?: LearningDailyRecordListRelationFilter
    learningWeekRecords?: LearningWeekRecordListRelationFilter
    learningMonthRecords?: LearningMonthRecordListRelationFilter
    learningRecords?: LearningRecordListRelationFilter
    snsPostRecords?: SnsPostRecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    roleId?: SortOrder
    nickName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    learningGoals?: LearningGoalOrderByWithRelationInput
    learningDailyRecords?: LearningDailyRecordOrderByRelationAggregateInput
    learningWeekRecords?: LearningWeekRecordOrderByRelationAggregateInput
    learningMonthRecords?: LearningMonthRecordOrderByRelationAggregateInput
    learningRecords?: LearningRecordOrderByRelationAggregateInput
    snsPostRecords?: SnsPostRecordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    supabaseUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    roleId?: IntFilter<"User"> | number
    nickName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    learningGoals?: XOR<LearningGoalNullableScalarRelationFilter, LearningGoalWhereInput> | null
    learningDailyRecords?: LearningDailyRecordListRelationFilter
    learningWeekRecords?: LearningWeekRecordListRelationFilter
    learningMonthRecords?: LearningMonthRecordListRelationFilter
    learningRecords?: LearningRecordListRelationFilter
    snsPostRecords?: SnsPostRecordListRelationFilter
  }, "id" | "supabaseUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    roleId?: SortOrder
    nickName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    supabaseUserId?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
    nickName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    userId?: IntFilter<"Profile"> | number
    firstName?: StringNullableFilter<"Profile"> | string | null
    lastName?: StringNullableFilter<"Profile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Profile"> | Date | string | null
    gender?: StringNullableFilter<"Profile"> | string | null
    profilePicture?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    phoneNumber?: StringNullableFilter<"Profile"> | string | null
    socialLinks?: StringNullableFilter<"Profile"> | string | null
    prefecture?: IntNullableFilter<"Profile"> | number | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    prefecture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringNullableFilter<"Profile"> | string | null
    lastName?: StringNullableFilter<"Profile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Profile"> | Date | string | null
    gender?: StringNullableFilter<"Profile"> | string | null
    profilePicture?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    phoneNumber?: StringNullableFilter<"Profile"> | string | null
    socialLinks?: StringNullableFilter<"Profile"> | string | null
    prefecture?: IntNullableFilter<"Profile"> | number | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    prefecture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    userId?: IntWithAggregatesFilter<"Profile"> | number
    firstName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    socialLinks?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    prefecture?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type PrefectureWhereInput = {
    AND?: PrefectureWhereInput | PrefectureWhereInput[]
    OR?: PrefectureWhereInput[]
    NOT?: PrefectureWhereInput | PrefectureWhereInput[]
    id?: IntFilter<"Prefecture"> | number
    name?: StringFilter<"Prefecture"> | string
    parentId?: IntNullableFilter<"Prefecture"> | number | null
    parent?: XOR<PrefectureNullableScalarRelationFilter, PrefectureWhereInput> | null
    children?: PrefectureListRelationFilter
  }

  export type PrefectureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: PrefectureOrderByWithRelationInput
    children?: PrefectureOrderByRelationAggregateInput
  }

  export type PrefectureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PrefectureWhereInput | PrefectureWhereInput[]
    OR?: PrefectureWhereInput[]
    NOT?: PrefectureWhereInput | PrefectureWhereInput[]
    parentId?: IntNullableFilter<"Prefecture"> | number | null
    parent?: XOR<PrefectureNullableScalarRelationFilter, PrefectureWhereInput> | null
    children?: PrefectureListRelationFilter
  }, "id" | "name">

  export type PrefectureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: PrefectureCountOrderByAggregateInput
    _avg?: PrefectureAvgOrderByAggregateInput
    _max?: PrefectureMaxOrderByAggregateInput
    _min?: PrefectureMinOrderByAggregateInput
    _sum?: PrefectureSumOrderByAggregateInput
  }

  export type PrefectureScalarWhereWithAggregatesInput = {
    AND?: PrefectureScalarWhereWithAggregatesInput | PrefectureScalarWhereWithAggregatesInput[]
    OR?: PrefectureScalarWhereWithAggregatesInput[]
    NOT?: PrefectureScalarWhereWithAggregatesInput | PrefectureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prefecture"> | number
    name?: StringWithAggregatesFilter<"Prefecture"> | string
    parentId?: IntNullableWithAggregatesFilter<"Prefecture"> | number | null
  }

  export type LearningGoalWhereInput = {
    AND?: LearningGoalWhereInput | LearningGoalWhereInput[]
    OR?: LearningGoalWhereInput[]
    NOT?: LearningGoalWhereInput | LearningGoalWhereInput[]
    id?: IntFilter<"LearningGoal"> | number
    userId?: IntFilter<"LearningGoal"> | number
    targetTime?: FloatFilter<"LearningGoal"> | number
    createdAt?: DateTimeFilter<"LearningGoal"> | Date | string
    updatedAt?: DateTimeFilter<"LearningGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LearningGoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LearningGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: LearningGoalWhereInput | LearningGoalWhereInput[]
    OR?: LearningGoalWhereInput[]
    NOT?: LearningGoalWhereInput | LearningGoalWhereInput[]
    targetTime?: FloatFilter<"LearningGoal"> | number
    createdAt?: DateTimeFilter<"LearningGoal"> | Date | string
    updatedAt?: DateTimeFilter<"LearningGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type LearningGoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningGoalCountOrderByAggregateInput
    _avg?: LearningGoalAvgOrderByAggregateInput
    _max?: LearningGoalMaxOrderByAggregateInput
    _min?: LearningGoalMinOrderByAggregateInput
    _sum?: LearningGoalSumOrderByAggregateInput
  }

  export type LearningGoalScalarWhereWithAggregatesInput = {
    AND?: LearningGoalScalarWhereWithAggregatesInput | LearningGoalScalarWhereWithAggregatesInput[]
    OR?: LearningGoalScalarWhereWithAggregatesInput[]
    NOT?: LearningGoalScalarWhereWithAggregatesInput | LearningGoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LearningGoal"> | number
    userId?: IntWithAggregatesFilter<"LearningGoal"> | number
    targetTime?: FloatWithAggregatesFilter<"LearningGoal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LearningGoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningGoal"> | Date | string
  }

  export type LearningDailyRecordWhereInput = {
    AND?: LearningDailyRecordWhereInput | LearningDailyRecordWhereInput[]
    OR?: LearningDailyRecordWhereInput[]
    NOT?: LearningDailyRecordWhereInput | LearningDailyRecordWhereInput[]
    id?: IntFilter<"LearningDailyRecord"> | number
    userId?: IntFilter<"LearningDailyRecord"> | number
    year?: IntFilter<"LearningDailyRecord"> | number
    day?: DateTimeNullableFilter<"LearningDailyRecord"> | Date | string | null
    totalTime?: FloatFilter<"LearningDailyRecord"> | number
    createdAt?: DateTimeFilter<"LearningDailyRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningDailyRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LearningDailyRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    day?: SortOrderInput | SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LearningDailyRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LearningDailyRecordWhereInput | LearningDailyRecordWhereInput[]
    OR?: LearningDailyRecordWhereInput[]
    NOT?: LearningDailyRecordWhereInput | LearningDailyRecordWhereInput[]
    userId?: IntFilter<"LearningDailyRecord"> | number
    year?: IntFilter<"LearningDailyRecord"> | number
    day?: DateTimeNullableFilter<"LearningDailyRecord"> | Date | string | null
    totalTime?: FloatFilter<"LearningDailyRecord"> | number
    createdAt?: DateTimeFilter<"LearningDailyRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningDailyRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LearningDailyRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    day?: SortOrderInput | SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningDailyRecordCountOrderByAggregateInput
    _avg?: LearningDailyRecordAvgOrderByAggregateInput
    _max?: LearningDailyRecordMaxOrderByAggregateInput
    _min?: LearningDailyRecordMinOrderByAggregateInput
    _sum?: LearningDailyRecordSumOrderByAggregateInput
  }

  export type LearningDailyRecordScalarWhereWithAggregatesInput = {
    AND?: LearningDailyRecordScalarWhereWithAggregatesInput | LearningDailyRecordScalarWhereWithAggregatesInput[]
    OR?: LearningDailyRecordScalarWhereWithAggregatesInput[]
    NOT?: LearningDailyRecordScalarWhereWithAggregatesInput | LearningDailyRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LearningDailyRecord"> | number
    userId?: IntWithAggregatesFilter<"LearningDailyRecord"> | number
    year?: IntWithAggregatesFilter<"LearningDailyRecord"> | number
    day?: DateTimeNullableWithAggregatesFilter<"LearningDailyRecord"> | Date | string | null
    totalTime?: FloatWithAggregatesFilter<"LearningDailyRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LearningDailyRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningDailyRecord"> | Date | string
  }

  export type LearningWeekRecordWhereInput = {
    AND?: LearningWeekRecordWhereInput | LearningWeekRecordWhereInput[]
    OR?: LearningWeekRecordWhereInput[]
    NOT?: LearningWeekRecordWhereInput | LearningWeekRecordWhereInput[]
    id?: IntFilter<"LearningWeekRecord"> | number
    userId?: IntFilter<"LearningWeekRecord"> | number
    year?: IntFilter<"LearningWeekRecord"> | number
    week?: DateTimeNullableFilter<"LearningWeekRecord"> | Date | string | null
    totalTime?: FloatFilter<"LearningWeekRecord"> | number
    createdAt?: DateTimeFilter<"LearningWeekRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningWeekRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LearningWeekRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    week?: SortOrderInput | SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LearningWeekRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LearningWeekRecordWhereInput | LearningWeekRecordWhereInput[]
    OR?: LearningWeekRecordWhereInput[]
    NOT?: LearningWeekRecordWhereInput | LearningWeekRecordWhereInput[]
    userId?: IntFilter<"LearningWeekRecord"> | number
    year?: IntFilter<"LearningWeekRecord"> | number
    week?: DateTimeNullableFilter<"LearningWeekRecord"> | Date | string | null
    totalTime?: FloatFilter<"LearningWeekRecord"> | number
    createdAt?: DateTimeFilter<"LearningWeekRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningWeekRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LearningWeekRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    week?: SortOrderInput | SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningWeekRecordCountOrderByAggregateInput
    _avg?: LearningWeekRecordAvgOrderByAggregateInput
    _max?: LearningWeekRecordMaxOrderByAggregateInput
    _min?: LearningWeekRecordMinOrderByAggregateInput
    _sum?: LearningWeekRecordSumOrderByAggregateInput
  }

  export type LearningWeekRecordScalarWhereWithAggregatesInput = {
    AND?: LearningWeekRecordScalarWhereWithAggregatesInput | LearningWeekRecordScalarWhereWithAggregatesInput[]
    OR?: LearningWeekRecordScalarWhereWithAggregatesInput[]
    NOT?: LearningWeekRecordScalarWhereWithAggregatesInput | LearningWeekRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LearningWeekRecord"> | number
    userId?: IntWithAggregatesFilter<"LearningWeekRecord"> | number
    year?: IntWithAggregatesFilter<"LearningWeekRecord"> | number
    week?: DateTimeNullableWithAggregatesFilter<"LearningWeekRecord"> | Date | string | null
    totalTime?: FloatWithAggregatesFilter<"LearningWeekRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LearningWeekRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningWeekRecord"> | Date | string
  }

  export type LearningMonthRecordWhereInput = {
    AND?: LearningMonthRecordWhereInput | LearningMonthRecordWhereInput[]
    OR?: LearningMonthRecordWhereInput[]
    NOT?: LearningMonthRecordWhereInput | LearningMonthRecordWhereInput[]
    id?: IntFilter<"LearningMonthRecord"> | number
    userId?: IntFilter<"LearningMonthRecord"> | number
    year?: IntFilter<"LearningMonthRecord"> | number
    month?: IntNullableFilter<"LearningMonthRecord"> | number | null
    totalTime?: FloatFilter<"LearningMonthRecord"> | number
    createdAt?: DateTimeFilter<"LearningMonthRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningMonthRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LearningMonthRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    month?: SortOrderInput | SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LearningMonthRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LearningMonthRecordWhereInput | LearningMonthRecordWhereInput[]
    OR?: LearningMonthRecordWhereInput[]
    NOT?: LearningMonthRecordWhereInput | LearningMonthRecordWhereInput[]
    userId?: IntFilter<"LearningMonthRecord"> | number
    year?: IntFilter<"LearningMonthRecord"> | number
    month?: IntNullableFilter<"LearningMonthRecord"> | number | null
    totalTime?: FloatFilter<"LearningMonthRecord"> | number
    createdAt?: DateTimeFilter<"LearningMonthRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningMonthRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LearningMonthRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    month?: SortOrderInput | SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningMonthRecordCountOrderByAggregateInput
    _avg?: LearningMonthRecordAvgOrderByAggregateInput
    _max?: LearningMonthRecordMaxOrderByAggregateInput
    _min?: LearningMonthRecordMinOrderByAggregateInput
    _sum?: LearningMonthRecordSumOrderByAggregateInput
  }

  export type LearningMonthRecordScalarWhereWithAggregatesInput = {
    AND?: LearningMonthRecordScalarWhereWithAggregatesInput | LearningMonthRecordScalarWhereWithAggregatesInput[]
    OR?: LearningMonthRecordScalarWhereWithAggregatesInput[]
    NOT?: LearningMonthRecordScalarWhereWithAggregatesInput | LearningMonthRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LearningMonthRecord"> | number
    userId?: IntWithAggregatesFilter<"LearningMonthRecord"> | number
    year?: IntWithAggregatesFilter<"LearningMonthRecord"> | number
    month?: IntNullableWithAggregatesFilter<"LearningMonthRecord"> | number | null
    totalTime?: FloatWithAggregatesFilter<"LearningMonthRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LearningMonthRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningMonthRecord"> | Date | string
  }

  export type LearningRecordWhereInput = {
    AND?: LearningRecordWhereInput | LearningRecordWhereInput[]
    OR?: LearningRecordWhereInput[]
    NOT?: LearningRecordWhereInput | LearningRecordWhereInput[]
    id?: IntFilter<"LearningRecord"> | number
    userId?: IntFilter<"LearningRecord"> | number
    categoryId?: IntFilter<"LearningRecord"> | number
    title?: StringFilter<"LearningRecord"> | string
    content?: StringFilter<"LearningRecord"> | string
    startTime?: DateTimeFilter<"LearningRecord"> | Date | string
    endTime?: DateTimeFilter<"LearningRecord"> | Date | string
    duration?: FloatFilter<"LearningRecord"> | number
    learningDate?: DateTimeFilter<"LearningRecord"> | Date | string
    createdAt?: DateTimeFilter<"LearningRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningRecord"> | Date | string
    learningRecordCategories?: LearningRecordCategoryListRelationFilter
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LearningRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    learningDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    learningRecordCategories?: LearningRecordCategoryOrderByRelationAggregateInput
    users?: UserOrderByWithRelationInput
  }

  export type LearningRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LearningRecordWhereInput | LearningRecordWhereInput[]
    OR?: LearningRecordWhereInput[]
    NOT?: LearningRecordWhereInput | LearningRecordWhereInput[]
    userId?: IntFilter<"LearningRecord"> | number
    categoryId?: IntFilter<"LearningRecord"> | number
    title?: StringFilter<"LearningRecord"> | string
    content?: StringFilter<"LearningRecord"> | string
    startTime?: DateTimeFilter<"LearningRecord"> | Date | string
    endTime?: DateTimeFilter<"LearningRecord"> | Date | string
    duration?: FloatFilter<"LearningRecord"> | number
    learningDate?: DateTimeFilter<"LearningRecord"> | Date | string
    createdAt?: DateTimeFilter<"LearningRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningRecord"> | Date | string
    learningRecordCategories?: LearningRecordCategoryListRelationFilter
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LearningRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    learningDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningRecordCountOrderByAggregateInput
    _avg?: LearningRecordAvgOrderByAggregateInput
    _max?: LearningRecordMaxOrderByAggregateInput
    _min?: LearningRecordMinOrderByAggregateInput
    _sum?: LearningRecordSumOrderByAggregateInput
  }

  export type LearningRecordScalarWhereWithAggregatesInput = {
    AND?: LearningRecordScalarWhereWithAggregatesInput | LearningRecordScalarWhereWithAggregatesInput[]
    OR?: LearningRecordScalarWhereWithAggregatesInput[]
    NOT?: LearningRecordScalarWhereWithAggregatesInput | LearningRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LearningRecord"> | number
    userId?: IntWithAggregatesFilter<"LearningRecord"> | number
    categoryId?: IntWithAggregatesFilter<"LearningRecord"> | number
    title?: StringWithAggregatesFilter<"LearningRecord"> | string
    content?: StringWithAggregatesFilter<"LearningRecord"> | string
    startTime?: DateTimeWithAggregatesFilter<"LearningRecord"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"LearningRecord"> | Date | string
    duration?: FloatWithAggregatesFilter<"LearningRecord"> | number
    learningDate?: DateTimeWithAggregatesFilter<"LearningRecord"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LearningRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningRecord"> | Date | string
  }

  export type LearningRecordCategoryWhereInput = {
    AND?: LearningRecordCategoryWhereInput | LearningRecordCategoryWhereInput[]
    OR?: LearningRecordCategoryWhereInput[]
    NOT?: LearningRecordCategoryWhereInput | LearningRecordCategoryWhereInput[]
    id?: IntFilter<"LearningRecordCategory"> | number
    learningRecordId?: IntFilter<"LearningRecordCategory"> | number
    categoryId?: IntFilter<"LearningRecordCategory"> | number
    learningRecords?: XOR<LearningRecordScalarRelationFilter, LearningRecordWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type LearningRecordCategoryOrderByWithRelationInput = {
    id?: SortOrder
    learningRecordId?: SortOrder
    categoryId?: SortOrder
    learningRecords?: LearningRecordOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type LearningRecordCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LearningRecordCategoryWhereInput | LearningRecordCategoryWhereInput[]
    OR?: LearningRecordCategoryWhereInput[]
    NOT?: LearningRecordCategoryWhereInput | LearningRecordCategoryWhereInput[]
    learningRecordId?: IntFilter<"LearningRecordCategory"> | number
    categoryId?: IntFilter<"LearningRecordCategory"> | number
    learningRecords?: XOR<LearningRecordScalarRelationFilter, LearningRecordWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type LearningRecordCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    learningRecordId?: SortOrder
    categoryId?: SortOrder
    _count?: LearningRecordCategoryCountOrderByAggregateInput
    _avg?: LearningRecordCategoryAvgOrderByAggregateInput
    _max?: LearningRecordCategoryMaxOrderByAggregateInput
    _min?: LearningRecordCategoryMinOrderByAggregateInput
    _sum?: LearningRecordCategorySumOrderByAggregateInput
  }

  export type LearningRecordCategoryScalarWhereWithAggregatesInput = {
    AND?: LearningRecordCategoryScalarWhereWithAggregatesInput | LearningRecordCategoryScalarWhereWithAggregatesInput[]
    OR?: LearningRecordCategoryScalarWhereWithAggregatesInput[]
    NOT?: LearningRecordCategoryScalarWhereWithAggregatesInput | LearningRecordCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LearningRecordCategory"> | number
    learningRecordId?: IntWithAggregatesFilter<"LearningRecordCategory"> | number
    categoryId?: IntWithAggregatesFilter<"LearningRecordCategory"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    categoryName?: StringFilter<"Category"> | string
    parentId?: IntNullableFilter<"Category"> | number | null
    learningRecordCategories?: LearningRecordCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrderInput | SortOrder
    learningRecordCategories?: LearningRecordCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    categoryName?: StringFilter<"Category"> | string
    parentId?: IntNullableFilter<"Category"> | number | null
    learningRecordCategories?: LearningRecordCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    categoryName?: StringWithAggregatesFilter<"Category"> | string
    parentId?: IntNullableWithAggregatesFilter<"Category"> | number | null
  }

  export type SnsPostRecordWhereInput = {
    AND?: SnsPostRecordWhereInput | SnsPostRecordWhereInput[]
    OR?: SnsPostRecordWhereInput[]
    NOT?: SnsPostRecordWhereInput | SnsPostRecordWhereInput[]
    id?: IntFilter<"SnsPostRecord"> | number
    userId?: IntFilter<"SnsPostRecord"> | number
    snsTitle?: StringFilter<"SnsPostRecord"> | string
    content?: StringFilter<"SnsPostRecord"> | string
    createdAt?: DateTimeFilter<"SnsPostRecord"> | Date | string
    updatedAt?: DateTimeFilter<"SnsPostRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SnsPostRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    snsTitle?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SnsPostRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SnsPostRecordWhereInput | SnsPostRecordWhereInput[]
    OR?: SnsPostRecordWhereInput[]
    NOT?: SnsPostRecordWhereInput | SnsPostRecordWhereInput[]
    userId?: IntFilter<"SnsPostRecord"> | number
    snsTitle?: StringFilter<"SnsPostRecord"> | string
    content?: StringFilter<"SnsPostRecord"> | string
    createdAt?: DateTimeFilter<"SnsPostRecord"> | Date | string
    updatedAt?: DateTimeFilter<"SnsPostRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SnsPostRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    snsTitle?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SnsPostRecordCountOrderByAggregateInput
    _avg?: SnsPostRecordAvgOrderByAggregateInput
    _max?: SnsPostRecordMaxOrderByAggregateInput
    _min?: SnsPostRecordMinOrderByAggregateInput
    _sum?: SnsPostRecordSumOrderByAggregateInput
  }

  export type SnsPostRecordScalarWhereWithAggregatesInput = {
    AND?: SnsPostRecordScalarWhereWithAggregatesInput | SnsPostRecordScalarWhereWithAggregatesInput[]
    OR?: SnsPostRecordScalarWhereWithAggregatesInput[]
    NOT?: SnsPostRecordScalarWhereWithAggregatesInput | SnsPostRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SnsPostRecord"> | number
    userId?: IntWithAggregatesFilter<"SnsPostRecord"> | number
    snsTitle?: StringWithAggregatesFilter<"SnsPostRecord"> | string
    content?: StringWithAggregatesFilter<"SnsPostRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SnsPostRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SnsPostRecord"> | Date | string
  }

  export type SnsPostsToneWhereInput = {
    AND?: SnsPostsToneWhereInput | SnsPostsToneWhereInput[]
    OR?: SnsPostsToneWhereInput[]
    NOT?: SnsPostsToneWhereInput | SnsPostsToneWhereInput[]
    id?: IntFilter<"SnsPostsTone"> | number
    tonePattern?: StringFilter<"SnsPostsTone"> | string
    description?: StringFilter<"SnsPostsTone"> | string
    createdAt?: DateTimeFilter<"SnsPostsTone"> | Date | string
    updatedAt?: DateTimeFilter<"SnsPostsTone"> | Date | string
  }

  export type SnsPostsToneOrderByWithRelationInput = {
    id?: SortOrder
    tonePattern?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsPostsToneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SnsPostsToneWhereInput | SnsPostsToneWhereInput[]
    OR?: SnsPostsToneWhereInput[]
    NOT?: SnsPostsToneWhereInput | SnsPostsToneWhereInput[]
    tonePattern?: StringFilter<"SnsPostsTone"> | string
    description?: StringFilter<"SnsPostsTone"> | string
    createdAt?: DateTimeFilter<"SnsPostsTone"> | Date | string
    updatedAt?: DateTimeFilter<"SnsPostsTone"> | Date | string
  }, "id">

  export type SnsPostsToneOrderByWithAggregationInput = {
    id?: SortOrder
    tonePattern?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SnsPostsToneCountOrderByAggregateInput
    _avg?: SnsPostsToneAvgOrderByAggregateInput
    _max?: SnsPostsToneMaxOrderByAggregateInput
    _min?: SnsPostsToneMinOrderByAggregateInput
    _sum?: SnsPostsToneSumOrderByAggregateInput
  }

  export type SnsPostsToneScalarWhereWithAggregatesInput = {
    AND?: SnsPostsToneScalarWhereWithAggregatesInput | SnsPostsToneScalarWhereWithAggregatesInput[]
    OR?: SnsPostsToneScalarWhereWithAggregatesInput[]
    NOT?: SnsPostsToneScalarWhereWithAggregatesInput | SnsPostsToneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SnsPostsTone"> | number
    tonePattern?: StringWithAggregatesFilter<"SnsPostsTone"> | string
    description?: StringWithAggregatesFilter<"SnsPostsTone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SnsPostsTone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SnsPostsTone"> | Date | string
  }

  export type UserCreateInput = {
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalUncheckedCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordUncheckedCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordUncheckedCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordUncheckedCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUncheckedUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUncheckedUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUncheckedUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUncheckedUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    profilePicture?: string | null
    bio?: string | null
    phoneNumber?: string | null
    socialLinks?: string | null
    prefecture?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    profilePicture?: string | null
    bio?: string | null
    phoneNumber?: string | null
    socialLinks?: string | null
    prefecture?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    profilePicture?: string | null
    bio?: string | null
    phoneNumber?: string | null
    socialLinks?: string | null
    prefecture?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrefectureCreateInput = {
    name: string
    parent?: PrefectureCreateNestedOneWithoutChildrenInput
    children?: PrefectureCreateNestedManyWithoutParentInput
  }

  export type PrefectureUncheckedCreateInput = {
    id?: number
    name: string
    parentId?: number | null
    children?: PrefectureUncheckedCreateNestedManyWithoutParentInput
  }

  export type PrefectureUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: PrefectureUpdateOneWithoutChildrenNestedInput
    children?: PrefectureUpdateManyWithoutParentNestedInput
  }

  export type PrefectureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: PrefectureUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PrefectureCreateManyInput = {
    id?: number
    name: string
    parentId?: number | null
  }

  export type PrefectureUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PrefectureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LearningGoalCreateInput = {
    targetTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningGoalsInput
  }

  export type LearningGoalUncheckedCreateInput = {
    id?: number
    userId: number
    targetTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningGoalUpdateInput = {
    targetTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningGoalsNestedInput
  }

  export type LearningGoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    targetTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningGoalCreateManyInput = {
    id?: number
    userId: number
    targetTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningGoalUpdateManyMutationInput = {
    targetTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningGoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    targetTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningDailyRecordCreateInput = {
    year: number
    day?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningDailyRecordsInput
  }

  export type LearningDailyRecordUncheckedCreateInput = {
    id?: number
    userId: number
    year: number
    day?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningDailyRecordUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningDailyRecordsNestedInput
  }

  export type LearningDailyRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningDailyRecordCreateManyInput = {
    id?: number
    userId: number
    year: number
    day?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningDailyRecordUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningDailyRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningWeekRecordCreateInput = {
    year: number
    week?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningWeekRecordsInput
  }

  export type LearningWeekRecordUncheckedCreateInput = {
    id?: number
    userId: number
    year: number
    week?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningWeekRecordUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningWeekRecordsNestedInput
  }

  export type LearningWeekRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningWeekRecordCreateManyInput = {
    id?: number
    userId: number
    year: number
    week?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningWeekRecordUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningWeekRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningMonthRecordCreateInput = {
    year: number
    month?: number | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningMonthRecordsInput
  }

  export type LearningMonthRecordUncheckedCreateInput = {
    id?: number
    userId: number
    year: number
    month?: number | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningMonthRecordUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: NullableIntFieldUpdateOperationsInput | number | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningMonthRecordsNestedInput
  }

  export type LearningMonthRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: NullableIntFieldUpdateOperationsInput | number | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningMonthRecordCreateManyInput = {
    id?: number
    userId: number
    year: number
    month?: number | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningMonthRecordUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: NullableIntFieldUpdateOperationsInput | number | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningMonthRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: NullableIntFieldUpdateOperationsInput | number | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningRecordCreateInput = {
    categoryId: number
    title: string
    content: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    learningDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    learningRecordCategories?: LearningRecordCategoryCreateNestedManyWithoutLearningRecordsInput
    users: UserCreateNestedOneWithoutLearningRecordsInput
  }

  export type LearningRecordUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    content: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    learningDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    learningRecordCategories?: LearningRecordCategoryUncheckedCreateNestedManyWithoutLearningRecordsInput
  }

  export type LearningRecordUpdateInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningRecordCategories?: LearningRecordCategoryUpdateManyWithoutLearningRecordsNestedInput
    users?: UserUpdateOneRequiredWithoutLearningRecordsNestedInput
  }

  export type LearningRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningRecordCategories?: LearningRecordCategoryUncheckedUpdateManyWithoutLearningRecordsNestedInput
  }

  export type LearningRecordCreateManyInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    content: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    learningDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningRecordUpdateManyMutationInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningRecordCategoryCreateInput = {
    learningRecords: LearningRecordCreateNestedOneWithoutLearningRecordCategoriesInput
    category: CategoryCreateNestedOneWithoutLearningRecordCategoriesInput
  }

  export type LearningRecordCategoryUncheckedCreateInput = {
    id?: number
    learningRecordId: number
    categoryId: number
  }

  export type LearningRecordCategoryUpdateInput = {
    learningRecords?: LearningRecordUpdateOneRequiredWithoutLearningRecordCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutLearningRecordCategoriesNestedInput
  }

  export type LearningRecordCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    learningRecordId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type LearningRecordCategoryCreateManyInput = {
    id?: number
    learningRecordId: number
    categoryId: number
  }

  export type LearningRecordCategoryUpdateManyMutationInput = {

  }

  export type LearningRecordCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    learningRecordId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    categoryName: string
    parentId?: number | null
    learningRecordCategories?: LearningRecordCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    categoryName: string
    parentId?: number | null
    learningRecordCategories?: LearningRecordCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    learningRecordCategories?: LearningRecordCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    learningRecordCategories?: LearningRecordCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    categoryName: string
    parentId?: number | null
  }

  export type CategoryUpdateManyMutationInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SnsPostRecordCreateInput = {
    snsTitle: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSnsPostRecordsInput
  }

  export type SnsPostRecordUncheckedCreateInput = {
    id?: number
    userId: number
    snsTitle: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsPostRecordUpdateInput = {
    snsTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSnsPostRecordsNestedInput
  }

  export type SnsPostRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    snsTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostRecordCreateManyInput = {
    id?: number
    userId: number
    snsTitle: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsPostRecordUpdateManyMutationInput = {
    snsTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    snsTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostsToneCreateInput = {
    tonePattern: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsPostsToneUncheckedCreateInput = {
    id?: number
    tonePattern: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsPostsToneUpdateInput = {
    tonePattern?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostsToneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tonePattern?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostsToneCreateManyInput = {
    id?: number
    tonePattern: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsPostsToneUpdateManyMutationInput = {
    tonePattern?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostsToneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tonePattern?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type LearningGoalNullableScalarRelationFilter = {
    is?: LearningGoalWhereInput | null
    isNot?: LearningGoalWhereInput | null
  }

  export type LearningDailyRecordListRelationFilter = {
    every?: LearningDailyRecordWhereInput
    some?: LearningDailyRecordWhereInput
    none?: LearningDailyRecordWhereInput
  }

  export type LearningWeekRecordListRelationFilter = {
    every?: LearningWeekRecordWhereInput
    some?: LearningWeekRecordWhereInput
    none?: LearningWeekRecordWhereInput
  }

  export type LearningMonthRecordListRelationFilter = {
    every?: LearningMonthRecordWhereInput
    some?: LearningMonthRecordWhereInput
    none?: LearningMonthRecordWhereInput
  }

  export type LearningRecordListRelationFilter = {
    every?: LearningRecordWhereInput
    some?: LearningRecordWhereInput
    none?: LearningRecordWhereInput
  }

  export type SnsPostRecordListRelationFilter = {
    every?: SnsPostRecordWhereInput
    some?: SnsPostRecordWhereInput
    none?: SnsPostRecordWhereInput
  }

  export type LearningDailyRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningWeekRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningMonthRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SnsPostRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    roleId?: SortOrder
    nickName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    roleId?: SortOrder
    nickName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    roleId?: SortOrder
    nickName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    socialLinks?: SortOrder
    prefecture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prefecture?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    socialLinks?: SortOrder
    prefecture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    phoneNumber?: SortOrder
    socialLinks?: SortOrder
    prefecture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prefecture?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PrefectureNullableScalarRelationFilter = {
    is?: PrefectureWhereInput | null
    isNot?: PrefectureWhereInput | null
  }

  export type PrefectureListRelationFilter = {
    every?: PrefectureWhereInput
    some?: PrefectureWhereInput
    none?: PrefectureWhereInput
  }

  export type PrefectureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrefectureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
  }

  export type PrefectureAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type PrefectureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
  }

  export type PrefectureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
  }

  export type PrefectureSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LearningGoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningGoalAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTime?: SortOrder
  }

  export type LearningGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningGoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningGoalSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTime?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LearningDailyRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    day?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningDailyRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    totalTime?: SortOrder
  }

  export type LearningDailyRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    day?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningDailyRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    day?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningDailyRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    totalTime?: SortOrder
  }

  export type LearningWeekRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    week?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningWeekRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    totalTime?: SortOrder
  }

  export type LearningWeekRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    week?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningWeekRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    week?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningWeekRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    totalTime?: SortOrder
  }

  export type LearningMonthRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningMonthRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalTime?: SortOrder
  }

  export type LearningMonthRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningMonthRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningMonthRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalTime?: SortOrder
  }

  export type LearningRecordCategoryListRelationFilter = {
    every?: LearningRecordCategoryWhereInput
    some?: LearningRecordCategoryWhereInput
    none?: LearningRecordCategoryWhereInput
  }

  export type LearningRecordCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    learningDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    duration?: SortOrder
  }

  export type LearningRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    learningDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    learningDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    duration?: SortOrder
  }

  export type LearningRecordScalarRelationFilter = {
    is?: LearningRecordWhereInput
    isNot?: LearningRecordWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type LearningRecordCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    learningRecordId?: SortOrder
    categoryId?: SortOrder
  }

  export type LearningRecordCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    learningRecordId?: SortOrder
    categoryId?: SortOrder
  }

  export type LearningRecordCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    learningRecordId?: SortOrder
    categoryId?: SortOrder
  }

  export type LearningRecordCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    learningRecordId?: SortOrder
    categoryId?: SortOrder
  }

  export type LearningRecordCategorySumOrderByAggregateInput = {
    id?: SortOrder
    learningRecordId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    parentId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type SnsPostRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snsTitle?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsPostRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SnsPostRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snsTitle?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsPostRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    snsTitle?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsPostRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SnsPostsToneCountOrderByAggregateInput = {
    id?: SortOrder
    tonePattern?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsPostsToneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SnsPostsToneMaxOrderByAggregateInput = {
    id?: SortOrder
    tonePattern?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsPostsToneMinOrderByAggregateInput = {
    id?: SortOrder
    tonePattern?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnsPostsToneSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type LearningGoalCreateNestedOneWithoutUserInput = {
    create?: XOR<LearningGoalCreateWithoutUserInput, LearningGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: LearningGoalCreateOrConnectWithoutUserInput
    connect?: LearningGoalWhereUniqueInput
  }

  export type LearningDailyRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningDailyRecordCreateWithoutUserInput, LearningDailyRecordUncheckedCreateWithoutUserInput> | LearningDailyRecordCreateWithoutUserInput[] | LearningDailyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningDailyRecordCreateOrConnectWithoutUserInput | LearningDailyRecordCreateOrConnectWithoutUserInput[]
    createMany?: LearningDailyRecordCreateManyUserInputEnvelope
    connect?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
  }

  export type LearningWeekRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningWeekRecordCreateWithoutUserInput, LearningWeekRecordUncheckedCreateWithoutUserInput> | LearningWeekRecordCreateWithoutUserInput[] | LearningWeekRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningWeekRecordCreateOrConnectWithoutUserInput | LearningWeekRecordCreateOrConnectWithoutUserInput[]
    createMany?: LearningWeekRecordCreateManyUserInputEnvelope
    connect?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
  }

  export type LearningMonthRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningMonthRecordCreateWithoutUserInput, LearningMonthRecordUncheckedCreateWithoutUserInput> | LearningMonthRecordCreateWithoutUserInput[] | LearningMonthRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningMonthRecordCreateOrConnectWithoutUserInput | LearningMonthRecordCreateOrConnectWithoutUserInput[]
    createMany?: LearningMonthRecordCreateManyUserInputEnvelope
    connect?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
  }

  export type LearningRecordCreateNestedManyWithoutUsersInput = {
    create?: XOR<LearningRecordCreateWithoutUsersInput, LearningRecordUncheckedCreateWithoutUsersInput> | LearningRecordCreateWithoutUsersInput[] | LearningRecordUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LearningRecordCreateOrConnectWithoutUsersInput | LearningRecordCreateOrConnectWithoutUsersInput[]
    createMany?: LearningRecordCreateManyUsersInputEnvelope
    connect?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
  }

  export type SnsPostRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<SnsPostRecordCreateWithoutUserInput, SnsPostRecordUncheckedCreateWithoutUserInput> | SnsPostRecordCreateWithoutUserInput[] | SnsPostRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SnsPostRecordCreateOrConnectWithoutUserInput | SnsPostRecordCreateOrConnectWithoutUserInput[]
    createMany?: SnsPostRecordCreateManyUserInputEnvelope
    connect?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type LearningGoalUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LearningGoalCreateWithoutUserInput, LearningGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: LearningGoalCreateOrConnectWithoutUserInput
    connect?: LearningGoalWhereUniqueInput
  }

  export type LearningDailyRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningDailyRecordCreateWithoutUserInput, LearningDailyRecordUncheckedCreateWithoutUserInput> | LearningDailyRecordCreateWithoutUserInput[] | LearningDailyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningDailyRecordCreateOrConnectWithoutUserInput | LearningDailyRecordCreateOrConnectWithoutUserInput[]
    createMany?: LearningDailyRecordCreateManyUserInputEnvelope
    connect?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
  }

  export type LearningWeekRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningWeekRecordCreateWithoutUserInput, LearningWeekRecordUncheckedCreateWithoutUserInput> | LearningWeekRecordCreateWithoutUserInput[] | LearningWeekRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningWeekRecordCreateOrConnectWithoutUserInput | LearningWeekRecordCreateOrConnectWithoutUserInput[]
    createMany?: LearningWeekRecordCreateManyUserInputEnvelope
    connect?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
  }

  export type LearningMonthRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningMonthRecordCreateWithoutUserInput, LearningMonthRecordUncheckedCreateWithoutUserInput> | LearningMonthRecordCreateWithoutUserInput[] | LearningMonthRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningMonthRecordCreateOrConnectWithoutUserInput | LearningMonthRecordCreateOrConnectWithoutUserInput[]
    createMany?: LearningMonthRecordCreateManyUserInputEnvelope
    connect?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
  }

  export type LearningRecordUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<LearningRecordCreateWithoutUsersInput, LearningRecordUncheckedCreateWithoutUsersInput> | LearningRecordCreateWithoutUsersInput[] | LearningRecordUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LearningRecordCreateOrConnectWithoutUsersInput | LearningRecordCreateOrConnectWithoutUsersInput[]
    createMany?: LearningRecordCreateManyUsersInputEnvelope
    connect?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
  }

  export type SnsPostRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SnsPostRecordCreateWithoutUserInput, SnsPostRecordUncheckedCreateWithoutUserInput> | SnsPostRecordCreateWithoutUserInput[] | SnsPostRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SnsPostRecordCreateOrConnectWithoutUserInput | SnsPostRecordCreateOrConnectWithoutUserInput[]
    createMany?: SnsPostRecordCreateManyUserInputEnvelope
    connect?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type LearningGoalUpdateOneWithoutUserNestedInput = {
    create?: XOR<LearningGoalCreateWithoutUserInput, LearningGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: LearningGoalCreateOrConnectWithoutUserInput
    upsert?: LearningGoalUpsertWithoutUserInput
    disconnect?: LearningGoalWhereInput | boolean
    delete?: LearningGoalWhereInput | boolean
    connect?: LearningGoalWhereUniqueInput
    update?: XOR<XOR<LearningGoalUpdateToOneWithWhereWithoutUserInput, LearningGoalUpdateWithoutUserInput>, LearningGoalUncheckedUpdateWithoutUserInput>
  }

  export type LearningDailyRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningDailyRecordCreateWithoutUserInput, LearningDailyRecordUncheckedCreateWithoutUserInput> | LearningDailyRecordCreateWithoutUserInput[] | LearningDailyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningDailyRecordCreateOrConnectWithoutUserInput | LearningDailyRecordCreateOrConnectWithoutUserInput[]
    upsert?: LearningDailyRecordUpsertWithWhereUniqueWithoutUserInput | LearningDailyRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningDailyRecordCreateManyUserInputEnvelope
    set?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
    disconnect?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
    delete?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
    connect?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
    update?: LearningDailyRecordUpdateWithWhereUniqueWithoutUserInput | LearningDailyRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningDailyRecordUpdateManyWithWhereWithoutUserInput | LearningDailyRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningDailyRecordScalarWhereInput | LearningDailyRecordScalarWhereInput[]
  }

  export type LearningWeekRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningWeekRecordCreateWithoutUserInput, LearningWeekRecordUncheckedCreateWithoutUserInput> | LearningWeekRecordCreateWithoutUserInput[] | LearningWeekRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningWeekRecordCreateOrConnectWithoutUserInput | LearningWeekRecordCreateOrConnectWithoutUserInput[]
    upsert?: LearningWeekRecordUpsertWithWhereUniqueWithoutUserInput | LearningWeekRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningWeekRecordCreateManyUserInputEnvelope
    set?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
    disconnect?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
    delete?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
    connect?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
    update?: LearningWeekRecordUpdateWithWhereUniqueWithoutUserInput | LearningWeekRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningWeekRecordUpdateManyWithWhereWithoutUserInput | LearningWeekRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningWeekRecordScalarWhereInput | LearningWeekRecordScalarWhereInput[]
  }

  export type LearningMonthRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningMonthRecordCreateWithoutUserInput, LearningMonthRecordUncheckedCreateWithoutUserInput> | LearningMonthRecordCreateWithoutUserInput[] | LearningMonthRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningMonthRecordCreateOrConnectWithoutUserInput | LearningMonthRecordCreateOrConnectWithoutUserInput[]
    upsert?: LearningMonthRecordUpsertWithWhereUniqueWithoutUserInput | LearningMonthRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningMonthRecordCreateManyUserInputEnvelope
    set?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
    disconnect?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
    delete?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
    connect?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
    update?: LearningMonthRecordUpdateWithWhereUniqueWithoutUserInput | LearningMonthRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningMonthRecordUpdateManyWithWhereWithoutUserInput | LearningMonthRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningMonthRecordScalarWhereInput | LearningMonthRecordScalarWhereInput[]
  }

  export type LearningRecordUpdateManyWithoutUsersNestedInput = {
    create?: XOR<LearningRecordCreateWithoutUsersInput, LearningRecordUncheckedCreateWithoutUsersInput> | LearningRecordCreateWithoutUsersInput[] | LearningRecordUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LearningRecordCreateOrConnectWithoutUsersInput | LearningRecordCreateOrConnectWithoutUsersInput[]
    upsert?: LearningRecordUpsertWithWhereUniqueWithoutUsersInput | LearningRecordUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: LearningRecordCreateManyUsersInputEnvelope
    set?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
    disconnect?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
    delete?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
    connect?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
    update?: LearningRecordUpdateWithWhereUniqueWithoutUsersInput | LearningRecordUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: LearningRecordUpdateManyWithWhereWithoutUsersInput | LearningRecordUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: LearningRecordScalarWhereInput | LearningRecordScalarWhereInput[]
  }

  export type SnsPostRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<SnsPostRecordCreateWithoutUserInput, SnsPostRecordUncheckedCreateWithoutUserInput> | SnsPostRecordCreateWithoutUserInput[] | SnsPostRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SnsPostRecordCreateOrConnectWithoutUserInput | SnsPostRecordCreateOrConnectWithoutUserInput[]
    upsert?: SnsPostRecordUpsertWithWhereUniqueWithoutUserInput | SnsPostRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SnsPostRecordCreateManyUserInputEnvelope
    set?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
    disconnect?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
    delete?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
    connect?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
    update?: SnsPostRecordUpdateWithWhereUniqueWithoutUserInput | SnsPostRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SnsPostRecordUpdateManyWithWhereWithoutUserInput | SnsPostRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SnsPostRecordScalarWhereInput | SnsPostRecordScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type LearningGoalUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LearningGoalCreateWithoutUserInput, LearningGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: LearningGoalCreateOrConnectWithoutUserInput
    upsert?: LearningGoalUpsertWithoutUserInput
    disconnect?: LearningGoalWhereInput | boolean
    delete?: LearningGoalWhereInput | boolean
    connect?: LearningGoalWhereUniqueInput
    update?: XOR<XOR<LearningGoalUpdateToOneWithWhereWithoutUserInput, LearningGoalUpdateWithoutUserInput>, LearningGoalUncheckedUpdateWithoutUserInput>
  }

  export type LearningDailyRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningDailyRecordCreateWithoutUserInput, LearningDailyRecordUncheckedCreateWithoutUserInput> | LearningDailyRecordCreateWithoutUserInput[] | LearningDailyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningDailyRecordCreateOrConnectWithoutUserInput | LearningDailyRecordCreateOrConnectWithoutUserInput[]
    upsert?: LearningDailyRecordUpsertWithWhereUniqueWithoutUserInput | LearningDailyRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningDailyRecordCreateManyUserInputEnvelope
    set?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
    disconnect?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
    delete?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
    connect?: LearningDailyRecordWhereUniqueInput | LearningDailyRecordWhereUniqueInput[]
    update?: LearningDailyRecordUpdateWithWhereUniqueWithoutUserInput | LearningDailyRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningDailyRecordUpdateManyWithWhereWithoutUserInput | LearningDailyRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningDailyRecordScalarWhereInput | LearningDailyRecordScalarWhereInput[]
  }

  export type LearningWeekRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningWeekRecordCreateWithoutUserInput, LearningWeekRecordUncheckedCreateWithoutUserInput> | LearningWeekRecordCreateWithoutUserInput[] | LearningWeekRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningWeekRecordCreateOrConnectWithoutUserInput | LearningWeekRecordCreateOrConnectWithoutUserInput[]
    upsert?: LearningWeekRecordUpsertWithWhereUniqueWithoutUserInput | LearningWeekRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningWeekRecordCreateManyUserInputEnvelope
    set?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
    disconnect?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
    delete?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
    connect?: LearningWeekRecordWhereUniqueInput | LearningWeekRecordWhereUniqueInput[]
    update?: LearningWeekRecordUpdateWithWhereUniqueWithoutUserInput | LearningWeekRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningWeekRecordUpdateManyWithWhereWithoutUserInput | LearningWeekRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningWeekRecordScalarWhereInput | LearningWeekRecordScalarWhereInput[]
  }

  export type LearningMonthRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningMonthRecordCreateWithoutUserInput, LearningMonthRecordUncheckedCreateWithoutUserInput> | LearningMonthRecordCreateWithoutUserInput[] | LearningMonthRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningMonthRecordCreateOrConnectWithoutUserInput | LearningMonthRecordCreateOrConnectWithoutUserInput[]
    upsert?: LearningMonthRecordUpsertWithWhereUniqueWithoutUserInput | LearningMonthRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningMonthRecordCreateManyUserInputEnvelope
    set?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
    disconnect?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
    delete?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
    connect?: LearningMonthRecordWhereUniqueInput | LearningMonthRecordWhereUniqueInput[]
    update?: LearningMonthRecordUpdateWithWhereUniqueWithoutUserInput | LearningMonthRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningMonthRecordUpdateManyWithWhereWithoutUserInput | LearningMonthRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningMonthRecordScalarWhereInput | LearningMonthRecordScalarWhereInput[]
  }

  export type LearningRecordUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<LearningRecordCreateWithoutUsersInput, LearningRecordUncheckedCreateWithoutUsersInput> | LearningRecordCreateWithoutUsersInput[] | LearningRecordUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LearningRecordCreateOrConnectWithoutUsersInput | LearningRecordCreateOrConnectWithoutUsersInput[]
    upsert?: LearningRecordUpsertWithWhereUniqueWithoutUsersInput | LearningRecordUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: LearningRecordCreateManyUsersInputEnvelope
    set?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
    disconnect?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
    delete?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
    connect?: LearningRecordWhereUniqueInput | LearningRecordWhereUniqueInput[]
    update?: LearningRecordUpdateWithWhereUniqueWithoutUsersInput | LearningRecordUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: LearningRecordUpdateManyWithWhereWithoutUsersInput | LearningRecordUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: LearningRecordScalarWhereInput | LearningRecordScalarWhereInput[]
  }

  export type SnsPostRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SnsPostRecordCreateWithoutUserInput, SnsPostRecordUncheckedCreateWithoutUserInput> | SnsPostRecordCreateWithoutUserInput[] | SnsPostRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SnsPostRecordCreateOrConnectWithoutUserInput | SnsPostRecordCreateOrConnectWithoutUserInput[]
    upsert?: SnsPostRecordUpsertWithWhereUniqueWithoutUserInput | SnsPostRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SnsPostRecordCreateManyUserInputEnvelope
    set?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
    disconnect?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
    delete?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
    connect?: SnsPostRecordWhereUniqueInput | SnsPostRecordWhereUniqueInput[]
    update?: SnsPostRecordUpdateWithWhereUniqueWithoutUserInput | SnsPostRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SnsPostRecordUpdateManyWithWhereWithoutUserInput | SnsPostRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SnsPostRecordScalarWhereInput | SnsPostRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type PrefectureCreateNestedOneWithoutChildrenInput = {
    create?: XOR<PrefectureCreateWithoutChildrenInput, PrefectureUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PrefectureCreateOrConnectWithoutChildrenInput
    connect?: PrefectureWhereUniqueInput
  }

  export type PrefectureCreateNestedManyWithoutParentInput = {
    create?: XOR<PrefectureCreateWithoutParentInput, PrefectureUncheckedCreateWithoutParentInput> | PrefectureCreateWithoutParentInput[] | PrefectureUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PrefectureCreateOrConnectWithoutParentInput | PrefectureCreateOrConnectWithoutParentInput[]
    createMany?: PrefectureCreateManyParentInputEnvelope
    connect?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
  }

  export type PrefectureUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<PrefectureCreateWithoutParentInput, PrefectureUncheckedCreateWithoutParentInput> | PrefectureCreateWithoutParentInput[] | PrefectureUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PrefectureCreateOrConnectWithoutParentInput | PrefectureCreateOrConnectWithoutParentInput[]
    createMany?: PrefectureCreateManyParentInputEnvelope
    connect?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
  }

  export type PrefectureUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<PrefectureCreateWithoutChildrenInput, PrefectureUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PrefectureCreateOrConnectWithoutChildrenInput
    upsert?: PrefectureUpsertWithoutChildrenInput
    disconnect?: PrefectureWhereInput | boolean
    delete?: PrefectureWhereInput | boolean
    connect?: PrefectureWhereUniqueInput
    update?: XOR<XOR<PrefectureUpdateToOneWithWhereWithoutChildrenInput, PrefectureUpdateWithoutChildrenInput>, PrefectureUncheckedUpdateWithoutChildrenInput>
  }

  export type PrefectureUpdateManyWithoutParentNestedInput = {
    create?: XOR<PrefectureCreateWithoutParentInput, PrefectureUncheckedCreateWithoutParentInput> | PrefectureCreateWithoutParentInput[] | PrefectureUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PrefectureCreateOrConnectWithoutParentInput | PrefectureCreateOrConnectWithoutParentInput[]
    upsert?: PrefectureUpsertWithWhereUniqueWithoutParentInput | PrefectureUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PrefectureCreateManyParentInputEnvelope
    set?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
    disconnect?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
    delete?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
    connect?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
    update?: PrefectureUpdateWithWhereUniqueWithoutParentInput | PrefectureUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PrefectureUpdateManyWithWhereWithoutParentInput | PrefectureUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PrefectureScalarWhereInput | PrefectureScalarWhereInput[]
  }

  export type PrefectureUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<PrefectureCreateWithoutParentInput, PrefectureUncheckedCreateWithoutParentInput> | PrefectureCreateWithoutParentInput[] | PrefectureUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PrefectureCreateOrConnectWithoutParentInput | PrefectureCreateOrConnectWithoutParentInput[]
    upsert?: PrefectureUpsertWithWhereUniqueWithoutParentInput | PrefectureUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PrefectureCreateManyParentInputEnvelope
    set?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
    disconnect?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
    delete?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
    connect?: PrefectureWhereUniqueInput | PrefectureWhereUniqueInput[]
    update?: PrefectureUpdateWithWhereUniqueWithoutParentInput | PrefectureUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PrefectureUpdateManyWithWhereWithoutParentInput | PrefectureUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PrefectureScalarWhereInput | PrefectureScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLearningGoalsInput = {
    create?: XOR<UserCreateWithoutLearningGoalsInput, UserUncheckedCreateWithoutLearningGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutLearningGoalsNestedInput = {
    create?: XOR<UserCreateWithoutLearningGoalsInput, UserUncheckedCreateWithoutLearningGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningGoalsInput
    upsert?: UserUpsertWithoutLearningGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningGoalsInput, UserUpdateWithoutLearningGoalsInput>, UserUncheckedUpdateWithoutLearningGoalsInput>
  }

  export type UserCreateNestedOneWithoutLearningDailyRecordsInput = {
    create?: XOR<UserCreateWithoutLearningDailyRecordsInput, UserUncheckedCreateWithoutLearningDailyRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningDailyRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLearningDailyRecordsNestedInput = {
    create?: XOR<UserCreateWithoutLearningDailyRecordsInput, UserUncheckedCreateWithoutLearningDailyRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningDailyRecordsInput
    upsert?: UserUpsertWithoutLearningDailyRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningDailyRecordsInput, UserUpdateWithoutLearningDailyRecordsInput>, UserUncheckedUpdateWithoutLearningDailyRecordsInput>
  }

  export type UserCreateNestedOneWithoutLearningWeekRecordsInput = {
    create?: XOR<UserCreateWithoutLearningWeekRecordsInput, UserUncheckedCreateWithoutLearningWeekRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningWeekRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLearningWeekRecordsNestedInput = {
    create?: XOR<UserCreateWithoutLearningWeekRecordsInput, UserUncheckedCreateWithoutLearningWeekRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningWeekRecordsInput
    upsert?: UserUpsertWithoutLearningWeekRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningWeekRecordsInput, UserUpdateWithoutLearningWeekRecordsInput>, UserUncheckedUpdateWithoutLearningWeekRecordsInput>
  }

  export type UserCreateNestedOneWithoutLearningMonthRecordsInput = {
    create?: XOR<UserCreateWithoutLearningMonthRecordsInput, UserUncheckedCreateWithoutLearningMonthRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningMonthRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLearningMonthRecordsNestedInput = {
    create?: XOR<UserCreateWithoutLearningMonthRecordsInput, UserUncheckedCreateWithoutLearningMonthRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningMonthRecordsInput
    upsert?: UserUpsertWithoutLearningMonthRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningMonthRecordsInput, UserUpdateWithoutLearningMonthRecordsInput>, UserUncheckedUpdateWithoutLearningMonthRecordsInput>
  }

  export type LearningRecordCategoryCreateNestedManyWithoutLearningRecordsInput = {
    create?: XOR<LearningRecordCategoryCreateWithoutLearningRecordsInput, LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput> | LearningRecordCategoryCreateWithoutLearningRecordsInput[] | LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput[]
    connectOrCreate?: LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput | LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput[]
    createMany?: LearningRecordCategoryCreateManyLearningRecordsInputEnvelope
    connect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutLearningRecordsInput = {
    create?: XOR<UserCreateWithoutLearningRecordsInput, UserUncheckedCreateWithoutLearningRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type LearningRecordCategoryUncheckedCreateNestedManyWithoutLearningRecordsInput = {
    create?: XOR<LearningRecordCategoryCreateWithoutLearningRecordsInput, LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput> | LearningRecordCategoryCreateWithoutLearningRecordsInput[] | LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput[]
    connectOrCreate?: LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput | LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput[]
    createMany?: LearningRecordCategoryCreateManyLearningRecordsInputEnvelope
    connect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
  }

  export type LearningRecordCategoryUpdateManyWithoutLearningRecordsNestedInput = {
    create?: XOR<LearningRecordCategoryCreateWithoutLearningRecordsInput, LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput> | LearningRecordCategoryCreateWithoutLearningRecordsInput[] | LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput[]
    connectOrCreate?: LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput | LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput[]
    upsert?: LearningRecordCategoryUpsertWithWhereUniqueWithoutLearningRecordsInput | LearningRecordCategoryUpsertWithWhereUniqueWithoutLearningRecordsInput[]
    createMany?: LearningRecordCategoryCreateManyLearningRecordsInputEnvelope
    set?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    disconnect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    delete?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    connect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    update?: LearningRecordCategoryUpdateWithWhereUniqueWithoutLearningRecordsInput | LearningRecordCategoryUpdateWithWhereUniqueWithoutLearningRecordsInput[]
    updateMany?: LearningRecordCategoryUpdateManyWithWhereWithoutLearningRecordsInput | LearningRecordCategoryUpdateManyWithWhereWithoutLearningRecordsInput[]
    deleteMany?: LearningRecordCategoryScalarWhereInput | LearningRecordCategoryScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutLearningRecordsNestedInput = {
    create?: XOR<UserCreateWithoutLearningRecordsInput, UserUncheckedCreateWithoutLearningRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningRecordsInput
    upsert?: UserUpsertWithoutLearningRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningRecordsInput, UserUpdateWithoutLearningRecordsInput>, UserUncheckedUpdateWithoutLearningRecordsInput>
  }

  export type LearningRecordCategoryUncheckedUpdateManyWithoutLearningRecordsNestedInput = {
    create?: XOR<LearningRecordCategoryCreateWithoutLearningRecordsInput, LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput> | LearningRecordCategoryCreateWithoutLearningRecordsInput[] | LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput[]
    connectOrCreate?: LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput | LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput[]
    upsert?: LearningRecordCategoryUpsertWithWhereUniqueWithoutLearningRecordsInput | LearningRecordCategoryUpsertWithWhereUniqueWithoutLearningRecordsInput[]
    createMany?: LearningRecordCategoryCreateManyLearningRecordsInputEnvelope
    set?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    disconnect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    delete?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    connect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    update?: LearningRecordCategoryUpdateWithWhereUniqueWithoutLearningRecordsInput | LearningRecordCategoryUpdateWithWhereUniqueWithoutLearningRecordsInput[]
    updateMany?: LearningRecordCategoryUpdateManyWithWhereWithoutLearningRecordsInput | LearningRecordCategoryUpdateManyWithWhereWithoutLearningRecordsInput[]
    deleteMany?: LearningRecordCategoryScalarWhereInput | LearningRecordCategoryScalarWhereInput[]
  }

  export type LearningRecordCreateNestedOneWithoutLearningRecordCategoriesInput = {
    create?: XOR<LearningRecordCreateWithoutLearningRecordCategoriesInput, LearningRecordUncheckedCreateWithoutLearningRecordCategoriesInput>
    connectOrCreate?: LearningRecordCreateOrConnectWithoutLearningRecordCategoriesInput
    connect?: LearningRecordWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutLearningRecordCategoriesInput = {
    create?: XOR<CategoryCreateWithoutLearningRecordCategoriesInput, CategoryUncheckedCreateWithoutLearningRecordCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutLearningRecordCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type LearningRecordUpdateOneRequiredWithoutLearningRecordCategoriesNestedInput = {
    create?: XOR<LearningRecordCreateWithoutLearningRecordCategoriesInput, LearningRecordUncheckedCreateWithoutLearningRecordCategoriesInput>
    connectOrCreate?: LearningRecordCreateOrConnectWithoutLearningRecordCategoriesInput
    upsert?: LearningRecordUpsertWithoutLearningRecordCategoriesInput
    connect?: LearningRecordWhereUniqueInput
    update?: XOR<XOR<LearningRecordUpdateToOneWithWhereWithoutLearningRecordCategoriesInput, LearningRecordUpdateWithoutLearningRecordCategoriesInput>, LearningRecordUncheckedUpdateWithoutLearningRecordCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutLearningRecordCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutLearningRecordCategoriesInput, CategoryUncheckedCreateWithoutLearningRecordCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutLearningRecordCategoriesInput
    upsert?: CategoryUpsertWithoutLearningRecordCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutLearningRecordCategoriesInput, CategoryUpdateWithoutLearningRecordCategoriesInput>, CategoryUncheckedUpdateWithoutLearningRecordCategoriesInput>
  }

  export type LearningRecordCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<LearningRecordCategoryCreateWithoutCategoryInput, LearningRecordCategoryUncheckedCreateWithoutCategoryInput> | LearningRecordCategoryCreateWithoutCategoryInput[] | LearningRecordCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LearningRecordCategoryCreateOrConnectWithoutCategoryInput | LearningRecordCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: LearningRecordCategoryCreateManyCategoryInputEnvelope
    connect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
  }

  export type LearningRecordCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<LearningRecordCategoryCreateWithoutCategoryInput, LearningRecordCategoryUncheckedCreateWithoutCategoryInput> | LearningRecordCategoryCreateWithoutCategoryInput[] | LearningRecordCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LearningRecordCategoryCreateOrConnectWithoutCategoryInput | LearningRecordCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: LearningRecordCategoryCreateManyCategoryInputEnvelope
    connect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
  }

  export type LearningRecordCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<LearningRecordCategoryCreateWithoutCategoryInput, LearningRecordCategoryUncheckedCreateWithoutCategoryInput> | LearningRecordCategoryCreateWithoutCategoryInput[] | LearningRecordCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LearningRecordCategoryCreateOrConnectWithoutCategoryInput | LearningRecordCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: LearningRecordCategoryUpsertWithWhereUniqueWithoutCategoryInput | LearningRecordCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: LearningRecordCategoryCreateManyCategoryInputEnvelope
    set?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    disconnect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    delete?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    connect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    update?: LearningRecordCategoryUpdateWithWhereUniqueWithoutCategoryInput | LearningRecordCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: LearningRecordCategoryUpdateManyWithWhereWithoutCategoryInput | LearningRecordCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: LearningRecordCategoryScalarWhereInput | LearningRecordCategoryScalarWhereInput[]
  }

  export type LearningRecordCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<LearningRecordCategoryCreateWithoutCategoryInput, LearningRecordCategoryUncheckedCreateWithoutCategoryInput> | LearningRecordCategoryCreateWithoutCategoryInput[] | LearningRecordCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: LearningRecordCategoryCreateOrConnectWithoutCategoryInput | LearningRecordCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: LearningRecordCategoryUpsertWithWhereUniqueWithoutCategoryInput | LearningRecordCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: LearningRecordCategoryCreateManyCategoryInputEnvelope
    set?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    disconnect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    delete?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    connect?: LearningRecordCategoryWhereUniqueInput | LearningRecordCategoryWhereUniqueInput[]
    update?: LearningRecordCategoryUpdateWithWhereUniqueWithoutCategoryInput | LearningRecordCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: LearningRecordCategoryUpdateManyWithWhereWithoutCategoryInput | LearningRecordCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: LearningRecordCategoryScalarWhereInput | LearningRecordCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSnsPostRecordsInput = {
    create?: XOR<UserCreateWithoutSnsPostRecordsInput, UserUncheckedCreateWithoutSnsPostRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnsPostRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSnsPostRecordsNestedInput = {
    create?: XOR<UserCreateWithoutSnsPostRecordsInput, UserUncheckedCreateWithoutSnsPostRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnsPostRecordsInput
    upsert?: UserUpsertWithoutSnsPostRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSnsPostRecordsInput, UserUpdateWithoutSnsPostRecordsInput>, UserUncheckedUpdateWithoutSnsPostRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    profilePicture?: string | null
    bio?: string | null
    phoneNumber?: string | null
    socialLinks?: string | null
    prefecture?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    profilePicture?: string | null
    bio?: string | null
    phoneNumber?: string | null
    socialLinks?: string | null
    prefecture?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type LearningGoalCreateWithoutUserInput = {
    targetTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningGoalUncheckedCreateWithoutUserInput = {
    id?: number
    targetTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningGoalCreateOrConnectWithoutUserInput = {
    where: LearningGoalWhereUniqueInput
    create: XOR<LearningGoalCreateWithoutUserInput, LearningGoalUncheckedCreateWithoutUserInput>
  }

  export type LearningDailyRecordCreateWithoutUserInput = {
    year: number
    day?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningDailyRecordUncheckedCreateWithoutUserInput = {
    id?: number
    year: number
    day?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningDailyRecordCreateOrConnectWithoutUserInput = {
    where: LearningDailyRecordWhereUniqueInput
    create: XOR<LearningDailyRecordCreateWithoutUserInput, LearningDailyRecordUncheckedCreateWithoutUserInput>
  }

  export type LearningDailyRecordCreateManyUserInputEnvelope = {
    data: LearningDailyRecordCreateManyUserInput | LearningDailyRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LearningWeekRecordCreateWithoutUserInput = {
    year: number
    week?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningWeekRecordUncheckedCreateWithoutUserInput = {
    id?: number
    year: number
    week?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningWeekRecordCreateOrConnectWithoutUserInput = {
    where: LearningWeekRecordWhereUniqueInput
    create: XOR<LearningWeekRecordCreateWithoutUserInput, LearningWeekRecordUncheckedCreateWithoutUserInput>
  }

  export type LearningWeekRecordCreateManyUserInputEnvelope = {
    data: LearningWeekRecordCreateManyUserInput | LearningWeekRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LearningMonthRecordCreateWithoutUserInput = {
    year: number
    month?: number | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningMonthRecordUncheckedCreateWithoutUserInput = {
    id?: number
    year: number
    month?: number | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningMonthRecordCreateOrConnectWithoutUserInput = {
    where: LearningMonthRecordWhereUniqueInput
    create: XOR<LearningMonthRecordCreateWithoutUserInput, LearningMonthRecordUncheckedCreateWithoutUserInput>
  }

  export type LearningMonthRecordCreateManyUserInputEnvelope = {
    data: LearningMonthRecordCreateManyUserInput | LearningMonthRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LearningRecordCreateWithoutUsersInput = {
    categoryId: number
    title: string
    content: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    learningDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    learningRecordCategories?: LearningRecordCategoryCreateNestedManyWithoutLearningRecordsInput
  }

  export type LearningRecordUncheckedCreateWithoutUsersInput = {
    id?: number
    categoryId: number
    title: string
    content: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    learningDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    learningRecordCategories?: LearningRecordCategoryUncheckedCreateNestedManyWithoutLearningRecordsInput
  }

  export type LearningRecordCreateOrConnectWithoutUsersInput = {
    where: LearningRecordWhereUniqueInput
    create: XOR<LearningRecordCreateWithoutUsersInput, LearningRecordUncheckedCreateWithoutUsersInput>
  }

  export type LearningRecordCreateManyUsersInputEnvelope = {
    data: LearningRecordCreateManyUsersInput | LearningRecordCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type SnsPostRecordCreateWithoutUserInput = {
    snsTitle: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsPostRecordUncheckedCreateWithoutUserInput = {
    id?: number
    snsTitle: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsPostRecordCreateOrConnectWithoutUserInput = {
    where: SnsPostRecordWhereUniqueInput
    create: XOR<SnsPostRecordCreateWithoutUserInput, SnsPostRecordUncheckedCreateWithoutUserInput>
  }

  export type SnsPostRecordCreateManyUserInputEnvelope = {
    data: SnsPostRecordCreateManyUserInput | SnsPostRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningGoalUpsertWithoutUserInput = {
    update: XOR<LearningGoalUpdateWithoutUserInput, LearningGoalUncheckedUpdateWithoutUserInput>
    create: XOR<LearningGoalCreateWithoutUserInput, LearningGoalUncheckedCreateWithoutUserInput>
    where?: LearningGoalWhereInput
  }

  export type LearningGoalUpdateToOneWithWhereWithoutUserInput = {
    where?: LearningGoalWhereInput
    data: XOR<LearningGoalUpdateWithoutUserInput, LearningGoalUncheckedUpdateWithoutUserInput>
  }

  export type LearningGoalUpdateWithoutUserInput = {
    targetTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningGoalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningDailyRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: LearningDailyRecordWhereUniqueInput
    update: XOR<LearningDailyRecordUpdateWithoutUserInput, LearningDailyRecordUncheckedUpdateWithoutUserInput>
    create: XOR<LearningDailyRecordCreateWithoutUserInput, LearningDailyRecordUncheckedCreateWithoutUserInput>
  }

  export type LearningDailyRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: LearningDailyRecordWhereUniqueInput
    data: XOR<LearningDailyRecordUpdateWithoutUserInput, LearningDailyRecordUncheckedUpdateWithoutUserInput>
  }

  export type LearningDailyRecordUpdateManyWithWhereWithoutUserInput = {
    where: LearningDailyRecordScalarWhereInput
    data: XOR<LearningDailyRecordUpdateManyMutationInput, LearningDailyRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type LearningDailyRecordScalarWhereInput = {
    AND?: LearningDailyRecordScalarWhereInput | LearningDailyRecordScalarWhereInput[]
    OR?: LearningDailyRecordScalarWhereInput[]
    NOT?: LearningDailyRecordScalarWhereInput | LearningDailyRecordScalarWhereInput[]
    id?: IntFilter<"LearningDailyRecord"> | number
    userId?: IntFilter<"LearningDailyRecord"> | number
    year?: IntFilter<"LearningDailyRecord"> | number
    day?: DateTimeNullableFilter<"LearningDailyRecord"> | Date | string | null
    totalTime?: FloatFilter<"LearningDailyRecord"> | number
    createdAt?: DateTimeFilter<"LearningDailyRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningDailyRecord"> | Date | string
  }

  export type LearningWeekRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: LearningWeekRecordWhereUniqueInput
    update: XOR<LearningWeekRecordUpdateWithoutUserInput, LearningWeekRecordUncheckedUpdateWithoutUserInput>
    create: XOR<LearningWeekRecordCreateWithoutUserInput, LearningWeekRecordUncheckedCreateWithoutUserInput>
  }

  export type LearningWeekRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: LearningWeekRecordWhereUniqueInput
    data: XOR<LearningWeekRecordUpdateWithoutUserInput, LearningWeekRecordUncheckedUpdateWithoutUserInput>
  }

  export type LearningWeekRecordUpdateManyWithWhereWithoutUserInput = {
    where: LearningWeekRecordScalarWhereInput
    data: XOR<LearningWeekRecordUpdateManyMutationInput, LearningWeekRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type LearningWeekRecordScalarWhereInput = {
    AND?: LearningWeekRecordScalarWhereInput | LearningWeekRecordScalarWhereInput[]
    OR?: LearningWeekRecordScalarWhereInput[]
    NOT?: LearningWeekRecordScalarWhereInput | LearningWeekRecordScalarWhereInput[]
    id?: IntFilter<"LearningWeekRecord"> | number
    userId?: IntFilter<"LearningWeekRecord"> | number
    year?: IntFilter<"LearningWeekRecord"> | number
    week?: DateTimeNullableFilter<"LearningWeekRecord"> | Date | string | null
    totalTime?: FloatFilter<"LearningWeekRecord"> | number
    createdAt?: DateTimeFilter<"LearningWeekRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningWeekRecord"> | Date | string
  }

  export type LearningMonthRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: LearningMonthRecordWhereUniqueInput
    update: XOR<LearningMonthRecordUpdateWithoutUserInput, LearningMonthRecordUncheckedUpdateWithoutUserInput>
    create: XOR<LearningMonthRecordCreateWithoutUserInput, LearningMonthRecordUncheckedCreateWithoutUserInput>
  }

  export type LearningMonthRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: LearningMonthRecordWhereUniqueInput
    data: XOR<LearningMonthRecordUpdateWithoutUserInput, LearningMonthRecordUncheckedUpdateWithoutUserInput>
  }

  export type LearningMonthRecordUpdateManyWithWhereWithoutUserInput = {
    where: LearningMonthRecordScalarWhereInput
    data: XOR<LearningMonthRecordUpdateManyMutationInput, LearningMonthRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type LearningMonthRecordScalarWhereInput = {
    AND?: LearningMonthRecordScalarWhereInput | LearningMonthRecordScalarWhereInput[]
    OR?: LearningMonthRecordScalarWhereInput[]
    NOT?: LearningMonthRecordScalarWhereInput | LearningMonthRecordScalarWhereInput[]
    id?: IntFilter<"LearningMonthRecord"> | number
    userId?: IntFilter<"LearningMonthRecord"> | number
    year?: IntFilter<"LearningMonthRecord"> | number
    month?: IntNullableFilter<"LearningMonthRecord"> | number | null
    totalTime?: FloatFilter<"LearningMonthRecord"> | number
    createdAt?: DateTimeFilter<"LearningMonthRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningMonthRecord"> | Date | string
  }

  export type LearningRecordUpsertWithWhereUniqueWithoutUsersInput = {
    where: LearningRecordWhereUniqueInput
    update: XOR<LearningRecordUpdateWithoutUsersInput, LearningRecordUncheckedUpdateWithoutUsersInput>
    create: XOR<LearningRecordCreateWithoutUsersInput, LearningRecordUncheckedCreateWithoutUsersInput>
  }

  export type LearningRecordUpdateWithWhereUniqueWithoutUsersInput = {
    where: LearningRecordWhereUniqueInput
    data: XOR<LearningRecordUpdateWithoutUsersInput, LearningRecordUncheckedUpdateWithoutUsersInput>
  }

  export type LearningRecordUpdateManyWithWhereWithoutUsersInput = {
    where: LearningRecordScalarWhereInput
    data: XOR<LearningRecordUpdateManyMutationInput, LearningRecordUncheckedUpdateManyWithoutUsersInput>
  }

  export type LearningRecordScalarWhereInput = {
    AND?: LearningRecordScalarWhereInput | LearningRecordScalarWhereInput[]
    OR?: LearningRecordScalarWhereInput[]
    NOT?: LearningRecordScalarWhereInput | LearningRecordScalarWhereInput[]
    id?: IntFilter<"LearningRecord"> | number
    userId?: IntFilter<"LearningRecord"> | number
    categoryId?: IntFilter<"LearningRecord"> | number
    title?: StringFilter<"LearningRecord"> | string
    content?: StringFilter<"LearningRecord"> | string
    startTime?: DateTimeFilter<"LearningRecord"> | Date | string
    endTime?: DateTimeFilter<"LearningRecord"> | Date | string
    duration?: FloatFilter<"LearningRecord"> | number
    learningDate?: DateTimeFilter<"LearningRecord"> | Date | string
    createdAt?: DateTimeFilter<"LearningRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningRecord"> | Date | string
  }

  export type SnsPostRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: SnsPostRecordWhereUniqueInput
    update: XOR<SnsPostRecordUpdateWithoutUserInput, SnsPostRecordUncheckedUpdateWithoutUserInput>
    create: XOR<SnsPostRecordCreateWithoutUserInput, SnsPostRecordUncheckedCreateWithoutUserInput>
  }

  export type SnsPostRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: SnsPostRecordWhereUniqueInput
    data: XOR<SnsPostRecordUpdateWithoutUserInput, SnsPostRecordUncheckedUpdateWithoutUserInput>
  }

  export type SnsPostRecordUpdateManyWithWhereWithoutUserInput = {
    where: SnsPostRecordScalarWhereInput
    data: XOR<SnsPostRecordUpdateManyMutationInput, SnsPostRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type SnsPostRecordScalarWhereInput = {
    AND?: SnsPostRecordScalarWhereInput | SnsPostRecordScalarWhereInput[]
    OR?: SnsPostRecordScalarWhereInput[]
    NOT?: SnsPostRecordScalarWhereInput | SnsPostRecordScalarWhereInput[]
    id?: IntFilter<"SnsPostRecord"> | number
    userId?: IntFilter<"SnsPostRecord"> | number
    snsTitle?: StringFilter<"SnsPostRecord"> | string
    content?: StringFilter<"SnsPostRecord"> | string
    createdAt?: DateTimeFilter<"SnsPostRecord"> | Date | string
    updatedAt?: DateTimeFilter<"SnsPostRecord"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    learningGoals?: LearningGoalCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    learningGoals?: LearningGoalUncheckedCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordUncheckedCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordUncheckedCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordUncheckedCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningGoals?: LearningGoalUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningGoals?: LearningGoalUncheckedUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUncheckedUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUncheckedUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUncheckedUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrefectureCreateWithoutChildrenInput = {
    name: string
    parent?: PrefectureCreateNestedOneWithoutChildrenInput
  }

  export type PrefectureUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    parentId?: number | null
  }

  export type PrefectureCreateOrConnectWithoutChildrenInput = {
    where: PrefectureWhereUniqueInput
    create: XOR<PrefectureCreateWithoutChildrenInput, PrefectureUncheckedCreateWithoutChildrenInput>
  }

  export type PrefectureCreateWithoutParentInput = {
    name: string
    children?: PrefectureCreateNestedManyWithoutParentInput
  }

  export type PrefectureUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    children?: PrefectureUncheckedCreateNestedManyWithoutParentInput
  }

  export type PrefectureCreateOrConnectWithoutParentInput = {
    where: PrefectureWhereUniqueInput
    create: XOR<PrefectureCreateWithoutParentInput, PrefectureUncheckedCreateWithoutParentInput>
  }

  export type PrefectureCreateManyParentInputEnvelope = {
    data: PrefectureCreateManyParentInput | PrefectureCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PrefectureUpsertWithoutChildrenInput = {
    update: XOR<PrefectureUpdateWithoutChildrenInput, PrefectureUncheckedUpdateWithoutChildrenInput>
    create: XOR<PrefectureCreateWithoutChildrenInput, PrefectureUncheckedCreateWithoutChildrenInput>
    where?: PrefectureWhereInput
  }

  export type PrefectureUpdateToOneWithWhereWithoutChildrenInput = {
    where?: PrefectureWhereInput
    data: XOR<PrefectureUpdateWithoutChildrenInput, PrefectureUncheckedUpdateWithoutChildrenInput>
  }

  export type PrefectureUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: PrefectureUpdateOneWithoutChildrenNestedInput
  }

  export type PrefectureUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PrefectureUpsertWithWhereUniqueWithoutParentInput = {
    where: PrefectureWhereUniqueInput
    update: XOR<PrefectureUpdateWithoutParentInput, PrefectureUncheckedUpdateWithoutParentInput>
    create: XOR<PrefectureCreateWithoutParentInput, PrefectureUncheckedCreateWithoutParentInput>
  }

  export type PrefectureUpdateWithWhereUniqueWithoutParentInput = {
    where: PrefectureWhereUniqueInput
    data: XOR<PrefectureUpdateWithoutParentInput, PrefectureUncheckedUpdateWithoutParentInput>
  }

  export type PrefectureUpdateManyWithWhereWithoutParentInput = {
    where: PrefectureScalarWhereInput
    data: XOR<PrefectureUpdateManyMutationInput, PrefectureUncheckedUpdateManyWithoutParentInput>
  }

  export type PrefectureScalarWhereInput = {
    AND?: PrefectureScalarWhereInput | PrefectureScalarWhereInput[]
    OR?: PrefectureScalarWhereInput[]
    NOT?: PrefectureScalarWhereInput | PrefectureScalarWhereInput[]
    id?: IntFilter<"Prefecture"> | number
    name?: StringFilter<"Prefecture"> | string
    parentId?: IntNullableFilter<"Prefecture"> | number | null
  }

  export type UserCreateWithoutLearningGoalsInput = {
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningGoalsInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordUncheckedCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordUncheckedCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordUncheckedCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningGoalsInput, UserUncheckedCreateWithoutLearningGoalsInput>
  }

  export type UserUpsertWithoutLearningGoalsInput = {
    update: XOR<UserUpdateWithoutLearningGoalsInput, UserUncheckedUpdateWithoutLearningGoalsInput>
    create: XOR<UserCreateWithoutLearningGoalsInput, UserUncheckedCreateWithoutLearningGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningGoalsInput, UserUncheckedUpdateWithoutLearningGoalsInput>
  }

  export type UserUpdateWithoutLearningGoalsInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningGoalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUncheckedUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUncheckedUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUncheckedUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLearningDailyRecordsInput = {
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalCreateNestedOneWithoutUserInput
    learningWeekRecords?: LearningWeekRecordCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningDailyRecordsInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalUncheckedCreateNestedOneWithoutUserInput
    learningWeekRecords?: LearningWeekRecordUncheckedCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordUncheckedCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordUncheckedCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningDailyRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningDailyRecordsInput, UserUncheckedCreateWithoutLearningDailyRecordsInput>
  }

  export type UserUpsertWithoutLearningDailyRecordsInput = {
    update: XOR<UserUpdateWithoutLearningDailyRecordsInput, UserUncheckedUpdateWithoutLearningDailyRecordsInput>
    create: XOR<UserCreateWithoutLearningDailyRecordsInput, UserUncheckedCreateWithoutLearningDailyRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningDailyRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningDailyRecordsInput, UserUncheckedUpdateWithoutLearningDailyRecordsInput>
  }

  export type UserUpdateWithoutLearningDailyRecordsInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUpdateOneWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningDailyRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUncheckedUpdateOneWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUncheckedUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUncheckedUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUncheckedUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLearningWeekRecordsInput = {
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningWeekRecordsInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalUncheckedCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordUncheckedCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordUncheckedCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningWeekRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningWeekRecordsInput, UserUncheckedCreateWithoutLearningWeekRecordsInput>
  }

  export type UserUpsertWithoutLearningWeekRecordsInput = {
    update: XOR<UserUpdateWithoutLearningWeekRecordsInput, UserUncheckedUpdateWithoutLearningWeekRecordsInput>
    create: XOR<UserCreateWithoutLearningWeekRecordsInput, UserUncheckedCreateWithoutLearningWeekRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningWeekRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningWeekRecordsInput, UserUncheckedUpdateWithoutLearningWeekRecordsInput>
  }

  export type UserUpdateWithoutLearningWeekRecordsInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningWeekRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUncheckedUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUncheckedUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUncheckedUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLearningMonthRecordsInput = {
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningMonthRecordsInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalUncheckedCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordUncheckedCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordUncheckedCreateNestedManyWithoutUsersInput
    snsPostRecords?: SnsPostRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningMonthRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningMonthRecordsInput, UserUncheckedCreateWithoutLearningMonthRecordsInput>
  }

  export type UserUpsertWithoutLearningMonthRecordsInput = {
    update: XOR<UserUpdateWithoutLearningMonthRecordsInput, UserUncheckedUpdateWithoutLearningMonthRecordsInput>
    create: XOR<UserCreateWithoutLearningMonthRecordsInput, UserUncheckedCreateWithoutLearningMonthRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningMonthRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningMonthRecordsInput, UserUncheckedUpdateWithoutLearningMonthRecordsInput>
  }

  export type UserUpdateWithoutLearningMonthRecordsInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningMonthRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUncheckedUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUncheckedUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUncheckedUpdateManyWithoutUsersNestedInput
    snsPostRecords?: SnsPostRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LearningRecordCategoryCreateWithoutLearningRecordsInput = {
    category: CategoryCreateNestedOneWithoutLearningRecordCategoriesInput
  }

  export type LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput = {
    id?: number
    categoryId: number
  }

  export type LearningRecordCategoryCreateOrConnectWithoutLearningRecordsInput = {
    where: LearningRecordCategoryWhereUniqueInput
    create: XOR<LearningRecordCategoryCreateWithoutLearningRecordsInput, LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput>
  }

  export type LearningRecordCategoryCreateManyLearningRecordsInputEnvelope = {
    data: LearningRecordCategoryCreateManyLearningRecordsInput | LearningRecordCategoryCreateManyLearningRecordsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLearningRecordsInput = {
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordCreateNestedManyWithoutUserInput
    snsPostRecords?: SnsPostRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningRecordsInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalUncheckedCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordUncheckedCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordUncheckedCreateNestedManyWithoutUserInput
    snsPostRecords?: SnsPostRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningRecordsInput, UserUncheckedCreateWithoutLearningRecordsInput>
  }

  export type LearningRecordCategoryUpsertWithWhereUniqueWithoutLearningRecordsInput = {
    where: LearningRecordCategoryWhereUniqueInput
    update: XOR<LearningRecordCategoryUpdateWithoutLearningRecordsInput, LearningRecordCategoryUncheckedUpdateWithoutLearningRecordsInput>
    create: XOR<LearningRecordCategoryCreateWithoutLearningRecordsInput, LearningRecordCategoryUncheckedCreateWithoutLearningRecordsInput>
  }

  export type LearningRecordCategoryUpdateWithWhereUniqueWithoutLearningRecordsInput = {
    where: LearningRecordCategoryWhereUniqueInput
    data: XOR<LearningRecordCategoryUpdateWithoutLearningRecordsInput, LearningRecordCategoryUncheckedUpdateWithoutLearningRecordsInput>
  }

  export type LearningRecordCategoryUpdateManyWithWhereWithoutLearningRecordsInput = {
    where: LearningRecordCategoryScalarWhereInput
    data: XOR<LearningRecordCategoryUpdateManyMutationInput, LearningRecordCategoryUncheckedUpdateManyWithoutLearningRecordsInput>
  }

  export type LearningRecordCategoryScalarWhereInput = {
    AND?: LearningRecordCategoryScalarWhereInput | LearningRecordCategoryScalarWhereInput[]
    OR?: LearningRecordCategoryScalarWhereInput[]
    NOT?: LearningRecordCategoryScalarWhereInput | LearningRecordCategoryScalarWhereInput[]
    id?: IntFilter<"LearningRecordCategory"> | number
    learningRecordId?: IntFilter<"LearningRecordCategory"> | number
    categoryId?: IntFilter<"LearningRecordCategory"> | number
  }

  export type UserUpsertWithoutLearningRecordsInput = {
    update: XOR<UserUpdateWithoutLearningRecordsInput, UserUncheckedUpdateWithoutLearningRecordsInput>
    create: XOR<UserCreateWithoutLearningRecordsInput, UserUncheckedCreateWithoutLearningRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningRecordsInput, UserUncheckedUpdateWithoutLearningRecordsInput>
  }

  export type UserUpdateWithoutLearningRecordsInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUpdateManyWithoutUserNestedInput
    snsPostRecords?: SnsPostRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUncheckedUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUncheckedUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUncheckedUpdateManyWithoutUserNestedInput
    snsPostRecords?: SnsPostRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LearningRecordCreateWithoutLearningRecordCategoriesInput = {
    categoryId: number
    title: string
    content: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    learningDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UserCreateNestedOneWithoutLearningRecordsInput
  }

  export type LearningRecordUncheckedCreateWithoutLearningRecordCategoriesInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    content: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    learningDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningRecordCreateOrConnectWithoutLearningRecordCategoriesInput = {
    where: LearningRecordWhereUniqueInput
    create: XOR<LearningRecordCreateWithoutLearningRecordCategoriesInput, LearningRecordUncheckedCreateWithoutLearningRecordCategoriesInput>
  }

  export type CategoryCreateWithoutLearningRecordCategoriesInput = {
    categoryName: string
    parentId?: number | null
  }

  export type CategoryUncheckedCreateWithoutLearningRecordCategoriesInput = {
    id?: number
    categoryName: string
    parentId?: number | null
  }

  export type CategoryCreateOrConnectWithoutLearningRecordCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutLearningRecordCategoriesInput, CategoryUncheckedCreateWithoutLearningRecordCategoriesInput>
  }

  export type LearningRecordUpsertWithoutLearningRecordCategoriesInput = {
    update: XOR<LearningRecordUpdateWithoutLearningRecordCategoriesInput, LearningRecordUncheckedUpdateWithoutLearningRecordCategoriesInput>
    create: XOR<LearningRecordCreateWithoutLearningRecordCategoriesInput, LearningRecordUncheckedCreateWithoutLearningRecordCategoriesInput>
    where?: LearningRecordWhereInput
  }

  export type LearningRecordUpdateToOneWithWhereWithoutLearningRecordCategoriesInput = {
    where?: LearningRecordWhereInput
    data: XOR<LearningRecordUpdateWithoutLearningRecordCategoriesInput, LearningRecordUncheckedUpdateWithoutLearningRecordCategoriesInput>
  }

  export type LearningRecordUpdateWithoutLearningRecordCategoriesInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateOneRequiredWithoutLearningRecordsNestedInput
  }

  export type LearningRecordUncheckedUpdateWithoutLearningRecordCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutLearningRecordCategoriesInput = {
    update: XOR<CategoryUpdateWithoutLearningRecordCategoriesInput, CategoryUncheckedUpdateWithoutLearningRecordCategoriesInput>
    create: XOR<CategoryCreateWithoutLearningRecordCategoriesInput, CategoryUncheckedCreateWithoutLearningRecordCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutLearningRecordCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutLearningRecordCategoriesInput, CategoryUncheckedUpdateWithoutLearningRecordCategoriesInput>
  }

  export type CategoryUpdateWithoutLearningRecordCategoriesInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryUncheckedUpdateWithoutLearningRecordCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LearningRecordCategoryCreateWithoutCategoryInput = {
    learningRecords: LearningRecordCreateNestedOneWithoutLearningRecordCategoriesInput
  }

  export type LearningRecordCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    learningRecordId: number
  }

  export type LearningRecordCategoryCreateOrConnectWithoutCategoryInput = {
    where: LearningRecordCategoryWhereUniqueInput
    create: XOR<LearningRecordCategoryCreateWithoutCategoryInput, LearningRecordCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type LearningRecordCategoryCreateManyCategoryInputEnvelope = {
    data: LearningRecordCategoryCreateManyCategoryInput | LearningRecordCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type LearningRecordCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: LearningRecordCategoryWhereUniqueInput
    update: XOR<LearningRecordCategoryUpdateWithoutCategoryInput, LearningRecordCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<LearningRecordCategoryCreateWithoutCategoryInput, LearningRecordCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type LearningRecordCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: LearningRecordCategoryWhereUniqueInput
    data: XOR<LearningRecordCategoryUpdateWithoutCategoryInput, LearningRecordCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type LearningRecordCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: LearningRecordCategoryScalarWhereInput
    data: XOR<LearningRecordCategoryUpdateManyMutationInput, LearningRecordCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutSnsPostRecordsInput = {
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSnsPostRecordsInput = {
    id?: number
    supabaseUserId: string
    roleId: number
    nickName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    learningGoals?: LearningGoalUncheckedCreateNestedOneWithoutUserInput
    learningDailyRecords?: LearningDailyRecordUncheckedCreateNestedManyWithoutUserInput
    learningWeekRecords?: LearningWeekRecordUncheckedCreateNestedManyWithoutUserInput
    learningMonthRecords?: LearningMonthRecordUncheckedCreateNestedManyWithoutUserInput
    learningRecords?: LearningRecordUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutSnsPostRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSnsPostRecordsInput, UserUncheckedCreateWithoutSnsPostRecordsInput>
  }

  export type UserUpsertWithoutSnsPostRecordsInput = {
    update: XOR<UserUpdateWithoutSnsPostRecordsInput, UserUncheckedUpdateWithoutSnsPostRecordsInput>
    create: XOR<UserCreateWithoutSnsPostRecordsInput, UserUncheckedCreateWithoutSnsPostRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSnsPostRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSnsPostRecordsInput, UserUncheckedUpdateWithoutSnsPostRecordsInput>
  }

  export type UserUpdateWithoutSnsPostRecordsInput = {
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSnsPostRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    learningGoals?: LearningGoalUncheckedUpdateOneWithoutUserNestedInput
    learningDailyRecords?: LearningDailyRecordUncheckedUpdateManyWithoutUserNestedInput
    learningWeekRecords?: LearningWeekRecordUncheckedUpdateManyWithoutUserNestedInput
    learningMonthRecords?: LearningMonthRecordUncheckedUpdateManyWithoutUserNestedInput
    learningRecords?: LearningRecordUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type LearningDailyRecordCreateManyUserInput = {
    id?: number
    year: number
    day?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningWeekRecordCreateManyUserInput = {
    id?: number
    year: number
    week?: Date | string | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningMonthRecordCreateManyUserInput = {
    id?: number
    year: number
    month?: number | null
    totalTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningRecordCreateManyUsersInput = {
    id?: number
    categoryId: number
    title: string
    content: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    learningDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnsPostRecordCreateManyUserInput = {
    id?: number
    snsTitle: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningDailyRecordUpdateWithoutUserInput = {
    year?: IntFieldUpdateOperationsInput | number
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningDailyRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningDailyRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningWeekRecordUpdateWithoutUserInput = {
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningWeekRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningWeekRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    week?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningMonthRecordUpdateWithoutUserInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: NullableIntFieldUpdateOperationsInput | number | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningMonthRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: NullableIntFieldUpdateOperationsInput | number | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningMonthRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: NullableIntFieldUpdateOperationsInput | number | null
    totalTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningRecordUpdateWithoutUsersInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningRecordCategories?: LearningRecordCategoryUpdateManyWithoutLearningRecordsNestedInput
  }

  export type LearningRecordUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningRecordCategories?: LearningRecordCategoryUncheckedUpdateManyWithoutLearningRecordsNestedInput
  }

  export type LearningRecordUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    learningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostRecordUpdateWithoutUserInput = {
    snsTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    snsTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnsPostRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    snsTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrefectureCreateManyParentInput = {
    id?: number
    name: string
  }

  export type PrefectureUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    children?: PrefectureUpdateManyWithoutParentNestedInput
  }

  export type PrefectureUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    children?: PrefectureUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PrefectureUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LearningRecordCategoryCreateManyLearningRecordsInput = {
    id?: number
    categoryId: number
  }

  export type LearningRecordCategoryUpdateWithoutLearningRecordsInput = {
    category?: CategoryUpdateOneRequiredWithoutLearningRecordCategoriesNestedInput
  }

  export type LearningRecordCategoryUncheckedUpdateWithoutLearningRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type LearningRecordCategoryUncheckedUpdateManyWithoutLearningRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type LearningRecordCategoryCreateManyCategoryInput = {
    id?: number
    learningRecordId: number
  }

  export type LearningRecordCategoryUpdateWithoutCategoryInput = {
    learningRecords?: LearningRecordUpdateOneRequiredWithoutLearningRecordCategoriesNestedInput
  }

  export type LearningRecordCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    learningRecordId?: IntFieldUpdateOperationsInput | number
  }

  export type LearningRecordCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    learningRecordId?: IntFieldUpdateOperationsInput | number
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