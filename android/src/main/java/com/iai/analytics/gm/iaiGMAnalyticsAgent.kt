package com.iai.analytics.gm

import android.content.Context
import com.applicaster.analytics.BaseAnalyticsAgent
import com.applicaster.analytics.adapters.IAnalyticsAdapter
import com.iai.analytics.gm.config.PluginConfigParser
import com.applicaster.util.APLogger
import com.applicaster.util.AppContext
//import com.chartbeat.androidsdk.Tracker
import java.util.*

class iaiGMAnalyticsAgent : BaseAnalyticsAgent() {

    private val routers = mutableListOf<IAnalyticsAdapter>()

    override fun initializeAnalyticsAgent(context: Context?) {
        super.initializeAnalyticsAgent(context)

        routers.clear()
        routers.add(ScreenAdapter())
    }

    override fun setParams(params: MutableMap<Any?, Any?>?) {
        super.setParams(params)
        val pluginConfig = PluginConfigParser().getConfig(params)
        pluginConfig.apply {
            if (accountId.isNullOrEmpty())
                APLogger.error(TAG, "Plugin configuration accountId is missing")
            if (siteId.isNullOrEmpty())
                APLogger.error(TAG, "Plugin configuration siteId is missing")
           // initTracker(accountId, siteId)
        }
    }

    private fun initTracker(accountId: String?, siteId: String?) {
        val appContext = AppContext.get()
        try {
          //  Tracker.setupTracker(accountId, siteId, appContext)
        } catch (t: Throwable) {
            APLogger.error(TAG, "Setup error: $t")
        }
    }

    override fun logEvent(eventName: String, params: TreeMap<String, String>) {
        super.logEvent(eventName, params)
        routers.any { it.routeEvent(eventName, params) }
    }

    companion object {
        const val TAG = "IAIGM"
    }
}