export interface GuideLink {
    label: string;
    url: string;
}

export const guideLinks: { [key: string]: GuideLink[] } = {
    facebook: [
        {
            label: 'Security Features & Tips',
            url: 'https://www.facebook.com/help/379220725465972/',
        },
        {
            label: 'Logout from Devices',
            url: 'https://www.facebook.com/help/2119906455011877/',
        },
    ],
    instagram: [
        { label: 'Security Features & Tips', url: 'https://help.instagram.com/369001149843369/' },
        {
            label: 'Logout from Devices',
            url: 'https://help.instagram.com/623835647655355/?helpref=related_articles',
        },
    ],
    twitter: [
        {
            label: 'Security Features & Tips',
            url: 'https://help.x.com/en/safety-and-security/account-security-tips',
        },
        {
            label: 'Logout from Devices',
            url: 'https://help.x.com/en/managing-your-account/connect-or-revoke-access-to-third-party-apps',
        },
    ],
    snapchat: [
        { label: 'Security Features & Tips', url: 'https://help.snapchat.com/hc/en-us/' },
        {
            label: 'Logout from Devices',
            url: 'https://help.snapchat.com/hc/en-us/articles/23515601788948-How-do-I-manage-the-devices-where-I-m-currently-signed-into-my-Snapchat-account',
        },
    ],
};
