export interface GuideSection {
    title: string;
    description: string;
    icon: 'email' | 'shared';
    steps: string[];
    links: { label: string; url: string }[];
}

export const familyAccountsGuides: GuideSection[] = [
    {
        title: 'Securing Your Personal Email',
        description:
            'Your email is the key to your online security. If someone has access to it, they can reset your passwords, monitor your activity, and even recover accounts\
             in your name. Take these steps to ensure no one else has access:',
        icon: 'email',
        steps: [
            "Change Your Password - Use a strong, unique password that isn't shared with other accounts.",
            'Enable Two-Factor Authentication (2FA) - Adds an extra layer of security when signing in.',
            'Check for Unauthorized Logins - Review recent activity for unknown locations or devices.',
            'Update Recovery Options - Ensure the recovery phone number and email belong only to you.',
            "Turn Off Email Forwarding - Ensure emails aren't being automatically forwarded to another account.",
        ],
        links: [
            {
                label: 'Gmail Security Settings',
                url: 'https://support.google.com/accounts/answer/46526',
            },
            {
                label: 'Outlook/Hotmail Security',
                url: 'https://support.microsoft.com/en-us/office/help-protect-your-outlook-com-email-account-a4f20fc5-4307-4ece-8231-6d4d4bd8a9ba',
            },
            {
                label: 'Yahoo Security',
                url: 'https://help.yahoo.com/kb/account/SLN2080.html',
            },
        ],
    },
    {
        title: 'Managing Family & Shared Accounts',
        description:
            "Some accounts, like Google, Microsoft, and Apple Family Sharing, can keep you connected to others without you realizing it. If you're part of a family group,\
             the account owner might be able to see purchases, location history, and other activity. Here's how to check and remove yourself from shared accounts:",
        icon: 'shared',
        steps: [
            'Google Family Group - View and leave a Google family group.',
            'Microsoft Family Safety - Remove yourself from a Microsoft family account.',
            "Apple Family Sharing - Manage or exit Apple's shared account system.",
            'Other Shared Services - Check if your accounts (like Amazon, Netflix, or cloud storage) are linked to anyone else.',
        ],
        links: [
            { label: 'Leave a Google Family Group', url: 'https://families.google.com/families' },
            {
                label: 'Manage Microsoft Family',
                url: 'https://www.microsoft.com/en-us/microsoft-365/family-safety',
            },
            {
                label: 'Apple Family Sharing Guide',
                url: 'https://support.apple.com/en-us/HT201081',
            },
        ],
    },
];
