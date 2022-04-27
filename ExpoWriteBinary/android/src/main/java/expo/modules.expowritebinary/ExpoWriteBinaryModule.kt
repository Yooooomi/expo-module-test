package expo.modules.expowritebinary

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoWriteBinaryModule : Module() {
  override fun definition() = ModuleDefinition {
    name("ExpoWriteBinary")

    function("helloAsync") { options: Map<String, String> ->
      println("Hello 👋")
    }

    viewManager {
      view { context -> 
        ExpoWriteBinaryView(context) 
      }

      prop("name") { view: ExpoWriteBinaryView, prop: String ->
        println(prop)
      }
    }
  }
}
