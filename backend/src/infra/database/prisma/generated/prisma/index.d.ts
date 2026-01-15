
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Instituicao
 * 
 */
export type Instituicao = $Result.DefaultSelection<Prisma.$InstituicaoPayload>
/**
 * Model Local
 * 
 */
export type Local = $Result.DefaultSelection<Prisma.$LocalPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Aviso
 * 
 */
export type Aviso = $Result.DefaultSelection<Prisma.$AvisoPayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Sugestao
 * 
 */
export type Sugestao = $Result.DefaultSelection<Prisma.$SugestaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Instituicaos
 * const instituicaos = await prisma.instituicao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Instituicaos
   * const instituicaos = await prisma.instituicao.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.instituicao`: Exposes CRUD operations for the **Instituicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instituicaos
    * const instituicaos = await prisma.instituicao.findMany()
    * ```
    */
  get instituicao(): Prisma.InstituicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.local`: Exposes CRUD operations for the **Local** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locals
    * const locals = await prisma.local.findMany()
    * ```
    */
  get local(): Prisma.LocalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aviso`: Exposes CRUD operations for the **Aviso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avisos
    * const avisos = await prisma.aviso.findMany()
    * ```
    */
  get aviso(): Prisma.AvisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sugestao`: Exposes CRUD operations for the **Sugestao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sugestaos
    * const sugestaos = await prisma.sugestao.findMany()
    * ```
    */
  get sugestao(): Prisma.SugestaoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Instituicao: 'Instituicao',
    Local: 'Local',
    Usuario: 'Usuario',
    Aviso: 'Aviso',
    Evento: 'Evento',
    Sugestao: 'Sugestao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "instituicao" | "local" | "usuario" | "aviso" | "evento" | "sugestao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Instituicao: {
        payload: Prisma.$InstituicaoPayload<ExtArgs>
        fields: Prisma.InstituicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstituicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstituicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findFirst: {
            args: Prisma.InstituicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstituicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findMany: {
            args: Prisma.InstituicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          create: {
            args: Prisma.InstituicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          createMany: {
            args: Prisma.InstituicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstituicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          delete: {
            args: Prisma.InstituicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          update: {
            args: Prisma.InstituicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          deleteMany: {
            args: Prisma.InstituicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstituicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstituicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          upsert: {
            args: Prisma.InstituicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          aggregate: {
            args: Prisma.InstituicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstituicao>
          }
          groupBy: {
            args: Prisma.InstituicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstituicaoCountArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoCountAggregateOutputType> | number
          }
        }
      }
      Local: {
        payload: Prisma.$LocalPayload<ExtArgs>
        fields: Prisma.LocalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          findFirst: {
            args: Prisma.LocalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          findMany: {
            args: Prisma.LocalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>[]
          }
          create: {
            args: Prisma.LocalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          createMany: {
            args: Prisma.LocalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>[]
          }
          delete: {
            args: Prisma.LocalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          update: {
            args: Prisma.LocalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          deleteMany: {
            args: Prisma.LocalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>[]
          }
          upsert: {
            args: Prisma.LocalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          aggregate: {
            args: Prisma.LocalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocal>
          }
          groupBy: {
            args: Prisma.LocalGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalCountArgs<ExtArgs>
            result: $Utils.Optional<LocalCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Aviso: {
        payload: Prisma.$AvisoPayload<ExtArgs>
        fields: Prisma.AvisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>
          }
          findFirst: {
            args: Prisma.AvisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>
          }
          findMany: {
            args: Prisma.AvisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>[]
          }
          create: {
            args: Prisma.AvisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>
          }
          createMany: {
            args: Prisma.AvisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>[]
          }
          delete: {
            args: Prisma.AvisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>
          }
          update: {
            args: Prisma.AvisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>
          }
          deleteMany: {
            args: Prisma.AvisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>[]
          }
          upsert: {
            args: Prisma.AvisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisoPayload>
          }
          aggregate: {
            args: Prisma.AvisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAviso>
          }
          groupBy: {
            args: Prisma.AvisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvisoCountArgs<ExtArgs>
            result: $Utils.Optional<AvisoCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Sugestao: {
        payload: Prisma.$SugestaoPayload<ExtArgs>
        fields: Prisma.SugestaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SugestaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SugestaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>
          }
          findFirst: {
            args: Prisma.SugestaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SugestaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>
          }
          findMany: {
            args: Prisma.SugestaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>[]
          }
          create: {
            args: Prisma.SugestaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>
          }
          createMany: {
            args: Prisma.SugestaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SugestaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>[]
          }
          delete: {
            args: Prisma.SugestaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>
          }
          update: {
            args: Prisma.SugestaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>
          }
          deleteMany: {
            args: Prisma.SugestaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SugestaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SugestaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>[]
          }
          upsert: {
            args: Prisma.SugestaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SugestaoPayload>
          }
          aggregate: {
            args: Prisma.SugestaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSugestao>
          }
          groupBy: {
            args: Prisma.SugestaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SugestaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SugestaoCountArgs<ExtArgs>
            result: $Utils.Optional<SugestaoCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    instituicao?: InstituicaoOmit
    local?: LocalOmit
    usuario?: UsuarioOmit
    aviso?: AvisoOmit
    evento?: EventoOmit
    sugestao?: SugestaoOmit
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
   * Count Type InstituicaoCountOutputType
   */

  export type InstituicaoCountOutputType = {
    locais: number
    usuarios: number
    avisos: number
    eventos: number
    sugestoes: number
  }

  export type InstituicaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locais?: boolean | InstituicaoCountOutputTypeCountLocaisArgs
    usuarios?: boolean | InstituicaoCountOutputTypeCountUsuariosArgs
    avisos?: boolean | InstituicaoCountOutputTypeCountAvisosArgs
    eventos?: boolean | InstituicaoCountOutputTypeCountEventosArgs
    sugestoes?: boolean | InstituicaoCountOutputTypeCountSugestoesArgs
  }

  // Custom InputTypes
  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstituicaoCountOutputType
     */
    select?: InstituicaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeCountLocaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalWhereInput
  }

  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeCountAvisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisoWhereInput
  }

  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }

  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeCountSugestoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SugestaoWhereInput
  }


  /**
   * Count Type LocalCountOutputType
   */

  export type LocalCountOutputType = {
    eventos: number
  }

  export type LocalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | LocalCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * LocalCountOutputType without action
   */
  export type LocalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalCountOutputType
     */
    select?: LocalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalCountOutputType without action
   */
  export type LocalCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    avisos: number
    sugestoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avisos?: boolean | UsuarioCountOutputTypeCountAvisosArgs
    sugestoes?: boolean | UsuarioCountOutputTypeCountSugestoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAvisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSugestoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SugestaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Instituicao
   */

  export type AggregateInstituicao = {
    _count: InstituicaoCountAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  export type InstituicaoMinAggregateOutputType = {
    instituicao_id: string | null
    nome: string | null
    logo_url: string | null
    mapa_url: string | null
  }

  export type InstituicaoMaxAggregateOutputType = {
    instituicao_id: string | null
    nome: string | null
    logo_url: string | null
    mapa_url: string | null
  }

  export type InstituicaoCountAggregateOutputType = {
    instituicao_id: number
    nome: number
    logo_url: number
    mapa_url: number
    _all: number
  }


  export type InstituicaoMinAggregateInputType = {
    instituicao_id?: true
    nome?: true
    logo_url?: true
    mapa_url?: true
  }

  export type InstituicaoMaxAggregateInputType = {
    instituicao_id?: true
    nome?: true
    logo_url?: true
    mapa_url?: true
  }

  export type InstituicaoCountAggregateInputType = {
    instituicao_id?: true
    nome?: true
    logo_url?: true
    mapa_url?: true
    _all?: true
  }

  export type InstituicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicao to aggregate.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instituicaos
    **/
    _count?: true | InstituicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstituicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstituicaoMaxAggregateInputType
  }

  export type GetInstituicaoAggregateType<T extends InstituicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInstituicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstituicao[P]>
      : GetScalarType<T[P], AggregateInstituicao[P]>
  }




  export type InstituicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstituicaoWhereInput
    orderBy?: InstituicaoOrderByWithAggregationInput | InstituicaoOrderByWithAggregationInput[]
    by: InstituicaoScalarFieldEnum[] | InstituicaoScalarFieldEnum
    having?: InstituicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstituicaoCountAggregateInputType | true
    _min?: InstituicaoMinAggregateInputType
    _max?: InstituicaoMaxAggregateInputType
  }

  export type InstituicaoGroupByOutputType = {
    instituicao_id: string
    nome: string
    logo_url: string | null
    mapa_url: string | null
    _count: InstituicaoCountAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  type GetInstituicaoGroupByPayload<T extends InstituicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstituicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstituicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
            : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
        }
      >
    >


  export type InstituicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instituicao_id?: boolean
    nome?: boolean
    logo_url?: boolean
    mapa_url?: boolean
    locais?: boolean | Instituicao$locaisArgs<ExtArgs>
    usuarios?: boolean | Instituicao$usuariosArgs<ExtArgs>
    avisos?: boolean | Instituicao$avisosArgs<ExtArgs>
    eventos?: boolean | Instituicao$eventosArgs<ExtArgs>
    sugestoes?: boolean | Instituicao$sugestoesArgs<ExtArgs>
    _count?: boolean | InstituicaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instituicao_id?: boolean
    nome?: boolean
    logo_url?: boolean
    mapa_url?: boolean
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instituicao_id?: boolean
    nome?: boolean
    logo_url?: boolean
    mapa_url?: boolean
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectScalar = {
    instituicao_id?: boolean
    nome?: boolean
    logo_url?: boolean
    mapa_url?: boolean
  }

  export type InstituicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"instituicao_id" | "nome" | "logo_url" | "mapa_url", ExtArgs["result"]["instituicao"]>
  export type InstituicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locais?: boolean | Instituicao$locaisArgs<ExtArgs>
    usuarios?: boolean | Instituicao$usuariosArgs<ExtArgs>
    avisos?: boolean | Instituicao$avisosArgs<ExtArgs>
    eventos?: boolean | Instituicao$eventosArgs<ExtArgs>
    sugestoes?: boolean | Instituicao$sugestoesArgs<ExtArgs>
    _count?: boolean | InstituicaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstituicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstituicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstituicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instituicao"
    objects: {
      locais: Prisma.$LocalPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      avisos: Prisma.$AvisoPayload<ExtArgs>[]
      eventos: Prisma.$EventoPayload<ExtArgs>[]
      sugestoes: Prisma.$SugestaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      instituicao_id: string
      nome: string
      logo_url: string | null
      mapa_url: string | null
    }, ExtArgs["result"]["instituicao"]>
    composites: {}
  }

  type InstituicaoGetPayload<S extends boolean | null | undefined | InstituicaoDefaultArgs> = $Result.GetResult<Prisma.$InstituicaoPayload, S>

  type InstituicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstituicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstituicaoCountAggregateInputType | true
    }

  export interface InstituicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instituicao'], meta: { name: 'Instituicao' } }
    /**
     * Find zero or one Instituicao that matches the filter.
     * @param {InstituicaoFindUniqueArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstituicaoFindUniqueArgs>(args: SelectSubset<T, InstituicaoFindUniqueArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instituicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstituicaoFindUniqueOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstituicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InstituicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstituicaoFindFirstArgs>(args?: SelectSubset<T, InstituicaoFindFirstArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstituicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InstituicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instituicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instituicaos
     * const instituicaos = await prisma.instituicao.findMany()
     * 
     * // Get first 10 Instituicaos
     * const instituicaos = await prisma.instituicao.findMany({ take: 10 })
     * 
     * // Only select the `instituicao_id`
     * const instituicaoWithInstituicao_idOnly = await prisma.instituicao.findMany({ select: { instituicao_id: true } })
     * 
     */
    findMany<T extends InstituicaoFindManyArgs>(args?: SelectSubset<T, InstituicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instituicao.
     * @param {InstituicaoCreateArgs} args - Arguments to create a Instituicao.
     * @example
     * // Create one Instituicao
     * const Instituicao = await prisma.instituicao.create({
     *   data: {
     *     // ... data to create a Instituicao
     *   }
     * })
     * 
     */
    create<T extends InstituicaoCreateArgs>(args: SelectSubset<T, InstituicaoCreateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instituicaos.
     * @param {InstituicaoCreateManyArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstituicaoCreateManyArgs>(args?: SelectSubset<T, InstituicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instituicaos and returns the data saved in the database.
     * @param {InstituicaoCreateManyAndReturnArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instituicaos and only return the `instituicao_id`
     * const instituicaoWithInstituicao_idOnly = await prisma.instituicao.createManyAndReturn({
     *   select: { instituicao_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstituicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InstituicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instituicao.
     * @param {InstituicaoDeleteArgs} args - Arguments to delete one Instituicao.
     * @example
     * // Delete one Instituicao
     * const Instituicao = await prisma.instituicao.delete({
     *   where: {
     *     // ... filter to delete one Instituicao
     *   }
     * })
     * 
     */
    delete<T extends InstituicaoDeleteArgs>(args: SelectSubset<T, InstituicaoDeleteArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instituicao.
     * @param {InstituicaoUpdateArgs} args - Arguments to update one Instituicao.
     * @example
     * // Update one Instituicao
     * const instituicao = await prisma.instituicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstituicaoUpdateArgs>(args: SelectSubset<T, InstituicaoUpdateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instituicaos.
     * @param {InstituicaoDeleteManyArgs} args - Arguments to filter Instituicaos to delete.
     * @example
     * // Delete a few Instituicaos
     * const { count } = await prisma.instituicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstituicaoDeleteManyArgs>(args?: SelectSubset<T, InstituicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstituicaoUpdateManyArgs>(args: SelectSubset<T, InstituicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos and returns the data updated in the database.
     * @param {InstituicaoUpdateManyAndReturnArgs} args - Arguments to update many Instituicaos.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instituicaos and only return the `instituicao_id`
     * const instituicaoWithInstituicao_idOnly = await prisma.instituicao.updateManyAndReturn({
     *   select: { instituicao_id: true },
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
    updateManyAndReturn<T extends InstituicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, InstituicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instituicao.
     * @param {InstituicaoUpsertArgs} args - Arguments to update or create a Instituicao.
     * @example
     * // Update or create a Instituicao
     * const instituicao = await prisma.instituicao.upsert({
     *   create: {
     *     // ... data to create a Instituicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instituicao we want to update
     *   }
     * })
     */
    upsert<T extends InstituicaoUpsertArgs>(args: SelectSubset<T, InstituicaoUpsertArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoCountArgs} args - Arguments to filter Instituicaos to count.
     * @example
     * // Count the number of Instituicaos
     * const count = await prisma.instituicao.count({
     *   where: {
     *     // ... the filter for the Instituicaos we want to count
     *   }
     * })
    **/
    count<T extends InstituicaoCountArgs>(
      args?: Subset<T, InstituicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstituicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstituicaoAggregateArgs>(args: Subset<T, InstituicaoAggregateArgs>): Prisma.PrismaPromise<GetInstituicaoAggregateType<T>>

    /**
     * Group by Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoGroupByArgs} args - Group by arguments.
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
      T extends InstituicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstituicaoGroupByArgs['orderBy'] }
        : { orderBy?: InstituicaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstituicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstituicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instituicao model
   */
  readonly fields: InstituicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instituicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstituicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locais<T extends Instituicao$locaisArgs<ExtArgs> = {}>(args?: Subset<T, Instituicao$locaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Instituicao$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Instituicao$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avisos<T extends Instituicao$avisosArgs<ExtArgs> = {}>(args?: Subset<T, Instituicao$avisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventos<T extends Instituicao$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Instituicao$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sugestoes<T extends Instituicao$sugestoesArgs<ExtArgs> = {}>(args?: Subset<T, Instituicao$sugestoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instituicao model
   */
  interface InstituicaoFieldRefs {
    readonly instituicao_id: FieldRef<"Instituicao", 'String'>
    readonly nome: FieldRef<"Instituicao", 'String'>
    readonly logo_url: FieldRef<"Instituicao", 'String'>
    readonly mapa_url: FieldRef<"Instituicao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instituicao findUnique
   */
  export type InstituicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findUniqueOrThrow
   */
  export type InstituicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findFirst
   */
  export type InstituicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findFirstOrThrow
   */
  export type InstituicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findMany
   */
  export type InstituicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicaos to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao create
   */
  export type InstituicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Instituicao.
     */
    data: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
  }

  /**
   * Instituicao createMany
   */
  export type InstituicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instituicao createManyAndReturn
   */
  export type InstituicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instituicao update
   */
  export type InstituicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Instituicao.
     */
    data: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
    /**
     * Choose, which Instituicao to update.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao updateMany
   */
  export type InstituicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
  }

  /**
   * Instituicao updateManyAndReturn
   */
  export type InstituicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
  }

  /**
   * Instituicao upsert
   */
  export type InstituicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Instituicao to update in case it exists.
     */
    where: InstituicaoWhereUniqueInput
    /**
     * In case the Instituicao found by the `where` argument doesn't exist, create a new Instituicao with this data.
     */
    create: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
    /**
     * In case the Instituicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
  }

  /**
   * Instituicao delete
   */
  export type InstituicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter which Instituicao to delete.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao deleteMany
   */
  export type InstituicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicaos to delete
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to delete.
     */
    limit?: number
  }

  /**
   * Instituicao.locais
   */
  export type Instituicao$locaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    where?: LocalWhereInput
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    cursor?: LocalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Instituicao.usuarios
   */
  export type Instituicao$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Instituicao.avisos
   */
  export type Instituicao$avisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    where?: AvisoWhereInput
    orderBy?: AvisoOrderByWithRelationInput | AvisoOrderByWithRelationInput[]
    cursor?: AvisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisoScalarFieldEnum | AvisoScalarFieldEnum[]
  }

  /**
   * Instituicao.eventos
   */
  export type Instituicao$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Instituicao.sugestoes
   */
  export type Instituicao$sugestoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    where?: SugestaoWhereInput
    orderBy?: SugestaoOrderByWithRelationInput | SugestaoOrderByWithRelationInput[]
    cursor?: SugestaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SugestaoScalarFieldEnum | SugestaoScalarFieldEnum[]
  }

  /**
   * Instituicao without action
   */
  export type InstituicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
  }


  /**
   * Model Local
   */

  export type AggregateLocal = {
    _count: LocalCountAggregateOutputType | null
    _min: LocalMinAggregateOutputType | null
    _max: LocalMaxAggregateOutputType | null
  }

  export type LocalMinAggregateOutputType = {
    local_id: string | null
    instituicao_id: string | null
    nome: string | null
    tipo: string | null
    bloco: string | null
    acessivel: boolean | null
  }

  export type LocalMaxAggregateOutputType = {
    local_id: string | null
    instituicao_id: string | null
    nome: string | null
    tipo: string | null
    bloco: string | null
    acessivel: boolean | null
  }

  export type LocalCountAggregateOutputType = {
    local_id: number
    instituicao_id: number
    nome: number
    tipo: number
    bloco: number
    mapa_xy: number
    acessivel: number
    _all: number
  }


  export type LocalMinAggregateInputType = {
    local_id?: true
    instituicao_id?: true
    nome?: true
    tipo?: true
    bloco?: true
    acessivel?: true
  }

  export type LocalMaxAggregateInputType = {
    local_id?: true
    instituicao_id?: true
    nome?: true
    tipo?: true
    bloco?: true
    acessivel?: true
  }

  export type LocalCountAggregateInputType = {
    local_id?: true
    instituicao_id?: true
    nome?: true
    tipo?: true
    bloco?: true
    mapa_xy?: true
    acessivel?: true
    _all?: true
  }

  export type LocalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Local to aggregate.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locals
    **/
    _count?: true | LocalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalMaxAggregateInputType
  }

  export type GetLocalAggregateType<T extends LocalAggregateArgs> = {
        [P in keyof T & keyof AggregateLocal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocal[P]>
      : GetScalarType<T[P], AggregateLocal[P]>
  }




  export type LocalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalWhereInput
    orderBy?: LocalOrderByWithAggregationInput | LocalOrderByWithAggregationInput[]
    by: LocalScalarFieldEnum[] | LocalScalarFieldEnum
    having?: LocalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalCountAggregateInputType | true
    _min?: LocalMinAggregateInputType
    _max?: LocalMaxAggregateInputType
  }

  export type LocalGroupByOutputType = {
    local_id: string
    instituicao_id: string
    nome: string
    tipo: string | null
    bloco: string | null
    mapa_xy: JsonValue | null
    acessivel: boolean
    _count: LocalCountAggregateOutputType | null
    _min: LocalMinAggregateOutputType | null
    _max: LocalMaxAggregateOutputType | null
  }

  type GetLocalGroupByPayload<T extends LocalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalGroupByOutputType[P]>
            : GetScalarType<T[P], LocalGroupByOutputType[P]>
        }
      >
    >


  export type LocalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    local_id?: boolean
    instituicao_id?: boolean
    nome?: boolean
    tipo?: boolean
    bloco?: boolean
    mapa_xy?: boolean
    acessivel?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    eventos?: boolean | Local$eventosArgs<ExtArgs>
    _count?: boolean | LocalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["local"]>

  export type LocalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    local_id?: boolean
    instituicao_id?: boolean
    nome?: boolean
    tipo?: boolean
    bloco?: boolean
    mapa_xy?: boolean
    acessivel?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["local"]>

  export type LocalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    local_id?: boolean
    instituicao_id?: boolean
    nome?: boolean
    tipo?: boolean
    bloco?: boolean
    mapa_xy?: boolean
    acessivel?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["local"]>

  export type LocalSelectScalar = {
    local_id?: boolean
    instituicao_id?: boolean
    nome?: boolean
    tipo?: boolean
    bloco?: boolean
    mapa_xy?: boolean
    acessivel?: boolean
  }

  export type LocalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"local_id" | "instituicao_id" | "nome" | "tipo" | "bloco" | "mapa_xy" | "acessivel", ExtArgs["result"]["local"]>
  export type LocalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    eventos?: boolean | Local$eventosArgs<ExtArgs>
    _count?: boolean | LocalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }
  export type LocalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }

  export type $LocalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Local"
    objects: {
      instituicao: Prisma.$InstituicaoPayload<ExtArgs>
      eventos: Prisma.$EventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      local_id: string
      instituicao_id: string
      nome: string
      tipo: string | null
      bloco: string | null
      mapa_xy: Prisma.JsonValue | null
      acessivel: boolean
    }, ExtArgs["result"]["local"]>
    composites: {}
  }

  type LocalGetPayload<S extends boolean | null | undefined | LocalDefaultArgs> = $Result.GetResult<Prisma.$LocalPayload, S>

  type LocalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalCountAggregateInputType | true
    }

  export interface LocalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Local'], meta: { name: 'Local' } }
    /**
     * Find zero or one Local that matches the filter.
     * @param {LocalFindUniqueArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalFindUniqueArgs>(args: SelectSubset<T, LocalFindUniqueArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Local that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalFindUniqueOrThrowArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Local that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindFirstArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalFindFirstArgs>(args?: SelectSubset<T, LocalFindFirstArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Local that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindFirstOrThrowArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locals
     * const locals = await prisma.local.findMany()
     * 
     * // Get first 10 Locals
     * const locals = await prisma.local.findMany({ take: 10 })
     * 
     * // Only select the `local_id`
     * const localWithLocal_idOnly = await prisma.local.findMany({ select: { local_id: true } })
     * 
     */
    findMany<T extends LocalFindManyArgs>(args?: SelectSubset<T, LocalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Local.
     * @param {LocalCreateArgs} args - Arguments to create a Local.
     * @example
     * // Create one Local
     * const Local = await prisma.local.create({
     *   data: {
     *     // ... data to create a Local
     *   }
     * })
     * 
     */
    create<T extends LocalCreateArgs>(args: SelectSubset<T, LocalCreateArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locals.
     * @param {LocalCreateManyArgs} args - Arguments to create many Locals.
     * @example
     * // Create many Locals
     * const local = await prisma.local.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalCreateManyArgs>(args?: SelectSubset<T, LocalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locals and returns the data saved in the database.
     * @param {LocalCreateManyAndReturnArgs} args - Arguments to create many Locals.
     * @example
     * // Create many Locals
     * const local = await prisma.local.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locals and only return the `local_id`
     * const localWithLocal_idOnly = await prisma.local.createManyAndReturn({
     *   select: { local_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Local.
     * @param {LocalDeleteArgs} args - Arguments to delete one Local.
     * @example
     * // Delete one Local
     * const Local = await prisma.local.delete({
     *   where: {
     *     // ... filter to delete one Local
     *   }
     * })
     * 
     */
    delete<T extends LocalDeleteArgs>(args: SelectSubset<T, LocalDeleteArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Local.
     * @param {LocalUpdateArgs} args - Arguments to update one Local.
     * @example
     * // Update one Local
     * const local = await prisma.local.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalUpdateArgs>(args: SelectSubset<T, LocalUpdateArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locals.
     * @param {LocalDeleteManyArgs} args - Arguments to filter Locals to delete.
     * @example
     * // Delete a few Locals
     * const { count } = await prisma.local.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalDeleteManyArgs>(args?: SelectSubset<T, LocalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locals
     * const local = await prisma.local.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalUpdateManyArgs>(args: SelectSubset<T, LocalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locals and returns the data updated in the database.
     * @param {LocalUpdateManyAndReturnArgs} args - Arguments to update many Locals.
     * @example
     * // Update many Locals
     * const local = await prisma.local.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locals and only return the `local_id`
     * const localWithLocal_idOnly = await prisma.local.updateManyAndReturn({
     *   select: { local_id: true },
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
    updateManyAndReturn<T extends LocalUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Local.
     * @param {LocalUpsertArgs} args - Arguments to update or create a Local.
     * @example
     * // Update or create a Local
     * const local = await prisma.local.upsert({
     *   create: {
     *     // ... data to create a Local
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Local we want to update
     *   }
     * })
     */
    upsert<T extends LocalUpsertArgs>(args: SelectSubset<T, LocalUpsertArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalCountArgs} args - Arguments to filter Locals to count.
     * @example
     * // Count the number of Locals
     * const count = await prisma.local.count({
     *   where: {
     *     // ... the filter for the Locals we want to count
     *   }
     * })
    **/
    count<T extends LocalCountArgs>(
      args?: Subset<T, LocalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Local.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalAggregateArgs>(args: Subset<T, LocalAggregateArgs>): Prisma.PrismaPromise<GetLocalAggregateType<T>>

    /**
     * Group by Local.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGroupByArgs} args - Group by arguments.
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
      T extends LocalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalGroupByArgs['orderBy'] }
        : { orderBy?: LocalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Local model
   */
  readonly fields: LocalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Local.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instituicao<T extends InstituicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituicaoDefaultArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventos<T extends Local$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Local$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Local model
   */
  interface LocalFieldRefs {
    readonly local_id: FieldRef<"Local", 'String'>
    readonly instituicao_id: FieldRef<"Local", 'String'>
    readonly nome: FieldRef<"Local", 'String'>
    readonly tipo: FieldRef<"Local", 'String'>
    readonly bloco: FieldRef<"Local", 'String'>
    readonly mapa_xy: FieldRef<"Local", 'Json'>
    readonly acessivel: FieldRef<"Local", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Local findUnique
   */
  export type LocalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local findUniqueOrThrow
   */
  export type LocalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local findFirst
   */
  export type LocalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locals.
     */
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local findFirstOrThrow
   */
  export type LocalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locals.
     */
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local findMany
   */
  export type LocalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Locals to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local create
   */
  export type LocalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The data needed to create a Local.
     */
    data: XOR<LocalCreateInput, LocalUncheckedCreateInput>
  }

  /**
   * Local createMany
   */
  export type LocalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locals.
     */
    data: LocalCreateManyInput | LocalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Local createManyAndReturn
   */
  export type LocalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * The data used to create many Locals.
     */
    data: LocalCreateManyInput | LocalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Local update
   */
  export type LocalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The data needed to update a Local.
     */
    data: XOR<LocalUpdateInput, LocalUncheckedUpdateInput>
    /**
     * Choose, which Local to update.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local updateMany
   */
  export type LocalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locals.
     */
    data: XOR<LocalUpdateManyMutationInput, LocalUncheckedUpdateManyInput>
    /**
     * Filter which Locals to update
     */
    where?: LocalWhereInput
    /**
     * Limit how many Locals to update.
     */
    limit?: number
  }

  /**
   * Local updateManyAndReturn
   */
  export type LocalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * The data used to update Locals.
     */
    data: XOR<LocalUpdateManyMutationInput, LocalUncheckedUpdateManyInput>
    /**
     * Filter which Locals to update
     */
    where?: LocalWhereInput
    /**
     * Limit how many Locals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Local upsert
   */
  export type LocalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The filter to search for the Local to update in case it exists.
     */
    where: LocalWhereUniqueInput
    /**
     * In case the Local found by the `where` argument doesn't exist, create a new Local with this data.
     */
    create: XOR<LocalCreateInput, LocalUncheckedCreateInput>
    /**
     * In case the Local was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalUpdateInput, LocalUncheckedUpdateInput>
  }

  /**
   * Local delete
   */
  export type LocalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter which Local to delete.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local deleteMany
   */
  export type LocalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locals to delete
     */
    where?: LocalWhereInput
    /**
     * Limit how many Locals to delete.
     */
    limit?: number
  }

  /**
   * Local.eventos
   */
  export type Local$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Local without action
   */
  export type LocalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    usuario_id: string | null
    instituicao_id: string | null
    nome: string | null
    email: string | null
    tipo_acesso: string | null
    curso: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    usuario_id: string | null
    instituicao_id: string | null
    nome: string | null
    email: string | null
    tipo_acesso: string | null
    curso: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    usuario_id: number
    instituicao_id: number
    nome: number
    email: number
    tipo_acesso: number
    curso: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    usuario_id?: true
    instituicao_id?: true
    nome?: true
    email?: true
    tipo_acesso?: true
    curso?: true
  }

  export type UsuarioMaxAggregateInputType = {
    usuario_id?: true
    instituicao_id?: true
    nome?: true
    email?: true
    tipo_acesso?: true
    curso?: true
  }

  export type UsuarioCountAggregateInputType = {
    usuario_id?: true
    instituicao_id?: true
    nome?: true
    email?: true
    tipo_acesso?: true
    curso?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    usuario_id: string
    instituicao_id: string
    nome: string
    email: string
    tipo_acesso: string | null
    curso: string | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    instituicao_id?: boolean
    nome?: boolean
    email?: boolean
    tipo_acesso?: boolean
    curso?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    avisos?: boolean | Usuario$avisosArgs<ExtArgs>
    sugestoes?: boolean | Usuario$sugestoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    instituicao_id?: boolean
    nome?: boolean
    email?: boolean
    tipo_acesso?: boolean
    curso?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    instituicao_id?: boolean
    nome?: boolean
    email?: boolean
    tipo_acesso?: boolean
    curso?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    usuario_id?: boolean
    instituicao_id?: boolean
    nome?: boolean
    email?: boolean
    tipo_acesso?: boolean
    curso?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id" | "instituicao_id" | "nome" | "email" | "tipo_acesso" | "curso", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    avisos?: boolean | Usuario$avisosArgs<ExtArgs>
    sugestoes?: boolean | Usuario$sugestoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      instituicao: Prisma.$InstituicaoPayload<ExtArgs>
      avisos: Prisma.$AvisoPayload<ExtArgs>[]
      sugestoes: Prisma.$SugestaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: string
      instituicao_id: string
      nome: string
      email: string
      tipo_acesso: string | null
      curso: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const usuarioWithUsuario_idOnly = await prisma.usuario.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `usuario_id`
     * const usuarioWithUsuario_idOnly = await prisma.usuario.createManyAndReturn({
     *   select: { usuario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `usuario_id`
     * const usuarioWithUsuario_idOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { usuario_id: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instituicao<T extends InstituicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituicaoDefaultArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avisos<T extends Usuario$avisosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$avisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sugestoes<T extends Usuario$sugestoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$sugestoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly usuario_id: FieldRef<"Usuario", 'String'>
    readonly instituicao_id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly tipo_acesso: FieldRef<"Usuario", 'String'>
    readonly curso: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.avisos
   */
  export type Usuario$avisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    where?: AvisoWhereInput
    orderBy?: AvisoOrderByWithRelationInput | AvisoOrderByWithRelationInput[]
    cursor?: AvisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisoScalarFieldEnum | AvisoScalarFieldEnum[]
  }

  /**
   * Usuario.sugestoes
   */
  export type Usuario$sugestoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    where?: SugestaoWhereInput
    orderBy?: SugestaoOrderByWithRelationInput | SugestaoOrderByWithRelationInput[]
    cursor?: SugestaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SugestaoScalarFieldEnum | SugestaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Aviso
   */

  export type AggregateAviso = {
    _count: AvisoCountAggregateOutputType | null
    _min: AvisoMinAggregateOutputType | null
    _max: AvisoMaxAggregateOutputType | null
  }

  export type AvisoMinAggregateOutputType = {
    aviso_id: string | null
    instituicao_id: string | null
    usuario_id: string | null
    usuario_nome: string | null
    titulo: string | null
    mensagem: string | null
    data_criacao: Date | null
    prioridade: string | null
  }

  export type AvisoMaxAggregateOutputType = {
    aviso_id: string | null
    instituicao_id: string | null
    usuario_id: string | null
    usuario_nome: string | null
    titulo: string | null
    mensagem: string | null
    data_criacao: Date | null
    prioridade: string | null
  }

  export type AvisoCountAggregateOutputType = {
    aviso_id: number
    instituicao_id: number
    usuario_id: number
    usuario_nome: number
    titulo: number
    mensagem: number
    data_criacao: number
    prioridade: number
    curso_alvo: number
    _all: number
  }


  export type AvisoMinAggregateInputType = {
    aviso_id?: true
    instituicao_id?: true
    usuario_id?: true
    usuario_nome?: true
    titulo?: true
    mensagem?: true
    data_criacao?: true
    prioridade?: true
  }

  export type AvisoMaxAggregateInputType = {
    aviso_id?: true
    instituicao_id?: true
    usuario_id?: true
    usuario_nome?: true
    titulo?: true
    mensagem?: true
    data_criacao?: true
    prioridade?: true
  }

  export type AvisoCountAggregateInputType = {
    aviso_id?: true
    instituicao_id?: true
    usuario_id?: true
    usuario_nome?: true
    titulo?: true
    mensagem?: true
    data_criacao?: true
    prioridade?: true
    curso_alvo?: true
    _all?: true
  }

  export type AvisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aviso to aggregate.
     */
    where?: AvisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avisos to fetch.
     */
    orderBy?: AvisoOrderByWithRelationInput | AvisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avisos
    **/
    _count?: true | AvisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvisoMaxAggregateInputType
  }

  export type GetAvisoAggregateType<T extends AvisoAggregateArgs> = {
        [P in keyof T & keyof AggregateAviso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAviso[P]>
      : GetScalarType<T[P], AggregateAviso[P]>
  }




  export type AvisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisoWhereInput
    orderBy?: AvisoOrderByWithAggregationInput | AvisoOrderByWithAggregationInput[]
    by: AvisoScalarFieldEnum[] | AvisoScalarFieldEnum
    having?: AvisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvisoCountAggregateInputType | true
    _min?: AvisoMinAggregateInputType
    _max?: AvisoMaxAggregateInputType
  }

  export type AvisoGroupByOutputType = {
    aviso_id: string
    instituicao_id: string
    usuario_id: string | null
    usuario_nome: string | null
    titulo: string
    mensagem: string | null
    data_criacao: Date
    prioridade: string | null
    curso_alvo: string[]
    _count: AvisoCountAggregateOutputType | null
    _min: AvisoMinAggregateOutputType | null
    _max: AvisoMaxAggregateOutputType | null
  }

  type GetAvisoGroupByPayload<T extends AvisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvisoGroupByOutputType[P]>
            : GetScalarType<T[P], AvisoGroupByOutputType[P]>
        }
      >
    >


  export type AvisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    aviso_id?: boolean
    instituicao_id?: boolean
    usuario_id?: boolean
    usuario_nome?: boolean
    titulo?: boolean
    mensagem?: boolean
    data_criacao?: boolean
    prioridade?: boolean
    curso_alvo?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | Aviso$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["aviso"]>

  export type AvisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    aviso_id?: boolean
    instituicao_id?: boolean
    usuario_id?: boolean
    usuario_nome?: boolean
    titulo?: boolean
    mensagem?: boolean
    data_criacao?: boolean
    prioridade?: boolean
    curso_alvo?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | Aviso$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["aviso"]>

  export type AvisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    aviso_id?: boolean
    instituicao_id?: boolean
    usuario_id?: boolean
    usuario_nome?: boolean
    titulo?: boolean
    mensagem?: boolean
    data_criacao?: boolean
    prioridade?: boolean
    curso_alvo?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | Aviso$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["aviso"]>

  export type AvisoSelectScalar = {
    aviso_id?: boolean
    instituicao_id?: boolean
    usuario_id?: boolean
    usuario_nome?: boolean
    titulo?: boolean
    mensagem?: boolean
    data_criacao?: boolean
    prioridade?: boolean
    curso_alvo?: boolean
  }

  export type AvisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"aviso_id" | "instituicao_id" | "usuario_id" | "usuario_nome" | "titulo" | "mensagem" | "data_criacao" | "prioridade" | "curso_alvo", ExtArgs["result"]["aviso"]>
  export type AvisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | Aviso$usuarioArgs<ExtArgs>
  }
  export type AvisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | Aviso$usuarioArgs<ExtArgs>
  }
  export type AvisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | Aviso$usuarioArgs<ExtArgs>
  }

  export type $AvisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aviso"
    objects: {
      instituicao: Prisma.$InstituicaoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      aviso_id: string
      instituicao_id: string
      usuario_id: string | null
      usuario_nome: string | null
      titulo: string
      mensagem: string | null
      data_criacao: Date
      prioridade: string | null
      curso_alvo: string[]
    }, ExtArgs["result"]["aviso"]>
    composites: {}
  }

  type AvisoGetPayload<S extends boolean | null | undefined | AvisoDefaultArgs> = $Result.GetResult<Prisma.$AvisoPayload, S>

  type AvisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvisoCountAggregateInputType | true
    }

  export interface AvisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aviso'], meta: { name: 'Aviso' } }
    /**
     * Find zero or one Aviso that matches the filter.
     * @param {AvisoFindUniqueArgs} args - Arguments to find a Aviso
     * @example
     * // Get one Aviso
     * const aviso = await prisma.aviso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvisoFindUniqueArgs>(args: SelectSubset<T, AvisoFindUniqueArgs<ExtArgs>>): Prisma__AvisoClient<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aviso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvisoFindUniqueOrThrowArgs} args - Arguments to find a Aviso
     * @example
     * // Get one Aviso
     * const aviso = await prisma.aviso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvisoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvisoClient<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aviso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisoFindFirstArgs} args - Arguments to find a Aviso
     * @example
     * // Get one Aviso
     * const aviso = await prisma.aviso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvisoFindFirstArgs>(args?: SelectSubset<T, AvisoFindFirstArgs<ExtArgs>>): Prisma__AvisoClient<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aviso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisoFindFirstOrThrowArgs} args - Arguments to find a Aviso
     * @example
     * // Get one Aviso
     * const aviso = await prisma.aviso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvisoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvisoClient<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avisos
     * const avisos = await prisma.aviso.findMany()
     * 
     * // Get first 10 Avisos
     * const avisos = await prisma.aviso.findMany({ take: 10 })
     * 
     * // Only select the `aviso_id`
     * const avisoWithAviso_idOnly = await prisma.aviso.findMany({ select: { aviso_id: true } })
     * 
     */
    findMany<T extends AvisoFindManyArgs>(args?: SelectSubset<T, AvisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aviso.
     * @param {AvisoCreateArgs} args - Arguments to create a Aviso.
     * @example
     * // Create one Aviso
     * const Aviso = await prisma.aviso.create({
     *   data: {
     *     // ... data to create a Aviso
     *   }
     * })
     * 
     */
    create<T extends AvisoCreateArgs>(args: SelectSubset<T, AvisoCreateArgs<ExtArgs>>): Prisma__AvisoClient<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avisos.
     * @param {AvisoCreateManyArgs} args - Arguments to create many Avisos.
     * @example
     * // Create many Avisos
     * const aviso = await prisma.aviso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvisoCreateManyArgs>(args?: SelectSubset<T, AvisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avisos and returns the data saved in the database.
     * @param {AvisoCreateManyAndReturnArgs} args - Arguments to create many Avisos.
     * @example
     * // Create many Avisos
     * const aviso = await prisma.aviso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avisos and only return the `aviso_id`
     * const avisoWithAviso_idOnly = await prisma.aviso.createManyAndReturn({
     *   select: { aviso_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvisoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aviso.
     * @param {AvisoDeleteArgs} args - Arguments to delete one Aviso.
     * @example
     * // Delete one Aviso
     * const Aviso = await prisma.aviso.delete({
     *   where: {
     *     // ... filter to delete one Aviso
     *   }
     * })
     * 
     */
    delete<T extends AvisoDeleteArgs>(args: SelectSubset<T, AvisoDeleteArgs<ExtArgs>>): Prisma__AvisoClient<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aviso.
     * @param {AvisoUpdateArgs} args - Arguments to update one Aviso.
     * @example
     * // Update one Aviso
     * const aviso = await prisma.aviso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvisoUpdateArgs>(args: SelectSubset<T, AvisoUpdateArgs<ExtArgs>>): Prisma__AvisoClient<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avisos.
     * @param {AvisoDeleteManyArgs} args - Arguments to filter Avisos to delete.
     * @example
     * // Delete a few Avisos
     * const { count } = await prisma.aviso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvisoDeleteManyArgs>(args?: SelectSubset<T, AvisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avisos
     * const aviso = await prisma.aviso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvisoUpdateManyArgs>(args: SelectSubset<T, AvisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avisos and returns the data updated in the database.
     * @param {AvisoUpdateManyAndReturnArgs} args - Arguments to update many Avisos.
     * @example
     * // Update many Avisos
     * const aviso = await prisma.aviso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avisos and only return the `aviso_id`
     * const avisoWithAviso_idOnly = await prisma.aviso.updateManyAndReturn({
     *   select: { aviso_id: true },
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
    updateManyAndReturn<T extends AvisoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aviso.
     * @param {AvisoUpsertArgs} args - Arguments to update or create a Aviso.
     * @example
     * // Update or create a Aviso
     * const aviso = await prisma.aviso.upsert({
     *   create: {
     *     // ... data to create a Aviso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aviso we want to update
     *   }
     * })
     */
    upsert<T extends AvisoUpsertArgs>(args: SelectSubset<T, AvisoUpsertArgs<ExtArgs>>): Prisma__AvisoClient<$Result.GetResult<Prisma.$AvisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisoCountArgs} args - Arguments to filter Avisos to count.
     * @example
     * // Count the number of Avisos
     * const count = await prisma.aviso.count({
     *   where: {
     *     // ... the filter for the Avisos we want to count
     *   }
     * })
    **/
    count<T extends AvisoCountArgs>(
      args?: Subset<T, AvisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aviso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvisoAggregateArgs>(args: Subset<T, AvisoAggregateArgs>): Prisma.PrismaPromise<GetAvisoAggregateType<T>>

    /**
     * Group by Aviso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisoGroupByArgs} args - Group by arguments.
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
      T extends AvisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvisoGroupByArgs['orderBy'] }
        : { orderBy?: AvisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aviso model
   */
  readonly fields: AvisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aviso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instituicao<T extends InstituicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituicaoDefaultArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends Aviso$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Aviso$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Aviso model
   */
  interface AvisoFieldRefs {
    readonly aviso_id: FieldRef<"Aviso", 'String'>
    readonly instituicao_id: FieldRef<"Aviso", 'String'>
    readonly usuario_id: FieldRef<"Aviso", 'String'>
    readonly usuario_nome: FieldRef<"Aviso", 'String'>
    readonly titulo: FieldRef<"Aviso", 'String'>
    readonly mensagem: FieldRef<"Aviso", 'String'>
    readonly data_criacao: FieldRef<"Aviso", 'DateTime'>
    readonly prioridade: FieldRef<"Aviso", 'String'>
    readonly curso_alvo: FieldRef<"Aviso", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Aviso findUnique
   */
  export type AvisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * Filter, which Aviso to fetch.
     */
    where: AvisoWhereUniqueInput
  }

  /**
   * Aviso findUniqueOrThrow
   */
  export type AvisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * Filter, which Aviso to fetch.
     */
    where: AvisoWhereUniqueInput
  }

  /**
   * Aviso findFirst
   */
  export type AvisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * Filter, which Aviso to fetch.
     */
    where?: AvisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avisos to fetch.
     */
    orderBy?: AvisoOrderByWithRelationInput | AvisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avisos.
     */
    cursor?: AvisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avisos.
     */
    distinct?: AvisoScalarFieldEnum | AvisoScalarFieldEnum[]
  }

  /**
   * Aviso findFirstOrThrow
   */
  export type AvisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * Filter, which Aviso to fetch.
     */
    where?: AvisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avisos to fetch.
     */
    orderBy?: AvisoOrderByWithRelationInput | AvisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avisos.
     */
    cursor?: AvisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avisos.
     */
    distinct?: AvisoScalarFieldEnum | AvisoScalarFieldEnum[]
  }

  /**
   * Aviso findMany
   */
  export type AvisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * Filter, which Avisos to fetch.
     */
    where?: AvisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avisos to fetch.
     */
    orderBy?: AvisoOrderByWithRelationInput | AvisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avisos.
     */
    cursor?: AvisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avisos.
     */
    skip?: number
    distinct?: AvisoScalarFieldEnum | AvisoScalarFieldEnum[]
  }

  /**
   * Aviso create
   */
  export type AvisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aviso.
     */
    data: XOR<AvisoCreateInput, AvisoUncheckedCreateInput>
  }

  /**
   * Aviso createMany
   */
  export type AvisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avisos.
     */
    data: AvisoCreateManyInput | AvisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aviso createManyAndReturn
   */
  export type AvisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * The data used to create many Avisos.
     */
    data: AvisoCreateManyInput | AvisoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aviso update
   */
  export type AvisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aviso.
     */
    data: XOR<AvisoUpdateInput, AvisoUncheckedUpdateInput>
    /**
     * Choose, which Aviso to update.
     */
    where: AvisoWhereUniqueInput
  }

  /**
   * Aviso updateMany
   */
  export type AvisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avisos.
     */
    data: XOR<AvisoUpdateManyMutationInput, AvisoUncheckedUpdateManyInput>
    /**
     * Filter which Avisos to update
     */
    where?: AvisoWhereInput
    /**
     * Limit how many Avisos to update.
     */
    limit?: number
  }

  /**
   * Aviso updateManyAndReturn
   */
  export type AvisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * The data used to update Avisos.
     */
    data: XOR<AvisoUpdateManyMutationInput, AvisoUncheckedUpdateManyInput>
    /**
     * Filter which Avisos to update
     */
    where?: AvisoWhereInput
    /**
     * Limit how many Avisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aviso upsert
   */
  export type AvisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aviso to update in case it exists.
     */
    where: AvisoWhereUniqueInput
    /**
     * In case the Aviso found by the `where` argument doesn't exist, create a new Aviso with this data.
     */
    create: XOR<AvisoCreateInput, AvisoUncheckedCreateInput>
    /**
     * In case the Aviso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvisoUpdateInput, AvisoUncheckedUpdateInput>
  }

  /**
   * Aviso delete
   */
  export type AvisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
    /**
     * Filter which Aviso to delete.
     */
    where: AvisoWhereUniqueInput
  }

  /**
   * Aviso deleteMany
   */
  export type AvisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avisos to delete
     */
    where?: AvisoWhereInput
    /**
     * Limit how many Avisos to delete.
     */
    limit?: number
  }

  /**
   * Aviso.usuario
   */
  export type Aviso$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Aviso without action
   */
  export type AvisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aviso
     */
    select?: AvisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aviso
     */
    omit?: AvisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisoInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoMinAggregateOutputType = {
    evento_id: string | null
    instituicao_id: string | null
    titulo: string | null
    data: Date | null
    tipo: string | null
    descricao: string | null
    local_id: string | null
  }

  export type EventoMaxAggregateOutputType = {
    evento_id: string | null
    instituicao_id: string | null
    titulo: string | null
    data: Date | null
    tipo: string | null
    descricao: string | null
    local_id: string | null
  }

  export type EventoCountAggregateOutputType = {
    evento_id: number
    instituicao_id: number
    titulo: number
    data: number
    tipo: number
    descricao: number
    local_id: number
    _all: number
  }


  export type EventoMinAggregateInputType = {
    evento_id?: true
    instituicao_id?: true
    titulo?: true
    data?: true
    tipo?: true
    descricao?: true
    local_id?: true
  }

  export type EventoMaxAggregateInputType = {
    evento_id?: true
    instituicao_id?: true
    titulo?: true
    data?: true
    tipo?: true
    descricao?: true
    local_id?: true
  }

  export type EventoCountAggregateInputType = {
    evento_id?: true
    instituicao_id?: true
    titulo?: true
    data?: true
    tipo?: true
    descricao?: true
    local_id?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    evento_id: string
    instituicao_id: string
    titulo: string
    data: Date
    tipo: string | null
    descricao: string | null
    local_id: string | null
    _count: EventoCountAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evento_id?: boolean
    instituicao_id?: boolean
    titulo?: boolean
    data?: boolean
    tipo?: boolean
    descricao?: boolean
    local_id?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    local?: boolean | Evento$localArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evento_id?: boolean
    instituicao_id?: boolean
    titulo?: boolean
    data?: boolean
    tipo?: boolean
    descricao?: boolean
    local_id?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    local?: boolean | Evento$localArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    evento_id?: boolean
    instituicao_id?: boolean
    titulo?: boolean
    data?: boolean
    tipo?: boolean
    descricao?: boolean
    local_id?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    local?: boolean | Evento$localArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    evento_id?: boolean
    instituicao_id?: boolean
    titulo?: boolean
    data?: boolean
    tipo?: boolean
    descricao?: boolean
    local_id?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"evento_id" | "instituicao_id" | "titulo" | "data" | "tipo" | "descricao" | "local_id", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    local?: boolean | Evento$localArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    local?: boolean | Evento$localArgs<ExtArgs>
  }
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    local?: boolean | Evento$localArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      instituicao: Prisma.$InstituicaoPayload<ExtArgs>
      local: Prisma.$LocalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      evento_id: string
      instituicao_id: string
      titulo: string
      data: Date
      tipo: string | null
      descricao: string | null
      local_id: string | null
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `evento_id`
     * const eventoWithEvento_idOnly = await prisma.evento.findMany({ select: { evento_id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `evento_id`
     * const eventoWithEvento_idOnly = await prisma.evento.createManyAndReturn({
     *   select: { evento_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `evento_id`
     * const eventoWithEvento_idOnly = await prisma.evento.updateManyAndReturn({
     *   select: { evento_id: true },
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
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
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
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instituicao<T extends InstituicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituicaoDefaultArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    local<T extends Evento$localArgs<ExtArgs> = {}>(args?: Subset<T, Evento$localArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly evento_id: FieldRef<"Evento", 'String'>
    readonly instituicao_id: FieldRef<"Evento", 'String'>
    readonly titulo: FieldRef<"Evento", 'String'>
    readonly data: FieldRef<"Evento", 'DateTime'>
    readonly tipo: FieldRef<"Evento", 'String'>
    readonly descricao: FieldRef<"Evento", 'String'>
    readonly local_id: FieldRef<"Evento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento.local
   */
  export type Evento$localArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    where?: LocalWhereInput
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Sugestao
   */

  export type AggregateSugestao = {
    _count: SugestaoCountAggregateOutputType | null
    _min: SugestaoMinAggregateOutputType | null
    _max: SugestaoMaxAggregateOutputType | null
  }

  export type SugestaoMinAggregateOutputType = {
    sugestao_id: string | null
    instituicao_id: string | null
    usuario_id: string | null
    titulo: string | null
    descricao: string | null
    tipo: string | null
    status: string | null
    foto_url: string | null
    data_criacao: Date | null
  }

  export type SugestaoMaxAggregateOutputType = {
    sugestao_id: string | null
    instituicao_id: string | null
    usuario_id: string | null
    titulo: string | null
    descricao: string | null
    tipo: string | null
    status: string | null
    foto_url: string | null
    data_criacao: Date | null
  }

  export type SugestaoCountAggregateOutputType = {
    sugestao_id: number
    instituicao_id: number
    usuario_id: number
    titulo: number
    descricao: number
    tipo: number
    status: number
    foto_url: number
    data_criacao: number
    _all: number
  }


  export type SugestaoMinAggregateInputType = {
    sugestao_id?: true
    instituicao_id?: true
    usuario_id?: true
    titulo?: true
    descricao?: true
    tipo?: true
    status?: true
    foto_url?: true
    data_criacao?: true
  }

  export type SugestaoMaxAggregateInputType = {
    sugestao_id?: true
    instituicao_id?: true
    usuario_id?: true
    titulo?: true
    descricao?: true
    tipo?: true
    status?: true
    foto_url?: true
    data_criacao?: true
  }

  export type SugestaoCountAggregateInputType = {
    sugestao_id?: true
    instituicao_id?: true
    usuario_id?: true
    titulo?: true
    descricao?: true
    tipo?: true
    status?: true
    foto_url?: true
    data_criacao?: true
    _all?: true
  }

  export type SugestaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sugestao to aggregate.
     */
    where?: SugestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sugestaos to fetch.
     */
    orderBy?: SugestaoOrderByWithRelationInput | SugestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SugestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sugestaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sugestaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sugestaos
    **/
    _count?: true | SugestaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SugestaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SugestaoMaxAggregateInputType
  }

  export type GetSugestaoAggregateType<T extends SugestaoAggregateArgs> = {
        [P in keyof T & keyof AggregateSugestao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSugestao[P]>
      : GetScalarType<T[P], AggregateSugestao[P]>
  }




  export type SugestaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SugestaoWhereInput
    orderBy?: SugestaoOrderByWithAggregationInput | SugestaoOrderByWithAggregationInput[]
    by: SugestaoScalarFieldEnum[] | SugestaoScalarFieldEnum
    having?: SugestaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SugestaoCountAggregateInputType | true
    _min?: SugestaoMinAggregateInputType
    _max?: SugestaoMaxAggregateInputType
  }

  export type SugestaoGroupByOutputType = {
    sugestao_id: string
    instituicao_id: string
    usuario_id: string
    titulo: string
    descricao: string | null
    tipo: string | null
    status: string | null
    foto_url: string | null
    data_criacao: Date
    _count: SugestaoCountAggregateOutputType | null
    _min: SugestaoMinAggregateOutputType | null
    _max: SugestaoMaxAggregateOutputType | null
  }

  type GetSugestaoGroupByPayload<T extends SugestaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SugestaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SugestaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SugestaoGroupByOutputType[P]>
            : GetScalarType<T[P], SugestaoGroupByOutputType[P]>
        }
      >
    >


  export type SugestaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sugestao_id?: boolean
    instituicao_id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    descricao?: boolean
    tipo?: boolean
    status?: boolean
    foto_url?: boolean
    data_criacao?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sugestao"]>

  export type SugestaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sugestao_id?: boolean
    instituicao_id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    descricao?: boolean
    tipo?: boolean
    status?: boolean
    foto_url?: boolean
    data_criacao?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sugestao"]>

  export type SugestaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sugestao_id?: boolean
    instituicao_id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    descricao?: boolean
    tipo?: boolean
    status?: boolean
    foto_url?: boolean
    data_criacao?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sugestao"]>

  export type SugestaoSelectScalar = {
    sugestao_id?: boolean
    instituicao_id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    descricao?: boolean
    tipo?: boolean
    status?: boolean
    foto_url?: boolean
    data_criacao?: boolean
  }

  export type SugestaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sugestao_id" | "instituicao_id" | "usuario_id" | "titulo" | "descricao" | "tipo" | "status" | "foto_url" | "data_criacao", ExtArgs["result"]["sugestao"]>
  export type SugestaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SugestaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SugestaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SugestaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sugestao"
    objects: {
      instituicao: Prisma.$InstituicaoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sugestao_id: string
      instituicao_id: string
      usuario_id: string
      titulo: string
      descricao: string | null
      tipo: string | null
      status: string | null
      foto_url: string | null
      data_criacao: Date
    }, ExtArgs["result"]["sugestao"]>
    composites: {}
  }

  type SugestaoGetPayload<S extends boolean | null | undefined | SugestaoDefaultArgs> = $Result.GetResult<Prisma.$SugestaoPayload, S>

  type SugestaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SugestaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SugestaoCountAggregateInputType | true
    }

  export interface SugestaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sugestao'], meta: { name: 'Sugestao' } }
    /**
     * Find zero or one Sugestao that matches the filter.
     * @param {SugestaoFindUniqueArgs} args - Arguments to find a Sugestao
     * @example
     * // Get one Sugestao
     * const sugestao = await prisma.sugestao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SugestaoFindUniqueArgs>(args: SelectSubset<T, SugestaoFindUniqueArgs<ExtArgs>>): Prisma__SugestaoClient<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sugestao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SugestaoFindUniqueOrThrowArgs} args - Arguments to find a Sugestao
     * @example
     * // Get one Sugestao
     * const sugestao = await prisma.sugestao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SugestaoFindUniqueOrThrowArgs>(args: SelectSubset<T, SugestaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SugestaoClient<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sugestao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SugestaoFindFirstArgs} args - Arguments to find a Sugestao
     * @example
     * // Get one Sugestao
     * const sugestao = await prisma.sugestao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SugestaoFindFirstArgs>(args?: SelectSubset<T, SugestaoFindFirstArgs<ExtArgs>>): Prisma__SugestaoClient<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sugestao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SugestaoFindFirstOrThrowArgs} args - Arguments to find a Sugestao
     * @example
     * // Get one Sugestao
     * const sugestao = await prisma.sugestao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SugestaoFindFirstOrThrowArgs>(args?: SelectSubset<T, SugestaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SugestaoClient<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sugestaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SugestaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sugestaos
     * const sugestaos = await prisma.sugestao.findMany()
     * 
     * // Get first 10 Sugestaos
     * const sugestaos = await prisma.sugestao.findMany({ take: 10 })
     * 
     * // Only select the `sugestao_id`
     * const sugestaoWithSugestao_idOnly = await prisma.sugestao.findMany({ select: { sugestao_id: true } })
     * 
     */
    findMany<T extends SugestaoFindManyArgs>(args?: SelectSubset<T, SugestaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sugestao.
     * @param {SugestaoCreateArgs} args - Arguments to create a Sugestao.
     * @example
     * // Create one Sugestao
     * const Sugestao = await prisma.sugestao.create({
     *   data: {
     *     // ... data to create a Sugestao
     *   }
     * })
     * 
     */
    create<T extends SugestaoCreateArgs>(args: SelectSubset<T, SugestaoCreateArgs<ExtArgs>>): Prisma__SugestaoClient<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sugestaos.
     * @param {SugestaoCreateManyArgs} args - Arguments to create many Sugestaos.
     * @example
     * // Create many Sugestaos
     * const sugestao = await prisma.sugestao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SugestaoCreateManyArgs>(args?: SelectSubset<T, SugestaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sugestaos and returns the data saved in the database.
     * @param {SugestaoCreateManyAndReturnArgs} args - Arguments to create many Sugestaos.
     * @example
     * // Create many Sugestaos
     * const sugestao = await prisma.sugestao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sugestaos and only return the `sugestao_id`
     * const sugestaoWithSugestao_idOnly = await prisma.sugestao.createManyAndReturn({
     *   select: { sugestao_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SugestaoCreateManyAndReturnArgs>(args?: SelectSubset<T, SugestaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sugestao.
     * @param {SugestaoDeleteArgs} args - Arguments to delete one Sugestao.
     * @example
     * // Delete one Sugestao
     * const Sugestao = await prisma.sugestao.delete({
     *   where: {
     *     // ... filter to delete one Sugestao
     *   }
     * })
     * 
     */
    delete<T extends SugestaoDeleteArgs>(args: SelectSubset<T, SugestaoDeleteArgs<ExtArgs>>): Prisma__SugestaoClient<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sugestao.
     * @param {SugestaoUpdateArgs} args - Arguments to update one Sugestao.
     * @example
     * // Update one Sugestao
     * const sugestao = await prisma.sugestao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SugestaoUpdateArgs>(args: SelectSubset<T, SugestaoUpdateArgs<ExtArgs>>): Prisma__SugestaoClient<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sugestaos.
     * @param {SugestaoDeleteManyArgs} args - Arguments to filter Sugestaos to delete.
     * @example
     * // Delete a few Sugestaos
     * const { count } = await prisma.sugestao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SugestaoDeleteManyArgs>(args?: SelectSubset<T, SugestaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sugestaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SugestaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sugestaos
     * const sugestao = await prisma.sugestao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SugestaoUpdateManyArgs>(args: SelectSubset<T, SugestaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sugestaos and returns the data updated in the database.
     * @param {SugestaoUpdateManyAndReturnArgs} args - Arguments to update many Sugestaos.
     * @example
     * // Update many Sugestaos
     * const sugestao = await prisma.sugestao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sugestaos and only return the `sugestao_id`
     * const sugestaoWithSugestao_idOnly = await prisma.sugestao.updateManyAndReturn({
     *   select: { sugestao_id: true },
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
    updateManyAndReturn<T extends SugestaoUpdateManyAndReturnArgs>(args: SelectSubset<T, SugestaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sugestao.
     * @param {SugestaoUpsertArgs} args - Arguments to update or create a Sugestao.
     * @example
     * // Update or create a Sugestao
     * const sugestao = await prisma.sugestao.upsert({
     *   create: {
     *     // ... data to create a Sugestao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sugestao we want to update
     *   }
     * })
     */
    upsert<T extends SugestaoUpsertArgs>(args: SelectSubset<T, SugestaoUpsertArgs<ExtArgs>>): Prisma__SugestaoClient<$Result.GetResult<Prisma.$SugestaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sugestaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SugestaoCountArgs} args - Arguments to filter Sugestaos to count.
     * @example
     * // Count the number of Sugestaos
     * const count = await prisma.sugestao.count({
     *   where: {
     *     // ... the filter for the Sugestaos we want to count
     *   }
     * })
    **/
    count<T extends SugestaoCountArgs>(
      args?: Subset<T, SugestaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SugestaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sugestao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SugestaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SugestaoAggregateArgs>(args: Subset<T, SugestaoAggregateArgs>): Prisma.PrismaPromise<GetSugestaoAggregateType<T>>

    /**
     * Group by Sugestao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SugestaoGroupByArgs} args - Group by arguments.
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
      T extends SugestaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SugestaoGroupByArgs['orderBy'] }
        : { orderBy?: SugestaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SugestaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSugestaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sugestao model
   */
  readonly fields: SugestaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sugestao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SugestaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instituicao<T extends InstituicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituicaoDefaultArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sugestao model
   */
  interface SugestaoFieldRefs {
    readonly sugestao_id: FieldRef<"Sugestao", 'String'>
    readonly instituicao_id: FieldRef<"Sugestao", 'String'>
    readonly usuario_id: FieldRef<"Sugestao", 'String'>
    readonly titulo: FieldRef<"Sugestao", 'String'>
    readonly descricao: FieldRef<"Sugestao", 'String'>
    readonly tipo: FieldRef<"Sugestao", 'String'>
    readonly status: FieldRef<"Sugestao", 'String'>
    readonly foto_url: FieldRef<"Sugestao", 'String'>
    readonly data_criacao: FieldRef<"Sugestao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sugestao findUnique
   */
  export type SugestaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * Filter, which Sugestao to fetch.
     */
    where: SugestaoWhereUniqueInput
  }

  /**
   * Sugestao findUniqueOrThrow
   */
  export type SugestaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * Filter, which Sugestao to fetch.
     */
    where: SugestaoWhereUniqueInput
  }

  /**
   * Sugestao findFirst
   */
  export type SugestaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * Filter, which Sugestao to fetch.
     */
    where?: SugestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sugestaos to fetch.
     */
    orderBy?: SugestaoOrderByWithRelationInput | SugestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sugestaos.
     */
    cursor?: SugestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sugestaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sugestaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sugestaos.
     */
    distinct?: SugestaoScalarFieldEnum | SugestaoScalarFieldEnum[]
  }

  /**
   * Sugestao findFirstOrThrow
   */
  export type SugestaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * Filter, which Sugestao to fetch.
     */
    where?: SugestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sugestaos to fetch.
     */
    orderBy?: SugestaoOrderByWithRelationInput | SugestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sugestaos.
     */
    cursor?: SugestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sugestaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sugestaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sugestaos.
     */
    distinct?: SugestaoScalarFieldEnum | SugestaoScalarFieldEnum[]
  }

  /**
   * Sugestao findMany
   */
  export type SugestaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * Filter, which Sugestaos to fetch.
     */
    where?: SugestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sugestaos to fetch.
     */
    orderBy?: SugestaoOrderByWithRelationInput | SugestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sugestaos.
     */
    cursor?: SugestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sugestaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sugestaos.
     */
    skip?: number
    distinct?: SugestaoScalarFieldEnum | SugestaoScalarFieldEnum[]
  }

  /**
   * Sugestao create
   */
  export type SugestaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Sugestao.
     */
    data: XOR<SugestaoCreateInput, SugestaoUncheckedCreateInput>
  }

  /**
   * Sugestao createMany
   */
  export type SugestaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sugestaos.
     */
    data: SugestaoCreateManyInput | SugestaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sugestao createManyAndReturn
   */
  export type SugestaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * The data used to create many Sugestaos.
     */
    data: SugestaoCreateManyInput | SugestaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sugestao update
   */
  export type SugestaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Sugestao.
     */
    data: XOR<SugestaoUpdateInput, SugestaoUncheckedUpdateInput>
    /**
     * Choose, which Sugestao to update.
     */
    where: SugestaoWhereUniqueInput
  }

  /**
   * Sugestao updateMany
   */
  export type SugestaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sugestaos.
     */
    data: XOR<SugestaoUpdateManyMutationInput, SugestaoUncheckedUpdateManyInput>
    /**
     * Filter which Sugestaos to update
     */
    where?: SugestaoWhereInput
    /**
     * Limit how many Sugestaos to update.
     */
    limit?: number
  }

  /**
   * Sugestao updateManyAndReturn
   */
  export type SugestaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * The data used to update Sugestaos.
     */
    data: XOR<SugestaoUpdateManyMutationInput, SugestaoUncheckedUpdateManyInput>
    /**
     * Filter which Sugestaos to update
     */
    where?: SugestaoWhereInput
    /**
     * Limit how many Sugestaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sugestao upsert
   */
  export type SugestaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Sugestao to update in case it exists.
     */
    where: SugestaoWhereUniqueInput
    /**
     * In case the Sugestao found by the `where` argument doesn't exist, create a new Sugestao with this data.
     */
    create: XOR<SugestaoCreateInput, SugestaoUncheckedCreateInput>
    /**
     * In case the Sugestao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SugestaoUpdateInput, SugestaoUncheckedUpdateInput>
  }

  /**
   * Sugestao delete
   */
  export type SugestaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
    /**
     * Filter which Sugestao to delete.
     */
    where: SugestaoWhereUniqueInput
  }

  /**
   * Sugestao deleteMany
   */
  export type SugestaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sugestaos to delete
     */
    where?: SugestaoWhereInput
    /**
     * Limit how many Sugestaos to delete.
     */
    limit?: number
  }

  /**
   * Sugestao without action
   */
  export type SugestaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sugestao
     */
    select?: SugestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sugestao
     */
    omit?: SugestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SugestaoInclude<ExtArgs> | null
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


  export const InstituicaoScalarFieldEnum: {
    instituicao_id: 'instituicao_id',
    nome: 'nome',
    logo_url: 'logo_url',
    mapa_url: 'mapa_url'
  };

  export type InstituicaoScalarFieldEnum = (typeof InstituicaoScalarFieldEnum)[keyof typeof InstituicaoScalarFieldEnum]


  export const LocalScalarFieldEnum: {
    local_id: 'local_id',
    instituicao_id: 'instituicao_id',
    nome: 'nome',
    tipo: 'tipo',
    bloco: 'bloco',
    mapa_xy: 'mapa_xy',
    acessivel: 'acessivel'
  };

  export type LocalScalarFieldEnum = (typeof LocalScalarFieldEnum)[keyof typeof LocalScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    usuario_id: 'usuario_id',
    instituicao_id: 'instituicao_id',
    nome: 'nome',
    email: 'email',
    tipo_acesso: 'tipo_acesso',
    curso: 'curso'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AvisoScalarFieldEnum: {
    aviso_id: 'aviso_id',
    instituicao_id: 'instituicao_id',
    usuario_id: 'usuario_id',
    usuario_nome: 'usuario_nome',
    titulo: 'titulo',
    mensagem: 'mensagem',
    data_criacao: 'data_criacao',
    prioridade: 'prioridade',
    curso_alvo: 'curso_alvo'
  };

  export type AvisoScalarFieldEnum = (typeof AvisoScalarFieldEnum)[keyof typeof AvisoScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    evento_id: 'evento_id',
    instituicao_id: 'instituicao_id',
    titulo: 'titulo',
    data: 'data',
    tipo: 'tipo',
    descricao: 'descricao',
    local_id: 'local_id'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const SugestaoScalarFieldEnum: {
    sugestao_id: 'sugestao_id',
    instituicao_id: 'instituicao_id',
    usuario_id: 'usuario_id',
    titulo: 'titulo',
    descricao: 'descricao',
    tipo: 'tipo',
    status: 'status',
    foto_url: 'foto_url',
    data_criacao: 'data_criacao'
  };

  export type SugestaoScalarFieldEnum = (typeof SugestaoScalarFieldEnum)[keyof typeof SugestaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type InstituicaoWhereInput = {
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    instituicao_id?: UuidFilter<"Instituicao"> | string
    nome?: StringFilter<"Instituicao"> | string
    logo_url?: StringNullableFilter<"Instituicao"> | string | null
    mapa_url?: StringNullableFilter<"Instituicao"> | string | null
    locais?: LocalListRelationFilter
    usuarios?: UsuarioListRelationFilter
    avisos?: AvisoListRelationFilter
    eventos?: EventoListRelationFilter
    sugestoes?: SugestaoListRelationFilter
  }

  export type InstituicaoOrderByWithRelationInput = {
    instituicao_id?: SortOrder
    nome?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    mapa_url?: SortOrderInput | SortOrder
    locais?: LocalOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
    avisos?: AvisoOrderByRelationAggregateInput
    eventos?: EventoOrderByRelationAggregateInput
    sugestoes?: SugestaoOrderByRelationAggregateInput
  }

  export type InstituicaoWhereUniqueInput = Prisma.AtLeast<{
    instituicao_id?: string
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    nome?: StringFilter<"Instituicao"> | string
    logo_url?: StringNullableFilter<"Instituicao"> | string | null
    mapa_url?: StringNullableFilter<"Instituicao"> | string | null
    locais?: LocalListRelationFilter
    usuarios?: UsuarioListRelationFilter
    avisos?: AvisoListRelationFilter
    eventos?: EventoListRelationFilter
    sugestoes?: SugestaoListRelationFilter
  }, "instituicao_id">

  export type InstituicaoOrderByWithAggregationInput = {
    instituicao_id?: SortOrder
    nome?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    mapa_url?: SortOrderInput | SortOrder
    _count?: InstituicaoCountOrderByAggregateInput
    _max?: InstituicaoMaxOrderByAggregateInput
    _min?: InstituicaoMinOrderByAggregateInput
  }

  export type InstituicaoScalarWhereWithAggregatesInput = {
    AND?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    OR?: InstituicaoScalarWhereWithAggregatesInput[]
    NOT?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    instituicao_id?: UuidWithAggregatesFilter<"Instituicao"> | string
    nome?: StringWithAggregatesFilter<"Instituicao"> | string
    logo_url?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    mapa_url?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
  }

  export type LocalWhereInput = {
    AND?: LocalWhereInput | LocalWhereInput[]
    OR?: LocalWhereInput[]
    NOT?: LocalWhereInput | LocalWhereInput[]
    local_id?: UuidFilter<"Local"> | string
    instituicao_id?: UuidFilter<"Local"> | string
    nome?: StringFilter<"Local"> | string
    tipo?: StringNullableFilter<"Local"> | string | null
    bloco?: StringNullableFilter<"Local"> | string | null
    mapa_xy?: JsonNullableFilter<"Local">
    acessivel?: BoolFilter<"Local"> | boolean
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    eventos?: EventoListRelationFilter
  }

  export type LocalOrderByWithRelationInput = {
    local_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrderInput | SortOrder
    bloco?: SortOrderInput | SortOrder
    mapa_xy?: SortOrderInput | SortOrder
    acessivel?: SortOrder
    instituicao?: InstituicaoOrderByWithRelationInput
    eventos?: EventoOrderByRelationAggregateInput
  }

  export type LocalWhereUniqueInput = Prisma.AtLeast<{
    local_id?: string
    AND?: LocalWhereInput | LocalWhereInput[]
    OR?: LocalWhereInput[]
    NOT?: LocalWhereInput | LocalWhereInput[]
    instituicao_id?: UuidFilter<"Local"> | string
    nome?: StringFilter<"Local"> | string
    tipo?: StringNullableFilter<"Local"> | string | null
    bloco?: StringNullableFilter<"Local"> | string | null
    mapa_xy?: JsonNullableFilter<"Local">
    acessivel?: BoolFilter<"Local"> | boolean
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    eventos?: EventoListRelationFilter
  }, "local_id">

  export type LocalOrderByWithAggregationInput = {
    local_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrderInput | SortOrder
    bloco?: SortOrderInput | SortOrder
    mapa_xy?: SortOrderInput | SortOrder
    acessivel?: SortOrder
    _count?: LocalCountOrderByAggregateInput
    _max?: LocalMaxOrderByAggregateInput
    _min?: LocalMinOrderByAggregateInput
  }

  export type LocalScalarWhereWithAggregatesInput = {
    AND?: LocalScalarWhereWithAggregatesInput | LocalScalarWhereWithAggregatesInput[]
    OR?: LocalScalarWhereWithAggregatesInput[]
    NOT?: LocalScalarWhereWithAggregatesInput | LocalScalarWhereWithAggregatesInput[]
    local_id?: UuidWithAggregatesFilter<"Local"> | string
    instituicao_id?: UuidWithAggregatesFilter<"Local"> | string
    nome?: StringWithAggregatesFilter<"Local"> | string
    tipo?: StringNullableWithAggregatesFilter<"Local"> | string | null
    bloco?: StringNullableWithAggregatesFilter<"Local"> | string | null
    mapa_xy?: JsonNullableWithAggregatesFilter<"Local">
    acessivel?: BoolWithAggregatesFilter<"Local"> | boolean
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    usuario_id?: UuidFilter<"Usuario"> | string
    instituicao_id?: UuidFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    tipo_acesso?: StringNullableFilter<"Usuario"> | string | null
    curso?: StringNullableFilter<"Usuario"> | string | null
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    avisos?: AvisoListRelationFilter
    sugestoes?: SugestaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    usuario_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    tipo_acesso?: SortOrderInput | SortOrder
    curso?: SortOrderInput | SortOrder
    instituicao?: InstituicaoOrderByWithRelationInput
    avisos?: AvisoOrderByRelationAggregateInput
    sugestoes?: SugestaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    instituicao_id?: UuidFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    tipo_acesso?: StringNullableFilter<"Usuario"> | string | null
    curso?: StringNullableFilter<"Usuario"> | string | null
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    avisos?: AvisoListRelationFilter
    sugestoes?: SugestaoListRelationFilter
  }, "usuario_id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    tipo_acesso?: SortOrderInput | SortOrder
    curso?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    usuario_id?: UuidWithAggregatesFilter<"Usuario"> | string
    instituicao_id?: UuidWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    tipo_acesso?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    curso?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type AvisoWhereInput = {
    AND?: AvisoWhereInput | AvisoWhereInput[]
    OR?: AvisoWhereInput[]
    NOT?: AvisoWhereInput | AvisoWhereInput[]
    aviso_id?: UuidFilter<"Aviso"> | string
    instituicao_id?: UuidFilter<"Aviso"> | string
    usuario_id?: UuidNullableFilter<"Aviso"> | string | null
    usuario_nome?: StringNullableFilter<"Aviso"> | string | null
    titulo?: StringFilter<"Aviso"> | string
    mensagem?: StringNullableFilter<"Aviso"> | string | null
    data_criacao?: DateTimeFilter<"Aviso"> | Date | string
    prioridade?: StringNullableFilter<"Aviso"> | string | null
    curso_alvo?: StringNullableListFilter<"Aviso">
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type AvisoOrderByWithRelationInput = {
    aviso_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    usuario_nome?: SortOrderInput | SortOrder
    titulo?: SortOrder
    mensagem?: SortOrderInput | SortOrder
    data_criacao?: SortOrder
    prioridade?: SortOrderInput | SortOrder
    curso_alvo?: SortOrder
    instituicao?: InstituicaoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AvisoWhereUniqueInput = Prisma.AtLeast<{
    aviso_id?: string
    AND?: AvisoWhereInput | AvisoWhereInput[]
    OR?: AvisoWhereInput[]
    NOT?: AvisoWhereInput | AvisoWhereInput[]
    instituicao_id?: UuidFilter<"Aviso"> | string
    usuario_id?: UuidNullableFilter<"Aviso"> | string | null
    usuario_nome?: StringNullableFilter<"Aviso"> | string | null
    titulo?: StringFilter<"Aviso"> | string
    mensagem?: StringNullableFilter<"Aviso"> | string | null
    data_criacao?: DateTimeFilter<"Aviso"> | Date | string
    prioridade?: StringNullableFilter<"Aviso"> | string | null
    curso_alvo?: StringNullableListFilter<"Aviso">
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "aviso_id">

  export type AvisoOrderByWithAggregationInput = {
    aviso_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    usuario_nome?: SortOrderInput | SortOrder
    titulo?: SortOrder
    mensagem?: SortOrderInput | SortOrder
    data_criacao?: SortOrder
    prioridade?: SortOrderInput | SortOrder
    curso_alvo?: SortOrder
    _count?: AvisoCountOrderByAggregateInput
    _max?: AvisoMaxOrderByAggregateInput
    _min?: AvisoMinOrderByAggregateInput
  }

  export type AvisoScalarWhereWithAggregatesInput = {
    AND?: AvisoScalarWhereWithAggregatesInput | AvisoScalarWhereWithAggregatesInput[]
    OR?: AvisoScalarWhereWithAggregatesInput[]
    NOT?: AvisoScalarWhereWithAggregatesInput | AvisoScalarWhereWithAggregatesInput[]
    aviso_id?: UuidWithAggregatesFilter<"Aviso"> | string
    instituicao_id?: UuidWithAggregatesFilter<"Aviso"> | string
    usuario_id?: UuidNullableWithAggregatesFilter<"Aviso"> | string | null
    usuario_nome?: StringNullableWithAggregatesFilter<"Aviso"> | string | null
    titulo?: StringWithAggregatesFilter<"Aviso"> | string
    mensagem?: StringNullableWithAggregatesFilter<"Aviso"> | string | null
    data_criacao?: DateTimeWithAggregatesFilter<"Aviso"> | Date | string
    prioridade?: StringNullableWithAggregatesFilter<"Aviso"> | string | null
    curso_alvo?: StringNullableListFilter<"Aviso">
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    evento_id?: UuidFilter<"Evento"> | string
    instituicao_id?: UuidFilter<"Evento"> | string
    titulo?: StringFilter<"Evento"> | string
    data?: DateTimeFilter<"Evento"> | Date | string
    tipo?: StringNullableFilter<"Evento"> | string | null
    descricao?: StringNullableFilter<"Evento"> | string | null
    local_id?: UuidNullableFilter<"Evento"> | string | null
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    local?: XOR<LocalNullableScalarRelationFilter, LocalWhereInput> | null
  }

  export type EventoOrderByWithRelationInput = {
    evento_id?: SortOrder
    instituicao_id?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    tipo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    local_id?: SortOrderInput | SortOrder
    instituicao?: InstituicaoOrderByWithRelationInput
    local?: LocalOrderByWithRelationInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    evento_id?: string
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    instituicao_id?: UuidFilter<"Evento"> | string
    titulo?: StringFilter<"Evento"> | string
    data?: DateTimeFilter<"Evento"> | Date | string
    tipo?: StringNullableFilter<"Evento"> | string | null
    descricao?: StringNullableFilter<"Evento"> | string | null
    local_id?: UuidNullableFilter<"Evento"> | string | null
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    local?: XOR<LocalNullableScalarRelationFilter, LocalWhereInput> | null
  }, "evento_id">

  export type EventoOrderByWithAggregationInput = {
    evento_id?: SortOrder
    instituicao_id?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    tipo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    local_id?: SortOrderInput | SortOrder
    _count?: EventoCountOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    evento_id?: UuidWithAggregatesFilter<"Evento"> | string
    instituicao_id?: UuidWithAggregatesFilter<"Evento"> | string
    titulo?: StringWithAggregatesFilter<"Evento"> | string
    data?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    tipo?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    local_id?: UuidNullableWithAggregatesFilter<"Evento"> | string | null
  }

  export type SugestaoWhereInput = {
    AND?: SugestaoWhereInput | SugestaoWhereInput[]
    OR?: SugestaoWhereInput[]
    NOT?: SugestaoWhereInput | SugestaoWhereInput[]
    sugestao_id?: UuidFilter<"Sugestao"> | string
    instituicao_id?: UuidFilter<"Sugestao"> | string
    usuario_id?: UuidFilter<"Sugestao"> | string
    titulo?: StringFilter<"Sugestao"> | string
    descricao?: StringNullableFilter<"Sugestao"> | string | null
    tipo?: StringNullableFilter<"Sugestao"> | string | null
    status?: StringNullableFilter<"Sugestao"> | string | null
    foto_url?: StringNullableFilter<"Sugestao"> | string | null
    data_criacao?: DateTimeFilter<"Sugestao"> | Date | string
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type SugestaoOrderByWithRelationInput = {
    sugestao_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    data_criacao?: SortOrder
    instituicao?: InstituicaoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type SugestaoWhereUniqueInput = Prisma.AtLeast<{
    sugestao_id?: string
    AND?: SugestaoWhereInput | SugestaoWhereInput[]
    OR?: SugestaoWhereInput[]
    NOT?: SugestaoWhereInput | SugestaoWhereInput[]
    instituicao_id?: UuidFilter<"Sugestao"> | string
    usuario_id?: UuidFilter<"Sugestao"> | string
    titulo?: StringFilter<"Sugestao"> | string
    descricao?: StringNullableFilter<"Sugestao"> | string | null
    tipo?: StringNullableFilter<"Sugestao"> | string | null
    status?: StringNullableFilter<"Sugestao"> | string | null
    foto_url?: StringNullableFilter<"Sugestao"> | string | null
    data_criacao?: DateTimeFilter<"Sugestao"> | Date | string
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "sugestao_id">

  export type SugestaoOrderByWithAggregationInput = {
    sugestao_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    data_criacao?: SortOrder
    _count?: SugestaoCountOrderByAggregateInput
    _max?: SugestaoMaxOrderByAggregateInput
    _min?: SugestaoMinOrderByAggregateInput
  }

  export type SugestaoScalarWhereWithAggregatesInput = {
    AND?: SugestaoScalarWhereWithAggregatesInput | SugestaoScalarWhereWithAggregatesInput[]
    OR?: SugestaoScalarWhereWithAggregatesInput[]
    NOT?: SugestaoScalarWhereWithAggregatesInput | SugestaoScalarWhereWithAggregatesInput[]
    sugestao_id?: UuidWithAggregatesFilter<"Sugestao"> | string
    instituicao_id?: UuidWithAggregatesFilter<"Sugestao"> | string
    usuario_id?: UuidWithAggregatesFilter<"Sugestao"> | string
    titulo?: StringWithAggregatesFilter<"Sugestao"> | string
    descricao?: StringNullableWithAggregatesFilter<"Sugestao"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"Sugestao"> | string | null
    status?: StringNullableWithAggregatesFilter<"Sugestao"> | string | null
    foto_url?: StringNullableWithAggregatesFilter<"Sugestao"> | string | null
    data_criacao?: DateTimeWithAggregatesFilter<"Sugestao"> | Date | string
  }

  export type InstituicaoCreateInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalCreateNestedManyWithoutInstituicaoInput
    usuarios?: UsuarioCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUncheckedCreateInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalUncheckedCreateNestedManyWithoutInstituicaoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoUncheckedCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoUncheckedCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUpdateInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUpdateManyWithoutInstituicaoNestedInput
    usuarios?: UsuarioUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoUncheckedUpdateInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUncheckedUpdateManyWithoutInstituicaoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUncheckedUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoCreateManyInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
  }

  export type InstituicaoUpdateManyMutationInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstituicaoUncheckedUpdateManyInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalCreateInput = {
    local_id?: string
    nome: string
    tipo?: string | null
    bloco?: string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: boolean
    instituicao: InstituicaoCreateNestedOneWithoutLocaisInput
    eventos?: EventoCreateNestedManyWithoutLocalInput
  }

  export type LocalUncheckedCreateInput = {
    local_id?: string
    instituicao_id: string
    nome: string
    tipo?: string | null
    bloco?: string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: boolean
    eventos?: EventoUncheckedCreateNestedManyWithoutLocalInput
  }

  export type LocalUpdateInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
    instituicao?: InstituicaoUpdateOneRequiredWithoutLocaisNestedInput
    eventos?: EventoUpdateManyWithoutLocalNestedInput
  }

  export type LocalUncheckedUpdateInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
    eventos?: EventoUncheckedUpdateManyWithoutLocalNestedInput
  }

  export type LocalCreateManyInput = {
    local_id?: string
    instituicao_id: string
    nome: string
    tipo?: string | null
    bloco?: string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: boolean
  }

  export type LocalUpdateManyMutationInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocalUncheckedUpdateManyInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateInput = {
    usuario_id?: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
    instituicao: InstituicaoCreateNestedOneWithoutUsuariosInput
    avisos?: AvisoCreateNestedManyWithoutUsuarioInput
    sugestoes?: SugestaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    usuario_id?: string
    instituicao_id: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
    avisos?: AvisoUncheckedCreateNestedManyWithoutUsuarioInput
    sugestoes?: SugestaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    instituicao?: InstituicaoUpdateOneRequiredWithoutUsuariosNestedInput
    avisos?: AvisoUpdateManyWithoutUsuarioNestedInput
    sugestoes?: SugestaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    avisos?: AvisoUncheckedUpdateManyWithoutUsuarioNestedInput
    sugestoes?: SugestaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    usuario_id?: string
    instituicao_id: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisoCreateInput = {
    aviso_id?: string
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
    instituicao: InstituicaoCreateNestedOneWithoutAvisosInput
    usuario?: UsuarioCreateNestedOneWithoutAvisosInput
  }

  export type AvisoUncheckedCreateInput = {
    aviso_id?: string
    instituicao_id: string
    usuario_id?: string | null
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
  }

  export type AvisoUpdateInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
    instituicao?: InstituicaoUpdateOneRequiredWithoutAvisosNestedInput
    usuario?: UsuarioUpdateOneWithoutAvisosNestedInput
  }

  export type AvisoUncheckedUpdateInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
  }

  export type AvisoCreateManyInput = {
    aviso_id?: string
    instituicao_id: string
    usuario_id?: string | null
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
  }

  export type AvisoUpdateManyMutationInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
  }

  export type AvisoUncheckedUpdateManyInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
  }

  export type EventoCreateInput = {
    evento_id?: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
    instituicao: InstituicaoCreateNestedOneWithoutEventosInput
    local?: LocalCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateInput = {
    evento_id?: string
    instituicao_id: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
    local_id?: string | null
  }

  export type EventoUpdateInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    instituicao?: InstituicaoUpdateOneRequiredWithoutEventosNestedInput
    local?: LocalUpdateOneWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    local_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventoCreateManyInput = {
    evento_id?: string
    instituicao_id: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
    local_id?: string | null
  }

  export type EventoUpdateManyMutationInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventoUncheckedUpdateManyInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    local_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SugestaoCreateInput = {
    sugestao_id?: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
    instituicao: InstituicaoCreateNestedOneWithoutSugestoesInput
    usuario: UsuarioCreateNestedOneWithoutSugestoesInput
  }

  export type SugestaoUncheckedCreateInput = {
    sugestao_id?: string
    instituicao_id: string
    usuario_id: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
  }

  export type SugestaoUpdateInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    instituicao?: InstituicaoUpdateOneRequiredWithoutSugestoesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutSugestoesNestedInput
  }

  export type SugestaoUncheckedUpdateInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SugestaoCreateManyInput = {
    sugestao_id?: string
    instituicao_id: string
    usuario_id: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
  }

  export type SugestaoUpdateManyMutationInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SugestaoUncheckedUpdateManyInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type LocalListRelationFilter = {
    every?: LocalWhereInput
    some?: LocalWhereInput
    none?: LocalWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type AvisoListRelationFilter = {
    every?: AvisoWhereInput
    some?: AvisoWhereInput
    none?: AvisoWhereInput
  }

  export type EventoListRelationFilter = {
    every?: EventoWhereInput
    some?: EventoWhereInput
    none?: EventoWhereInput
  }

  export type SugestaoListRelationFilter = {
    every?: SugestaoWhereInput
    some?: SugestaoWhereInput
    none?: SugestaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LocalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvisoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SugestaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstituicaoCountOrderByAggregateInput = {
    instituicao_id?: SortOrder
    nome?: SortOrder
    logo_url?: SortOrder
    mapa_url?: SortOrder
  }

  export type InstituicaoMaxOrderByAggregateInput = {
    instituicao_id?: SortOrder
    nome?: SortOrder
    logo_url?: SortOrder
    mapa_url?: SortOrder
  }

  export type InstituicaoMinOrderByAggregateInput = {
    instituicao_id?: SortOrder
    nome?: SortOrder
    logo_url?: SortOrder
    mapa_url?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InstituicaoScalarRelationFilter = {
    is?: InstituicaoWhereInput
    isNot?: InstituicaoWhereInput
  }

  export type LocalCountOrderByAggregateInput = {
    local_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    bloco?: SortOrder
    mapa_xy?: SortOrder
    acessivel?: SortOrder
  }

  export type LocalMaxOrderByAggregateInput = {
    local_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    bloco?: SortOrder
    acessivel?: SortOrder
  }

  export type LocalMinOrderByAggregateInput = {
    local_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    bloco?: SortOrder
    acessivel?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    tipo_acesso?: SortOrder
    curso?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    tipo_acesso?: SortOrder
    curso?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    instituicao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    tipo_acesso?: SortOrder
    curso?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type AvisoCountOrderByAggregateInput = {
    aviso_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrder
    usuario_nome?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    data_criacao?: SortOrder
    prioridade?: SortOrder
    curso_alvo?: SortOrder
  }

  export type AvisoMaxOrderByAggregateInput = {
    aviso_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrder
    usuario_nome?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    data_criacao?: SortOrder
    prioridade?: SortOrder
  }

  export type AvisoMinOrderByAggregateInput = {
    aviso_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrder
    usuario_nome?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    data_criacao?: SortOrder
    prioridade?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type LocalNullableScalarRelationFilter = {
    is?: LocalWhereInput | null
    isNot?: LocalWhereInput | null
  }

  export type EventoCountOrderByAggregateInput = {
    evento_id?: SortOrder
    instituicao_id?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    local_id?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    evento_id?: SortOrder
    instituicao_id?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    local_id?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    evento_id?: SortOrder
    instituicao_id?: SortOrder
    titulo?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    local_id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SugestaoCountOrderByAggregateInput = {
    sugestao_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    foto_url?: SortOrder
    data_criacao?: SortOrder
  }

  export type SugestaoMaxOrderByAggregateInput = {
    sugestao_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    foto_url?: SortOrder
    data_criacao?: SortOrder
  }

  export type SugestaoMinOrderByAggregateInput = {
    sugestao_id?: SortOrder
    instituicao_id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    foto_url?: SortOrder
    data_criacao?: SortOrder
  }

  export type LocalCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<LocalCreateWithoutInstituicaoInput, LocalUncheckedCreateWithoutInstituicaoInput> | LocalCreateWithoutInstituicaoInput[] | LocalUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: LocalCreateOrConnectWithoutInstituicaoInput | LocalCreateOrConnectWithoutInstituicaoInput[]
    createMany?: LocalCreateManyInstituicaoInputEnvelope
    connect?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<UsuarioCreateWithoutInstituicaoInput, UsuarioUncheckedCreateWithoutInstituicaoInput> | UsuarioCreateWithoutInstituicaoInput[] | UsuarioUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutInstituicaoInput | UsuarioCreateOrConnectWithoutInstituicaoInput[]
    createMany?: UsuarioCreateManyInstituicaoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type AvisoCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<AvisoCreateWithoutInstituicaoInput, AvisoUncheckedCreateWithoutInstituicaoInput> | AvisoCreateWithoutInstituicaoInput[] | AvisoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: AvisoCreateOrConnectWithoutInstituicaoInput | AvisoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: AvisoCreateManyInstituicaoInputEnvelope
    connect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
  }

  export type EventoCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<EventoCreateWithoutInstituicaoInput, EventoUncheckedCreateWithoutInstituicaoInput> | EventoCreateWithoutInstituicaoInput[] | EventoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutInstituicaoInput | EventoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: EventoCreateManyInstituicaoInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type SugestaoCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<SugestaoCreateWithoutInstituicaoInput, SugestaoUncheckedCreateWithoutInstituicaoInput> | SugestaoCreateWithoutInstituicaoInput[] | SugestaoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: SugestaoCreateOrConnectWithoutInstituicaoInput | SugestaoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: SugestaoCreateManyInstituicaoInputEnvelope
    connect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
  }

  export type LocalUncheckedCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<LocalCreateWithoutInstituicaoInput, LocalUncheckedCreateWithoutInstituicaoInput> | LocalCreateWithoutInstituicaoInput[] | LocalUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: LocalCreateOrConnectWithoutInstituicaoInput | LocalCreateOrConnectWithoutInstituicaoInput[]
    createMany?: LocalCreateManyInstituicaoInputEnvelope
    connect?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<UsuarioCreateWithoutInstituicaoInput, UsuarioUncheckedCreateWithoutInstituicaoInput> | UsuarioCreateWithoutInstituicaoInput[] | UsuarioUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutInstituicaoInput | UsuarioCreateOrConnectWithoutInstituicaoInput[]
    createMany?: UsuarioCreateManyInstituicaoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type AvisoUncheckedCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<AvisoCreateWithoutInstituicaoInput, AvisoUncheckedCreateWithoutInstituicaoInput> | AvisoCreateWithoutInstituicaoInput[] | AvisoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: AvisoCreateOrConnectWithoutInstituicaoInput | AvisoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: AvisoCreateManyInstituicaoInputEnvelope
    connect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<EventoCreateWithoutInstituicaoInput, EventoUncheckedCreateWithoutInstituicaoInput> | EventoCreateWithoutInstituicaoInput[] | EventoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutInstituicaoInput | EventoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: EventoCreateManyInstituicaoInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type SugestaoUncheckedCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<SugestaoCreateWithoutInstituicaoInput, SugestaoUncheckedCreateWithoutInstituicaoInput> | SugestaoCreateWithoutInstituicaoInput[] | SugestaoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: SugestaoCreateOrConnectWithoutInstituicaoInput | SugestaoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: SugestaoCreateManyInstituicaoInputEnvelope
    connect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LocalUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<LocalCreateWithoutInstituicaoInput, LocalUncheckedCreateWithoutInstituicaoInput> | LocalCreateWithoutInstituicaoInput[] | LocalUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: LocalCreateOrConnectWithoutInstituicaoInput | LocalCreateOrConnectWithoutInstituicaoInput[]
    upsert?: LocalUpsertWithWhereUniqueWithoutInstituicaoInput | LocalUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: LocalCreateManyInstituicaoInputEnvelope
    set?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
    disconnect?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
    delete?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
    connect?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
    update?: LocalUpdateWithWhereUniqueWithoutInstituicaoInput | LocalUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: LocalUpdateManyWithWhereWithoutInstituicaoInput | LocalUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: LocalScalarWhereInput | LocalScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutInstituicaoInput, UsuarioUncheckedCreateWithoutInstituicaoInput> | UsuarioCreateWithoutInstituicaoInput[] | UsuarioUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutInstituicaoInput | UsuarioCreateOrConnectWithoutInstituicaoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutInstituicaoInput | UsuarioUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: UsuarioCreateManyInstituicaoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutInstituicaoInput | UsuarioUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutInstituicaoInput | UsuarioUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AvisoUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<AvisoCreateWithoutInstituicaoInput, AvisoUncheckedCreateWithoutInstituicaoInput> | AvisoCreateWithoutInstituicaoInput[] | AvisoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: AvisoCreateOrConnectWithoutInstituicaoInput | AvisoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: AvisoUpsertWithWhereUniqueWithoutInstituicaoInput | AvisoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: AvisoCreateManyInstituicaoInputEnvelope
    set?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    disconnect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    delete?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    connect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    update?: AvisoUpdateWithWhereUniqueWithoutInstituicaoInput | AvisoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: AvisoUpdateManyWithWhereWithoutInstituicaoInput | AvisoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: AvisoScalarWhereInput | AvisoScalarWhereInput[]
  }

  export type EventoUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<EventoCreateWithoutInstituicaoInput, EventoUncheckedCreateWithoutInstituicaoInput> | EventoCreateWithoutInstituicaoInput[] | EventoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutInstituicaoInput | EventoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutInstituicaoInput | EventoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: EventoCreateManyInstituicaoInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutInstituicaoInput | EventoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutInstituicaoInput | EventoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type SugestaoUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<SugestaoCreateWithoutInstituicaoInput, SugestaoUncheckedCreateWithoutInstituicaoInput> | SugestaoCreateWithoutInstituicaoInput[] | SugestaoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: SugestaoCreateOrConnectWithoutInstituicaoInput | SugestaoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: SugestaoUpsertWithWhereUniqueWithoutInstituicaoInput | SugestaoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: SugestaoCreateManyInstituicaoInputEnvelope
    set?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    disconnect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    delete?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    connect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    update?: SugestaoUpdateWithWhereUniqueWithoutInstituicaoInput | SugestaoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: SugestaoUpdateManyWithWhereWithoutInstituicaoInput | SugestaoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: SugestaoScalarWhereInput | SugestaoScalarWhereInput[]
  }

  export type LocalUncheckedUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<LocalCreateWithoutInstituicaoInput, LocalUncheckedCreateWithoutInstituicaoInput> | LocalCreateWithoutInstituicaoInput[] | LocalUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: LocalCreateOrConnectWithoutInstituicaoInput | LocalCreateOrConnectWithoutInstituicaoInput[]
    upsert?: LocalUpsertWithWhereUniqueWithoutInstituicaoInput | LocalUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: LocalCreateManyInstituicaoInputEnvelope
    set?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
    disconnect?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
    delete?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
    connect?: LocalWhereUniqueInput | LocalWhereUniqueInput[]
    update?: LocalUpdateWithWhereUniqueWithoutInstituicaoInput | LocalUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: LocalUpdateManyWithWhereWithoutInstituicaoInput | LocalUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: LocalScalarWhereInput | LocalScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutInstituicaoInput, UsuarioUncheckedCreateWithoutInstituicaoInput> | UsuarioCreateWithoutInstituicaoInput[] | UsuarioUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutInstituicaoInput | UsuarioCreateOrConnectWithoutInstituicaoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutInstituicaoInput | UsuarioUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: UsuarioCreateManyInstituicaoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutInstituicaoInput | UsuarioUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutInstituicaoInput | UsuarioUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AvisoUncheckedUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<AvisoCreateWithoutInstituicaoInput, AvisoUncheckedCreateWithoutInstituicaoInput> | AvisoCreateWithoutInstituicaoInput[] | AvisoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: AvisoCreateOrConnectWithoutInstituicaoInput | AvisoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: AvisoUpsertWithWhereUniqueWithoutInstituicaoInput | AvisoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: AvisoCreateManyInstituicaoInputEnvelope
    set?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    disconnect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    delete?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    connect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    update?: AvisoUpdateWithWhereUniqueWithoutInstituicaoInput | AvisoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: AvisoUpdateManyWithWhereWithoutInstituicaoInput | AvisoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: AvisoScalarWhereInput | AvisoScalarWhereInput[]
  }

  export type EventoUncheckedUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<EventoCreateWithoutInstituicaoInput, EventoUncheckedCreateWithoutInstituicaoInput> | EventoCreateWithoutInstituicaoInput[] | EventoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutInstituicaoInput | EventoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutInstituicaoInput | EventoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: EventoCreateManyInstituicaoInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutInstituicaoInput | EventoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutInstituicaoInput | EventoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type SugestaoUncheckedUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<SugestaoCreateWithoutInstituicaoInput, SugestaoUncheckedCreateWithoutInstituicaoInput> | SugestaoCreateWithoutInstituicaoInput[] | SugestaoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: SugestaoCreateOrConnectWithoutInstituicaoInput | SugestaoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: SugestaoUpsertWithWhereUniqueWithoutInstituicaoInput | SugestaoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: SugestaoCreateManyInstituicaoInputEnvelope
    set?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    disconnect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    delete?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    connect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    update?: SugestaoUpdateWithWhereUniqueWithoutInstituicaoInput | SugestaoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: SugestaoUpdateManyWithWhereWithoutInstituicaoInput | SugestaoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: SugestaoScalarWhereInput | SugestaoScalarWhereInput[]
  }

  export type InstituicaoCreateNestedOneWithoutLocaisInput = {
    create?: XOR<InstituicaoCreateWithoutLocaisInput, InstituicaoUncheckedCreateWithoutLocaisInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutLocaisInput
    connect?: InstituicaoWhereUniqueInput
  }

  export type EventoCreateNestedManyWithoutLocalInput = {
    create?: XOR<EventoCreateWithoutLocalInput, EventoUncheckedCreateWithoutLocalInput> | EventoCreateWithoutLocalInput[] | EventoUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutLocalInput | EventoCreateOrConnectWithoutLocalInput[]
    createMany?: EventoCreateManyLocalInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutLocalInput = {
    create?: XOR<EventoCreateWithoutLocalInput, EventoUncheckedCreateWithoutLocalInput> | EventoCreateWithoutLocalInput[] | EventoUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutLocalInput | EventoCreateOrConnectWithoutLocalInput[]
    createMany?: EventoCreateManyLocalInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type InstituicaoUpdateOneRequiredWithoutLocaisNestedInput = {
    create?: XOR<InstituicaoCreateWithoutLocaisInput, InstituicaoUncheckedCreateWithoutLocaisInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutLocaisInput
    upsert?: InstituicaoUpsertWithoutLocaisInput
    connect?: InstituicaoWhereUniqueInput
    update?: XOR<XOR<InstituicaoUpdateToOneWithWhereWithoutLocaisInput, InstituicaoUpdateWithoutLocaisInput>, InstituicaoUncheckedUpdateWithoutLocaisInput>
  }

  export type EventoUpdateManyWithoutLocalNestedInput = {
    create?: XOR<EventoCreateWithoutLocalInput, EventoUncheckedCreateWithoutLocalInput> | EventoCreateWithoutLocalInput[] | EventoUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutLocalInput | EventoCreateOrConnectWithoutLocalInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutLocalInput | EventoUpsertWithWhereUniqueWithoutLocalInput[]
    createMany?: EventoCreateManyLocalInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutLocalInput | EventoUpdateWithWhereUniqueWithoutLocalInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutLocalInput | EventoUpdateManyWithWhereWithoutLocalInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type EventoUncheckedUpdateManyWithoutLocalNestedInput = {
    create?: XOR<EventoCreateWithoutLocalInput, EventoUncheckedCreateWithoutLocalInput> | EventoCreateWithoutLocalInput[] | EventoUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutLocalInput | EventoCreateOrConnectWithoutLocalInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutLocalInput | EventoUpsertWithWhereUniqueWithoutLocalInput[]
    createMany?: EventoCreateManyLocalInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutLocalInput | EventoUpdateWithWhereUniqueWithoutLocalInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutLocalInput | EventoUpdateManyWithWhereWithoutLocalInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type InstituicaoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<InstituicaoCreateWithoutUsuariosInput, InstituicaoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutUsuariosInput
    connect?: InstituicaoWhereUniqueInput
  }

  export type AvisoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvisoCreateWithoutUsuarioInput, AvisoUncheckedCreateWithoutUsuarioInput> | AvisoCreateWithoutUsuarioInput[] | AvisoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvisoCreateOrConnectWithoutUsuarioInput | AvisoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvisoCreateManyUsuarioInputEnvelope
    connect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
  }

  export type SugestaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SugestaoCreateWithoutUsuarioInput, SugestaoUncheckedCreateWithoutUsuarioInput> | SugestaoCreateWithoutUsuarioInput[] | SugestaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SugestaoCreateOrConnectWithoutUsuarioInput | SugestaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: SugestaoCreateManyUsuarioInputEnvelope
    connect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
  }

  export type AvisoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvisoCreateWithoutUsuarioInput, AvisoUncheckedCreateWithoutUsuarioInput> | AvisoCreateWithoutUsuarioInput[] | AvisoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvisoCreateOrConnectWithoutUsuarioInput | AvisoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvisoCreateManyUsuarioInputEnvelope
    connect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
  }

  export type SugestaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SugestaoCreateWithoutUsuarioInput, SugestaoUncheckedCreateWithoutUsuarioInput> | SugestaoCreateWithoutUsuarioInput[] | SugestaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SugestaoCreateOrConnectWithoutUsuarioInput | SugestaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: SugestaoCreateManyUsuarioInputEnvelope
    connect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
  }

  export type InstituicaoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<InstituicaoCreateWithoutUsuariosInput, InstituicaoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutUsuariosInput
    upsert?: InstituicaoUpsertWithoutUsuariosInput
    connect?: InstituicaoWhereUniqueInput
    update?: XOR<XOR<InstituicaoUpdateToOneWithWhereWithoutUsuariosInput, InstituicaoUpdateWithoutUsuariosInput>, InstituicaoUncheckedUpdateWithoutUsuariosInput>
  }

  export type AvisoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvisoCreateWithoutUsuarioInput, AvisoUncheckedCreateWithoutUsuarioInput> | AvisoCreateWithoutUsuarioInput[] | AvisoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvisoCreateOrConnectWithoutUsuarioInput | AvisoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvisoUpsertWithWhereUniqueWithoutUsuarioInput | AvisoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvisoCreateManyUsuarioInputEnvelope
    set?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    disconnect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    delete?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    connect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    update?: AvisoUpdateWithWhereUniqueWithoutUsuarioInput | AvisoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvisoUpdateManyWithWhereWithoutUsuarioInput | AvisoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvisoScalarWhereInput | AvisoScalarWhereInput[]
  }

  export type SugestaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SugestaoCreateWithoutUsuarioInput, SugestaoUncheckedCreateWithoutUsuarioInput> | SugestaoCreateWithoutUsuarioInput[] | SugestaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SugestaoCreateOrConnectWithoutUsuarioInput | SugestaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: SugestaoUpsertWithWhereUniqueWithoutUsuarioInput | SugestaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SugestaoCreateManyUsuarioInputEnvelope
    set?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    disconnect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    delete?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    connect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    update?: SugestaoUpdateWithWhereUniqueWithoutUsuarioInput | SugestaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SugestaoUpdateManyWithWhereWithoutUsuarioInput | SugestaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SugestaoScalarWhereInput | SugestaoScalarWhereInput[]
  }

  export type AvisoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvisoCreateWithoutUsuarioInput, AvisoUncheckedCreateWithoutUsuarioInput> | AvisoCreateWithoutUsuarioInput[] | AvisoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvisoCreateOrConnectWithoutUsuarioInput | AvisoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvisoUpsertWithWhereUniqueWithoutUsuarioInput | AvisoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvisoCreateManyUsuarioInputEnvelope
    set?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    disconnect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    delete?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    connect?: AvisoWhereUniqueInput | AvisoWhereUniqueInput[]
    update?: AvisoUpdateWithWhereUniqueWithoutUsuarioInput | AvisoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvisoUpdateManyWithWhereWithoutUsuarioInput | AvisoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvisoScalarWhereInput | AvisoScalarWhereInput[]
  }

  export type SugestaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SugestaoCreateWithoutUsuarioInput, SugestaoUncheckedCreateWithoutUsuarioInput> | SugestaoCreateWithoutUsuarioInput[] | SugestaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SugestaoCreateOrConnectWithoutUsuarioInput | SugestaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: SugestaoUpsertWithWhereUniqueWithoutUsuarioInput | SugestaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SugestaoCreateManyUsuarioInputEnvelope
    set?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    disconnect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    delete?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    connect?: SugestaoWhereUniqueInput | SugestaoWhereUniqueInput[]
    update?: SugestaoUpdateWithWhereUniqueWithoutUsuarioInput | SugestaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SugestaoUpdateManyWithWhereWithoutUsuarioInput | SugestaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SugestaoScalarWhereInput | SugestaoScalarWhereInput[]
  }

  export type AvisoCreatecurso_alvoInput = {
    set: string[]
  }

  export type InstituicaoCreateNestedOneWithoutAvisosInput = {
    create?: XOR<InstituicaoCreateWithoutAvisosInput, InstituicaoUncheckedCreateWithoutAvisosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutAvisosInput
    connect?: InstituicaoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAvisosInput = {
    create?: XOR<UsuarioCreateWithoutAvisosInput, UsuarioUncheckedCreateWithoutAvisosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvisosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AvisoUpdatecurso_alvoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InstituicaoUpdateOneRequiredWithoutAvisosNestedInput = {
    create?: XOR<InstituicaoCreateWithoutAvisosInput, InstituicaoUncheckedCreateWithoutAvisosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutAvisosInput
    upsert?: InstituicaoUpsertWithoutAvisosInput
    connect?: InstituicaoWhereUniqueInput
    update?: XOR<XOR<InstituicaoUpdateToOneWithWhereWithoutAvisosInput, InstituicaoUpdateWithoutAvisosInput>, InstituicaoUncheckedUpdateWithoutAvisosInput>
  }

  export type UsuarioUpdateOneWithoutAvisosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAvisosInput, UsuarioUncheckedCreateWithoutAvisosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvisosInput
    upsert?: UsuarioUpsertWithoutAvisosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAvisosInput, UsuarioUpdateWithoutAvisosInput>, UsuarioUncheckedUpdateWithoutAvisosInput>
  }

  export type InstituicaoCreateNestedOneWithoutEventosInput = {
    create?: XOR<InstituicaoCreateWithoutEventosInput, InstituicaoUncheckedCreateWithoutEventosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutEventosInput
    connect?: InstituicaoWhereUniqueInput
  }

  export type LocalCreateNestedOneWithoutEventosInput = {
    create?: XOR<LocalCreateWithoutEventosInput, LocalUncheckedCreateWithoutEventosInput>
    connectOrCreate?: LocalCreateOrConnectWithoutEventosInput
    connect?: LocalWhereUniqueInput
  }

  export type InstituicaoUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<InstituicaoCreateWithoutEventosInput, InstituicaoUncheckedCreateWithoutEventosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutEventosInput
    upsert?: InstituicaoUpsertWithoutEventosInput
    connect?: InstituicaoWhereUniqueInput
    update?: XOR<XOR<InstituicaoUpdateToOneWithWhereWithoutEventosInput, InstituicaoUpdateWithoutEventosInput>, InstituicaoUncheckedUpdateWithoutEventosInput>
  }

  export type LocalUpdateOneWithoutEventosNestedInput = {
    create?: XOR<LocalCreateWithoutEventosInput, LocalUncheckedCreateWithoutEventosInput>
    connectOrCreate?: LocalCreateOrConnectWithoutEventosInput
    upsert?: LocalUpsertWithoutEventosInput
    disconnect?: LocalWhereInput | boolean
    delete?: LocalWhereInput | boolean
    connect?: LocalWhereUniqueInput
    update?: XOR<XOR<LocalUpdateToOneWithWhereWithoutEventosInput, LocalUpdateWithoutEventosInput>, LocalUncheckedUpdateWithoutEventosInput>
  }

  export type InstituicaoCreateNestedOneWithoutSugestoesInput = {
    create?: XOR<InstituicaoCreateWithoutSugestoesInput, InstituicaoUncheckedCreateWithoutSugestoesInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutSugestoesInput
    connect?: InstituicaoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutSugestoesInput = {
    create?: XOR<UsuarioCreateWithoutSugestoesInput, UsuarioUncheckedCreateWithoutSugestoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSugestoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InstituicaoUpdateOneRequiredWithoutSugestoesNestedInput = {
    create?: XOR<InstituicaoCreateWithoutSugestoesInput, InstituicaoUncheckedCreateWithoutSugestoesInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutSugestoesInput
    upsert?: InstituicaoUpsertWithoutSugestoesInput
    connect?: InstituicaoWhereUniqueInput
    update?: XOR<XOR<InstituicaoUpdateToOneWithWhereWithoutSugestoesInput, InstituicaoUpdateWithoutSugestoesInput>, InstituicaoUncheckedUpdateWithoutSugestoesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutSugestoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutSugestoesInput, UsuarioUncheckedCreateWithoutSugestoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSugestoesInput
    upsert?: UsuarioUpsertWithoutSugestoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSugestoesInput, UsuarioUpdateWithoutSugestoesInput>, UsuarioUncheckedUpdateWithoutSugestoesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type LocalCreateWithoutInstituicaoInput = {
    local_id?: string
    nome: string
    tipo?: string | null
    bloco?: string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: boolean
    eventos?: EventoCreateNestedManyWithoutLocalInput
  }

  export type LocalUncheckedCreateWithoutInstituicaoInput = {
    local_id?: string
    nome: string
    tipo?: string | null
    bloco?: string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: boolean
    eventos?: EventoUncheckedCreateNestedManyWithoutLocalInput
  }

  export type LocalCreateOrConnectWithoutInstituicaoInput = {
    where: LocalWhereUniqueInput
    create: XOR<LocalCreateWithoutInstituicaoInput, LocalUncheckedCreateWithoutInstituicaoInput>
  }

  export type LocalCreateManyInstituicaoInputEnvelope = {
    data: LocalCreateManyInstituicaoInput | LocalCreateManyInstituicaoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutInstituicaoInput = {
    usuario_id?: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
    avisos?: AvisoCreateNestedManyWithoutUsuarioInput
    sugestoes?: SugestaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutInstituicaoInput = {
    usuario_id?: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
    avisos?: AvisoUncheckedCreateNestedManyWithoutUsuarioInput
    sugestoes?: SugestaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutInstituicaoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutInstituicaoInput, UsuarioUncheckedCreateWithoutInstituicaoInput>
  }

  export type UsuarioCreateManyInstituicaoInputEnvelope = {
    data: UsuarioCreateManyInstituicaoInput | UsuarioCreateManyInstituicaoInput[]
    skipDuplicates?: boolean
  }

  export type AvisoCreateWithoutInstituicaoInput = {
    aviso_id?: string
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
    usuario?: UsuarioCreateNestedOneWithoutAvisosInput
  }

  export type AvisoUncheckedCreateWithoutInstituicaoInput = {
    aviso_id?: string
    usuario_id?: string | null
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
  }

  export type AvisoCreateOrConnectWithoutInstituicaoInput = {
    where: AvisoWhereUniqueInput
    create: XOR<AvisoCreateWithoutInstituicaoInput, AvisoUncheckedCreateWithoutInstituicaoInput>
  }

  export type AvisoCreateManyInstituicaoInputEnvelope = {
    data: AvisoCreateManyInstituicaoInput | AvisoCreateManyInstituicaoInput[]
    skipDuplicates?: boolean
  }

  export type EventoCreateWithoutInstituicaoInput = {
    evento_id?: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
    local?: LocalCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateWithoutInstituicaoInput = {
    evento_id?: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
    local_id?: string | null
  }

  export type EventoCreateOrConnectWithoutInstituicaoInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutInstituicaoInput, EventoUncheckedCreateWithoutInstituicaoInput>
  }

  export type EventoCreateManyInstituicaoInputEnvelope = {
    data: EventoCreateManyInstituicaoInput | EventoCreateManyInstituicaoInput[]
    skipDuplicates?: boolean
  }

  export type SugestaoCreateWithoutInstituicaoInput = {
    sugestao_id?: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutSugestoesInput
  }

  export type SugestaoUncheckedCreateWithoutInstituicaoInput = {
    sugestao_id?: string
    usuario_id: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
  }

  export type SugestaoCreateOrConnectWithoutInstituicaoInput = {
    where: SugestaoWhereUniqueInput
    create: XOR<SugestaoCreateWithoutInstituicaoInput, SugestaoUncheckedCreateWithoutInstituicaoInput>
  }

  export type SugestaoCreateManyInstituicaoInputEnvelope = {
    data: SugestaoCreateManyInstituicaoInput | SugestaoCreateManyInstituicaoInput[]
    skipDuplicates?: boolean
  }

  export type LocalUpsertWithWhereUniqueWithoutInstituicaoInput = {
    where: LocalWhereUniqueInput
    update: XOR<LocalUpdateWithoutInstituicaoInput, LocalUncheckedUpdateWithoutInstituicaoInput>
    create: XOR<LocalCreateWithoutInstituicaoInput, LocalUncheckedCreateWithoutInstituicaoInput>
  }

  export type LocalUpdateWithWhereUniqueWithoutInstituicaoInput = {
    where: LocalWhereUniqueInput
    data: XOR<LocalUpdateWithoutInstituicaoInput, LocalUncheckedUpdateWithoutInstituicaoInput>
  }

  export type LocalUpdateManyWithWhereWithoutInstituicaoInput = {
    where: LocalScalarWhereInput
    data: XOR<LocalUpdateManyMutationInput, LocalUncheckedUpdateManyWithoutInstituicaoInput>
  }

  export type LocalScalarWhereInput = {
    AND?: LocalScalarWhereInput | LocalScalarWhereInput[]
    OR?: LocalScalarWhereInput[]
    NOT?: LocalScalarWhereInput | LocalScalarWhereInput[]
    local_id?: UuidFilter<"Local"> | string
    instituicao_id?: UuidFilter<"Local"> | string
    nome?: StringFilter<"Local"> | string
    tipo?: StringNullableFilter<"Local"> | string | null
    bloco?: StringNullableFilter<"Local"> | string | null
    mapa_xy?: JsonNullableFilter<"Local">
    acessivel?: BoolFilter<"Local"> | boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutInstituicaoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutInstituicaoInput, UsuarioUncheckedUpdateWithoutInstituicaoInput>
    create: XOR<UsuarioCreateWithoutInstituicaoInput, UsuarioUncheckedCreateWithoutInstituicaoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutInstituicaoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutInstituicaoInput, UsuarioUncheckedUpdateWithoutInstituicaoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutInstituicaoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutInstituicaoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    usuario_id?: UuidFilter<"Usuario"> | string
    instituicao_id?: UuidFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    tipo_acesso?: StringNullableFilter<"Usuario"> | string | null
    curso?: StringNullableFilter<"Usuario"> | string | null
  }

  export type AvisoUpsertWithWhereUniqueWithoutInstituicaoInput = {
    where: AvisoWhereUniqueInput
    update: XOR<AvisoUpdateWithoutInstituicaoInput, AvisoUncheckedUpdateWithoutInstituicaoInput>
    create: XOR<AvisoCreateWithoutInstituicaoInput, AvisoUncheckedCreateWithoutInstituicaoInput>
  }

  export type AvisoUpdateWithWhereUniqueWithoutInstituicaoInput = {
    where: AvisoWhereUniqueInput
    data: XOR<AvisoUpdateWithoutInstituicaoInput, AvisoUncheckedUpdateWithoutInstituicaoInput>
  }

  export type AvisoUpdateManyWithWhereWithoutInstituicaoInput = {
    where: AvisoScalarWhereInput
    data: XOR<AvisoUpdateManyMutationInput, AvisoUncheckedUpdateManyWithoutInstituicaoInput>
  }

  export type AvisoScalarWhereInput = {
    AND?: AvisoScalarWhereInput | AvisoScalarWhereInput[]
    OR?: AvisoScalarWhereInput[]
    NOT?: AvisoScalarWhereInput | AvisoScalarWhereInput[]
    aviso_id?: UuidFilter<"Aviso"> | string
    instituicao_id?: UuidFilter<"Aviso"> | string
    usuario_id?: UuidNullableFilter<"Aviso"> | string | null
    usuario_nome?: StringNullableFilter<"Aviso"> | string | null
    titulo?: StringFilter<"Aviso"> | string
    mensagem?: StringNullableFilter<"Aviso"> | string | null
    data_criacao?: DateTimeFilter<"Aviso"> | Date | string
    prioridade?: StringNullableFilter<"Aviso"> | string | null
    curso_alvo?: StringNullableListFilter<"Aviso">
  }

  export type EventoUpsertWithWhereUniqueWithoutInstituicaoInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutInstituicaoInput, EventoUncheckedUpdateWithoutInstituicaoInput>
    create: XOR<EventoCreateWithoutInstituicaoInput, EventoUncheckedCreateWithoutInstituicaoInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutInstituicaoInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutInstituicaoInput, EventoUncheckedUpdateWithoutInstituicaoInput>
  }

  export type EventoUpdateManyWithWhereWithoutInstituicaoInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutInstituicaoInput>
  }

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[]
    OR?: EventoScalarWhereInput[]
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[]
    evento_id?: UuidFilter<"Evento"> | string
    instituicao_id?: UuidFilter<"Evento"> | string
    titulo?: StringFilter<"Evento"> | string
    data?: DateTimeFilter<"Evento"> | Date | string
    tipo?: StringNullableFilter<"Evento"> | string | null
    descricao?: StringNullableFilter<"Evento"> | string | null
    local_id?: UuidNullableFilter<"Evento"> | string | null
  }

  export type SugestaoUpsertWithWhereUniqueWithoutInstituicaoInput = {
    where: SugestaoWhereUniqueInput
    update: XOR<SugestaoUpdateWithoutInstituicaoInput, SugestaoUncheckedUpdateWithoutInstituicaoInput>
    create: XOR<SugestaoCreateWithoutInstituicaoInput, SugestaoUncheckedCreateWithoutInstituicaoInput>
  }

  export type SugestaoUpdateWithWhereUniqueWithoutInstituicaoInput = {
    where: SugestaoWhereUniqueInput
    data: XOR<SugestaoUpdateWithoutInstituicaoInput, SugestaoUncheckedUpdateWithoutInstituicaoInput>
  }

  export type SugestaoUpdateManyWithWhereWithoutInstituicaoInput = {
    where: SugestaoScalarWhereInput
    data: XOR<SugestaoUpdateManyMutationInput, SugestaoUncheckedUpdateManyWithoutInstituicaoInput>
  }

  export type SugestaoScalarWhereInput = {
    AND?: SugestaoScalarWhereInput | SugestaoScalarWhereInput[]
    OR?: SugestaoScalarWhereInput[]
    NOT?: SugestaoScalarWhereInput | SugestaoScalarWhereInput[]
    sugestao_id?: UuidFilter<"Sugestao"> | string
    instituicao_id?: UuidFilter<"Sugestao"> | string
    usuario_id?: UuidFilter<"Sugestao"> | string
    titulo?: StringFilter<"Sugestao"> | string
    descricao?: StringNullableFilter<"Sugestao"> | string | null
    tipo?: StringNullableFilter<"Sugestao"> | string | null
    status?: StringNullableFilter<"Sugestao"> | string | null
    foto_url?: StringNullableFilter<"Sugestao"> | string | null
    data_criacao?: DateTimeFilter<"Sugestao"> | Date | string
  }

  export type InstituicaoCreateWithoutLocaisInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    usuarios?: UsuarioCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUncheckedCreateWithoutLocaisInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoUncheckedCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoUncheckedCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoCreateOrConnectWithoutLocaisInput = {
    where: InstituicaoWhereUniqueInput
    create: XOR<InstituicaoCreateWithoutLocaisInput, InstituicaoUncheckedCreateWithoutLocaisInput>
  }

  export type EventoCreateWithoutLocalInput = {
    evento_id?: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
    instituicao: InstituicaoCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateWithoutLocalInput = {
    evento_id?: string
    instituicao_id: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
  }

  export type EventoCreateOrConnectWithoutLocalInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutLocalInput, EventoUncheckedCreateWithoutLocalInput>
  }

  export type EventoCreateManyLocalInputEnvelope = {
    data: EventoCreateManyLocalInput | EventoCreateManyLocalInput[]
    skipDuplicates?: boolean
  }

  export type InstituicaoUpsertWithoutLocaisInput = {
    update: XOR<InstituicaoUpdateWithoutLocaisInput, InstituicaoUncheckedUpdateWithoutLocaisInput>
    create: XOR<InstituicaoCreateWithoutLocaisInput, InstituicaoUncheckedCreateWithoutLocaisInput>
    where?: InstituicaoWhereInput
  }

  export type InstituicaoUpdateToOneWithWhereWithoutLocaisInput = {
    where?: InstituicaoWhereInput
    data: XOR<InstituicaoUpdateWithoutLocaisInput, InstituicaoUncheckedUpdateWithoutLocaisInput>
  }

  export type InstituicaoUpdateWithoutLocaisInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoUncheckedUpdateWithoutLocaisInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioUncheckedUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUncheckedUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type EventoUpsertWithWhereUniqueWithoutLocalInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutLocalInput, EventoUncheckedUpdateWithoutLocalInput>
    create: XOR<EventoCreateWithoutLocalInput, EventoUncheckedCreateWithoutLocalInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutLocalInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutLocalInput, EventoUncheckedUpdateWithoutLocalInput>
  }

  export type EventoUpdateManyWithWhereWithoutLocalInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutLocalInput>
  }

  export type InstituicaoCreateWithoutUsuariosInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUncheckedCreateWithoutUsuariosInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalUncheckedCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoUncheckedCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoUncheckedCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoCreateOrConnectWithoutUsuariosInput = {
    where: InstituicaoWhereUniqueInput
    create: XOR<InstituicaoCreateWithoutUsuariosInput, InstituicaoUncheckedCreateWithoutUsuariosInput>
  }

  export type AvisoCreateWithoutUsuarioInput = {
    aviso_id?: string
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
    instituicao: InstituicaoCreateNestedOneWithoutAvisosInput
  }

  export type AvisoUncheckedCreateWithoutUsuarioInput = {
    aviso_id?: string
    instituicao_id: string
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
  }

  export type AvisoCreateOrConnectWithoutUsuarioInput = {
    where: AvisoWhereUniqueInput
    create: XOR<AvisoCreateWithoutUsuarioInput, AvisoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvisoCreateManyUsuarioInputEnvelope = {
    data: AvisoCreateManyUsuarioInput | AvisoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SugestaoCreateWithoutUsuarioInput = {
    sugestao_id?: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
    instituicao: InstituicaoCreateNestedOneWithoutSugestoesInput
  }

  export type SugestaoUncheckedCreateWithoutUsuarioInput = {
    sugestao_id?: string
    instituicao_id: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
  }

  export type SugestaoCreateOrConnectWithoutUsuarioInput = {
    where: SugestaoWhereUniqueInput
    create: XOR<SugestaoCreateWithoutUsuarioInput, SugestaoUncheckedCreateWithoutUsuarioInput>
  }

  export type SugestaoCreateManyUsuarioInputEnvelope = {
    data: SugestaoCreateManyUsuarioInput | SugestaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type InstituicaoUpsertWithoutUsuariosInput = {
    update: XOR<InstituicaoUpdateWithoutUsuariosInput, InstituicaoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<InstituicaoCreateWithoutUsuariosInput, InstituicaoUncheckedCreateWithoutUsuariosInput>
    where?: InstituicaoWhereInput
  }

  export type InstituicaoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: InstituicaoWhereInput
    data: XOR<InstituicaoUpdateWithoutUsuariosInput, InstituicaoUncheckedUpdateWithoutUsuariosInput>
  }

  export type InstituicaoUpdateWithoutUsuariosInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoUncheckedUpdateWithoutUsuariosInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUncheckedUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUncheckedUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type AvisoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AvisoWhereUniqueInput
    update: XOR<AvisoUpdateWithoutUsuarioInput, AvisoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AvisoCreateWithoutUsuarioInput, AvisoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvisoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AvisoWhereUniqueInput
    data: XOR<AvisoUpdateWithoutUsuarioInput, AvisoUncheckedUpdateWithoutUsuarioInput>
  }

  export type AvisoUpdateManyWithWhereWithoutUsuarioInput = {
    where: AvisoScalarWhereInput
    data: XOR<AvisoUpdateManyMutationInput, AvisoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type SugestaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SugestaoWhereUniqueInput
    update: XOR<SugestaoUpdateWithoutUsuarioInput, SugestaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SugestaoCreateWithoutUsuarioInput, SugestaoUncheckedCreateWithoutUsuarioInput>
  }

  export type SugestaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SugestaoWhereUniqueInput
    data: XOR<SugestaoUpdateWithoutUsuarioInput, SugestaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type SugestaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: SugestaoScalarWhereInput
    data: XOR<SugestaoUpdateManyMutationInput, SugestaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type InstituicaoCreateWithoutAvisosInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalCreateNestedManyWithoutInstituicaoInput
    usuarios?: UsuarioCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUncheckedCreateWithoutAvisosInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalUncheckedCreateNestedManyWithoutInstituicaoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoUncheckedCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoCreateOrConnectWithoutAvisosInput = {
    where: InstituicaoWhereUniqueInput
    create: XOR<InstituicaoCreateWithoutAvisosInput, InstituicaoUncheckedCreateWithoutAvisosInput>
  }

  export type UsuarioCreateWithoutAvisosInput = {
    usuario_id?: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
    instituicao: InstituicaoCreateNestedOneWithoutUsuariosInput
    sugestoes?: SugestaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAvisosInput = {
    usuario_id?: string
    instituicao_id: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
    sugestoes?: SugestaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAvisosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAvisosInput, UsuarioUncheckedCreateWithoutAvisosInput>
  }

  export type InstituicaoUpsertWithoutAvisosInput = {
    update: XOR<InstituicaoUpdateWithoutAvisosInput, InstituicaoUncheckedUpdateWithoutAvisosInput>
    create: XOR<InstituicaoCreateWithoutAvisosInput, InstituicaoUncheckedCreateWithoutAvisosInput>
    where?: InstituicaoWhereInput
  }

  export type InstituicaoUpdateToOneWithWhereWithoutAvisosInput = {
    where?: InstituicaoWhereInput
    data: XOR<InstituicaoUpdateWithoutAvisosInput, InstituicaoUncheckedUpdateWithoutAvisosInput>
  }

  export type InstituicaoUpdateWithoutAvisosInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUpdateManyWithoutInstituicaoNestedInput
    usuarios?: UsuarioUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoUncheckedUpdateWithoutAvisosInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUncheckedUpdateManyWithoutInstituicaoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type UsuarioUpsertWithoutAvisosInput = {
    update: XOR<UsuarioUpdateWithoutAvisosInput, UsuarioUncheckedUpdateWithoutAvisosInput>
    create: XOR<UsuarioCreateWithoutAvisosInput, UsuarioUncheckedCreateWithoutAvisosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAvisosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAvisosInput, UsuarioUncheckedUpdateWithoutAvisosInput>
  }

  export type UsuarioUpdateWithoutAvisosInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    instituicao?: InstituicaoUpdateOneRequiredWithoutUsuariosNestedInput
    sugestoes?: SugestaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAvisosInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    sugestoes?: SugestaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type InstituicaoCreateWithoutEventosInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalCreateNestedManyWithoutInstituicaoInput
    usuarios?: UsuarioCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUncheckedCreateWithoutEventosInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalUncheckedCreateNestedManyWithoutInstituicaoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoUncheckedCreateNestedManyWithoutInstituicaoInput
    sugestoes?: SugestaoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoCreateOrConnectWithoutEventosInput = {
    where: InstituicaoWhereUniqueInput
    create: XOR<InstituicaoCreateWithoutEventosInput, InstituicaoUncheckedCreateWithoutEventosInput>
  }

  export type LocalCreateWithoutEventosInput = {
    local_id?: string
    nome: string
    tipo?: string | null
    bloco?: string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: boolean
    instituicao: InstituicaoCreateNestedOneWithoutLocaisInput
  }

  export type LocalUncheckedCreateWithoutEventosInput = {
    local_id?: string
    instituicao_id: string
    nome: string
    tipo?: string | null
    bloco?: string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: boolean
  }

  export type LocalCreateOrConnectWithoutEventosInput = {
    where: LocalWhereUniqueInput
    create: XOR<LocalCreateWithoutEventosInput, LocalUncheckedCreateWithoutEventosInput>
  }

  export type InstituicaoUpsertWithoutEventosInput = {
    update: XOR<InstituicaoUpdateWithoutEventosInput, InstituicaoUncheckedUpdateWithoutEventosInput>
    create: XOR<InstituicaoCreateWithoutEventosInput, InstituicaoUncheckedCreateWithoutEventosInput>
    where?: InstituicaoWhereInput
  }

  export type InstituicaoUpdateToOneWithWhereWithoutEventosInput = {
    where?: InstituicaoWhereInput
    data: XOR<InstituicaoUpdateWithoutEventosInput, InstituicaoUncheckedUpdateWithoutEventosInput>
  }

  export type InstituicaoUpdateWithoutEventosInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUpdateManyWithoutInstituicaoNestedInput
    usuarios?: UsuarioUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoUncheckedUpdateWithoutEventosInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUncheckedUpdateManyWithoutInstituicaoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUncheckedUpdateManyWithoutInstituicaoNestedInput
    sugestoes?: SugestaoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type LocalUpsertWithoutEventosInput = {
    update: XOR<LocalUpdateWithoutEventosInput, LocalUncheckedUpdateWithoutEventosInput>
    create: XOR<LocalCreateWithoutEventosInput, LocalUncheckedCreateWithoutEventosInput>
    where?: LocalWhereInput
  }

  export type LocalUpdateToOneWithWhereWithoutEventosInput = {
    where?: LocalWhereInput
    data: XOR<LocalUpdateWithoutEventosInput, LocalUncheckedUpdateWithoutEventosInput>
  }

  export type LocalUpdateWithoutEventosInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
    instituicao?: InstituicaoUpdateOneRequiredWithoutLocaisNestedInput
  }

  export type LocalUncheckedUpdateWithoutEventosInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InstituicaoCreateWithoutSugestoesInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalCreateNestedManyWithoutInstituicaoInput
    usuarios?: UsuarioCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUncheckedCreateWithoutSugestoesInput = {
    instituicao_id?: string
    nome: string
    logo_url?: string | null
    mapa_url?: string | null
    locais?: LocalUncheckedCreateNestedManyWithoutInstituicaoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutInstituicaoInput
    avisos?: AvisoUncheckedCreateNestedManyWithoutInstituicaoInput
    eventos?: EventoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoCreateOrConnectWithoutSugestoesInput = {
    where: InstituicaoWhereUniqueInput
    create: XOR<InstituicaoCreateWithoutSugestoesInput, InstituicaoUncheckedCreateWithoutSugestoesInput>
  }

  export type UsuarioCreateWithoutSugestoesInput = {
    usuario_id?: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
    instituicao: InstituicaoCreateNestedOneWithoutUsuariosInput
    avisos?: AvisoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSugestoesInput = {
    usuario_id?: string
    instituicao_id: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
    avisos?: AvisoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSugestoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSugestoesInput, UsuarioUncheckedCreateWithoutSugestoesInput>
  }

  export type InstituicaoUpsertWithoutSugestoesInput = {
    update: XOR<InstituicaoUpdateWithoutSugestoesInput, InstituicaoUncheckedUpdateWithoutSugestoesInput>
    create: XOR<InstituicaoCreateWithoutSugestoesInput, InstituicaoUncheckedCreateWithoutSugestoesInput>
    where?: InstituicaoWhereInput
  }

  export type InstituicaoUpdateToOneWithWhereWithoutSugestoesInput = {
    where?: InstituicaoWhereInput
    data: XOR<InstituicaoUpdateWithoutSugestoesInput, InstituicaoUncheckedUpdateWithoutSugestoesInput>
  }

  export type InstituicaoUpdateWithoutSugestoesInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUpdateManyWithoutInstituicaoNestedInput
    usuarios?: UsuarioUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoUncheckedUpdateWithoutSugestoesInput = {
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_url?: NullableStringFieldUpdateOperationsInput | string | null
    locais?: LocalUncheckedUpdateManyWithoutInstituicaoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutInstituicaoNestedInput
    avisos?: AvisoUncheckedUpdateManyWithoutInstituicaoNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type UsuarioUpsertWithoutSugestoesInput = {
    update: XOR<UsuarioUpdateWithoutSugestoesInput, UsuarioUncheckedUpdateWithoutSugestoesInput>
    create: XOR<UsuarioCreateWithoutSugestoesInput, UsuarioUncheckedCreateWithoutSugestoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSugestoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSugestoesInput, UsuarioUncheckedUpdateWithoutSugestoesInput>
  }

  export type UsuarioUpdateWithoutSugestoesInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    instituicao?: InstituicaoUpdateOneRequiredWithoutUsuariosNestedInput
    avisos?: AvisoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSugestoesInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    avisos?: AvisoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type LocalCreateManyInstituicaoInput = {
    local_id?: string
    nome: string
    tipo?: string | null
    bloco?: string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: boolean
  }

  export type UsuarioCreateManyInstituicaoInput = {
    usuario_id?: string
    nome: string
    email: string
    tipo_acesso?: string | null
    curso?: string | null
  }

  export type AvisoCreateManyInstituicaoInput = {
    aviso_id?: string
    usuario_id?: string | null
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
  }

  export type EventoCreateManyInstituicaoInput = {
    evento_id?: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
    local_id?: string | null
  }

  export type SugestaoCreateManyInstituicaoInput = {
    sugestao_id?: string
    usuario_id: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
  }

  export type LocalUpdateWithoutInstituicaoInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
    eventos?: EventoUpdateManyWithoutLocalNestedInput
  }

  export type LocalUncheckedUpdateWithoutInstituicaoInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
    eventos?: EventoUncheckedUpdateManyWithoutLocalNestedInput
  }

  export type LocalUncheckedUpdateManyWithoutInstituicaoInput = {
    local_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    bloco?: NullableStringFieldUpdateOperationsInput | string | null
    mapa_xy?: NullableJsonNullValueInput | InputJsonValue
    acessivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUpdateWithoutInstituicaoInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    avisos?: AvisoUpdateManyWithoutUsuarioNestedInput
    sugestoes?: SugestaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInstituicaoInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    avisos?: AvisoUncheckedUpdateManyWithoutUsuarioNestedInput
    sugestoes?: SugestaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutInstituicaoInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_acesso?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisoUpdateWithoutInstituicaoInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
    usuario?: UsuarioUpdateOneWithoutAvisosNestedInput
  }

  export type AvisoUncheckedUpdateWithoutInstituicaoInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
  }

  export type AvisoUncheckedUpdateManyWithoutInstituicaoInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
  }

  export type EventoUpdateWithoutInstituicaoInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    local?: LocalUpdateOneWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateWithoutInstituicaoInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    local_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventoUncheckedUpdateManyWithoutInstituicaoInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    local_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SugestaoUpdateWithoutInstituicaoInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutSugestoesNestedInput
  }

  export type SugestaoUncheckedUpdateWithoutInstituicaoInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SugestaoUncheckedUpdateManyWithoutInstituicaoInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoCreateManyLocalInput = {
    evento_id?: string
    instituicao_id: string
    titulo: string
    data: Date | string
    tipo?: string | null
    descricao?: string | null
  }

  export type EventoUpdateWithoutLocalInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    instituicao?: InstituicaoUpdateOneRequiredWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateWithoutLocalInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventoUncheckedUpdateManyWithoutLocalInput = {
    evento_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisoCreateManyUsuarioInput = {
    aviso_id?: string
    instituicao_id: string
    usuario_nome?: string | null
    titulo: string
    mensagem?: string | null
    data_criacao?: Date | string
    prioridade?: string | null
    curso_alvo?: AvisoCreatecurso_alvoInput | string[]
  }

  export type SugestaoCreateManyUsuarioInput = {
    sugestao_id?: string
    instituicao_id: string
    titulo: string
    descricao?: string | null
    tipo?: string | null
    status?: string | null
    foto_url?: string | null
    data_criacao?: Date | string
  }

  export type AvisoUpdateWithoutUsuarioInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
    instituicao?: InstituicaoUpdateOneRequiredWithoutAvisosNestedInput
  }

  export type AvisoUncheckedUpdateWithoutUsuarioInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
  }

  export type AvisoUncheckedUpdateManyWithoutUsuarioInput = {
    aviso_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    usuario_nome?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prioridade?: NullableStringFieldUpdateOperationsInput | string | null
    curso_alvo?: AvisoUpdatecurso_alvoInput | string[]
  }

  export type SugestaoUpdateWithoutUsuarioInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    instituicao?: InstituicaoUpdateOneRequiredWithoutSugestoesNestedInput
  }

  export type SugestaoUncheckedUpdateWithoutUsuarioInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SugestaoUncheckedUpdateManyWithoutUsuarioInput = {
    sugestao_id?: StringFieldUpdateOperationsInput | string
    instituicao_id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
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