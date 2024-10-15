//src/components/Navbar.tsx

"use client";

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation'; // Import Next.js router

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('domov');
  const router = useRouter(); // Initialize router

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    // Navigate to the corresponding page based on the selected value
    switch (newValue) {
      case 'domov':
        router.push('/'); // Go to the homepage
        break;
      case 'prispevky':
        router.push('/prispevok'); // Go to the "Príspevky" (Posts) page
        break;
      case 'registracia':
        router.push('/auth/registracia'); // Go to the registration page
        break;
      case 'prihlasenie':
        router.push('/auth/prihlasenie'); // Go to the login page
        break;
      default:
        router.push('/'); // Default to home if something else
    }
  };

  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'fixed', bottom: 0 }} // Stretches across the width and sticks to the bottom
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Domov"
        value="domov"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Príspevky"
        value="prispevky"
        icon={<ArticleIcon />}
      />
      <BottomNavigationAction
        label="Registrácia"
        value="registracia"
        icon={<PersonAddIcon />}
      />
      <BottomNavigationAction
        label="Prihlásenie"
        value="prihlasenie"
        icon={<LoginIcon />}
      />
    </BottomNavigation>
  );
}
