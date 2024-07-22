export type Post = {
  post: string;
  id?: number;
  username?: string;
  content?: string;
  created_at?: string;
  user_id?: number;
  like_count?: number;
  liked_by_current_user?: boolean;
};
