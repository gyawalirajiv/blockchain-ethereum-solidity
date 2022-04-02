import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE520a05cC194a83A11533Bf18218355b21E351tz'
);

export default instance;
