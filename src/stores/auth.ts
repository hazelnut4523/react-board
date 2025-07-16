import { create } from "zustand";
import { persist } from "zustand/middleware";

type Session = {
  access_token: string;
  expires_in: number;
  expires_at?: number;
  refresh_token: string;
  token_type: string;
};

type User = {
  id: string;
  email?: string;
};

type State = {
  session?: Session;
  user?: User;
};

type SessionAction = {
  setSession: (newSession: Session) => void;
  clearSession: () => void;
};

type UserAction = {
  setUser: (newUser: User) => void;
  clearUser: () => void;
};

type Action = SessionAction &
  UserAction & {
    clear: () => void;
  };

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      session: undefined,
      user: undefined,

      // SessionAction
      setSession: (newSession: Session) => set({ session: newSession }),
      clearSession: () => set({ session: undefined }),

      // UserAction
      setUser: (newUser: User) => set({ user: newUser }),
      clearUser: () => set({ user: undefined }),

      // Action
      clear: () => set({ session: undefined, user: undefined }),
    }),
    { name: "user-auth" },
  ),
);
