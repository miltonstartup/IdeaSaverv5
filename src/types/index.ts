/**
 * Global type definitions for the Idea Saver application
 */

/**
 * Audio recording related types
 */
export interface AudioRecording {
  id: string;
  name: string;
  date: string;
  duration: number;
  audioDataUri?: string;
  transcription?: string;
  summary?: string;
  expandedContent?: string;
  actionItems?: string[];
  tags?: string[];
}

/**
 * Note/Idea data structure
 */
export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  audioRecording?: AudioRecording;
  isArchived: boolean;
  priority: 'low' | 'medium' | 'high';
}

/**
 * User profile information
 */
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  subscription: 'free' | 'premium' | 'enterprise';
  credits: number;
  settings: UserSettings;
}

/**
 * User settings and preferences
 */
export interface UserSettings {
  language: 'en' | 'es';
  theme: 'light' | 'dark' | 'auto';
  cloudSyncEnabled: boolean;
  autoCloudSync: boolean;
  deletionPolicyDays: number;
  autoTranscribe: boolean;
  autoSummarize: boolean;
  defaultTags?: string[];
}

/**
 * API response wrapper
 */
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
  message?: string;
}

/**
 * Recording state for the audio recorder
 */
export interface RecordingState {
  isRecording: boolean;
  isPaused: boolean;
  duration: number;
  audioBlob?: Blob;
  error?: string;
}

/**
 * Search and filter options
 */
export interface SearchFilters {
  query: string;
  tags: string[];
  dateRange: {
    start?: Date;
    end?: Date;
  };
  priority?: 'low' | 'medium' | 'high';
  hasAudio?: boolean;
  isArchived?: boolean;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

/**
 * Component props for common UI elements
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}