import { NativeModulesProxy } from "expo-modules-core";

const { ExpoWriteBinary } = NativeModulesProxy;

console.log(ExpoWriteBinary);

export async function helloAsync(options: Record<string, string>) {
  return await ExpoWriteBinary.helloAsync(options);
}
