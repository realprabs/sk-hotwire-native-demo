import { goto, replaceState } from '$app/navigation'
import { tick } from 'svelte'

interface VisitOptions {
    action: string
}
interface Visit {
    identifier: string
    hasCachedSnapshot(): boolean
    isPageRefresh: boolean
    issueRequest(): unknown
    changeHistory(): unknown
    loadCachedSnapshot(): unknown
    loadResponse(): unknown
    cancel(): unknown
}
interface FormSubmission {
    location: string
}
interface AdapterInterface {
    visitProposedToLocation(location: URL, options: VisitOptions): unknown
    visitStarted(visit: Visit): unknown
    visitRequestStarted(visit: Visit): unknown
    visitRequestCompleted(visit: Visit): unknown
    visitRequestFailedWithStatusCode(visit: Visit, statusCode: number): unknown
    visitRequestFinished(visit: Visit): unknown
    visitRendered(visit: Visit): unknown
    visitCompleted(visit: Visit): unknown
    formSubmissionStarted(formSubmission: FormSubmission): unknown
    formSubmissionFinished(formSubmission: FormSubmission): unknown
    pageInvalidated(): unknown
    linkPrefetchingIsEnabledForLocation(location: URL): boolean
    log(message: string): unknown
}

class SvelteKitVisit implements Visit {
    identifier = uuid()
    options: VisitOptions
    hasCachedSnapshot() { return false }
    isPageRefresh: boolean
    restorationIdentifier: string
    constructor(public location: URL, restorationIdentifier: string = '', options: VisitOptions = { action: 'advance' }) {
        this.restorationIdentifier = restorationIdentifier || uuid()
        this.options = options
        this.isPageRefresh = options.action === 'replace'
    }
    issueRequest() {
        window.Turbo.adapter.visitRequestStarted(this)
        this.navigate().then(() => {
            window.Turbo.adapter.visitRequestCompleted(this)
            window.Turbo.adapter.visitRequestFinished(this)
            window.Turbo.adapter.visitRendered(this)
        }).catch(() => {
            window.Turbo.adapter.visitRequestFailedWithStatusCode(this, 404)
        }).finally(() => {
            window.Turbo.adapter.visitCompleted(this)
        })
    }
    changeHistory() { }
    loadCachedSnapshot() { }
    loadResponse() { }
    cancel() { }

    private async navigate() {
        console.log(`Navigating to ${this.location.href} from ${window.location.href} with action ${this.options.action}`)
        if (this.options.action === 'restore' && window.location.href !== this.location.href) {
            history.back();
        }
        return goto(this.location.href, { replaceState: this.isPageRefresh || this.options.action === 'replace', state: { restorationIdentifier: this.restorationIdentifier } })
    }
}

function uuid() {
    return Array.from({ length: 36 })
        .map((_, i) => {
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                return "-"
            } else if (i == 14) {
                return "4"
            } else if (i == 19) {
                return (Math.floor(Math.random() * 4) + 8).toString(16)
            } else {
                return Math.floor(Math.random() * 15).toString(16)
            }
        })
        .join("")
}

class TurboNavigator {
    get location() {
        return new URL(window.location.href)
    }
    get restorationIdentifier() {
        return history.state?.["sveltekit:states"]?.restorationIdentifier || ''
    }
    locationWithActionIsSamePage(location: URL, action: string) { return location.href === window.location.href }
    startVisit(location: string, restorationIdentifier: string, options: VisitOptions) {
        if (!window.Turbo.adapter) return;
        const visit = new SvelteKitVisit(new URL(location), restorationIdentifier, options)
        window.Turbo.adapter.visitStarted(visit)
    }
}

class Session {
    view = {
        cacheSnapshot() { }
    }
    clearCache() { }
    scrollToAnchorFromLocation(location: URL) { }
}

export class Turbo {
    session = new Session()
    navigator = new TurboNavigator()
    adapter: AdapterInterface | null = null

    registerAdapter(adapter: AdapterInterface) {
        this.adapter = adapter
    }
}

window.Turbo = new Turbo()
tick().then(() => {
    document.dispatchEvent(new Event('turbo:load'))
})