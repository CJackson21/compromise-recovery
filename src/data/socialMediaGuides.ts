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
                title: 'Deactivate on Mobile',
                steps: [
                    'Sign into Instagram.',
                    'Go to your Account Profile > menu > Settings and privacy.',
                    'Open Accounts Center > Personal details.',
                    'Select Account ownership and control > Deactivation or deletion. Select the account you want to remove, choose Delete account, and tap Continue.',
                    'Select a reason for leaving and tap Continue. Sign in again to confirm you want to permanently delete your Instagram account.',
                ],
                images: [
                    '/img/delete_insta_mobile_1.png',
                    '/img/delete_insta_mobile_2.png',
                    '/img/delete_insta_mobile_3.png',
                    '/img/delete_insta_mobile_4.png',
                    '/img/delete_insta_mobile_5.png',
                ],
            },
            {
                title: 'Deactivate on a Computer',
                steps: [
                    'Sign into Instagram.',
                    'Go to More > Settings > Accounts Center > Personal details > Account ownership and control.',
                    'Click Deactivation or deletion and choose the account you want to deactivate.',
                    'Select Deactivate account, click Continue, and re-enter your password to confirm.',
                    'Choose a reason for deactivating Instagram, click Continue, and then Deactivate account to confirm.',
                ],
                // TODO: add images
                images: [],
            },
            {
                title: 'Deactivate via Direct Link',
                steps: [
                    'Sign into Instagram and go to the deletion page.',
                    'Choose a reason from the dropdown.',
                    'Click Delete.',
                ],
                link: 'https://www.instagram.com/accounts/remove/request/permanent/',
                // TODO: add images
                images: [],
            },
        ],
    },
};
