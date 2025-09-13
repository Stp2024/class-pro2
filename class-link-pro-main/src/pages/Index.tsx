import { useNavigate } from 'react-router-dom';
import RoleSelection from '@/components/RoleSelection';
import { UserRole } from '@/types';

const Index = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: UserRole) => {
    if (role === 'student') {
      navigate('/student');
    } else {
      navigate('/lecturer');
    }
  };

  return (
    <>
      <RoleSelection onRoleSelect={handleRoleSelect} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
        <a href="/class-hub-pro.apk" download>
          <button
            style={{
              padding: '12px 20px',
              background: '#0d47a1',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer'
            }}
          >
            📥 Download Android App
          </button>
        </a>
      </div>
    </>
  );
};

export default Index;
