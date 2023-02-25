import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english.json';
import polish from './polish.json';

i18next.use(initReactI18next).init({
    lng:"us",
    resources:{
        us:english,
        pl:polish
    },
    react:{
        useSuspense:false
    },
})
export default i18next;