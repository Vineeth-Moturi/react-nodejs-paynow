
import {
  AF, AL, DZ, AS, AD, AO, AI, AG, AR, AM, AW, AU, AT, AZ,
  BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BA, BW, BR,
  BN, BG, BF, BI, CV, KH, CM, CA, KY, CF, TD, CL, CN, CO,
  KM, CD, CG, CR, CI, HR, CU, CY, CZ, DK, DJ, DM, DO, EC,
  EG, SV, GQ, ER, EE, ET, FJ, FI, FR, GA, GM, GE, DE, GH,
  GR, GD, GT, GN, GW, GY, HT, HN, HU, IS, IN, ID, IR, IQ,
  IE, IL, IT, JM, JP, JO, KZ, KE, KI, KP, KR, KW, KG, LA,
  LV, LB, LS, LR, LY, LI, LT, LU, MG, MW, MY, MV, ML, MT,
  MH, MR, MU, MX, FM, MD, MC, MN, ME, MA, MZ, MM, NA, NR,
  NP, NL, NZ, NI, NE, NG, NO, OM, PK, PW, PA, PG, PY, PE,
  PH, PL, PT, QA, RO, RU, RW, KN, LC, VC, WS, SM, ST, SA,
  SN, RS, SC, SL, SG, SK, SI, SB, SO, ZA, SS, ES, LK, SD,
  SR, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TO, TT, TN,
  TR, TM, TV, UG, UA, AE, GB, US, UY, UZ, VU, VE, VN, YE,
  ZM, ZW
} from 'country-flag-icons/react/3x2'

export const FlagResolverHelper = (country) => {
  const flags = {
    'AF': <AF />, 'AL': <AL />, 'DZ': <DZ />, 'AS': <AS />, 'AD': <AD />, 'AO': <AO />, 'AI': <AI />,
    'AG': <AG />, 'AR': <AR />, 'AM': <AM />, 'AW': <AW />, 'AU': <AU />, 'AT': <AT />, 'AZ': <AZ />,
    'BS': <BS />, 'BH': <BH />, 'BD': <BD />, 'BB': <BB />, 'BY': <BY />, 'BE': <BE />, 'BZ': <BZ />,
    'BJ': <BJ />, 'BM': <BM />, 'BT': <BT />, 'BO': <BO />, 'BA': <BA />, 'BW': <BW />, 'BR': <BR />,
    'BN': <BN />, 'BG': <BG />, 'BF': <BF />, 'BI': <BI />, 'CV': <CV />, 'KH': <KH />, 'CM': <CM />,
    'CA': <CA />, 'KY': <KY />, 'CF': <CF />, 'TD': <TD />, 'CL': <CL />, 'CN': <CN />, 'CO': <CO />,
    'KM': <KM />, 'CD': <CD />, 'CG': <CG />, 'CR': <CR />, 'CI': <CI />, 'HR': <HR />, 'CU': <CU />,
    'CY': <CY />, 'CZ': <CZ />, 'DK': <DK />, 'DJ': <DJ />, 'DM': <DM />, 'DO': <DO />, 'EC': <EC />,
    'EG': <EG />, 'SV': <SV />, 'GQ': <GQ />, 'ER': <ER />, 'EE': <EE />, 'ET': <ET />, 'FJ': <FJ />,
    'FI': <FI />, 'FR': <FR />, 'GA': <GA />, 'GM': <GM />, 'GE': <GE />, 'DE': <DE />, 'GH': <GH />,
    'GR': <GR />, 'GD': <GD />, 'GT': <GT />, 'GN': <GN />, 'GW': <GW />, 'GY': <GY />, 'HT': <HT />,
    'HN': <HN />, 'HU': <HU />, 'IS': <IS />, 'IN': <IN />, 'ID': <ID />, 'IR': <IR />, 'IQ': <IQ />,
    'IE': <IE />, 'IL': <IL />, 'IT': <IT />, 'JM': <JM />, 'JP': <JP />, 'JO': <JO />, 'KZ': <KZ />,
    'KE': <KE />, 'KI': <KI />, 'KP': <KP />, 'KR': <KR />, 'KW': <KW />, 'KG': <KG />, 'LA': <LA />,
    'LV': <LV />, 'LB': <LB />, 'LS': <LS />, 'LR': <LR />, 'LY': <LY />, 'LI': <LI />, 'LT': <LT />,
    'LU': <LU />, 'MG': <MG />, 'MW': <MW />, 'MY': <MY />, 'MV': <MV />, 'ML': <ML />, 'MT': <MT />,
    'MH': <MH />, 'MR': <MR />, 'MU': <MU />, 'MX': <MX />, 'FM': <FM />, 'MD': <MD />, 'MC': <MC />,
    'MN': <MN />, 'ME': <ME />, 'MA': <MA />, 'MZ': <MZ />, 'MM': <MM />, 'NA': <NA />, 'NR': <NR />,
    'NP': <NP />, 'NL': <NL />, 'NZ': <NZ />, 'NI': <NI />, 'NE': <NE />, 'NG': <NG />, 'NO': <NO />,
    'OM': <OM />, 'PK': <PK />, 'PW': <PW />, 'PA': <PA />, 'PG': <PG />, 'PY': <PY />, 'PE': <PE />,
    'PH': <PH />, 'PL': <PL />, 'PT': <PT />, 'QA': <QA />, 'RO': <RO />, 'RU': <RU />, 'RW': <RW />,
    'KN': <KN />, 'LC': <LC />, 'VC': <VC />, 'WS': <WS />, 'SM': <SM />, 'ST': <ST />, 'SA': <SA />,
    'SN': <SN />, 'RS': <RS />, 'SC': <SC />, 'SL': <SL />, 'SG': <SG />, 'SK': <SK />, 'SI': <SI />,
    'SB': <SB />, 'SO': <SO />, 'ZA': <ZA />, 'SS': <SS />, 'ES': <ES />, 'LK': <LK />, 'SD': <SD />,
    'SR': <SR />, 'SZ': <SZ />, 'SE': <SE />, 'CH': <CH />, 'SY': <SY />, 'TW': <TW />, 'TJ': <TJ />,
    'TZ': <TZ />, 'TH': <TH />, 'TL': <TL />, 'TG': <TG />, 'TO': <TO />, 'TT': <TT />, 'TN': <TN />,
    'TR': <TR />, 'TM': <TM />, 'TV': <TV />, 'UG': <UG />, 'UA': <UA />, 'AE': <AE />, 'GB': <GB />,
    'US': <US />, 'UY': <UY />, 'UZ': <UZ />, 'VU': <VU />, 'VE': <VE />, 'VN': <VN />, 'YE': <YE />,
    'ZM': <ZM />, 'ZW': <ZW />
  };

  if(country){
    return flags[country];
  }else{
    return <span></span>
  }
}


