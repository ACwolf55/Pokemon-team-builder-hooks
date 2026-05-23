import React from 'react';
import { useNavigate } from 'react-router-dom';

interface UserNavProps {
  sessionTrainerName: string | null;
}

const UserNav: React.FC<UserNavProps> = ({ sessionTrainerName }) => {
  const navigate = useNavigate();

  const signOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-3 text-center">
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">Trainer</p>
        <h3 className="text-2xl font-bold text-gray-800">{sessionTrainerName}</h3>
      </div>

      <button
        onClick={() => navigate('/trainer-teams')}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-lg transition"
      >
        Saved Teams
      </button>

      <button
        onClick={signOut}
        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold p-2 rounded-lg transition"
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserNav;
