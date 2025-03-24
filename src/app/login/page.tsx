import { useTranslations } from 'next-intl';
const Login = () => {
  const t = useTranslations('index');
  return <h1 className="flex justify-center">{t('login')}</h1>;
};
export default Login;
