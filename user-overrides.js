// Arkenfox Override Settings file

// What does this do?
// https://github.com/arkenfox/user.js/wiki/3.1-Overrides
// The override changes the stated settings, to fit your needs
// Please modify it how you like, but don't modify the user.js itself


// Cosmetic: prevent Amazon, Google etc. from being pinned to the Newtabpage should you use it
// remove pinned website ads
user_pref("browser.newtabpage.pinned", "");
// remove Google & co. from "top sites"
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");

// restore pinned tabs
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand",true);

// Librewolf only, possible through GUI
//user_pref("identity.fxaccounts.enabled", true);

// Allow search shortcuts (seems to be disabled?)
user_pref("keyword.enabled", true);

// Disable Letterboxing (remove the screenborders, this makes you fingerprintable)
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Allow Mozilla Addons Manager for regular behavior
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false);

// Allow Firefoxes new Version notifications
// user_pref("browser.startup.homepage_override.mstone", "REPLACEWITHVERSIONNUMBER"); // this is removed in arkenfox, and needs to be removed entirely, otherwise you dont get version upgrade infos in the browser.
//user_pref("browser.startup.homepage", "about:home");
user_pref("browser.startup.page", 3);

// History & Session
// restore pinned tabs
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand",true);

//user_pref("privacy.sanitize.sanitizeOnShutdown", false); //prevents clearing Cookies on Shutdown
// user_pref("privacy.clearOnShutdown.cache", false); //clears a lot of trackers like ETags
user_pref("privacy.clearOnShutdown.history", false); // usability
user_pref("privacy.clearOnShutdown.sessions", false);

// System colors
user_pref("browser.display.use_system_colors", true);

user_pref("webgl.disabled", false); // use noscript! "WebGL fingerprint defender" may also help


// speed
user_pref("network.http.max-persistent-connections-per-server", 30);
user_pref("browser.cache.disk.enable", false);


// Captive Portal & Connectivity Check
// user_pref("captivedetect.canonicalURL", "");
// user_pref("network.captive-portal-service.enabled", false); // [FF52+]
// user_pref("network.connectivity-service.enabled", false);

// enable the native system Portal (Flatpak)
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);
//user_pref("widget.use-xdg-desktop-portal.location", 1);
//user_pref("widget.use-xdg-desktop-portal.mime-handler", 1);
//user_pref("widget.use-xdg-desktop-portal.open-uri", 1);
//user_pref("widget.use-xdg-desktop-portal.settings", 1);

// // Personal settings
// //
// always ask for download directory
user_pref("browser.download.useDownloadDir", false);
// Force enable dark mode
user_pref("ui.systemUsesDarkTheme", 1);
user_pref("browser.in-content.dark-mode", true);
user_pref("layout.css.prefers-color-scheme.content-override", 0);
// Enable dark theme
user_pref("extensions.activeThemeID", "default-theme@mozilla.org");
// UI density "Normal"
user_pref("browser.uidensity", 0);
// Restore previous session on startup
user_pref("browser.startup.page", 3);
// Blank new tab page
user_pref("browser.newtabpage.enabled", false);
// Disable annoying backspace keybind
user_pref("browser.backspace_action", 2);
// Allow scripts to close their window
user_pref("dom.allow_scripts_to_close_windows", true);
// Disable popup blocker (never has blocked a popup, always gets in the way)
user_pref("dom.disable_open_during_load", false);
// Allow scripts to close the window (useful for kubelogin)
user_pref("dom.allow_scripts_to_close_windows", true);
// Disable separate title bar
user_pref("browser.tabs.drawInTitlebar", true);
// Disable middle click opening tab from clipboard
user_pref("browser.tabs.searchclipboardfor.middleclick", false);
// Disable "Quarantined Domains"
user_pref("extensions.quarantinedDomains.enabled", false);
// Disable top sites in URL bar recommendations
user_pref("browser.urlbar.suggest.topsites", false);
// Enable actually useful URL bar recommendations
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
// Better scrolling
user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", 1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting", 1.0);
user_pref("mousewheel.default.delta_multiplier_y", 300);

user_pref("network.security.ports.banned.override", "6000");
user_pref("identity.sync.tokenserver.uri", "http://192.168.0.100:6000/token/1.0/sync/1.5");


// PREF: Show HTTPS in the URL
user_pref("browser.urlbar.trimHttps", false);
// PREF: restore login manager
user_pref("signon.rememberSignons", true);
// PREF: restore Top Sites on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true); // Shortcuts
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // clear default topsites
// PREF: remove sponsored content on New Tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts 
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories

// Disable recommendations in about:addons' Extensions and Themes panes [FF68+] ***/
user_pref("browser.discovery.enabled", false); // [SETTING] Privacy & Security>Firefox Data Collection & Use>...>Allow Firefox to make personalized extension recs.
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // Disable Extension recommendations ("Recommend extensions as you browse")
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // "Recommend features as you browse"
user_pref("extensions.webservice.discoverURL", "");
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.getAddons.showPane", false);
// Disable shopping experience [FF116+]
user_pref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false]
// Disable sending crash reports 
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable alerts about passwords breach
user_pref("signon.management.page.breach-alerts.enabled", false);
// Disable PingCentre telemetry (used in several System Add-ons) [FF57+]
user_pref("browser.ping-centre.telemetry", false);