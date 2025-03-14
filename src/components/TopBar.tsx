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
      {/* GFU Logo */}
      <div className="flex items-center mr-4">
        <div className="text-3xl font-bold text-blue-900 border-2 border-yellow-500 px-2 py-1 rounded">
          F
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-900">
        {title}
      </h1>
    </div>
  );
};

export default TopBar;
