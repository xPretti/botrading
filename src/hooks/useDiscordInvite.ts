import { useEffect, useState } from 'react';

const DISCORD_API = 'https://discord.com/api/invites';

interface DiscordInviteResponse {
   approximate_member_count: number;
   approximate_presence_count: number;
}

export interface DiscordInviteData {
   members: number;
   online: number;
}

interface HookState extends DiscordInviteData {
   loading: boolean;
   error: Error | null;
}

interface CachePayload {
   timestamp: number;
   data: DiscordInviteData;
}

const getCacheKey = (invite: string) => `discord_invite_${invite}`;

const readCache = (key: string, ttl: number): DiscordInviteData | null => {
   const cached = localStorage.getItem(key);
   if (!cached) return null;

   try {
      const parsed: CachePayload = JSON.parse(cached);
      const valid = Date.now() - parsed.timestamp < ttl;
      return valid ? parsed.data : null;
   } catch {
      return null;
   }
};

const saveCache = (key: string, data: DiscordInviteData) => {
   const payload: CachePayload = {
      timestamp: Date.now(),
      data,
   };

   localStorage.setItem(key, JSON.stringify(payload));
};

const fetchInvite = async (invite: string): Promise<DiscordInviteData> => {
   const res = await fetch(`${DISCORD_API}/${invite}?with_counts=true`);

   if (!res.ok) {
      throw new Error('Failed to fetch Discord invite');
   }

   const json: DiscordInviteResponse = await res.json();

   return {
      members: json.approximate_member_count ?? 0,
      online: json.approximate_presence_count ?? 0,
   };
};

export const useDiscordInvite = (invite: string, ttl: number = 12000): HookState => {
   const [state, setState] = useState<HookState>({
      members: 0,
      online: 0,
      loading: true,
      error: null,
   });

   useEffect(() => {
      if (!invite) return;

      const cacheKey = getCacheKey(invite);

      const load = async () => {
         try {
            const cached = readCache(cacheKey, ttl);

            if (cached) {
               setState({ ...cached, loading: false, error: null });
               return;
            }

            const data = await fetchInvite(invite);

            saveCache(cacheKey, data);

            setState({ ...data, loading: false, error: null });
         } catch (err) {
            setState((prev) => ({
               ...prev,
               loading: false,
               error: err instanceof Error ? err : new Error('Unknown error'),
            }));
         }
      };

      load();
   }, [invite, ttl]);

   return state;
};
