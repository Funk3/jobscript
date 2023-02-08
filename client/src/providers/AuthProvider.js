// to be able to access user_id in database queries
import Cookies from 'js-cookie';

export default function Cookie() {
  Cookies.set('Zak', 'Zak');
}
