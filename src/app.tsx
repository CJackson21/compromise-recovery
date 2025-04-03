import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';

import Devices from './components/pages/Devices';
import FamilyAccounts from './components/pages/FamilyAccounts';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import PhysicalSecurity from './components/pages/PhysicalSecurity';
import SocialMedia from './components/pages/SocialMedia';
import SocialMediaGuidPage from './components/pages/SocialMediaGuidePage';

export default function App() {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/social" element={<SocialMedia />} />
                    <Route path="/family" element={<FamilyAccounts />} />
                    <Route path="/devices" element={<Devices />} />
                    <Route path="/physical" element={<PhysicalSecurity />} />
                    <Route path="/social/:platform" element={<SocialMediaGuidPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PageLayout>
        </Router>
    );
}
