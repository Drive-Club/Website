# DeadZone Chronicles Configuration Guide

This guide explains how to configure links, features, and settings for the DeadZone Chronicles website.

## Configuration File

All configuration is done in `dc-config.js`. Simply edit the values in this file to enable/disable features and set URLs.

## Server Shop Configuration

To enable the Server Shop:

```javascript
shop: {
    enabled: true,                                    // Set to true
    url: 'https://your-shop-url.com',                 // Your shop URL
    title: 'Server Shop',                            // Page title
    subtitle: 'Exclusive Items & Perks',             // Optional subtitle
    message: 'Welcome to our shop!',                 // Page message
    linkText: 'Visit Shop',                          // Button text
    openInNewTab: true                               // Open in new tab
}
```

**When disabled (default):**
- Shop link appears greyed out in navigation
- Shop page shows "Coming Soon" message
- Link is not clickable

**When enabled:**
- Shop link appears normal in navigation
- Shop page shows configured content
- Link button becomes active and clickable

## Forums Configuration

To enable Forums link:

```javascript
forums: {
    enabled: true,
    url: 'https://forums.deadzonechronicles.com',
    name: 'Forums',
    icon: '💬',
    openInNewTab: true
}
```

## Roadmap Configuration

To enable Roadmap link:

```javascript
roadmap: {
    enabled: true,
    url: 'https://roadmap.deadzonechronicles.com',
    name: 'Roadmap',
    icon: '🗺️',
    openInNewTab: true
}
```

## Wiki Configuration

To enable Wiki link:

```javascript
wiki: {
    enabled: true,
    url: 'https://wiki.deadzonechronicles.com',
    name: 'Wiki',
    icon: '📖',
    openInNewTab: true
}
```

## Status Page Configuration

To enable Server Status link:

```javascript
status: {
    enabled: true,
    url: 'https://status.deadzonechronicles.com',
    name: 'Server Status',
    icon: '📊',
    openInNewTab: true
}
```

## Support/Tickets Configuration

To enable Support link:

```javascript
support: {
    enabled: true,
    url: 'https://support.deadzonechronicles.com',
    name: 'Support',
    icon: '🎫',
    openInNewTab: true
}
```

## Custom Links

Add any additional custom links:

```javascript
customLinks: [
    {
        enabled: true,
        url: 'https://example.com',
        name: 'Custom Link',
        icon: '🔗',
        openInNewTab: true,
        position: 'nav'  // 'nav', 'footer', or 'both'
    }
]
```

## Social Media Links

Configure social media (optional):

```javascript
social: {
    twitter: {
        enabled: true,
        url: 'https://twitter.com/deadzonechronicles',
        username: '@deadzonechronicles'
    },
    youtube: {
        enabled: true,
        url: 'https://youtube.com/@deadzonechronicles',
        channelName: 'DeadZone Chronicles'
    }
    // ... etc
}
```

## Server Information

Update server details:

```javascript
server: {
    name: 'DeadZone Chronicles',
    tagline: 'Zombie Apocalypse Full PvP Server',
    releaseDate: 'TBD',  // or actual date
    ip: '',              // Server IP if applicable
    port: '',            // Server port if applicable
    version: '1.0.0'     // Current version
}
```

## Quick Start

1. **Enable Server Shop:**
   - Open `dc-config.js`
   - Find `shop` section
   - Set `enabled: true`
   - Add your shop URL
   - Save the file

2. **Enable Forums:**
   - Find `forums` section
   - Set `enabled: true`
   - Add your forums URL
   - Save the file

3. **Add Custom Links:**
   - Find `customLinks` array
   - Add new link object with `enabled: true`
   - Save the file

## Navigation Behavior

- **Disabled links:** Appear greyed out with reduced opacity
- **Enabled links:** Appear normal and are fully clickable
- **Shop link:** Only appears in navigation when enabled
- **Links page:** Automatically appears when any additional links are enabled

## Files Structure

- `dc-config.js` - Main configuration file (edit this)
- `dc-shop.html` - Server shop page
- `dc-links.html` - Links & resources page
- `dc-nav.js` - Navigation update script (auto-updates nav based on config)

## Notes

- All changes take effect immediately after saving `dc-config.js`
- No need to edit HTML files - everything is configured in the JS file
- Links page (`dc-links.html`) automatically shows all enabled links
- Disabled links show as "Coming Soon" on the links page
