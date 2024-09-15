import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
      <Button variant="contained" onClick={() => changeLanguage('en')}>English</Button>
      <Button variant="contained" onClick={() => changeLanguage('ar')}>العربية</Button>
    </Box>
  );
}

export default LanguageSwitcher;
