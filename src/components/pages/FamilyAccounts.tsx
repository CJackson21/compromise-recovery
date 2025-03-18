import React from 'react';

// Icons
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// Layout components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function FamilyAccounts() {
    // Keeping the links, steps, etc at the top level makes them easier to find and change
    const cardStyles = React.useMemo(
        () => ({
            p: 3,
            borderRadius: 2,
            minWidth: 250,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
        }),
        []
    );

    const emailSecuritySteps = React.useMemo(
        () => [
            "Change Your Password - Use a strong, unique password that isn't shared with other accounts.",
            'Enable Two-Factor Authentication (2FA) - Adds an extra layer of security when signing in.',
            'Check for Unauthorized Logins - Review recent activity for unknown locations or devices.',
            'Update Recovery Options - Ensure the recovery phone number and email belong only to you.',
            "Turn Off Email Forwarding - Ensure emails aren't being automatically forwarded to another account.",
        ],
        []
    );

    const emailSecurityLinks = React.useMemo(
        () => [
            {
                label: 'Gmail Security Settings',
                url: 'https://support.google.com/accounts/answer/46526',
            },
            {
                label: 'Outlook/Hotmail Security',
                url: 'https://support.microsoft.com/en-us/office/help-protect-your-outlook-com-email-account-a4f20fc5-4307-4ece-8231-6d4d4bd8a9ba',
            },
            { label: 'Yahoo Security', url: 'https://help.yahoo.com/kb/account/SLN2080.html' },
        ],
        []
    );

    const familyAccountSteps = React.useMemo(
        () => [
            'Google Family Group - View and leave a Google family group.',
            'Microsoft Family Safety - Remove yourself from a Microsoft family account.',
            "Apple Family Sharing - Manage or exit Apple's shared account system.",
            'Other Shared Services - Check if your accounts (like Amazon, Netflix, or cloud storage) are linked to anyone else.',
        ],
        []
    );

    const familyAccountLinks = React.useMemo(
        () => [
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
        []
    );

    return (
        <Grid container spacing={8} justifyContent="center" className="w-full pt-8">
            {/* Section Heading */}
            <Grid size={12} textAlign="center">
                <MailOutlineIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Take Full Control of Your Email and Shared Accounts
                </Typography>
            </Grid>

            {/* Email Security Section */}
            <Grid sx={{ xs: 12, sm: 10, md: 8 }}>
                <Paper elevation={3} sx={cardStyles}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                        Securing Your Personal Email
                    </Typography>
                    <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
                        Your email is the key to your online security. If someone has access to it,
                        they can reset your passwords, monitor your activity, and even recover
                        accounts in your name. Take these steps to ensure no one else has access:
                    </Typography>
                    <List>
                        {emailSecuritySteps.map((step, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <LockIcon color="action" />
                                </ListItemIcon>
                                <ListItemText primary={step} />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="h6" fontWeight="bold" mt={4}>
                        🔗 Official Guides:
                    </Typography>
                    <Box mt={2} mb={5}>
                        {emailSecurityLinks.map((link, index) => (
                            <Typography key={index} variant="body2">
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                >
                                    {link.label}
                                </Link>
                            </Typography>
                        ))}
                    </Box>
                </Paper>
            </Grid>

            {/* Family Accounts Section */}
            <Grid sx={{ xs: 12, sm: 10, md: 8, mt: 4 }} pb={10}>
                <Paper elevation={3} sx={cardStyles}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                        Managing Family & Shared Accounts
                    </Typography>
                    <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
                        Some accounts, like Google, Microsoft, and Apple Family Sharing, can keep
                        you connected to others without you realizing it. If you're part of a family
                        group, the account owner might be able to see purchases, location history,
                        and other activity. Here's how to check and remove yourself from shared
                        accounts:
                    </Typography>
                    <List>
                        {familyAccountSteps.map((step, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <GroupIcon color="action" />
                                </ListItemIcon>
                                <ListItemText primary={step} />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="h6" fontWeight="bold" mt={4} textAlign="left">
                        🔗 Official Guides:
                    </Typography>
                    <Box mt={2} textAlign="left" mb={5}>
                        {familyAccountLinks.map((link, index) => (
                            <Typography key={index} variant="body2">
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                >
                                    {link.label}
                                </Link>
                            </Typography>
                        ))}
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default FamilyAccounts;
