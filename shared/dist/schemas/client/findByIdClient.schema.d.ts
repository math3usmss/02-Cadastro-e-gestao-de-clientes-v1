import { z } from "zod";
export declare const FindByIdClientSchemaReturn: z.ZodObject<
  {
    name: z.ZodString;
    email: z.ZodString;
    CPF: z.ZodString;
    CNPJ: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    phone: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    clientAddresses: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            "~standard": z.ZodStandardSchemaWithJSON<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >
            >;
            shape: {
              street: z.ZodString;
              city: z.ZodString;
              state: z.ZodString;
              zipCode: z.ZodString;
            };
            keyof: () => z.ZodEnum<{
              street: "street";
              city: "city";
              state: "state";
              zipCode: "zipCode";
            }>;
            catchall: <T extends z.core.SomeType>(
              schema: T,
            ) => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$catchall<T>
            >;
            passthrough: () => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$loose
            >;
            loose: () => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$loose
            >;
            strict: () => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strict
            >;
            strip: () => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
            extend: <U extends z.core.$ZodLooseShape>(
              shape: U,
            ) => z.ZodObject<
              (
                ("street" | "city" | "state" | "zipCode") &
                  keyof U extends never
                  ? {
                      street: z.ZodString;
                      city: z.ZodString;
                      state: z.ZodString;
                      zipCode: z.ZodString;
                    } & { -readonly [P in keyof U]: U[P] }
                  : ({
                      street: z.ZodString;
                      city: z.ZodString;
                      state: z.ZodString;
                      zipCode: z.ZodString;
                    } extends infer T_1 extends z.core.util.SomeObject
                      ? {
                          [
                            K in keyof T_1 as K extends keyof U ? never : K
                          ]: T_1[K];
                        }
                      : never) & {
                      [K_1 in keyof { -readonly [P in keyof U]: U[P] }]: {
                        -readonly [P in keyof U]: U[P];
                      }[K_1];
                    }
              ) extends infer T
                ? { [k in keyof T]: T[k] }
                : never,
              z.core.$strip
            >;
            safeExtend: <U extends z.core.$ZodLooseShape>(
              shape: z.SafeExtendShape<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                U
              > &
                Partial<
                  Record<
                    "street" | "city" | "state" | "zipCode",
                    z.core.SomeType
                  >
                >,
            ) => z.ZodObject<
              (
                ("street" | "city" | "state" | "zipCode") &
                  keyof U extends never
                  ? {
                      street: z.ZodString;
                      city: z.ZodString;
                      state: z.ZodString;
                      zipCode: z.ZodString;
                    } & { -readonly [P in keyof U]: U[P] }
                  : ({
                      street: z.ZodString;
                      city: z.ZodString;
                      state: z.ZodString;
                      zipCode: z.ZodString;
                    } extends infer T_1 extends z.core.util.SomeObject
                      ? {
                          [
                            K in keyof T_1 as K extends keyof U ? never : K
                          ]: T_1[K];
                        }
                      : never) & {
                      [K_1 in keyof { -readonly [P in keyof U]: U[P] }]: {
                        -readonly [P in keyof U]: U[P];
                      }[K_1];
                    }
              ) extends infer T
                ? { [k in keyof T]: T[k] }
                : never,
              z.core.$strip
            >;
            merge: <U extends z.ZodObject>(
              other: U,
            ) => z.ZodObject<
              (
                ("street" | "city" | "state" | "zipCode") &
                  keyof U["shape"] extends never
                  ? {
                      street: z.ZodString;
                      city: z.ZodString;
                      state: z.ZodString;
                      zipCode: z.ZodString;
                    } & U["shape"]
                  : ({
                      street: z.ZodString;
                      city: z.ZodString;
                      state: z.ZodString;
                      zipCode: z.ZodString;
                    } extends infer T_1 extends z.core.util.SomeObject
                      ? {
                          [
                            K in keyof T_1 as K extends keyof U["shape"]
                              ? never
                              : K
                          ]: T_1[K];
                        }
                      : never) &
                      (U["shape"] extends infer T_2 extends
                        z.core.util.SomeObject
                        ? { [K_1 in keyof T_2]: T_2[K_1] }
                        : never)
              ) extends infer T
                ? { [k in keyof T]: T[k] }
                : never,
              U["_zod"]["config"]
            >;
            pick: <
              M extends z.core.util.Mask<
                "street" | "city" | "state" | "zipCode"
              >,
            >(
              mask: M &
                Record<
                  Exclude<keyof M, "street" | "city" | "state" | "zipCode">,
                  never
                >,
            ) => z.ZodObject<
              Pick<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                | Extract<"street", keyof M>
                | Extract<"city", keyof M>
                | Extract<"state", keyof M>
                | Extract<"zipCode", keyof M>
              > extends infer T
                ? { [k in keyof T]: T[k] }
                : never,
              z.core.$strip
            >;
            omit: <
              M extends z.core.util.Mask<
                "street" | "city" | "state" | "zipCode"
              >,
            >(
              mask: M &
                Record<
                  Exclude<keyof M, "street" | "city" | "state" | "zipCode">,
                  never
                >,
            ) => z.ZodObject<
              Omit<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                | Extract<"street", keyof M>
                | Extract<"city", keyof M>
                | Extract<"state", keyof M>
                | Extract<"zipCode", keyof M>
              > extends infer T
                ? { [k in keyof T]: T[k] }
                : never,
              z.core.$strip
            >;
            partial: {
              (): z.ZodObject<
                {
                  street: z.ZodOptional<z.ZodString>;
                  city: z.ZodOptional<z.ZodString>;
                  state: z.ZodOptional<z.ZodString>;
                  zipCode: z.ZodOptional<z.ZodString>;
                },
                z.core.$strip
              >;
              <
                M extends z.core.util.Mask<
                  "street" | "city" | "state" | "zipCode"
                >,
              >(
                mask: M &
                  Record<
                    Exclude<keyof M, "street" | "city" | "state" | "zipCode">,
                    never
                  >,
              ): z.ZodObject<
                {
                  street: "street" extends infer T
                    ? T extends "street"
                      ? T extends keyof M
                        ? z.ZodOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T]
                      : never
                    : never;
                  city: "city" extends infer T_1
                    ? T_1 extends "city"
                      ? T_1 extends keyof M
                        ? z.ZodOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_1]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_1]
                      : never
                    : never;
                  state: "state" extends infer T_2
                    ? T_2 extends "state"
                      ? T_2 extends keyof M
                        ? z.ZodOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_2]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_2]
                      : never
                    : never;
                  zipCode: "zipCode" extends infer T_3
                    ? T_3 extends "zipCode"
                      ? T_3 extends keyof M
                        ? z.ZodOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_3]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_3]
                      : never
                    : never;
                },
                z.core.$strip
              >;
            };
            exactPartial: {
              (): z.ZodObject<
                {
                  street: z.ZodExactOptional<z.ZodString>;
                  city: z.ZodExactOptional<z.ZodString>;
                  state: z.ZodExactOptional<z.ZodString>;
                  zipCode: z.ZodExactOptional<z.ZodString>;
                },
                z.core.$strip
              >;
              <
                M extends z.core.util.Mask<
                  "street" | "city" | "state" | "zipCode"
                >,
              >(
                mask: M &
                  Record<
                    Exclude<keyof M, "street" | "city" | "state" | "zipCode">,
                    never
                  >,
              ): z.ZodObject<
                {
                  street: "street" extends infer T
                    ? T extends "street"
                      ? T extends keyof M
                        ? z.ZodExactOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T]
                      : never
                    : never;
                  city: "city" extends infer T_1
                    ? T_1 extends "city"
                      ? T_1 extends keyof M
                        ? z.ZodExactOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_1]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_1]
                      : never
                    : never;
                  state: "state" extends infer T_2
                    ? T_2 extends "state"
                      ? T_2 extends keyof M
                        ? z.ZodExactOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_2]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_2]
                      : never
                    : never;
                  zipCode: "zipCode" extends infer T_3
                    ? T_3 extends "zipCode"
                      ? T_3 extends keyof M
                        ? z.ZodExactOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_3]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_3]
                      : never
                    : never;
                },
                z.core.$strip
              >;
            };
            required: {
              (): z.ZodObject<
                {
                  street: z.ZodNonOptional<z.ZodString>;
                  city: z.ZodNonOptional<z.ZodString>;
                  state: z.ZodNonOptional<z.ZodString>;
                  zipCode: z.ZodNonOptional<z.ZodString>;
                },
                z.core.$strip
              >;
              <
                M extends z.core.util.Mask<
                  "street" | "city" | "state" | "zipCode"
                >,
              >(
                mask: M &
                  Record<
                    Exclude<keyof M, "street" | "city" | "state" | "zipCode">,
                    never
                  >,
              ): z.ZodObject<
                {
                  street: "street" extends infer T
                    ? T extends "street"
                      ? T extends keyof M
                        ? z.ZodNonOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T]
                      : never
                    : never;
                  city: "city" extends infer T_1
                    ? T_1 extends "city"
                      ? T_1 extends keyof M
                        ? z.ZodNonOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_1]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_1]
                      : never
                    : never;
                  state: "state" extends infer T_2
                    ? T_2 extends "state"
                      ? T_2 extends keyof M
                        ? z.ZodNonOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_2]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_2]
                      : never
                    : never;
                  zipCode: "zipCode" extends infer T_3
                    ? T_3 extends "zipCode"
                      ? T_3 extends keyof M
                        ? z.ZodNonOptional<
                            {
                              street: z.ZodString;
                              city: z.ZodString;
                              state: z.ZodString;
                              zipCode: z.ZodString;
                            }[T_3]
                          >
                        : {
                            street: z.ZodString;
                            city: z.ZodString;
                            state: z.ZodString;
                            zipCode: z.ZodString;
                          }[T_3]
                      : never
                    : never;
                },
                z.core.$strip
              >;
            };
            def: z.core.$ZodObjectDef<{
              street: z.ZodString;
              city: z.ZodString;
              state: z.ZodString;
              zipCode: z.ZodString;
            }>;
            type: "object";
            _def: z.core.$ZodObjectDef<{
              street: z.ZodString;
              city: z.ZodString;
              state: z.ZodString;
              zipCode: z.ZodString;
            }>;
            _output: {
              street: string;
              city: string;
              state: string;
              zipCode: string;
            };
            _input: {
              street: string;
              city: string;
              state: string;
              zipCode: string;
            };
            toJSONSchema: (
              params?: z.core.ToJSONSchemaParams,
            ) => z.core.ZodStandardJSONSchemaPayload<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >
            >;
            check: (
              ...checks: (
                | z.core.CheckFn<{
                    street: string;
                    city: string;
                    state: string;
                    zipCode: string;
                  }>
                | z.core.$ZodCheck<{
                    street: string;
                    city: string;
                    state: string;
                    zipCode: string;
                  }>
              )[]
            ) => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
            with: (
              ...checks: (
                | z.core.CheckFn<{
                    street: string;
                    city: string;
                    state: string;
                    zipCode: string;
                  }>
                | z.core.$ZodCheck<{
                    street: string;
                    city: string;
                    state: string;
                    zipCode: string;
                  }>
              )[]
            ) => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
            clone: (
              def?:
                | z.core.$ZodObjectDef<{
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  }>
                | undefined,
              params?:
                | {
                    parent: boolean;
                  }
                | undefined,
            ) => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
            register: <R extends z.core.$ZodRegistry>(
              registry: R,
              ...meta: z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              > extends infer T
                ? T extends z.ZodObject<
                    {
                      street: z.ZodString;
                      city: z.ZodString;
                      state: z.ZodString;
                      zipCode: z.ZodString;
                    },
                    z.core.$strip
                  >
                  ? T extends R["_schema"]
                    ? undefined extends R["_meta"]
                      ? [
                          (
                            | z.core.$replace<
                                R["_meta"],
                                R["_schema"] &
                                  z.ZodObject<
                                    {
                                      street: z.ZodString;
                                      city: z.ZodString;
                                      state: z.ZodString;
                                      zipCode: z.ZodString;
                                    },
                                    z.core.$strip
                                  >
                              >
                            | undefined
                          )?,
                        ]
                      : [
                          z.core.$replace<
                            R["_meta"],
                            R["_schema"] &
                              z.ZodObject<
                                {
                                  street: z.ZodString;
                                  city: z.ZodString;
                                  state: z.ZodString;
                                  zipCode: z.ZodString;
                                },
                                z.core.$strip
                              >
                          >,
                        ]
                    : ["Incompatible schema"]
                  : never
                : never
            ) => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
            brand: <
              T extends PropertyKey = PropertyKey,
              Dir extends "in" | "out" | "inout" = "out",
            >(
              value?: T | undefined,
            ) => PropertyKey extends T
              ? z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >
              : z.core.$ZodBranded<
                  z.ZodObject<
                    {
                      street: z.ZodString;
                      city: z.ZodString;
                      state: z.ZodString;
                      zipCode: z.ZodString;
                    },
                    z.core.$strip
                  >,
                  T,
                  Dir
                >;
            parse: (
              data: unknown,
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => {
              street: string;
              city: string;
              state: string;
              zipCode: string;
            };
            safeParse: (
              data: unknown,
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => z.ZodSafeParseResult<{
              street: string;
              city: string;
              state: string;
              zipCode: string;
            }>;
            parseAsync: (
              data: unknown,
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => Promise<{
              street: string;
              city: string;
              state: string;
              zipCode: string;
            }>;
            safeParseAsync: (
              data: unknown,
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => Promise<
              z.ZodSafeParseResult<{
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }>
            >;
            spa: (
              data: unknown,
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => Promise<
              z.ZodSafeParseResult<{
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }>
            >;
            encode: (
              data: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => {
              street: string;
              city: string;
              state: string;
              zipCode: string;
            };
            decode: (
              data: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => {
              street: string;
              city: string;
              state: string;
              zipCode: string;
            };
            encodeAsync: (
              data: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => Promise<{
              street: string;
              city: string;
              state: string;
              zipCode: string;
            }>;
            decodeAsync: (
              data: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => Promise<{
              street: string;
              city: string;
              state: string;
              zipCode: string;
            }>;
            safeEncode: (
              data: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => z.ZodSafeParseResult<{
              street: string;
              city: string;
              state: string;
              zipCode: string;
            }>;
            safeDecode: (
              data: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => z.ZodSafeParseResult<{
              street: string;
              city: string;
              state: string;
              zipCode: string;
            }>;
            safeEncodeAsync: (
              data: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => Promise<
              z.ZodSafeParseResult<{
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }>
            >;
            safeDecodeAsync: (
              data: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
              params?: z.core.ParseContext<z.core.$ZodIssue>,
            ) => Promise<
              z.ZodSafeParseResult<{
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }>
            >;
            refine: <
              Ch extends (arg: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }) => unknown | Promise<unknown>,
            >(
              check: Ch,
              params?:
                | string
                | {
                    abort?: boolean | undefined | undefined;
                    when?:
                      | ((payload: z.core.ParsePayload) => boolean)
                      | undefined
                      | undefined;
                    path?: PropertyKey[] | undefined | undefined;
                    params?: Record<string, any> | undefined;
                    error?:
                      | string
                      | z.core.$ZodErrorMap<NonNullable<z.core.$ZodIssue>>
                      | undefined;
                    message?: string | undefined | undefined;
                  }
                | undefined,
            ) => Ch extends (arg: any) => arg is infer R
              ? z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                > &
                  z.ZodType<
                    R,
                    {
                      street: string;
                      city: string;
                      state: string;
                      zipCode: string;
                    },
                    z.core.$ZodTypeInternals<
                      R,
                      {
                        street: string;
                        city: string;
                        state: string;
                        zipCode: string;
                      }
                    >
                  >
              : z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >;
            superRefine: (
              refinement: (
                arg: {
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                },
                ctx: z.core.$RefinementCtx<{
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                }>,
              ) => void | Promise<void>,
              params?: z.core.$ZodSuperRefineParams,
            ) => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
            overwrite: (
              fn: (x: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }) => {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              },
            ) => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
            optional: () => z.ZodOptional<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >
            >;
            exactOptional: () => z.ZodExactOptional<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >
            >;
            nonoptional: (
              params?: string | z.core.$ZodNonOptionalParams,
            ) => z.ZodNonOptional<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >
            >;
            nullable: () => z.ZodNullable<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >
            >;
            nullish: () => z.ZodOptional<
              z.ZodNullable<
                z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >
              >
            >;
            default: {
              (def: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }): z.ZodDefault<
                z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >
              >;
              (
                def: () => {
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                },
              ): z.ZodDefault<
                z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >
              >;
            };
            prefault: {
              (
                def: () => {
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                },
              ): z.ZodPrefault<
                z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >
              >;
              (def: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }): z.ZodPrefault<
                z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >
              >;
            };
            array: () => z.ZodArray<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >
            >;
            or: <T extends z.core.SomeType>(
              option: T,
            ) => z.ZodUnion<
              [
                z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >,
                T,
              ]
            >;
            and: <T extends z.core.SomeType>(
              incoming: T,
            ) => z.ZodIntersection<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >,
              T
            >;
            transform: <NewOut>(
              transform: (
                arg: {
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                },
                ctx: z.core.$RefinementCtx<{
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                }>,
              ) => NewOut | Promise<NewOut>,
            ) => z.ZodPipe<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >,
              z.ZodTransform<
                Awaited<NewOut>,
                {
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                }
              >
            >;
            catch: {
              (def: {
                street: string;
                city: string;
                state: string;
                zipCode: string;
              }): z.ZodCatch<
                z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >
              >;
              (
                def: (ctx: z.core.$ZodCatchCtx) => {
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                },
              ): z.ZodCatch<
                z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >
              >;
            };
            pipe: <
              T extends z.core.$ZodType<
                any,
                {
                  street: string;
                  city: string;
                  state: string;
                  zipCode: string;
                },
                z.core.$ZodTypeInternals<
                  any,
                  {
                    street: string;
                    city: string;
                    state: string;
                    zipCode: string;
                  }
                >
              >,
            >(
              target:
                | T
                | z.core.$ZodType<
                    any,
                    {
                      street: string;
                      city: string;
                      state: string;
                      zipCode: string;
                    },
                    z.core.$ZodTypeInternals<
                      any,
                      {
                        street: string;
                        city: string;
                        state: string;
                        zipCode: string;
                      }
                    >
                  >,
            ) => z.ZodPipe<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >,
              T
            >;
            readonly: () => z.ZodReadonly<
              z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >
            >;
            describe: (description: string) => z.ZodObject<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
            description?: string | undefined;
            meta: {
              ():
                | {
                    [x: string]: unknown;
                    id?: string | undefined | undefined;
                    title?: string | undefined | undefined;
                    description?: string | undefined | undefined;
                    deprecated?: boolean | undefined | undefined;
                  }
                | undefined;
              (data: {
                [x: string]: unknown;
                id?: string | undefined | undefined;
                title?: string | undefined | undefined;
                description?: string | undefined | undefined;
                deprecated?: boolean | undefined | undefined;
              }): z.ZodObject<
                {
                  street: z.ZodString;
                  city: z.ZodString;
                  state: z.ZodString;
                  zipCode: z.ZodString;
                },
                z.core.$strip
              >;
            };
            isOptional: () => boolean;
            isNullable: () => boolean;
            apply: <T, TArgs extends unknown[] = []>(
              fn: (
                schema: z.ZodObject<
                  {
                    street: z.ZodString;
                    city: z.ZodString;
                    state: z.ZodString;
                    zipCode: z.ZodString;
                  },
                  z.core.$strip
                >,
                ...args: TArgs
              ) => T,
              ...args: TArgs
            ) => T;
            _zod: z.core.$ZodObjectInternals<
              {
                street: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                zipCode: z.ZodString;
              },
              z.core.$strip
            >;
          },
          z.core.$strip
        >
      >
    >;
  },
  z.core.$strip
>;
export type FindByIdClientSchemaReturnType = z.infer<
  typeof FindByIdClientSchemaReturn
>;
