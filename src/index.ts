import * as mirrorboards from "@mirrorboards/pulumi";
import { Namespace } from "@mirrorboards/namespace";
import { ovh } from './env';

const namespace = new Namespace('witness');

export const lunacrafts = new mirrorboards.blockchain.rsquared.RSquaredWitnessOVH(namespace.get('lunacrafts'), {
  witness_id: '1.6.108',
  witness_name: 'lunacrafts',
  witness_network: 'RQRX',
  provider: { ovh }
});