export const CountriesList = (country_code) => {
  const countriesFF = {
    'AF': 'Afghanistan', 'AL': 'Albania', 'DZ': 'Algeria', 'AS': 'American Samoa', 'AD': 'Andorra', 'AO': 'Angola', 'AI': 'Anguilla',
    'AG': 'Antigua and Barbuda', 'AR': 'Argentina', 'AM': 'Armenia', 'AW': 'Aruba', 'AU': 'Australia', 'AT': 'Austria', 'AZ': 'Azerbaijan',
    'BS': 'Bahamas', 'BH': 'Bahrain', 'BD': 'Bangladesh', 'BB': 'Barbados', 'BY': 'Belarus', 'BE': 'Belgium', 'BZ': 'Belize',
    'BJ': 'Benin', 'BM': 'Bermuda', 'BT': 'Bhutan', 'BO': 'Bolivia', 'BA': 'Bosnia and Herzegovina', 'BW': 'Botswana', 'BR': 'Brazil',
    'BN': 'Brunei', 'BG': 'Bulgaria', 'BF': 'Burkina Faso', 'BI': 'Burundi', 'CV': 'Cabo Verde', 'KH': 'Cambodia', 'CM': 'Cameroon',
    'CA': 'Canada', 'KY': 'Cayman Islands', 'CF': 'Central African Republic', 'TD': 'Chad', 'CL': 'Chile', 'CN': 'China', 'CO': 'Colombia',
    'KM': 'Comoros', 'CD': 'Congo (DRC)', 'CG': 'Congo (Republic)', 'CR': 'Costa Rica', 'CI': 'Côte d’Ivoire', 'HR': 'Croatia', 'CU': 'Cuba',
    'CY': 'Cyprus', 'CZ': 'Czech Republic', 'DK': 'Denmark', 'DJ': 'Djibouti', 'DM': 'Dominica', 'DO': 'Dominican Republic', 'EC': 'Ecuador',
    'EG': 'Egypt', 'SV': 'El Salvador', 'GQ': 'Equatorial Guinea', 'ER': 'Eritrea', 'EE': 'Estonia', 'ET': 'Ethiopia', 'FJ': 'Fiji',
    'FI': 'Finland', 'FR': 'France', 'GA': 'Gabon', 'GM': 'Gambia', 'GE': 'Georgia', 'DE': 'Germany', 'GH': 'Ghana',
    'GR': 'Greece', 'GD': 'Grenada', 'GT': 'Guatemala', 'GN': 'Guinea', 'GW': 'Guinea-Bissau', 'GY': 'Guyana', 'HT': 'Haiti',
    'HN': 'Honduras', 'HU': 'Hungary', 'IS': 'Iceland', 'IN': 'India', 'ID': 'Indonesia', 'IR': 'Iran', 'IQ': 'Iraq',
    'IE': 'Ireland', 'IL': 'Israel', 'IT': 'Italy', 'JM': 'Jamaica', 'JP': 'Japan', 'JO': 'Jordan', 'KZ': 'Kazakhstan',
    'KE': 'Kenya', 'KI': 'Kiribati', 'KP': 'North Korea', 'KR': 'South Korea', 'KW': 'Kuwait', 'KG': 'Kyrgyzstan', 'LA': 'Laos',
    'LV': 'Latvia', 'LB': 'Lebanon', 'LS': 'Lesotho', 'LR': 'Liberia', 'LY': 'Libya', 'LI': 'Liechtenstein', 'LT': 'Lithuania',
    'LU': 'Luxembourg', 'MG': 'Madagascar', 'MW': 'Malawi', 'MY': 'Malaysia', 'MV': 'Maldives', 'ML': 'Mali', 'MT': 'Malta',
    'MH': 'Marshall Islands', 'MR': 'Mauritania', 'MU': 'Mauritius', 'MX': 'Mexico', 'FM': 'Micronesia', 'MD': 'Moldova', 'MC': 'Monaco',
    'MN': 'Mongolia', 'ME': 'Montenegro', 'MA': 'Morocco', 'MZ': 'Mozambique', 'MM': 'Myanmar', 'NA': 'Namibia', 'NR': 'Nauru',
    'NP': 'Nepal', 'NL': 'Netherlands', 'NZ': 'New Zealand', 'NI': 'Nicaragua', 'NE': 'Niger', 'NG': 'Nigeria', 'NO': 'Norway',
    'OM': 'Oman', 'PK': 'Pakistan', 'PW': 'Palau', 'PA': 'Panama', 'PG': 'Papua New Guinea', 'PY': 'Paraguay', 'PE': 'Peru',
    'PH': 'Philippines', 'PL': 'Poland', 'PT': 'Portugal', 'QA': 'Qatar', 'RO': 'Romania', 'RU': 'Russia', 'RW': 'Rwanda',
    'KN': 'Saint Kitts and Nevis', 'LC': 'Saint Lucia', 'VC': 'Saint Vincent and the Grenadines', 'WS': 'Samoa', 'SM': 'San Marino', 'ST': 'São Tomé and Príncipe', 'SA': 'Saudi Arabia',
    'SN': 'Senegal', 'RS': 'Serbia', 'SC': 'Seychelles', 'SL': 'Sierra Leone', 'SG': 'Singapore', 'SK': 'Slovakia', 'SI': 'Slovenia',
    'SB': 'Solomon Islands', 'SO': 'Somalia', 'ZA': 'South Africa', 'SS': 'South Sudan', 'ES': 'Spain', 'LK': 'Sri Lanka', 'SD': 'Sudan',
    'SR': 'Suriname', 'SZ': 'Eswatini', 'SE': 'Sweden', 'CH': 'Switzerland', 'SY': 'Syria', 'TW': 'Taiwan', 'TJ': 'Tajikistan',
    'TZ': 'Tanzania', 'TH': 'Thailand', 'TL': 'Timor-Leste', 'TG': 'Togo', 'TO': 'Tonga', 'TT': 'Trinidad and Tobago', 'TN': 'Tunisia',
    'TR': 'Turkey', 'TM': 'Turkmenistan', 'TV': 'Tuvalu', 'UG': 'Uganda', 'UA': 'Ukraine', 'AE': 'United Arab Emirates', 'GB': 'United Kingdom',
    'US': 'United States', 'UY': 'Uruguay', 'UZ': 'Uzbekistan', 'VU': 'Vanuatu', 'VE': 'Venezuela', 'VN': 'Vietnam', 'YE': 'Yemen',
    'ZM': 'Zambia', 'ZW': 'Zimbabwe'
  };

  if(country_code){
    return countriesFF[country_code];
  }else{
    return countriesFF;
  }

}