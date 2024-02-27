export type ITypeMock<T> = {
    [P in keyof T]?: ITypeMock<T[P]>;
}
export const typeMock = <T>(instance: ITypeMock<T>) => {
    return instance as T
}