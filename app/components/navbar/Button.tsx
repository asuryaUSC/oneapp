'use client'

const Button = ({ children, onClick }) => {
    return (
      <button 
        onClick={onClick}
        className="px-4 py-2 rounded-lg border transition-colors duration-300"
        style={{ borderColor: '#343E59', color: '#343E59' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#343E59';
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#343E59';
        }}
      >
        {children}
      </button>
    );
  };
  
export default Button;
  