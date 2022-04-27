import ExpoModulesCore

public class ExpoWriteBinaryModule: Module {
  public func definition() -> ModuleDefinition {
    name("ExpoWriteBinary")

    function("helloAsync") { (options: [String: String]) in
      print("Hello 👋")
    }
  }
}
