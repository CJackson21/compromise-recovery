/**
 * @file guideSections.ts
 * @description This file defines reusable security guide sections for the application.
 * Each guide includes a title, a brief introduction, and a list of actionable steps.
 * These guides are used to help users improve their digital safety across different devices.
 */

export interface GuideSectionCard {
    title: string;
    intro: string;
    steps: string[];
}

export const deviceSecurityGuide: GuideSectionCard = {
    title: 'Securing Your Phone & Smartwatch',
    intro:
        'Since phones and smartwatches constantly track location and sync with other devices, ' +
        'take these steps to fully secure them:',
    steps: [
        '✅ Turn Off Location Services - Prevent apps and system services from tracking your movements.',
        '✅ Check for Tracking Apps or Spyware - Look for unknown apps or settings that allow remote access.',
        '✅ Remove Unwanted Devices - Check if your phone or watch is connected to any old accounts.',
        '✅ Turn Off Bluetooth & Wi-Fi When Not in Use - Prevent unauthorized tracking and connections.',
        "✅ Factory Reset if Necessary - If you're unsure whether your device is fully secure, a factory reset ensures a clean start.",
    ],
};

export const computerSecurityGuide: GuideSectionCard = {
    title: 'Securing Your Computer',
    intro:
        'Computers often store sensitive documents, saved passwords, and access to personal accounts. ' +
        'If someone has physical access, they may be able to install spyware or access your files. Here’s how to secure it:',
    steps: [
        '✅ Create a Separate User Account - Don’t share your main login. Create a guest or limited account for others if needed.',
        '✅ Require a Password on Wake - Prevent someone from quickly accessing your computer while you’re away.',
        '✅ Use Full Disk Encryption - Enable FileVault (macOS) or BitLocker (Windows) to encrypt your files in case your device is stolen.',
        '✅ Check for Remote Access Tools - Make sure apps like TeamViewer or AnyDesk aren’t installed without your knowledge.',
        '✅ Run Antivirus/Malware Scans Regularly - Scan for keyloggers or spyware.',
    ],
};

export const hiddenDeviceGuide: GuideSectionCard = {
    title: 'Check for Hidden Tracking Devices',
    intro: 'If you’re concerned that someone may be physically tracking or monitoring you, it’s important to check for hidden devices:',
    steps: [
        '✅ Inspect Bags, Car, and Clothing - Look for unfamiliar objects like tags, keychains, or USB sticks.',
        '✅ Use Bluetooth Scanner Apps - These can detect nearby unknown Bluetooth devices that could be trackers.',
        '✅ Check for AirTags or Tile Trackers - iPhones can alert you automatically. Android users can use the “Tracker Detect” app.',
        '✅ Scan Your Wi-Fi Network - Look for unknown devices connected to your home network.',
        '✅ Ask for Help - Police departments or domestic violence centers may assist with physical sweeps.',
    ],
};
