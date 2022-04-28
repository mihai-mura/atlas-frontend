import LANGUAGE from './languages.json';
import ROLE from './roles';
import { IconBrandSafari, IconChecklist, IconSettings, IconUser } from '@tabler/icons';

//!  language based route name
const getRoutes = (role, selectedLanguage) => {
	switch (role) {
		case ROLE.USER:
			return [
				{
					path: '/',
					name: LANGUAGE.sidebar_explore[selectedLanguage],
					icon: <IconBrandSafari />,
				},
				{
					path: '/profile',
					name: LANGUAGE.sidebar_profile[selectedLanguage],
					icon: <IconUser />,
				},
				{
					path: '/settings',
					name: LANGUAGE.sidebar_settings[selectedLanguage],
					icon: <IconSettings />,
				},
			];
		case ROLE.MODERATOR:
			return [
				{
					path: '/',
					name: 'Posts',
					icon: <IconBrandSafari />,
				},
				{
					path: '/settings',
					name: 'Settings',
					icon: <IconSettings />,
				},
			];
		case ROLE.LOCAL_ADMIN:
			return [
				{
					path: '/',
					name: 'Explore',
					icon: <IconBrandSafari />,
				},
				{
					path: '/local-admin/address-verification',
					name: 'Address Verification',
					icon: <IconChecklist />,
				},
				{
					path: '/local-admin/moderators',
					name: 'Moderators',
					icon: <IconUser />,
				},
				{
					path: '/local-admin/settings',
					name: 'Settings',
					icon: <IconSettings />,
				},
			];
		case ROLE.GENERAL_ADMIN:
			return [
				{
					path: '/general-admin',
					name: 'Local Admins',
					icon: <IconUser />,
				},
				{
					path: '/general-admin/settings',
					name: 'Settings',
					icon: <IconSettings />,
				},
			];
		default:
			return [
				{
					path: '/',
					name: LANGUAGE.sidebar_explore[selectedLanguage],
					icon: <IconBrandSafari />,
				},
				{
					path: '/profile',
					name: LANGUAGE.sidebar_profile[selectedLanguage],
					icon: <IconUser />,
				},
				{
					path: '/settings',
					name: LANGUAGE.sidebar_settings[selectedLanguage],
					icon: <IconSettings />,
				},
			];
	}
};

export default getRoutes;