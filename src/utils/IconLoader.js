import { faSort, faEye, faArrowCircleLeft, faArrowCircleRight, faArrowAltCircleRight,
  faArrowAltCircleLeft, faClock, faSearch, faPlay, faPaperclip } 
from '@fortawesome/free-solid-svg-icons';

import {faChevronLeft, faChevronRight, faListUl, faThLarge, faShoppingCart, faExpand, faAngleDoubleLeft, 
  faAngleDoubleRight, faEllipsisH, faReply, faLongArrowRight, faStar } 
from '@fortawesome/pro-solid-svg-icons';

  
import { 
  faHeart, faBars, faTimes, faWindowClose,  faPhone, faCheck, faMapMarkerAlt, faEnvelopeOpen } 
from '@fortawesome/pro-regular-svg-icons';

import { 
  faUsers, faTrophyAlt, faAngleDown, faUser, faCalendar, faComments, faLongArrowLeft, faGem, faDatabase , faServer, faLaptopCode, faAnalytics, faFingerprint, faHeadSideBrain, faAtomAlt, faBoxCheck} 
from '@fortawesome/pro-light-svg-icons';


import {
  faFacebookF,
  faFacebook,
  faGoogle,
  faGooglePlus,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

export const loadIcons = () => {
  library.add(
    faSort,
    faEye,
    faBars,
    faTimes, 
    faWindowClose,
    faArrowCircleLeft,
    faArrowCircleRight,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faClock,
    faBoxCheck,
    faHeart,
    faUsers,
    faTrophyAlt,
    faAngleDown,
    faUser,
    faSearch,
    faCalendar,
    faComments,
    faLongArrowLeft,
    faGem,
    faLaptopCode,
    faAnalytics,
    faFingerprint,
    faHeadSideBrain,
    faAtomAlt,
    faSearch,
    faPhone,
    faChevronLeft,
    faChevronRight,
    faCheck,
    faListUl,
    faThLarge,
    faShoppingCart,
    faExpand,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faEllipsisH,
    faReply,
    faPlay,
    faLongArrowRight,
    faMapMarkerAlt,
    faEnvelopeOpen,
    faStar,
    faServer,
    faDatabase
  );

  library.add(faFacebook, faFacebookF, faGooglePlus, faTwitter, faInstagram, faLinkedin, faGoogle, faPinterest, faYoutube);
};
