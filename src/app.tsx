import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Devices from './components/pages/Devices';
import FamilyAccounts from './components/pages/FamilyAccounts';
import Home from './components/pages/Home';
import SocialMedia from './components/pages/SocialMedia';
import SocialMediaGuidPage from './components/pages/SocialMediaGuidePage';

// Placeholder Components
// The pages are in /src/components and need to be stubbed out
const Physical = () => <h1 className="text-3xl font-bold">Physical Page</h1>;
const NotFound = () => <h1 className="text-3xl font-bold">404 - Not Found</h1>;

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/social" element={<SocialMedia />} />
                    <Route path="/family" element={<FamilyAccounts />} />
                    <Route path="/devices" element={<Devices />} />
                    <Route path="/physical" element={<Physical />} />
                    <Route path="/guide/:platform" element={<SocialMediaGuidPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
}
