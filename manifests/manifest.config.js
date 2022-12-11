const baseManifest = {
  api: {},
  dependency_repository_url: [],
  author_name: "IAI",
  author_email: "lelgazar@iai.co.il",
  name: "IAI_GM_Analytics",
  description: "IAI GM Analytics provider",
  cover_image: "",
  type: "analytics",
  identifier: "IAI_GM_Analytics",
  screen: false,
  react_native: true,
  ui_builder_support: true,
  whitelisted_account_ids: [],
  min_zapp_sdk: "1.0.0",
  deprecated_since_zapp_sdk: "",
  unsupported_since_zapp_sdk: "",
  preload: false,
  custom_configuration_fields: [],
  targets: ["mobile"],
  ui_frameworks: ["quickbrick"],
};

function createManifest({ version, platform }) {
  const manifest = {
    ...baseManifest,
    platform,
    manifest_version: version,
    min_zapp_sdk: min_zapp_sdk[platform],
    extra_dependencies: extra_dependencies[platform],
    project_dependencies: project_dependencies[platform],
    api: api[platform],
    npm_dependencies: [
      `iai_gm_analytics@${version}`,
    ],
    targets: targets[platform],
    custom_configuration_fields: custom_configuration_fields[platform],
    ui_frameworks: ui_frameworks[platform],
  };
  return manifest;
}

const custom_configuration_fields_apple = [
  {
    type: "text",
    key: "domain",
    tooltip_text: "The dashboard domain to report analytics",
  },
  {
    section: "configuration",
    type: "checkbox",
    key: "enabled",
    initial_value: 1,
    label: "Plugin enabled",
    label_tooltip: "Disable plugin if you do not want to use plugin",
  },
];

const custom_configuration_fields_android = [
  {
    type: "text",
    key: "site_id",
    tooltip_text: "Site id",
  },
];

const custom_configuration_fields = {
  ios_for_quickbrick: custom_configuration_fields_apple,
  android_for_quickbrick: custom_configuration_fields_android
};

const ui_frameworks_quickbrick = ["quickbrick"];

const ui_frameworks = {
  ios_for_quickbrick: ui_frameworks_quickbrick,
  android_for_quickbrick: ui_frameworks_quickbrick
};

const min_zapp_sdk = {
  ios_for_quickbrick: "6.3.0-Dev",
  android_for_quickbrick: "6.0.0-Dev"
};

const extra_dependencies_apple = [
  {
    IAIGMAnalyticsPlugin:
      ":path => './node_modules/IAI_GM_Analytics/apple/IAIGMAnalyticsPlugin.podspec'",
  },
  {
    ZappAnalyticsPluginsSDK:
      ":path => './node_modules/@applicaster/zapp-analytics-plugins/apple/ZappAnalyticsPluginsSDK.podspec'",
  },
];

const project_dependencies_apple = [];

const project_dependencies_android = [
  {
    "IAIGMAnalyticsPlugin":
      "node_modules/IAI_GM_Analytics/android",
  },
];

const extra_dependencies = {
  ios_for_quickbrick: extra_dependencies_apple,
};

const project_dependencies = {
  ios_for_quickbrick: project_dependencies_apple,
  android_for_quickbrick: project_dependencies_android
};

const api_apple = {
  require_startup_execution: false,
  class_name: "IAI_GM_AnalyticsProvider",
  modules: ["IAI_GM_AnalyticsPlugin"],
};

const api_android = {
  require_startup_execution: false,
  class_name: "iaiGMAnalyticsAgent",
};

const api = {
  ios_for_quickbrick: api_apple,
  android_for_quickbrick: api_android
};

const mobileTarget = ["mobile"];

const targets = {
  ios_for_quickbrick: mobileTarget,
  android_for_quickbrick: mobileTarget
};

module.exports = createManifest;
