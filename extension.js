// Run as Chrome extension
if (chrome)
{
    chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
        if (details.url.indexOf('utm_mangled') > -1) return;

        var link = UTMMangler(details.url);
        if (link)
        {
            chrome.tabs.update(details.tabId, { url: link });
        }
    });
}

