import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Upload } from 'lucide-react';

interface UploadButtonProps {
  onUpload: (file: File) => void;
  className?: string;
  label?: string;
  accept?: string;
  icon?: React.ReactNode;
}

export const UploadButton: React.FC<UploadButtonProps> = ({
  onUpload,
  className,
  label = 'Upload screenshot here',
  accept = 'image/*',
  icon = <Upload className="h-8 w-8" />,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div
      className={cn(
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-secondary transition flex flex-col items-center justify-center',
        isDragging ? 'border-secondary bg-secondary/5' : 'border-gray-300',
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full text-white mb-2">
        {icon}
      </div>
      <p className="text-muted">{label}</p>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
      />
    </div>
  );
};

export default UploadButton;
