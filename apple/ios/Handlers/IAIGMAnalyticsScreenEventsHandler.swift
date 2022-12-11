//
//  IAIGMAnalyticsScreenEventsHandler.swift




import Foundation
import ZappCore

class IAIGMAnalyticsScreenEventsHandler: AnalyticsScreenEventsHandler {
    override func handleSomeScreenEvent(_ eventName: String, parameters: [String: Any]?) -> Bool {
        proceedScreenEvent(eventName,
                           parameters: parameters)
    }

    override func handleHomeEvent(_ eventName: String, parameters: [String: Any]?) -> Bool {
        proceedScreenEvent(eventName,
                           parameters: parameters)
    }

    fileprivate func proceedScreenEvent(_ eventName: String, parameters: [String: Any]?) -> Bool {
        let screenName = screenName(for: eventName, parameters: parameters)

      //  CBTracker.shared()?.trackView(nil, viewId: screenName, title: screenName)

        return super.proceedEvent(eventName)
    }
}
