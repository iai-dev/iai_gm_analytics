package com.iai.analytics.gm

import android.util.Log
import com.applicaster.analytics.adapters.AnalyticsScreenAdapter
import com.com.iai.analytics.analytics.util.AppContext

import java.util.*

class ScreenAdapter: AnalyticsScreenAdapter() {
    override fun onOpenScreen(screenName: String, params: TreeMap<String, String>?) {
        super.onOpenScreen(screenName, params)
        val screenLayoutId = params?.get("screen_layout_id")
        Log.d(iaiGMAnalyticsAgent, "trackScreen id: $screenLayoutId name: $screenName")
      
    }
}