/* eslint-disable react-refresh/only-export-components */
import { showErrorToast, showSuccessToast } from '@/config/toast-options';
import { useGetUser, useUpdateUser } from '@/hooks/user-hooks';
import { UserDetailsType } from '@/types/user-details.type';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ProfileContextType {
  userDetails: UserDetailsType;
  fetching: boolean;
  saving: boolean;
  updateUserDetails: (data: Partial<UserDetailsType>) => void;
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
  const [userId, setUserId] = useState<string | null>(null);
  const updateUser = useUpdateUser();
  const [userDetails, setUserDetails] = useState<UserDetailsType>(null as unknown as UserDetailsType);

  const { isLoading: fetching, data, refetch } = useGetUser(userId);

  useEffect(() => {
    if (data && data.data) {
      updateUserDetails(data.data);
    }
  }, [data]);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  const updateUserDetails = (data: UserDetailsType) => {
    setUserDetails(prev => ({ ...prev, ...data }));
  }

  const saveData = async (data: UserDetailsType) => {
    const payload = { id: userId as string, userData: { ...userDetails, ...data } };
    delete payload.userData._id;
    try {
      const result = await updateUser.mutateAsync(payload);
      if (result.success) {
        refetch()
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
        fetching,
        saving,
        updateUserDetails,
        saveData,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};