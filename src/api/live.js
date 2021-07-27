import connection from './index';

const LIVE_API = {
  SPOON_PICK_LIST: () =>
    connection.get('/lives/tier/?page_size=6&tier_names=Partner,Choice,Pick'),
};

export default LIVE_API;
