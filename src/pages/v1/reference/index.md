---
keywords:
  - Express Embed SDK
  - Express Editor
  - Embed SDK
  - Quick Actions
  - SDK
  - JavaScript
  - Embed
  - API Documentation
  - Reference
  - Initialize
  - CCEverywhere
title: SDK Reference
description: This is the reference page for the existing components in the SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
--- 
<InlineAlert variant="warning" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

This version of the docs and SDK will be sunsetted later this year. As a result, we are no longer approving new submissions that integrate with v2.

Instead, we would love for you to start integrating the new version of the SDK. To join the private beta and get early access to documentation, please fill out [this form](https://airtable.com/shryiOk1VwoWxUCZs?prefill_Platform=Adobe%20Express%20Embed%20SDK&hide_Platform=true).

# SDK Reference

This is the main API for accessing all Adobe Express Embed SDK components. The `initialize()` method takes [HostInfo](#hostinfo) and an optional [ConfigParams](#configparams), and returns a [CCEverywhere](#cceverywhere) object.

## initialize()

The default method `initialize()` is the API used to initialize the SDK. Make sure to call it only once a page.

```js
// after loading the SDK into the window
window.CCEverywhere.initialize(
    /* HostInfo */
    {
        clientId: YOUR_CLIENT_ID,
        appName: YOUR_PROJECT_NAME,
        appVersion: { major: 1, minor: 0 },
        platformCategory: 'web', 
    },
    /* ConfigParams (optional) */
    {
        locale: 'en_US',
    }
);
```

### HostInfo

| Property | Type | Description
| :-- | :--| :--
|clientId | string | Your API Key
|appName | string | Name of project folder created in user's Adobe Express account
|appVersion | { major: number, minor: number, patch?: number} | Your app version
| platformCategory | 'web' | Specify host app platform

### ConfigParams

The **locale** field defaults to **'en_US'** if nothing is specified.  Visit the [customization](../../guides/../pages/guides/full_editor/customization/index.md) page for a full locale list.

| Property | Type | Description
| :-- | :--| :--
|locale | string | Language settings for SDK components

## CCEverywhere

The CCEverywhere object is the object returned when the SDK is initialized.

As of today, it exposes 4 methods:

1. `openQuickAction()`: Quick actions component
2. `createDesign()`: Full editor component
3. `editDesign()`: Full editor component