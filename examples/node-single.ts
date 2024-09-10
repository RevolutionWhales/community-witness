import * as mirrorboards from "@mirrorboards/pulumi";
import { Namespace } from "@mirrorboards/namespace";
import { ovh } from './env';

const namespace = new Namespace('witness');

export const witness_A = new mirrorboards.blockchain.rsquared.RSquaredWitnessOVH(namespace.get('witness_A'), {
  witness_id: '0.0.0',
  witness_name: 'witness-a',
  witness_network: 'RQRX',
  provider: { ovh }
});
