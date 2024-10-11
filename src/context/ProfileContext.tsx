/* eslint-disable react-refresh/only-export-components */
import { PlatformType } from '@/validators/customize-link.schema';
import { ProfileDetailsType } from '@/validators/profile-details.schema';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ProfileContextType {
  profileDetails: ProfileDetailsType;
  customizeLinks: PlatformType[];
  loading: boolean;
  saving: boolean;
  updateProfileDetails: (data: Partial<ProfileDetailsType>) => void;
  updateCustomizeLinks: (data: PlatformType[]) => void;
  saveData: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profileDetails, setProfileDetails] = useState<ProfileDetailsType>({
    firstName: '',
    lastName: '',
    email: '',
    picture: ''
  });

  const [customizeLinks, setCustomizeLinks] = useState<PlatformType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/user-data');
      const data = await response.json();
      setProfileDetails(data.profileDetails);
      setCustomizeLinks(data.customizeLinks);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateProfileDetails = (data: Partial<ProfileDetailsType>) => {
    setProfileDetails(prev => ({ ...prev, ...data }));
  };

  const updateCustomizeLinks = (data: PlatformType[]) => {
    setCustomizeLinks(data);
  };

  const saveData = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/user-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ profileDetails, customizeLinks }),
      });
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profileDetails,
        customizeLinks,
        loading,
        saving,
        updateProfileDetails,
        updateCustomizeLinks,
        saveData,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};