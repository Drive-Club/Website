/**
 * DeadZone Chronicles Navigation Script
 * 
 * Dynamically updates navigation based on dc-config.js
 * Include this script after dc-config.js in all pages
 */

(function() {
    'use strict';

    function updateNavigation() {
        if (typeof dcConfig === 'undefined') return;

        // Find all navigation containers
        const navContainers = document.querySelectorAll('.dc-nav-links');
        
        navContainers.forEach(container => {
            // Check if shop link exists, if not add it
            let shopLink = container.querySelector('a[href="dc-shop.html"]');
            if (!shopLink) {
                const shopItem = document.createElement('li');
                shopItem.id = 'shopNavItem';
                shopLink = document.createElement('a');
                shopLink.href = 'dc-shop.html';
                shopLink.className = 'dc-nav-link';
                shopLink.textContent = 'Shop';
                shopLink.id = 'shopNavLink';
                shopItem.appendChild(shopLink);
                container.appendChild(shopItem);
            }

            // Update shop link appearance based on config
            if (dcConfig.shop && dcConfig.shop.enabled) {
                shopLink.style.opacity = '1';
                shopLink.style.cursor = 'pointer';
                shopLink.style.textDecoration = 'none';
            } else {
                shopLink.style.opacity = '0.5';
                shopLink.style.cursor = 'not-allowed';
            }

            // Check if links page should be shown
            const shouldShowLinks = dcConfig.forums?.enabled || 
                                   dcConfig.roadmap?.enabled || 
                                   dcConfig.wiki?.enabled || 
                                   dcConfig.status?.enabled || 
                                   dcConfig.support?.enabled || 
                                   (dcConfig.customLinks && dcConfig.customLinks.some(l => l.enabled && l.position !== 'footer'));

            let linksLink = container.querySelector('a[href="dc-links.html"]');
            if (shouldShowLinks) {
                if (!linksLink) {
                    const linksItem = document.createElement('li');
                    linksItem.id = 'linksNavItem';
                    linksLink = document.createElement('a');
                    linksLink.href = 'dc-links.html';
                    linksLink.className = 'dc-nav-link';
                    linksLink.textContent = 'Links';
                    linksItem.appendChild(linksLink);
                    container.appendChild(linksItem);
                }
            } else if (linksLink) {
                linksLink.parentElement.remove();
            }
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateNavigation);
    } else {
        updateNavigation();
    }
})();
