import React from 'react';
import './UpdateDisplay.css';

interface UpdateDisplayProps {
  success: boolean;
}

const UpdateDisplay: React.FC<UpdateDisplayProps> = ({ success }) => {
  return (
    <div className={`update-display ${success ? 'success' : 'failure'}`}>
      {success ? 'Employee updated successfully!' : 'Error updating employee. Please try again.'}
    </div>
  );
};

export default UpdateDisplay;
