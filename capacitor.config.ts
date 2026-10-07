import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.linguamini.slovak",
  appName: "Lingua Mini Slovak",
  webDir: "dist",
  backgroundColor: "#0b1220",
  android: {
    allowMixedContent: false,
  },
};

export default config;
