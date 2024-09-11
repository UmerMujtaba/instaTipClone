import i18n from 'i18next';
import { images } from '../assets/images/index'; // Ensure to import your images correctly
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useCouponsData = () => {
  return [
    {
      id: '1',
      name: i18n.t('inviteyourpeers'), // Assuming 'invite_peers' is the key for translation
      image: images.arrowImage,
    },
    {
      id: '2',
      name: i18n.t('followyourfriends'), // Assuming 'follow_friends' is the key for translation
    },
    {
      id: '3',
      name: i18n.t('orderfreeinstatiptools'), // Assuming 'order_tools' is the key for translation
    },
  ];
};

export const usePeopleData = ()=>{
    return [
        {
          id: '1',
          name: i18n.t('name'),
          image: images.userHighlighted,
          value: '€0',
        },
        {
          id: '2',
           name: i18n.t('name'),
          image: images.userHighlighted,
          value: '€5',
        },
        {
          id: '3',
           name: i18n.t('name'),
          image: images.userHighlighted,
          value: '€10',
        },
        {
          id: '4',
           name: i18n.t('name'),
          image: images.userHighlighted,
          value: '€0',
        },
        {
          id: '5',
           name: i18n.t('name'),
          image: images.userHighlighted,
          value: '€5',
        },
        {
          id: '6',
           name: i18n.t('name'),
          image: images.userHighlighted,
          value: '€10',
        },
        // Add more data as needed
      ]
}

const useValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    email: Yup.string()
      .email(t('pleaseentervalidemail'))
      .required(t('pleaseenteremailaddress')),
    password: Yup.string()
      .required(t('passwordRequired'))
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        t('passwordInvalid')
      ),
  });
};

export default useValidationSchema;
