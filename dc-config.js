/**
 * DeadZone Chronicles Configuration
 * 
 * This file contains all configurable links and settings for the DC website.
 * Update the values below to enable/disable features and set URLs.
 */

const dcConfig = {
    // Server Shop Configuration
    shop: {
        enabled: false,                    // Set to true to enable the shop
        url: '',                           // Shop URL (e.g., 'https://shop.deadzonechronicles.com')
        title: 'Server Shop',              // Shop page title
        subtitle: '',                      // Shop page subtitle (leave empty to hide)
        message: 'Welcome to the DeadZone Chronicles server shop!', // Shop page message
        linkText: 'Visit Shop',            // Text for the shop link button
        openInNewTab: true                 // Open shop in new tab
    },

    // Forums Configuration
    forums: {
        enabled: false,                    // Set to true to enable forums link
        url: '',                           // Forums URL (e.g., 'https://forums.deadzonechronicles.com')
        name: 'Forums',                    // Display name for forums
        icon: '💬',                        // Icon/emoji for forums
        openInNewTab: true                 // Open forums in new tab
    },

    // Roadmap Configuration
    roadmap: {
        enabled: false,                    // Set to true to enable roadmap link
        url: '',                           // Roadmap URL (e.g., 'https://roadmap.deadzonechronicles.com')
        name: 'Roadmap',                   // Display name for roadmap
        icon: '🗺️',                        // Icon/emoji for roadmap
        openInNewTab: true                 // Open roadmap in new tab
    },

    // Wiki/Documentation Configuration
    wiki: {
        enabled: false,                    // Set to true to enable wiki link
        url: '',                           // Wiki URL (e.g., 'https://wiki.deadzonechronicles.com')
        name: 'Wiki',                      // Display name for wiki
        icon: '📖',                        // Icon/emoji for wiki
        openInNewTab: true                 // Open wiki in new tab
    },

    // Status Page Configuration
    status: {
        enabled: false,                    // Set to true to enable status page link
        url: '',                           // Status page URL (e.g., 'https://status.deadzonechronicles.com')
        name: 'Server Status',              // Display name for status page
        icon: '📊',                        // Icon/emoji for status page
        openInNewTab: true                 // Open status page in new tab
    },

    // Support/Tickets Configuration
    support: {
        enabled: false,                    // Set to true to enable support link
        url: '',                           // Support URL (e.g., 'https://support.deadzonechronicles.com')
        name: 'Support',                   // Display name for support
        icon: '🎫',                        // Icon/emoji for support
        openInNewTab: true                 // Open support in new tab
    },

    // Custom Links Array
    // Add any additional custom links here
    customLinks: [
        // Example:
        // {
        //     enabled: true,
        //     url: 'https://example.com',
        //     name: 'Custom Link',
        //     icon: '🔗',
        //     openInNewTab: true,
        //     position: 'nav' // 'nav' for navigation, 'footer' for footer, 'both' for both
        // }
    ],

    // Discord Configuration
    discord: {
        url: 'https://discord.gg/fF7wU3f6fN', // Discord invite URL
        openInNewTab: true
    },

    // Social Media Links (optional)
    social: {
        twitter: {
            enabled: false,
            url: '',
            username: ''
        },
        youtube: {
            enabled: false,
            url: '',
            channelName: ''
        },
        twitch: {
            enabled: false,
            url: '',
            username: ''
        },
        reddit: {
            enabled: false,
            url: '',
            subreddit: ''
        }
    },

    // Server Information
    server: {
        name: 'DeadZone Chronicles',
        tagline: 'Zombie Apocalypse Full PvP Server',
        releaseDate: 'TBD',                // Release date or 'TBD'
        ip: '',                           // Server IP (if applicable)
        port: '',                         // Server port (if applicable)
        version: '1.0.0'                  // Current version
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dcConfig;
}
