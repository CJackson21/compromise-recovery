/**
 * @file socialMediaGuides.ts
 * @description This file contains step-by-step guides for managing or deleting social media accounts.
 * It is used as a data source for the SocialMediaGuides component, enabling easier maintainability
 * and consistent formatting across platforms. The structure supports multiple sections per guide, with
 * optional images and direct links. This file will be updated over time as platform steps change.
 *
 * (You're welcome, Wilson.)
 */

export interface Section {
    title: string;
    description?: string;
    steps: string[];
    images?: string[];
    link?: string;
}

export interface SocialMediaGuide {
    name: string;
    steps: Section[];
}

export const socialMediaGuides: Record<string, SocialMediaGuide> = {
    instagram: {
        name: 'Instagram',
        steps: [
            {
                title: 'Deactivate On Mobile',
                steps: [
                    'Go to your Instagram profile and tap the menu icon (three horizontal lines) in the top-right corner.',
                    'Tap Accounts Center under the “Settings and activity” section.',
                    'In Accounts Center, scroll down and tap Personal details.',
                    'Select Account ownership and control.',
                    'Tap Deactivation or deletion, then select your Instagram account.',
                    'Choose Delete account, tap Continue, and follow the prompts to confirm.',
                ],
                images: [
                    '/img/instagram/delete_insta_mobile_1.png',
                    '/img/instagram/delete_insta_mobile_2.png',
                    '/img/instagram/delete_insta_mobile_3.png',
                    '/img/instagram/delete_insta_mobile_4.png',
                    '/img/instagram/delete_insta_mobile_5.png',
                    '/img/instagram/delete_insta_mobile_6.png',
                ],
            },
            {
                title: 'Deactivate On A Computer',
                steps: [
                    'Click the “More” icon in the lower-left corner of Instagram, then select Settings.',
                    'In the Settings panel, click on “Accounts Center” under the Meta section.',
                    'Click on “Personal details” from the Accounts Center menu.',
                    'Select “Account ownership and control.”',
                    'Click “Deactivation or deletion,” then choose your Instagram account.',
                    'Select “Delete account,” click Continue, and follow the prompts to confirm permanent deletion.',
                ],
                images: [
                    '/img/instagram/delete_insta_computer_1.png',
                    '/img/instagram/delete_insta_computer_2.png',
                    '/img/instagram/delete_insta_computer_3.png',
                    '/img/instagram/delete_insta_computer_4.png',
                    '/img/instagram/delete_insta_computer_5.png',
                    '/img/instagram/delete_insta_computer_6.png',
                ],
            },
            {
                title: 'Deactivate via Direct Link',
                steps: [
                    'Sign into Instagram and go to the deletion page.',
                    'Choose a reason from the dropdown.',
                    'Click Delete.',
                ],
                link: 'https://www.instagram.com/accounts/remove/request/permanent/',
                // For future students if you want to add images go ahead. Didn't seem necessary rn
            },
        ],
    },
    facebook: {
        name: 'Facebook',
        steps: [
            {
                title: 'Deactivate On Mobile',
                steps: [
                    'Open the Facebook app and tap the menu icon (three horizontal lines) in the top-right corner.',
                    'Tap the dropdown arrow next to your profile and select “Go to Accounts Center.”',
                    'In Accounts Center, tap “Personal details” and then select “Account ownership and control.”',
                    'Tap “Deactivation or deletion,” then choose your Facebook account.',
                    'Select “Delete account,” tap Continue, and follow the prompts to permanently delete your account.',
                ],
                images: [
                    '/img/facebook/delete_facebook_mobile_1.png',
                    '/img/facebook/delete_facebook_mobile_2.png',
                    '/img/facebook/delete_facebook_mobile_3.png',
                    '/img/facebook/delete_facebook_mobile_4.png',
                    '/img/facebook/delete_facebook_mobile_5.png',
                ],
            },
            {
                title: 'Deactivate via Direct Link',
                steps: [
                    'Log into your Facebook account on a browser.',
                    'Visit the Facebook account deletion page.',
                    'Click “Delete account.”',
                    'Enter your password when prompted and confirm.',
                    'Your account will be scheduled for permanent deletion after 30 days unless you cancel.',
                ],
                link: 'https://www.facebook.com/help/delete_account',
            },
        ],
    },
    snapchat: {
        name: 'Snapchat',
        steps: [
            {
                title: 'Security Guide',
                steps: [
                    'Tap your Bitmoji in the top left of the Chat screen to open your profile.',
                    'Tap the gear icon in the top right to open Settings.',
                    'In Settings, scroll to "Two-Factor Authentication". Tap it and follow the steps to enable either SMS or an Authenticator App.',
                    'Scroll down to the "Privacy Controls" section and tap "See My Location".',
                    'Enable Ghost Mode to hide your location from others.',
                    'Still in "Privacy Controls", tap "Activity Indicator" and toggle it off to prevent others from seeing when you\'re active.',
                    'In "Privacy Controls", tap "See Me in Find Friends" and toggle it off. This prevents your account from appearing as a suggested friend.',
                    'At the very bottom of Settings under "More Information", tap "Safety Center" to explore Snapchat\'s official safety tools and resources.',
                ],
                images: [
                    '/img/snapchat/secure_snapchat_1.png',
                    '/img/snapchat/secure_snapchat_2.png',
                    '/img/snapchat/secure_snapchat_3.png',
                    '/img/snapchat/secure_snapchat_4.png',
                    '/img/snapchat/secure_snapchat_5.png',
                    '/img/snapchat/secure_snapchat_6.png',
                    '/img/snapchat/secure_snapchat_7.png',
                    '/img/snapchat/secure_snapchat_8.png',
                ],
            },
        ],
    },
    twitter: {
        name: 'X/Twitter',
        steps: [
            {
                title: 'Deactivate On Mobile',
                steps: [
                    'Tap your profile picture in the top left corner to open the menu, then scroll down and tap "Settings and privacy".',
                    'Scroll down and tap "Settings and privacy',
                    'Tap "Your account" to access account management options.',
                    'Tap "Deactivate your account", review the deactivation details including info on subscriptions, data downloads, and the 30-day reactivation window. Scroll to the bottom and tap the red "Deactivate" button, then enter your password if prompted to confirm the deactivation.',
                ],
                images: [
                    '/img/x/deactivate_x_mobile_1.png',
                    '/img/x/deactivate_x_mobile_2.png',
                    '/img/x/deactivate_x_mobile_3.png',
                    '/img/x/deactivate_x_mobile_4.png',
                ],
            },
            {
                title: 'Deactivate On A Computer',
                steps: [
                    'Click "More" in the left-hand navigation bar to expand additional options.',
                    'Select "Settings and privacy" from the dropdown menu.',
                    'Click "Your account" in the Settings sidebar, then choose "Deactivate your account".',
                    'Review the deactivation details, then click the red "Deactivate" button. Enter your account password and click "Deactivate" again to confirm.',
                ],
                images: [
                    '/img/x/deactivate_x_desktop_1.png',
                    '/img/x/deactivate_x_desktop_2.png',
                    '/img/x/deactivate_x_desktop_3.png',
                    '/img/x/deactivate_x_desktop_4.png',
                    '/img/x/deactivate_x_desktop_5.png',
                ],
            },
        ],
    },
};
