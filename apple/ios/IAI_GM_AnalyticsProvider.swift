//
//  IAI_GM_AnalyticsProvider.swift
//  IAI_GM_AnalyticsPlugin
//
//


import ZappCore

open class IAI_GM_AnalyticsProvider: AnalyticsBaseProvider {
    let kAccountID = "account_id"
    let kDomain = "domain"

    enum Params {
        enum Plugin {
            static let accountId = "account_id"
            static let domain = "domain"
        }
    }

    var accountId: Int32 {
        guard let accountIdString = configurationJSON?.object(forKey: Params.Plugin.accountId) as? String,
              let value = Int32(accountIdString) else {
            return 0
        }
        return value
    }

    var domain: String {
        configurationJSON?.object(forKey: Params.Plugin.domain) as? String ?? ""
    }

    // MARK: AsyncPluginAdapterProtocol

    override open func prepare(_ defaultParams: [String: Any]) async -> Result<Bool, Error> {
        _ = await super.prepare(defaultParams)
        return preparing()
    }

    override open func disable() async -> Result<Bool, Error> {
        _ = await super.disable()
       // CBTracker.shared()?.stop()
        return .success(true)
    }

    override open func prepareEventsHandlers() -> [AnalyticsBaseEventsHandler] {
        [
            IAIGMAnalyticsScreenEventsHandler(delegate: self),
        ]
    }

    // MARK: - Functions

    func preparing() -> Result<Bool, Error> {
        if accountId > 0, !domain.isEmpty {
        //    CBTracker.shared()?.setupTracker(withAccountId: accountId,domain: domain)
            return .success(true)
        } else {
            return disabling()
        }
    }
}
