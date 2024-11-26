// app/components/UserProfile.tsx

"use client";

import { useSession } from 'next-auth/react';

export default function UserProfile() {
    const { data: session } = useSession();

    if (!session) {
        return <p>Non signed in</p>;
    }

    return (
        <div>
            <p>Signed as: {session.user?.name}</p>
        </div>
    );
}