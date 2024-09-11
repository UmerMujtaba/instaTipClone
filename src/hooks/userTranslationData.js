import i18n from 'i18next';

export const useTranslationData = () => {
  return [
    { key: '1', earned: '$60.00', mainHeading: i18n.t('earnedtoday') },
    { key: '2', earned: '$75.00', mainHeading: i18n.t('remainingbalance') },
    { key: '3', earned: '$80.00', mainHeading: i18n.t('tipsgiven') },
    { key: '4', earned: '$50.00', mainHeading: i18n.t('spenttoday') },
  ];
};
