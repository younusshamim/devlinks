/* eslint-disable react-refresh/only-export-components */
import { showErrorToast, showSuccessToast } from '@/config/toast-options';
import { useGetUser, useUpdateUser } from '@/hooks/user-hooks';
import { StandardResponse } from '@/types/response';
import { UserDetailsType } from '@/types/user-details.type';
import { PlatformType } from '@/validators/customize-link.schema';
import { ProfileDetailsType } from '@/validators/profile-details.schema';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ProfileContextType {
  userDetails: UserDetailsType;
  loading: boolean;
  saving: boolean;
  updateProfileDetails: (data: Partial<ProfileDetailsType>) => void;
  updateCustomizeLinks: (data: PlatformType[]) => void;
  saveData: (data: UserDetailsType) => Promise<void>;
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
  const [saving, setSaving] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null); // Store userId in state
  const updateUser = useUpdateUser();

  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
    platforms: [],
  });

  const { isLoading } = useGetUser(userId, {
    onSuccess: (response: StandardResponse<UserDetailsType>) => {
      if (response.data) {
        setUserDetails(response.data);
      }
    },
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  const updateProfileDetails = (data: Partial<ProfileDetailsType>) => {
    setUserDetails(prev => ({ ...prev, ...data }));
  };

  const updateCustomizeLinks = (data: PlatformType[]) => {
    setUserDetails(prev => ({ ...prev, platforms: data }));
  };

  const saveData = async (data: UserDetailsType) => {
    const payload = { id: userId as string, userData: { ...userDetails, ...data } };
    try {
      const result = await updateUser.mutateAsync(payload);
      if (result.success) {
        showSuccessToast('User updated successfully');
      } else {
        showErrorToast(result.message || 'User login failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        showErrorToast(`Save data error: ${error.message}`);
      } else {
        showErrorToast('An unknown error occurred');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        userDetails,
        loading: isLoading,
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