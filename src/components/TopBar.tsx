import gfuLogo from '../../public/img/gf-blue-gold.png'

//---------------------------------------------------------------------------
// Types
//---------------------------------------------------------------------------
interface TopBarProps { 
  // the ? makes it optional
  title?: string;   
}

const TopBar: React.FC<TopBarProps> = ({ title = 'Secure Your Digital Presence' }) => {
  return (
    <div 
      className="w-full bg-gradient-to-r from-cyan-100 via-blue-200 to-blue-400 px-6 py-3 flex items-center border-t-4 border-purple-500"
    >
      {/* GFU Logo & Title in Flexbox */}
      <div className="flex items-center gap-x-6">
        <img src={gfuLogo} alt="Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold text-blue-900">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TopBar;
