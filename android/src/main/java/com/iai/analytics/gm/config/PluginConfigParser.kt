package com.iai.analytics.gm.config

class PluginConfigParser() {

    fun getConfig(params: Map<*, *>?): IAIGMPluginConfig {
        val config = IAIGMPluginConfig()
        params?.let {
            //config.accountId = it[KEY_ACCOUNT_ID] as? String
            config.siteId = it[KEY_SITE_ID] as? String
        }
        return config
    }

    companion object {
     //   private const val KEY_ACCOUNT_ID = "account_id"
        private const val KEY_SITE_ID = "site_id"
    }
}