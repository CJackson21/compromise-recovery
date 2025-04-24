/**
 * @file physicalSecurityGuides.ts
 * @description This file defines physical security guide content focused on staying safe in public spaces.
 * It provides actionable safety tips and resources for individuals concerned about being followed, monitored,
 * or harmed in person. Each guide includes a title, description, icon, step-by-step advice, and supporting links.
 * Used within the app to promote real-world personal safety and awareness.
 */

export interface GuideSection {
    title: string;
    description: string;
    icon: 'email' | 'shared' | 'security';
    steps: string[];
    links: { label: string; url: string }[];
}

export const physicalSecurityGuides: GuideSection[] = [
    {
        title: 'Safe Practices in Public Spaces',
        description:
            "When you're worried about being followed or monitored in person, small changes in your routines and awareness can make a big difference:",
        icon: 'security',
        steps: [
            'Vary Your Routine - Avoid predictable patterns when commuting or going out.',
            "Be Aware of Surroundings - Trust your instincts if something feels off. Don't be afraid to leave or ask for help.",
            "Use Safe Locations - Meet friends or support contacts in public, well-lit places. Let someone know where you're going.",
            'Avoid Using Shared Rides Under Your Name - Use gift cards or anonymous profiles if needed.',
            'Carry a Safety Tool - Depending on your comfort and local laws, you might carry a whistle, personal alarm, or pepper spray.',
        ],
        links: [
            {
                label: 'Personal Safety Tips (RAINN)',
                url: 'https://rainn.org/articles/safety-planning',
            },
            { label: 'Safe Ride Tips', url: 'https://www.uber.com/us/en/ride/safety/' },
        ],
    },
];
